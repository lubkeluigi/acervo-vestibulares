import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Flame,
  HelpCircle,
  Key,
  Layers,
  Lightbulb,
  Loader2,
  Maximize2,
  Minimize2,
  RefreshCw,
  RotateCcw,
  Send,
  Settings,
  Sparkles,
  Trash2,
  Waves,
  X,
  XCircle,
  Zap
} from 'lucide-react';
import { marked } from 'marked';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import { getAssistantResponse, testApiKey } from '../data/aiKnowledgeBase.js';
import { SUBJECT_COLORS } from '../data/questions.js';

// Configuração do marked
marked.setOptions({
  breaks: true,
  gfm: true,
});

/**
 * Converte Markdown com KaTeX e links de questões em HTML limpo,
 * eliminando asteriscos não formatados e organizando listas e cabeçalhos.
 */
function renderMarkdownWithMath(rawText) {
  if (!rawText) return '';
  const textValue = String(rawText);
  const mathPlaceholders = [];

  // 1. Preserva blocos de fórmulas matemáticas KaTeX ($$ e $)
  let text = textValue.replace(/\$\$([\s\S]*?)\$\$/g, (match, formula) => {
    const idx = mathPlaceholders.length;
    mathPlaceholders.push({ formula, display: true });
    return `%%%KATEX_PH_${idx}%%%`;
  });

  text = text.replace(/\$([^\$\n]+?)\$/g, (match, formula) => {
    const idx = mathPlaceholders.length;
    mathPlaceholders.push({ formula, display: false });
    return `%%%KATEX_PH_${idx}%%%`;
  });

  // 2. Transforma Markdown em HTML (títulos, listas, negrito, itálico)
  let html = marked.parse(text);

  // 3. Restaura KaTeX
  html = html.replace(/%%%KATEX_PH_(\d+)%%%/g, (match, idxStr) => {
    const item = mathPlaceholders[Number(idxStr)];
    if (!item) return '';
    try {
      return `<span class="${item.display ? 'math-display' : 'math-inline'}">${katex.renderToString(item.formula, {
        displayMode: item.display,
        throwOnError: false,
      })}</span>`;
    } catch {
      return item.formula;
    }
  });

  // 4. Transforma marcadores de questões [id] em botões clicáveis
  html = html.replace(/\[([a-zA-Z0-9_\-]+-q[0-9]+[a-z]?)\]/g, (match, qId) => {
    return `<button type="button" class="ai-inline-question-chip" data-qid="${qId}">🔍 Ver Questão (${qId})</button>`;
  });

  // 5. Envolve tabelas em contêiner de rolagem com bordas e divisórias completas
  html = html
    .replace(/<table>/g, '<div class="ai-table-wrapper"><table>')
    .replace(/<\/table>/g, '</table></div>');

  return html;
}

const INITIAL_MESSAGES = [
  {
    id: 'welcome',
    role: 'assistant',
    text: `Olá! Sou a **Sofia IA**, sua tutora especializada para os vestibulares do acervo (FAMERP, FAMEMA, FUVEST, UEA, UERJ, etc.).

Tenho acesso a todas as **2.993 questões** e fichas de estudo. Posso te dar **dicas sem spoiler**, explicar resoluções passo a passo, analisar distratores e resumir conteúdos cobrados na sua prova.

Como posso te ajudar agora?`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
];

export default function AiAssistant({
  questions = [],
  currentQuestion = null,
  activeView = 'bank',
  onOpenQuestion,
  notify,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('sofia_ai_messages');
      return saved ? JSON.parse(saved) : INITIAL_MESSAGES;
    } catch {
      return INITIAL_MESSAGES;
    }
  });
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState(() => {
    return localStorage.getItem('sofia_gemini_api_key') || '';
  });
  const [activeModel, setActiveModel] = useState(() => {
    return localStorage.getItem('sofia_active_gemini_model') || '';
  });
  const [tempApiKey, setTempApiKey] = useState('');
  const [isTestingKey, setIsTestingKey] = useState(false);
  const [keyTestStatus, setKeyTestStatus] = useState(null); // { ok: boolean, message: string }
  const [showTooltip, setShowTooltip] = useState(true);

  // Controle de tamanho da janela (Compacto, Médio, Expandido e Redimensionável Livremente)
  const [isExpanded, setIsExpanded] = useState(() => {
    try {
      return localStorage.getItem('sofia_chat_is_expanded') === 'true';
    } catch (_) {
      return false;
    }
  });
  const [customSize, setCustomSize] = useState(() => {
    try {
      const saved = localStorage.getItem('sofia_chat_custom_size');
      if (saved) return JSON.parse(saved);
    } catch (_) {}
    return null;
  });
  const [isResizing, setIsResizing] = useState(false);
  const resizeRef = useRef({ startX: 0, startY: 0, startW: 0, startH: 0 });
  const chatWindowRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('sofia_chat_is_expanded', String(next));
      } catch (_) {}
      return next;
    });
  };

  const setWindowPreset = (preset) => {
    if (preset === 'default') {
      setIsExpanded(false);
      setCustomSize(null);
      try {
        localStorage.removeItem('sofia_chat_custom_size');
        localStorage.setItem('sofia_chat_is_expanded', 'false');
      } catch (_) {}
    } else if (preset === 'medium') {
      setIsExpanded(false);
      const size = { width: 640, height: 720 };
      setCustomSize(size);
      try {
        localStorage.setItem('sofia_chat_custom_size', JSON.stringify(size));
        localStorage.setItem('sofia_chat_is_expanded', 'false');
      } catch (_) {}
    } else if (preset === 'expanded') {
      setIsExpanded(true);
      setCustomSize(null);
      try {
        localStorage.setItem('sofia_chat_is_expanded', 'true');
      } catch (_) {}
    }
  };

  const handleResizeStart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    const rect = chatWindowRef.current ? chatWindowRef.current.getBoundingClientRect() : { width: 460, height: 640 };
    resizeRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startW: rect.width,
      startH: rect.height,
    };

    const handleMouseMove = (moveEvent) => {
      const deltaX = resizeRef.current.startX - moveEvent.clientX; // arrastar para esquerda aumenta largura
      const deltaY = resizeRef.current.startY - moveEvent.clientY; // arrastar para cima aumenta altura

      const maxW = Math.max(380, window.innerWidth - 32);
      const maxH = Math.max(450, window.innerHeight - 110);

      const newW = Math.min(maxW, Math.max(380, Math.round(resizeRef.current.startW + deltaX)));
      const newH = Math.min(maxH, Math.max(450, Math.round(resizeRef.current.startH + deltaY)));

      setIsExpanded(false);
      setCustomSize({ width: newW, height: newH });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      setCustomSize((curr) => {
        if (curr) {
          try {
            localStorage.setItem('sofia_chat_custom_size', JSON.stringify(curr));
            localStorage.setItem('sofia_chat_is_expanded', 'false');
          } catch (_) {}
        }
        return curr;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Salva histórico de mensagens
  useEffect(() => {
    try {
      localStorage.setItem('sofia_ai_messages', JSON.stringify(messages.slice(-30)));
    } catch {
      // storage quota
    }
  }, [messages]);

  // Rola até o final ao receber mensagens
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized, isGenerating]);

  // Foco no campo ao abrir
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen, isMinimized]);

  // Chips dinâmicos com base na tela e na questão
  const getContextChips = () => {
    if (currentQuestion && activeView === 'solver') {
      return [
        { label: '💡 Dica sem spoiler', prompt: 'Me dê uma dica pedagógica sem me dar a resposta final' },
        { label: '🔍 Resolução passo a passo', prompt: 'Explique detalhadamente a resolução desta questão passo a passo' },
        { label: '❌ Por que as outras estão erradas?', prompt: 'Por que cada uma das alternativas incorretas desta questão está errada?' },
        { label: '🧠 Conceito-chave', prompt: `Qual é o conceito teórico principal de ${currentQuestion.content} cobrado aqui?` },
      ];
    }
    return [
      { label: '🌊 El Niño e La Niña', prompt: 'Resuma o fenômeno El Niño, La Niña, Célula de Walker e os impactos no Brasil' },
      { label: '🧬 Mitose vs Meiose', prompt: 'Explique a diferença entre Mitose e Meiose com as fases e o mnemônico' },
      { label: '⚡ Leis de Ohm', prompt: 'Resuma as Leis de Ohm, fórmulas de potência e associação de resistores' },
      { label: '🔥 Termodinâmica', prompt: 'Resumo da 1ª Lei da Termodinâmica, transformações gasosas e Ciclo de Carnot' },
      { label: '🔍 Buscar questões de Genética', prompt: 'buscar questoes de genetica' },
      { label: '🧠 Macetes de Vestibular', prompt: 'Quais são os principais mnemônicos e macetes para vestibulares?' },
    ];
  };

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isGenerating) return;

    setInputValue('');
    const userMsg = {
      id: `${Date.now()}-u`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsGenerating(true);

    try {
      const responseText = await getAssistantResponse({
        userPrompt: query,
        currentQuestion: activeView === 'solver' ? currentQuestion : null,
        allQuestions: questions,
        chatHistory: messages.slice(-8),
        apiKey: geminiApiKey,
      });

      const assistantMsg = {
        id: `${Date.now()}-a`,
        role: 'assistant',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      const errorMsg = {
        id: `${Date.now()}-err`,
        role: 'assistant',
        text: `⚠️ **Ocorreu um erro no processamento:** ${err.message}. Tente novamente em instantes!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages(INITIAL_MESSAGES);
    localStorage.removeItem('sofia_ai_messages');
    if (notify) notify('Histórico da assistente reiniciado.');
  };

  const handleTestKey = async () => {
    const key = tempApiKey.trim();
    if (!key) {
      setKeyTestStatus({ ok: false, message: 'Insira uma chave antes de testar.' });
      return;
    }
    setIsTestingKey(true);
    setKeyTestStatus(null);
    try {
      const result = await testApiKey(key);
      setKeyTestStatus(result);
      if (result.ok && result.model) {
        setActiveModel(result.model);
      }
    } catch (err) {
      setKeyTestStatus({ ok: false, message: err.message });
    } finally {
      setIsTestingKey(false);
    }
  };

  const handleSaveApiKey = () => {
    const key = tempApiKey.trim();
    setGeminiApiKey(key);
    if (key) {
      localStorage.setItem('sofia_gemini_api_key', key);
      const savedModel = localStorage.getItem('sofia_active_gemini_model');
      if (savedModel) setActiveModel(savedModel);
      if (notify) notify('Chave de API salva com sucesso!');
    } else {
      localStorage.removeItem('sofia_gemini_api_key');
      localStorage.removeItem('sofia_active_gemini_model');
      setActiveModel('');
      if (notify) notify('Chave removida. Usando motor local autônomo.');
    }
    setShowSettings(false);
    setKeyTestStatus(null);
  };

  // Trata cliques em botões de questões gerados pelo Markdown
  const handleMessageClick = (e) => {
    const chip = e.target.closest('.ai-inline-question-chip');
    if (chip && chip.dataset.qid) {
      const qId = chip.dataset.qid;
      const targetQ = questions.find((q) => q.id === qId);
      if (targetQ && onOpenQuestion) {
        onOpenQuestion(targetQ.id);
        if (notify) notify(`Abrindo ${targetQ.exam} · ${targetQ.number}...`);
      } else if (onOpenQuestion) {
        onOpenQuestion(qId);
      }
    }
  };

  return (
    <>
      {/* 1. Bolinha Flutuante (FAB) */}
      <div className="ai-fab-container">
        {!isOpen && showTooltip && (
          <div className="ai-fab-tooltip">
            <span>
              {activeView === 'solver' && currentQuestion
                ? `💡 Dúvida na ${currentQuestion.number}? Pergunte à IA`
                : '✨ Tire dúvidas e gere resumos com a Sofia IA'}
            </span>
            <button
              className="ai-tooltip-close"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              title="Fechar dica"
            >
              <X size={12} />
            </button>
          </div>
        )}

        <button
          className={`ai-fab-button ${isOpen ? 'active' : ''}`}
          onClick={() => {
            setIsOpen((prev) => !prev);
            setIsMinimized(false);
            setShowTooltip(false);
          }}
          aria-label="Abrir Sofia IA - Assistente de Estudos"
          title="Abrir Sofia IA"
        >
          <div className="ai-fab-icon-wrapper">
            {isOpen ? <X size={24} /> : <Sparkles size={25} />}
          </div>
          <span className="ai-fab-pulse" />
          <span className="ai-fab-online-dot" />
        </button>
      </div>

      {/* 2. Janela de Chat da Assistente */}
      {isOpen && (
        <div
          ref={chatWindowRef}
          className={`ai-chat-window ${isMinimized ? 'minimized' : ''} ${isExpanded ? 'expanded' : ''} ${isResizing ? 'is-resizing' : ''}`}
          style={!isMinimized && !isExpanded && customSize ? { width: `${customSize.width}px`, height: `${customSize.height}px` } : {}}
        >
          {/* Alça de redimensionamento no canto superior esquerdo */}
          {!isMinimized && (
            <div
              className="ai-resize-handle"
              onMouseDown={handleResizeStart}
              title="Arraste para redimensionar o pop-up livremente"
            >
              <span className="ai-resize-grip" />
            </div>
          )}

          {/* Header */}
          <div
            className="ai-chat-header"
            onDoubleClick={toggleExpand}
            title="Dê duplo clique para expandir ou restaurar o tamanho"
          >
            <div className="ai-chat-identity">
              <div className="ai-avatar">
                <Bot size={20} />
                <span className="ai-avatar-badge" />
              </div>
              <div className="ai-header-titles">
                <div className="ai-name-row">
                  <strong>Sofia IA</strong>
                  <span className={`ai-model-tag ${geminiApiKey ? 'active-key' : ''}`}>
                    {geminiApiKey
                      ? (geminiApiKey.startsWith('gsk_')
                          ? '⚡ Groq Llama 3.3'
                          : geminiApiKey.startsWith('sk-or-')
                          ? '🌐 OpenRouter'
                          : geminiApiKey.startsWith('sk-')
                          ? 'OpenAI GPT'
                          : (activeModel ? activeModel.replace('gemini-', 'Gemini ').replace(/-latest$/, '') : 'Gemini 2.0'))
                      : 'Motor Local'}
                  </span>
                </div>
                <small className="ai-header-sub">
                  {currentQuestion && activeView === 'solver'
                    ? `Focada em: ${currentQuestion.exam} · ${currentQuestion.number}`
                    : 'Tutora dos Vestibulares'}
                </small>
              </div>
            </div>

            <div className="ai-header-actions" onDoubleClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className={`ai-action-btn ${isExpanded ? 'active' : ''}`}
                onClick={toggleExpand}
                title={isExpanded ? 'Restaurar tamanho compacto' : 'Expandir pop-up (tela ampla)'}
              >
                {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
              </button>
              <button
                type="button"
                className={`ai-action-btn ${showSettings ? 'active' : ''}`}
                onClick={() => {
                  setTempApiKey(geminiApiKey);
                  setKeyTestStatus(null);
                  setShowSettings((prev) => !prev);
                }}
                title="Configurar chave de API e tamanho do pop-up"
              >
                <Settings size={16} />
              </button>
              <button
                type="button"
                className="ai-action-btn"
                onClick={handleClearChat}
                title="Limpar conversa"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                className="ai-action-btn"
                onClick={() => setIsMinimized((prev) => !prev)}
                title={isMinimized ? 'Expandir' : 'Minimizar'}
              >
                {isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              <button
                type="button"
                className="ai-action-btn"
                onClick={() => setIsOpen(false)}
                title="Fechar chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Settings Drawer */}
              {showSettings && (
                <div className="ai-settings-drawer">
                  <div className="ai-settings-head">
                    <div className="ai-settings-title">
                      <Key size={15} />
                      <strong>Provedores Gratuitos de IA</strong>
                    </div>
                    <button
                      type="button"
                      className="ai-action-btn"
                      onClick={() => setShowSettings(false)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                  <p className="ai-settings-desc">
                    Recomendamos a <strong>Groq</strong> (o motor mais rápido do mundo, 100% grátis e sem cartão) ou o <strong>Google Gemini</strong>:
                  </p>
                  <div className="ai-providers-pills">
                    <a
                      href="https://console.groq.com/keys"
                      target="_blank"
                      rel="noreferrer"
                      className="ai-provider-pill groq"
                      title="Gere sua chave gratuita na Groq (respostas em ~300ms)"
                    >
                      ⚡ Criar chave Groq (Ultra Rápido)
                    </a>
                    <a
                      href="https://aistudio.google.com/app/apikey"
                      target="_blank"
                      rel="noreferrer"
                      className="ai-provider-pill"
                      title="Gere sua chave gratuita no Google AI Studio (1.500 req/dia)"
                    >
                      🤖 Criar chave Google Gemini
                    </a>
                    <a
                      href="https://openrouter.ai/keys"
                      target="_blank"
                      rel="noreferrer"
                      className="ai-provider-pill"
                      title="Chave OpenRouter para modelos livres"
                    >
                      🌐 OpenRouter (Modelos Free)
                    </a>
                  </div>
                  <label className="ai-settings-field">
                    <span>Cole sua Chave de API:</span>
                    <input
                      type="password"
                      placeholder="gsk_... (Groq) | AIzaSy... (Gemini) | sk-..."
                      value={tempApiKey}
                      onChange={(e) => {
                        setTempApiKey(e.target.value);
                        setKeyTestStatus(null);
                      }}
                    />
                  </label>

                  {/* Seletor rápido de dimensões */}
                  <div className="ai-settings-size-row">
                    <span className="ai-settings-size-label">
                      <Maximize2 size={13} /> Dimensões do Pop-up:
                    </span>
                    <div className="ai-size-preset-buttons">
                      <button
                        type="button"
                        className={`ai-size-pill ${!isExpanded && (!customSize || customSize.width <= 490) ? 'active' : ''}`}
                        onClick={() => setWindowPreset('default')}
                        title="Tamanho padrão (460px)"
                      >
                        Padrão (460px)
                      </button>
                      <button
                        type="button"
                        className={`ai-size-pill ${!isExpanded && customSize?.width === 640 ? 'active' : ''}`}
                        onClick={() => setWindowPreset('medium')}
                        title="Tamanho médio (640px)"
                      >
                        Médio (640px)
                      </button>
                      <button
                        type="button"
                        className={`ai-size-pill ${isExpanded || customSize?.width >= 800 ? 'active' : ''}`}
                        onClick={() => setWindowPreset('expanded')}
                        title="Tamanho amplo maximizado (840px)"
                      >
                        Amplo (840px)
                      </button>
                    </div>
                  </div>

                  <div className="ai-settings-actions">
                    <button
                      type="button"
                      className="button button-quiet button-sm"
                      onClick={handleTestKey}
                      disabled={isTestingKey || !tempApiKey.trim()}
                    >
                      {isTestingKey ? <Loader2 size={13} className="spin" /> : null}
                      Testar Conexão
                    </button>
                    <button
                      type="button"
                      className="button button-quiet button-sm"
                      onClick={() => {
                        setTempApiKey('');
                        setGeminiApiKey('');
                        localStorage.removeItem('sofia_gemini_api_key');
                        setKeyTestStatus({ ok: true, message: 'Chave removida. Usando Motor Local.' });
                        if (notify) notify('Modo Local Autônomo reativado.');
                      }}
                    >
                      Usar Motor Local
                    </button>
                    <button
                      type="button"
                      className="button button-primary button-sm"
                      onClick={handleSaveApiKey}
                    >
                      Salvar Chave
                    </button>
                  </div>
                </div>
              )}

              {/* Current Question Context Bar */}
              {currentQuestion && activeView === 'solver' && (
                <div className="ai-current-q-banner">
                  <div className="q-banner-left">
                    <span className="q-banner-pill">
                      {currentQuestion.exam} {currentQuestion.year || ''}
                    </span>
                    <strong>{currentQuestion.number}</strong>
                    <span className="q-banner-topic">{currentQuestion.content} · {currentQuestion.subtopic}</span>
                  </div>
                </div>
              )}

              {/* Message Stream */}
              <div className="ai-messages-container" onClick={handleMessageClick}>
                {messages.map((msg) => (
                  <div key={msg.id} className={`ai-message-row ${msg.role}`}>
                    {msg.role === 'assistant' && (
                      <div className="ai-msg-avatar">
                        <Bot size={15} />
                      </div>
                    )}
                    <div className="ai-message-bubble">
                      <div
                        className="ai-message-body"
                        dangerouslySetInnerHTML={{ __html: renderMarkdownWithMath(msg.text) }}
                      />
                      <span className="ai-msg-time">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}

                {isGenerating && (
                  <div className="ai-message-row assistant">
                    <div className="ai-msg-avatar">
                      <Bot size={15} />
                    </div>
                    <div className="ai-message-bubble typing-bubble">
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                      <span className="typing-dot" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Contextual Suggestion Chips */}
              <div className="ai-chips-bar">
                {getContextChips().map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className="ai-chip-btn"
                    onClick={() => handleSendMessage(chip.prompt)}
                    disabled={isGenerating}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>

              {/* Input Area */}
              <div className="ai-input-area">
                <textarea
                  ref={inputRef}
                  className="ai-textarea"
                  rows={1}
                  placeholder={
                    currentQuestion && activeView === 'solver'
                      ? `Pergunte sobre a ${currentQuestion.number} ou peça uma dica...`
                      : 'Pergunte sobre qualquer assunto, fórmula ou questão...'
                  }
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isGenerating}
                />
                <button
                  type="button"
                  className="ai-send-btn"
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isGenerating}
                  title="Enviar mensagem"
                >
                  <Send size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
