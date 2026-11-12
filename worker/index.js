// Entry point do Cloudflare Worker (produto "Workers + Static Assets").
// Intercepta /api/lists e delega o resto para os assets estáticos (dist/),
// que já tratam fallback de SPA sozinhos via "not_found_handling" no
// wrangler.jsonc — por isso não usamos _redirects aqui.

import { handleLists } from './lists.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/lists' || url.pathname === '/api/lists/') {
      return handleLists(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
