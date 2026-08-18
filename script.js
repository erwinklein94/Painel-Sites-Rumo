/* ============================================================
   Painel de Sistemas
   Para adicionar um site novo: acrescente um objeto ao array
   LINKS abaixo. Nada mais precisa ser alterado.
   ============================================================ */

const ICONES = {
  turma:     '<svg viewBox="0 0 24 24"><path d="M12 4 2 9l10 5 10-5-10-5z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/></svg>',
  solda:     '<svg viewBox="0 0 24 24"><path d="M13 2 5 13h5l-2 9 9-12h-5l1-8z"/></svg>',
  concreto:  '<svg viewBox="0 0 24 24"><path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>',
  livro:     '<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>',
  materiais: '<svg viewBox="0 0 24 24"><path d="M12 2 2 7l10 5 10-5-10-5z"/><path d="M2 12l10 5 10-5"/><path d="M2 17l10 5 10-5"/></svg>',
  madeira:   '<svg viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M7 8v8M12 8v8M17 8v8"/></svg>',
  guia:      '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2z"/></svg>',
  checklist: '<svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 12 2.5 2.5L16 9"/></svg>',
  cartas:    '<svg viewBox="0 0 24 24"><rect x="7" y="3" width="13" height="16" rx="2"/><path d="M4 7v12a2 2 0 0 0 2 2h11"/></svg>',
  leitor:    '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6"/><circle cx="11" cy="14" r="2.5"/><path d="m13 16 2.5 2.5"/></svg>',
  relatorio: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h5"/></svg>',
  trem:      '<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="14" rx="3"/><path d="M5 11h14"/><circle cx="9" cy="14" r="0.5"/><circle cx="15" cy="14" r="0.5"/><path d="m8 21 1.5-4M16 21l-1.5-4M6 21h12"/></svg>',
  empeno:    '<svg viewBox="0 0 24 24"><path d="M3 7c4-4 7 4 11 0s7 0 7 0M3 17c4-4 7 4 11 0s7 0 7 0"/><path d="M3 12h18"/></svg>',
  intervalo: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M8 2h8"/></svg>',
  portal:    '<svg viewBox="0 0 24 24"><path d="M4 21V7l8-4 8 4v14"/><path d="M8 21v-6h8v6M8 9h.01M12 9h.01M16 9h.01"/></svg>',
  infra:     '<svg viewBox="0 0 24 24"><path d="M3 21h18M6 21V10M18 21V10M4 10h16L12 3 4 10z"/><path d="M9 14h6M9 18h6"/></svg>',
  recebidos: '<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M4 8h16M8 3v4M16 3v4M8 12h8M8 16h5"/></svg>'
};

const LINKS = [
  { nome: "Homologação de Turma de ATT",        url: "https://erwinklein94.github.io/Homologacao_ATT/",                       icone: "turma" },
  { nome: "Homologação de Turma de Soldagem",   url: "https://erwinklein94.github.io/homologacao_Soldagem/",                  icone: "solda" },
  { nome: "Sistema Qualidade Completo Concreto", url: "https://www.ctrl-qld-dm-sub.com.br/",                                  icone: "concreto" },
  { nome: "Leitor de Data Book",                url: "https://erwinklein94.github.io/apenas-leitor-data-book-beta/",          icone: "livro" },
  { nome: "Homologação de Materiais",           url: "https://erwinklein94.github.io/Homologacao-de-materiais/",              icone: "materiais" },
  { nome: "Controle Dormente de Lei",           url: "https://erwinklein94.github.io/Controle_madeira_de_lei/",               icone: "madeira" },
  { nome: "Guia do Inspetor Padrão",            url: "https://www.guiadoinspetorpadrao.com.br/",                              icone: "guia" },
  { nome: "Controle de Qualidade M.Dias",       url: "https://erwinklein94.github.io/Controle-de-qualidade-de-via-_-DIAS-2/", icone: "checklist" },
  { nome: "Flash Cards",                        url: "https://erwinklein94.github.io/Flash-Card-Qualidade/",                  icone: "cartas" },
  { nome: "Leitor de Iauditor",                 url: "https://erwinklein94.github.io/Leitor-Iauditor/",                       icone: "leitor" },
  { nome: "RDO — Relatório Diário Operacional", url: "https://erwinklein94.github.io/Relat-rio-Di-rio-Operacional-RDO/",      icone: "relatorio" },
  { nome: "Trem da Rumo",                       url: "https://erwinklein94.github.io/Jogo-Rumo-Cobra-Trem/",                  icone: "trem" },
  { nome: "Empeno/Torção",                      url: "https://erwinklein94.github.io/Empeno-Torcao/",                         icone: "empeno" },
  { nome: "Gestão de Intervalo",                url: "https://erwinklein94.github.io/Gestao-de-Intervalo/login.html",         icone: "intervalo" },
  { nome: "Portal de Qualidade de Materiais",   url: "https://erwinklein94.github.io/Portal-de-Qualidade-de-Materiais/",     icone: "portal" },
  { nome: "Plano de Manutenção de Infra",       url: "https://erwinklein94.github.io/Dashboard-Plano-de-Manutencao-de-Infra/", icone: "infra" },
  { nome: "Recebidos Conprem",                  url: "https://erwinklein94.github.io/Leitor-Recebidos-Conprem/",                icone: "recebidos" }
];

const grade = document.getElementById("grade");

grade.innerHTML = LINKS.map(link => `
  <a class="botao" href="${link.url}" target="_blank" rel="noopener">
    <span class="icone" aria-hidden="true">${ICONES[link.icone]}</span>
    <span class="rotulo">${link.nome}</span>
  </a>
`).join("");

document.getElementById("contador").textContent = `${LINKS.length} sistemas disponíveis`;
