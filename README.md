markdown

# 🌍 ODS na Escola | Projeto Paraná Sustentável

[![Licença: MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Educacional-brightgreen)]()
[![Acessibilidade](https://img.shields.io/badge/Acessibilidade-Sim-%23357D3D)]()
[![ODS](https://img.shields.io/badge/ODS-2%2C%204%2C%2013-1E90FF)]()

> Um portal interdisciplinar para o Ensino Médio da rede pública estadual do Paraná, conectando juventude, cidadania e a Agenda 2030 da ONU.

## 📖 Sobre o Projeto

Este projeto é um **site educacional completo** desenvolvido para escolas públicas do Paraná. Ele funciona como um guia digital para professores e alunos trabalharem os **Objetivos de Desenvolvimento Sustentável (ODS)** da ONU de forma prática, interdisciplinar e acessível.

O portal apresenta três projetos pedagógicos completos, cada um focado em um ODS específico e alinhado com a realidade do estado do Paraná.

## 🎯 Objetivos de Desenvolvimento Sustentável (ODS) Abordados

| ODS | Nome | Foco do Projeto |
|:---:|:---|:---|
| **2** | 🌾 Fome Zero e Agricultura Sustentável | Segurança alimentar, combate ao desperdício, horta agroecológica e valorização da agricultura familiar. |
| **4** | 📚 Educação de Qualidade | Redução da evasão escolar, protagonismo juvenil, uso da tecnologia e monitoria entre alunos. |
| **13** | 🌎 Ação Contra a Mudança Global do Clima | Pegada de carbono, plantio de árvores nativas, reciclagem e conscientização climática. |

## ✨ Funcionalidades

- **🔊 Acessibilidade Total**: Botões para aumentar/diminuir fonte e leitura em voz alta de todo o conteúdo (síntese de voz).
- **📱 Design Responsivo**: Funciona perfeitamente em desktops, tablets e smartphones.
- **🎬 Vídeos Embutidos**: Três vídeos por projeto (bank de mídia local) com suporte a tela cheia.
- **📑 Sistema de Abas (Tabs)**: Navegação simples entre os ODS e a página principal da ONU.
- **📄 Projetos Detalhados**: Cada ODS possui uma página com:
  - Contextualização local (dados do Paraná).
  - Atividades práticas sugeridas.
  - Integração com disciplinas curriculares.
  - Materiais multimídia de apoio.

## 🗂️ Estrutura do Projeto

projeto-ods-escola/
│
├── index.html # Página principal (A ONU e os ODS)
├── pages/
│ ├── fome_zero.html # Projeto ODS 2
│ ├── educacao_de_qualidade.html # Projeto ODS 4
│ └── mudanca_global_do_clima.html # Projeto ODS 13
│
├── assets/
│ ├── css/
│ │ └── style.css # Estilos unificados (design responsivo, acessibilidade)
│ ├── js/
│ │ └── script.js # Lógica de fontes, leitura em voz alta, fullscreen
│ └── videos/ # Pasta com os 9 vídeos dos projetos
│ ├── educacao_de_qualidade.mp4
│ ├── educacao_que_transforma.mp4
│ ├── uso_criativo_da_tecnologia.mp4
│ ├── fome_zero.mp4
│ ├── compostagem.mp4
│ ├── desperdicio.mp4
│ ├── urgencia_climatica.mp4
│ ├── impactos_reais.mp4
│ └── escolas_sustentaveis.mp4
│
└── README.md # Este arquivo
text


## 🚀 Como Utilizar

### Para Professores

1.  **Apresentação em sala**: Projete o site para introduzir os ODS e os projetos.
2.  **Roteiro de aulas**: Use as seções "Atividades sugeridas" e "Integração com disciplinas" para planejar suas aulas interdisciplinares.
3.  **Central multimídia**: Utilize os vídeos disponíveis para debates e atividades extraclasse.
4.  **Acessibilidade**: Ative a leitura em voz alta para alunos com dificuldades de leitura ou dislexia.

### Para Alunos

1.  **Pesquisa e consulta**: Explore os conteúdos em casa ou no laboratório de informática.
2.  **Protagonismo**: Utilize as ideias dos projetos para criar ações reais na escola (horta, campanhas, mutirões).
3.  **Compartilhamento**: Compartilhe o site nos grupos da turma e da comunidade.

### Para Gestores Escareira

1.  **Implementação**: Adote os projetos como parte do planejamento anual da escola.
2.  **Formação**: Use o material para capacitar professores em metodologias ativas e interdisciplinares.
3.  **Divulgação**: Compartilhe o portal com a comunidade escolar como um recurso oficial da escola.

## 🛠️ Tecnologias Utilizadas

- **HTML5** – Estrutura semântica e acessível.
- **CSS3** – Design responsivo, flexbox/grid e suporte a temas.
- **JavaScript (Vanilla)** – Funcionalidades de acessibilidade, controle de fontes, síntese de voz e navegação por abas.
- **Web Speech API** – Para leitura em voz alta do conteúdo.
- **Vídeos MP4** – Conteúdo multimídia local (sem dependência externa).

## 🌟 Diferenciais do Projeto

✅ **Contexto local real** – Dados e desafios específicos do estado do Paraná.  
✅ **Pronto para uso** – Basta abrir no navegador, não requer instalação ou servidor.  
✅ **Inclusivo** – Atende à Lei Brasileira de Inclusão (LBI) com recursos de acessibilidade.  
✅ **Alinhado à BNCC** – Integra competências e habilidades do Ensino Médio.  
✅ **Código aberto** – Pode ser adaptado e expandido por outras escolas e estados.

## 📋 Exemplo de Atividade (ODS 2 – Fome Zero)

| Etapa | Descrição | Disciplinas envolvidas |
|:---|:---|:---|
| 1 | Diagnóstico do desperdício da merenda escolar | Matemática (estatística) |
| 2 | Implantação da horta agroecológica | Biologia (solo, compostagem) |
| 3 | Campanha "Comida não é lixo" | Português (argumentação), Arte (cartazes) |
| 4 | Roda de conversa com agricultores familiares | Geografia, Sociologia |
| 5 | Feira de troca de sementes e receitas | Todas as disciplinas |

## 🔧 Personalização

Você pode facilmente adaptar este projeto para sua realidade:

- **Vídeos**: Substitua os arquivos `.mp4` na pasta `assets/videos/` mantendo os mesmos nomes.
- **Dados locais**: Edite os parágrafos com estatísticas e contextos da sua cidade/estado.
- **Cores**: Modifique as variáveis CSS no início do arquivo `style.css`.
- **Logotipos**: Adicione imagens na pasta `assets/images/` e referencie no HTML.

## 🤝 Como Contribuir

Contribuições são muito bem-vindas! Siga os passos:

1.  Faça um **Fork** do projeto.
2.  Crie uma branch para sua feature (`git checkout -b feature/nova-atividade`).
3.  Commit suas mudanças (`git commit -m 'Adiciona atividade sobre energia limpa'`).
4.  Push para a branch (`git push origin feature/nova-atividade`).
5.  Abra um **Pull Request**.

## 📄 Licença

Este projeto está sob a licença MIT. Isso significa que você pode usar, copiar, modificar e distribuir o código livremente, desde que mantenha os créditos originais.

## 📞 Contato e Suporte

- **Criado para**: Rede pública de educação do Estado do Paraná.
- **Alinhado à**: Agenda 2030 da ONU e BNCC.
- **Dúvidas ou sugestões**: Abra uma **Issue** neste repositório.

---

## 🙏 Agradecimentos

- Organização das Nações Unidas (ONU) pela Agenda 2030.
- Secretaria de Estado da Educação do Paraná (SEED/PR) pelo incentivo a projetos interdisciplinares.
- Professores e alunos das escolas públicas paranaenses que inspiram e transformam realidades todos os dias.

<p align="center">
  <strong>🌱 Pequenas ações dentro da escola geram grandes transformações no mundo! 🌎</strong>
</p>
