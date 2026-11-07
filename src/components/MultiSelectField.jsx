import React, { useEffect, useId, useRef, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';

export default function MultiSelectField({ label, filterKey, values, options, onChange, allLabel, disabled = false }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const id = useId();
  const selected = Array.isArray(values) ? values : [];
  const summary = selected.length === 0 ? allLabel : selected.length === 1 ? selected[0] : `${selected.length} selecionados`;

  useEffect(() => {
    if (!open) return undefined;
    const close = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  const toggle = (option) => {
    const next = new Set(selected);
    if (next.has(option)) next.delete(option); else next.add(option);
    onChange(options.filter((item) => next.has(item)));
  };

  return (
    <div className={`multi-select-field ${disabled ? 'disabled' : ''}`} data-filter={filterKey} ref={rootRef}>
      <span className="multi-select-label">{label}</span>
      <button
        type="button"
        className="multi-select-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={id}
        aria-label={`${label}: ${summary}`}
        disabled={disabled}
        title={selected.length ? selected.join(', ') : allLabel}
      >
        <span>{summary}</span><ChevronDown size={15} className={open ? 'open' : ''} />
      </button>
      {open && (
        <div className="multi-select-menu" id={id} role="group" aria-label={`Opções de ${label}`}>
          <div className="multi-select-menu-head">
            <button type="button" onClick={() => onChange([])}>{allLabel}</button>
            <span>{selected.length ? `${selected.length} marcados` : 'Escolha uma ou mais'}</span>
          </div>
          <div className="multi-select-options">
            {options.map((option) => (
              <label key={option} className={selected.includes(option) ? 'selected' : ''}>
                <input type="checkbox" value={option} checked={selected.includes(option)} onChange={() => toggle(option)} />
                <span className="multi-select-check" aria-hidden="true">{selected.includes(option) && <Check size={12} />}</span>
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
