import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import './list-features.css';
import './open-response.css';
import './study-sheets.css';
import './ai-assistant.css';

function mount() {
  let container = document.getElementById('root');
  if (!container) {
    if (document.body) {
      container = document.createElement('div');
      container.id = 'root';
      document.body.appendChild(container);
    } else {
      setTimeout(mount, 20);
      return;
    }
  }
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
