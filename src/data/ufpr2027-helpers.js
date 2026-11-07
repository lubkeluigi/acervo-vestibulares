const PROCESS_URL = 'https://servicos.nc.ufpr.br/documentos/ps2027/provas/provisorio/geral.pdf';
const VERSION = '20261107-ufpr1';

export const shared = {
  exam: 'UFPR',
  year: 2027,
  phase: 'Fase Única · Conhecimentos Gerais',
  originalUrl: PROCESS_URL,
  officialAnswerUrl: PROCESS_URL,
  kind: 'objective',
  correctionOrigin: 'official',
};

export const img = (file, alt, caption = '') => ({
  src: `/images/ufpr2027/${file}?v=${VERSION}`,
  alt,
  ...(caption ? { caption } : {}),
});

export function q({ n, subject, content, difficulty = 'Média', statement, alternatives, answer, why, wrong = {}, ...extra }) {
  const correct = 'ABCD'.indexOf(answer);
  if (correct < 0 || alternatives.length !== 4) {
    throw new Error(`Configuração inválida na questão UFPR ${n} (alternatives: ${alternatives.length}, answer: ${answer})`);
  }
  const analyses = alternatives.map((_, index) => index === correct
    ? `Correta. ${why}`
    : `Incorreta. ${wrong[index] || 'A alternativa não condiz com as informações do texto ou com os conceitos da disciplina.'}`);
  return {
    ...shared,
    id: `ufpr2027-cg-q${String(n).padStart(2, '0')}`,
    number: `Questão ${String(n).padStart(2, '0')}`,
    subject, content, difficulty, statement, alternatives, correct,
    resolution: extra.resolution || [why], analyses,
    ...extra,
  };
}
