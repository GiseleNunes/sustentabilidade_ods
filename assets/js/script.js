// -------------------- ACESSIBILIDADE: AJUSTE DE FONTE --------------------
const body = document.body;
let fontSizeState = 'normal';

function setFontSize(level) {
  body.classList.remove('font-small', 'font-large', 'font-xlarge');
  if (level === 'small') body.classList.add('font-small');
  else if (level === 'large') body.classList.add('font-large');
  else if (level === 'xlarge') body.classList.add('font-xlarge');
}

function updateFont() {
  if (fontSizeState === 'normal') setFontSize('normal');
  else if (fontSizeState === 'small') setFontSize('small');
  else if (fontSizeState === 'large') setFontSize('large');
  else if (fontSizeState === 'xlarge') setFontSize('xlarge');
}

const increaseBtn = document.getElementById('increaseFontBtn');
const decreaseBtn = document.getElementById('decreaseFontBtn');
if (increaseBtn) {
  increaseBtn.addEventListener('click', () => {
    if (fontSizeState === 'normal') fontSizeState = 'large';
    else if (fontSizeState === 'large') fontSizeState = 'xlarge';
    else if (fontSizeState === 'small') fontSizeState = 'normal';
    updateFont();
  });
}
if (decreaseBtn) {
  decreaseBtn.addEventListener('click', () => {
    if (fontSizeState === 'normal') fontSizeState = 'small';
    else if (fontSizeState === 'large') fontSizeState = 'normal';
    else if (fontSizeState === 'xlarge') fontSizeState = 'large';
    else if (fontSizeState === 'small') fontSizeState = 'small';
    updateFont();
  });
}

// -------------------- LEITURA DE TELA --------------------
let currentUtterance = null;
let voicesLoaded = false;

function getReadableText() {
  const containers = document.querySelectorAll('.container, .header, .card, .footer');
  let textParts = [];

  containers.forEach(container => {
    const elements = container.querySelectorAll('h1, h2, h3, p, li, .highlight, .activity, .subject, .subjects-mini span');
    elements.forEach(el => {
      let txt = el.innerText || el.textContent;
      if (txt && txt.trim().length > 0) {
        textParts.push(txt.trim());
      }
    });
  });

  let fullText = "Bem-vindo ao projeto ODS na Escola - Paraná Sustentável. " + textParts.join('. ') + ". Acesse as abas para conhecer os projetos de Educação de Qualidade, Fome Zero e Ação Climática. Participe das atividades e promova a Agenda 2030 na sua escola.";
  return fullText;
}

function readPage() {
  if (!window.speechSynthesis) {
    alert("Seu navegador não suporta a leitura em voz alta.");
    return;
  }

  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.speechSynthesis.cancel();
  }

  const textToRead = getReadableText();
  if (!textToRead.trim()) {
    alert("Nenhum conteúdo textual encontrado para leitura.");
    return;
  }

  const speak = () => {
    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.lang = 'pt-BR';
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1.0;
    currentUtterance.volume = 1;
    window.speechSynthesis.speak(currentUtterance);
  };

  if (voicesLoaded) {
    speak();
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      voicesLoaded = true;
      speak();
    };
    setTimeout(() => {
      if (!voicesLoaded) {
        voicesLoaded = true;
        speak();
      }
    }, 1000);
  }
}

function stopReading() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

const readBtn = document.getElementById('readPageBtn');
const stopBtn = document.getElementById('stopSpeechBtn');

if (readBtn) readBtn.addEventListener('click', readPage);
if (stopBtn) stopBtn.addEventListener('click', stopReading);

window.addEventListener('beforeunload', () => {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
});

// -------------------- TELA CHEIA PARA VÍDEOS --------------------
function initFullscreenButtons() {
  const fullscreenBtns = document.querySelectorAll('.fullscreen-btn');

  fullscreenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const videoId = btn.getAttribute('data-video-id');
      if (videoId) {
        const video = document.getElementById(videoId);
        if (video) {
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
          }
        }
      }
    });
  });
}

// -------------------- DETECÇÃO DE TEMA --------------------
function detectThemeByFilename() {
  const path = window.location.pathname;
  if (path.includes('fome_zero') || path.includes('ods2')) {
    document.body.classList.add('ods2');
  } else if (path.includes('educacao_de_qualidade') || path.includes('ods4')) {
    document.body.classList.add('ods4');
  } else if (path.includes('mudanca_global_do_clima') || path.includes('acao_climatica') || path.includes('ods13')) {
    document.body.classList.add('ods13');
  }
}

// -------------------- LÓGICA DE ABAS --------------------
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-buttons .access-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(tabId) {
    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(btn => btn.classList.remove('active-tab'));
    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) activeContent.classList.add('active');
    const activeBtn = document.querySelector(`.tab-buttons .access-btn[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active-tab');
  }

  tabButtons.forEach(btn => {
    if (!btn.hasAttribute('onclick')) {
      btn.addEventListener('click', (e) => {
        const tabId = btn.getAttribute('data-tab');
        if (tabId) switchTab(tabId);
      });
    }
  });

  const smallTabBtns = document.querySelectorAll('.small-tab-btn');
  smallTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      if (targetTab) {
        switchTab(targetTab);
        const tabBar = document.querySelector('.tab-buttons');
        if (tabBar) tabBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const hash = window.location.hash.substring(1);
  if (hash && (hash === 'onu' || hash === 'ods4' || hash === 'ods2' || hash === 'ods13')) {
    switchTab(hash);
  }
}

// -------------------- INICIALIZAÇÃO --------------------
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    detectThemeByFilename();
    initTabs();
    initFullscreenButtons();
  });
} else {
  detectThemeByFilename();
  initTabs();
  initFullscreenButtons();
}

// -------------------- ACESSIBILIDADE: AJUSTE DE FONTE --------------------
const body = document.body;
let fontSizeState = 'normal';

function setFontSize(level) {
  body.classList.remove('font-small', 'font-large', 'font-xlarge');
  if (level === 'small') body.classList.add('font-small');
  else if (level === 'large') body.classList.add('font-large');
  else if (level === 'xlarge') body.classList.add('font-xlarge');
}

function updateFont() {
  if (fontSizeState === 'normal') setFontSize('normal');
  else if (fontSizeState === 'small') setFontSize('small');
  else if (fontSizeState === 'large') setFontSize('large');
  else if (fontSizeState === 'xlarge') setFontSize('xlarge');
}

const increaseBtn = document.getElementById('increaseFontBtn');
const decreaseBtn = document.getElementById('decreaseFontBtn');
if (increaseBtn) {
  increaseBtn.addEventListener('click', () => {
    if (fontSizeState === 'normal') fontSizeState = 'large';
    else if (fontSizeState === 'large') fontSizeState = 'xlarge';
    else if (fontSizeState === 'small') fontSizeState = 'normal';
    updateFont();
  });
}
if (decreaseBtn) {
  decreaseBtn.addEventListener('click', () => {
    if (fontSizeState === 'normal') fontSizeState = 'small';
    else if (fontSizeState === 'large') fontSizeState = 'normal';
    else if (fontSizeState === 'xlarge') fontSizeState = 'large';
    else if (fontSizeState === 'small') fontSizeState = 'small';
    updateFont();
  });
}

// -------------------- LEITURA DE TELA --------------------
let currentUtterance = null;
let voicesLoaded = false;

function getReadableText() {
  const containers = document.querySelectorAll('.container, .header, .card, .footer');
  let textParts = [];

  containers.forEach(container => {
    const elements = container.querySelectorAll('h1, h2, h3, p, li, .highlight, .activity, .subject, .subjects-mini span');
    elements.forEach(el => {
      let txt = el.innerText || el.textContent;
      if (txt && txt.trim().length > 0) {
        textParts.push(txt.trim());
      }
    });
  });

  let fullText = "Bem-vindo ao projeto ODS na Escola - Paraná Sustentável. " + textParts.join('. ') + ". Acesse as abas para conhecer os projetos de Educação de Qualidade, Fome Zero e Ação Climática. Participe das atividades e promova a Agenda 2030 na sua escola.";
  return fullText;
}

function readPage() {
  if (!window.speechSynthesis) {
    alert("Seu navegador não suporta a leitura em voz alta.");
    return;
  }

  if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
    window.speechSynthesis.cancel();
  }

  const textToRead = getReadableText();
  if (!textToRead.trim()) {
    alert("Nenhum conteúdo textual encontrado para leitura.");
    return;
  }

  const speak = () => {
    currentUtterance = new SpeechSynthesisUtterance(textToRead);
    currentUtterance.lang = 'pt-BR';
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1.0;
    currentUtterance.volume = 1;
    window.speechSynthesis.speak(currentUtterance);
  };

  if (voicesLoaded) {
    speak();
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      voicesLoaded = true;
      speak();
    };
    setTimeout(() => {
      if (!voicesLoaded) {
        voicesLoaded = true;
        speak();
      }
    }, 1000);
  }
}

function stopReading() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

const readBtn = document.getElementById('readPageBtn');
const stopBtn = document.getElementById('stopSpeechBtn');

if (readBtn) readBtn.addEventListener('click', readPage);
if (stopBtn) stopBtn.addEventListener('click', stopReading);

window.addEventListener('beforeunload', () => {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
});

// -------------------- TELA CHEIA PARA VÍDEOS --------------------
function initFullscreenButtons() {
  const fullscreenBtns = document.querySelectorAll('.fullscreen-btn');

  fullscreenBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const videoId = btn.getAttribute('data-video-id');
      if (videoId) {
        const video = document.getElementById(videoId);
        if (video) {
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
          }
        }
      }
    });
  });
}

// -------------------- DETECÇÃO DE TEMA --------------------
function detectThemeByFilename() {
  const path = window.location.pathname;
  if (path.includes('fome_zero') || path.includes('ods2')) {
    document.body.classList.add('ods2');
  } else if (path.includes('educacao_de_qualidade') || path.includes('ods4')) {
    document.body.classList.add('ods4');
  } else if (path.includes('mudanca_global_do_clima') || path.includes('acao_climatica') || path.includes('ods13')) {
    document.body.classList.add('ods13');
  }
}

// -------------------- LÓGICA DE ABAS --------------------
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-buttons .access-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function switchTab(tabId) {
    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(btn => btn.classList.remove('active-tab'));
    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) activeContent.classList.add('active');
    const activeBtn = document.querySelector(`.tab-buttons .access-btn[data-tab="${tabId}"]`);
    if (activeBtn) activeBtn.classList.add('active-tab');
  }

  tabButtons.forEach(btn => {
    if (!btn.hasAttribute('onclick')) {
      btn.addEventListener('click', (e) => {
        const tabId = btn.getAttribute('data-tab');
        if (tabId) switchTab(tabId);
      });
    }
  });

  const smallTabBtns = document.querySelectorAll('.small-tab-btn');
  smallTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      if (targetTab) {
        switchTab(targetTab);
        const tabBar = document.querySelector('.tab-buttons');
        if (tabBar) tabBar.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const hash = window.location.hash.substring(1);
  if (hash && (hash === 'onu' || hash === 'ods4' || hash === 'ods2' || hash === 'ods13')) {
    switchTab(hash);
  }
}

// -------------------- INICIALIZAÇÃO --------------------
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    detectThemeByFilename();
    initTabs();
    initFullscreenButtons();
  });
} else {
  detectThemeByFilename();
  initTabs();
  initFullscreenButtons();
}
