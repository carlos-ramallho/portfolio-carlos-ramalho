/* =========================================================
   DADOS DOS PROJETOS
   Para adicionar um projeto: copie um bloco { ... }, troque os
   textos e aponte as imagens para arquivos em assets/img/...
   ========================================================= */

const IMG_C = "assets/img/carlos/";
const IMG_I = "assets/img/imperiums/";
const PDF = "assets/docs/pranchas/";

/* ---------------------------------------------------------
   CARLOS RAMALHO — trabalhos pessoais / carreira
   Obra 1197 · CAC – Cinturão das Águas do Ceará (Passarelli)
   --------------------------------------------------------- */
window.PROJECTS_CARLOS = [
  {
    id: "concordancia-01",
    cat: "Estruturas hidráulicas",
    title: "Estrutura de Concordância Tipo 01",
    place: "CAC – Cinturão das Águas do Ceará",
    year: "2026",
    featured: true,
    contain: true,
    cover: IMG_C + "concordancia-01-capa.webp",
    images: [
      { src: IMG_C + "concordancia-01-capa.webp", cap: "Modelo 3D completo da estrutura" },
      { src: IMG_C + "concordancia-01-obra.webp", cap: "Execução em campo — vista aérea" },
      { src: IMG_C + "concordancia-01-modulos.webp", cap: "Módulos Transição, Comporta e Tubo em vista explodida por fases" },
      { src: IMG_C + "concordancia-01-prancha.webp", cap: "Prancha completa com quadros de concreto, aço e controle de execução" }
    ],
    desc: "Modelagem BIM de estrutura de concordância (sifão) dividida em três módulos — Transição, Comporta e Tubo. Cada módulo foi decomposto em fases executivas (concreto magro, lajes, paredes por nível, asa delta, peito de pombo), com volumes por peça, resumo de aço e quadro de controle de execução para acompanhamento em campo.",
    specs: [
      ["Concreto total", "440,35 m³"],
      ["Aço total", "31.626 kg"],
      ["Mód. Transição", "104,01 m³ · 9.579 kg"],
      ["Mód. Comporta", "246,94 m³ · 16.995 kg"],
      ["Mód. Tubo", "89,40 m³ · 5.052 kg"],
      ["Entregáveis", "Modelo 3D, vistas explodidas, quantitativos, controle de execução"]
    ],
    stats: [["440 m³", "concreto"], ["31,6 t", "aço"], ["3", "módulos"]],
    pdf: PDF + "estrutura-concordancia-tipo-01.pdf"
  },
  {
    id: "concordancia-02",
    cat: "Estruturas hidráulicas",
    title: "Estrutura de Concordância Tipo 02",
    place: "CAC – Cinturão das Águas do Ceará",
    year: "2026",
    featured: true,
    contain: true,
    cover: IMG_C + "concordancia-02-capa.webp",
    images: [
      { src: IMG_C + "concordancia-02-capa.webp", cap: "Modelo 3D completo — variante com fosso" },
      { src: IMG_C + "concordancia-02-obra.webp", cap: "Estrutura executada — vista aérea com o canal" },
      { src: IMG_C + "concordancia-02-modulos.webp", cap: "Módulo Comporta com 7 níveis de paredes e laje do fosso" },
      { src: IMG_C + "concordancia-02-prancha.webp", cap: "Prancha completa" }
    ],
    desc: "Variante da estrutura de concordância com módulo Comporta aprofundado (fosso), exigindo sete níveis de paredes, laje inferior de fosso e parede de transição. O modelo organiza a sequência construtiva e consolida os quantitativos de concreto e aço por fase.",
    specs: [
      ["Concreto total", "534,81 m³"],
      ["Aço total", "36.404 kg"],
      ["Mód. Transição", "104,01 m³ · 9.579 kg"],
      ["Mód. Comporta", "341,40 m³ · 21.773 kg"],
      ["Mód. Tubo", "89,40 m³ · 5.052 kg"],
      ["Destaque", "Fosso com 7 níveis de paredes"]
    ],
    stats: [["535 m³", "concreto"], ["36,4 t", "aço"], ["7", "níveis"]],
    pdf: PDF + "estrutura-concordancia-tipo-02.pdf"
  },
  {
    id: "comporta",
    featured: true,
    cat: "Estruturas hidráulicas",
    title: "Comporta — Subtrecho 1.4",
    place: "CAC – Estaca 125+150",
    year: "2026",
    contain: true,
    cover: IMG_C + "comporta-capa.webp",
    images: [
      { src: IMG_C + "comporta-capa.webp", cap: "Modelo 3D da comporta" },
      { src: IMG_C + "comporta-obra-01.webp", cap: "Execução em campo" },
      { src: IMG_C + "comporta-obra-02.webp", cap: "Execução em campo — vista frontal" },
      { src: IMG_C + "comporta-etapas.webp", cap: "Sequência executiva: laje e paredes em 4 níveis" },
      { src: IMG_C + "comporta-planta.webp", cap: "Planta baixa e corte com as transições de canal" },
      { src: IMG_C + "comporta-prancha.webp", cap: "Prancha completa com controle de execução" }
    ],
    desc: "Estrutura de comporta inserida no canal, com transições de emboque e desemboque. O módulo foi decomposto em cinco etapas executivas — laje de fundo e paredes em quatro níveis — com volume por etapa e quadro de controle de execução cobrindo transições e módulo comporta.",
    specs: [
      ["1ª etapa — laje", "62,10 m³"],
      ["2ª etapa — paredes nível 1", "26,78 m³"],
      ["3ª etapa — paredes nível 2", "21,28 m³"],
      ["4ª etapa — paredes nível 3", "36,31 m³"],
      ["5ª etapa — paredes nível 4", "21,54 m³"],
      ["Concreto do módulo", "168,01 m³"]
    ],
    stats: [["168 m³", "concreto"], ["5", "etapas"], ["4", "níveis"]],
    pdf: PDF + "comporta-subtrecho-1-4.pdf"
  },
  {
    id: "pontilhao",
    featured: true,
    cat: "Obras de arte especiais",
    title: "Pontilhão — Subtrecho 1.4",
    place: "CAC – Estacas 117+400 a 140+260",
    year: "2026",
    contain: true,
    cover: IMG_C + "pontilhao-capa.webp",
    images: [
      { src: IMG_C + "pontilhao-capa.webp", cap: "Pontilhão — vista isométrica" },
      { src: IMG_C + "pontilhao-obra.webp", cap: "Execução em campo — concretagem da laje" },
      { src: IMG_C + "pontilhao-explodido.webp", cap: "Decomposição: longarinas, laje e guarda-rodas" },
      { src: IMG_C + "pontilhao-prancha.webp", cap: "Prancha completa com fundação, resumo de aço e controle" }
    ],
    desc: "Modelo padrão de pontilhão aplicado a seis travessias do subtrecho 1.4. A prancha decompõe a estrutura em 9 fases — de concreto magro e sapata até longarinas, laje e guarda-rodas — com volumes, áreas de fôrma, resumo de aço por bitola e controle de execução por obra.",
    specs: [
      ["Concreto", "75,58 m³ por pontilhão"],
      ["Fôrma", "313,76 m²"],
      ["Aço CA-50", "15.520 kg"],
      ["Fases executivas", "9"],
      ["Obras atendidas", "Pontilhões 36, 37, 38, 41, 44 e 45"]
    ],
    stats: [["75,6 m³", "concreto"], ["15,5 t", "aço"], ["6", "obras"]],
    pdf: PDF + "pontilhao-subtrecho-1-4.pdf"
  },
  {
    id: "passarela",
    featured: true,
    cat: "Obras de arte especiais",
    title: "Passarela — Subtrecho 1.4",
    place: "CAC – Estacas 117+700 a 144+800",
    year: "2026",
    contain: true,
    cover: IMG_C + "passarela-capa.webp",
    images: [
      { src: IMG_C + "passarela-capa.webp", cap: "Passarela — modelo 3D sobre o canal" },
      { src: IMG_C + "passarela-prancha.webp", cap: "Prancha completa com detalhes do bloco e controle de execução" }
    ],
    desc: "Passarela em concreto armado sobre o canal, modelada em quatro fases (bloco de concreto, transversina, base e paredes). O padrão foi replicado para seis passarelas do subtrecho, com quadro de controle para medição e acompanhamento da execução.",
    specs: [
      ["Concreto", "30,93 m³ por passarela"],
      ["Fôrma", "182,70 m²"],
      ["Aço", "5.496 kg (CA-50) + 10 kg (CA-60)"],
      ["Fases executivas", "4"],
      ["Obras atendidas", "Passarelas 20A, 21, 22, 22A, 23 e 25"]
    ],
    stats: [["30,9 m³", "concreto"], ["5,5 t", "aço"], ["6", "obras"]],
    pdf: PDF + "passarela-subtrecho-1-4.pdf"
  },
  {
    id: "bueiro-b45",
    featured: true,
    cat: "Drenagem",
    title: "Bueiro Celular Duplo — B45",
    place: "CAC – Estaca 122+947,33",
    year: "2026",
    contain: true,
    cover: IMG_C + "bueiro-b45-3d.webp",
    images: [
      { src: IMG_C + "bueiro-b45-3d.webp", cap: "Bueiro 45 — modelo 3D" },
      { src: IMG_C + "bueiro-b45-capa.webp", cap: "Módulos de 10 m e 10,46 m por etapa executiva" },
      { src: IMG_C + "bueiro-b45-prancha.webp", cap: "Prancha: cortes longitudinal e transversal, base e 3D" }
    ],
    desc: "Detalhamento de bueiro celular de duas células com 70,46 m de extensão, dividido em sete módulos. Cada módulo foi organizado em etapas (laje inferior, paredes 1ª e 2ª etapas, laje superior e vigas montante/jusante), com cortes cotados e controle de execução por módulo.",
    specs: [
      ["Extensão", "70,46 m (7 módulos)"],
      ["Seção", "Celular dupla"],
      ["Módulos", "6 × 10,00 m + 1 × 10,46 m"],
      ["Data", "06/2026"]
    ],
    stats: [["70,46 m", "extensão"], ["7", "módulos"], ["2", "células"]]
  },
  {
    id: "res-mauriti",
    featured: true,
    cat: "Projeto arquitetônico",
    title: "Residência Unifamiliar Térrea",
    place: "Mauriti – CE",
    contain: true,
    cover: IMG_C + "res-mauriti-capa.webp",
    images: [
      { src: IMG_C + "res-mauriti-capa.webp", cap: "Fachada frontal" },
      { src: IMG_C + "res-mauriti-plantas.webp", cap: "Planta baixa do térreo e implantação" },
      { src: IMG_C + "res-mauriti-fachadas.webp", cap: "Fachadas frontal, lateral e posterior" },
      { src: IMG_C + "res-mauriti-detalhes.webp", cap: "Quadros de áreas e esquadrias, detalhes de rufo, chapim e calha" },
      { src: IMG_C + "res-mauriti-prancha.webp", cap: "Prancha (sem carimbo)" }
    ],
    desc: "Projeto arquitetônico legal de residência térrea com suíte com closet, três quartos, salas de estar e jantar, escritório, despensa e garagem. A prancha reúne planta baixa cotada, implantação, quatro fachadas, quadros de áreas e esquadrias e detalhes construtivos de rufo, contrarrufo, chapim e calha metálica.",
    specs: [
      ["Área do terreno", "320,00 m²"],
      ["Área construída", "128,05 m²"],
      ["Pavimentos", "1 (térreo)"],
      ["Programa", "Suíte com closet, 3 quartos, estar, jantar, cozinha, escritório, garagem"],
      ["Entregáveis", "Planta, implantação, fachadas, quadros e detalhes"]
    ],
    stats: [["128 m²", "construída"], ["320 m²", "terreno"]]
  },
  {
    id: "casa-campo",
    featured: true,
    cat: "Projeto arquitetônico",
    title: "Casa de Campo",
    place: "São Miguel – RN",
    contain: true,
    cover: IMG_C + "casa-campo-capa.webp",
    images: [
      { src: IMG_C + "casa-campo-capa.webp", cap: "Perspectiva 3D com alpendre" },
      { src: IMG_C + "casa-campo-planta.webp", cap: "Planta do pavimento térreo" },
      { src: IMG_C + "casa-campo-fachadas.webp", cap: "Fachadas e detalhes" },
      { src: IMG_C + "casa-campo-prancha.webp", cap: "Prancha (sem carimbo)" }
    ],
    desc: "Residência de campo com amplo alpendre periférico, cobertura em telha cerâmica em quatro águas e área gourmet com churrasqueira. Modelada em BIM, com quadros de áreas, esquadrias, forros, pisos, paredes e telhados extraídos diretamente do modelo.",
    specs: [
      ["Programa", "Suíte com closet, 2 quartos, estar/jantar, cozinha, despensa, lavabo, área de serviço"],
      ["Alpendre", "218,21 m²"],
      ["Forro de gesso", "121,17 m²"],
      ["Cobertura", "Telha cerâmica, i = 25%"],
      ["Metodologia", "BIM com quantitativos automáticos"]
    ],
    stats: [["218 m²", "alpendre"], ["BIM", "quantitativos"]]
  },
  {
    id: "acompanhamento",
    wide: true,
    cat: "Acompanhamento de obra",
    title: "Acompanhamento de Obra",
    place: "Obras residenciais e comerciais",
    cover: IMG_C + "acompanhamento-02.webp",
    images: [
      { src: IMG_C + "acompanhamento-02.webp", cap: "Edifício comercial concluído — vista aérea" },
      { src: IMG_C + "acompanhamento-04.webp", cap: "Execução da estrutura em concreto armado" },
      { src: IMG_C + "acompanhamento-03.webp", cap: "Obra em andamento — estrutura e alvenaria" },
      { src: IMG_C + "acompanhamento-01.webp", cap: "Residência — fase de acabamento" }
    ],
    desc: "Acompanhamento técnico de obras desde a estrutura até a entrega: fiscalização da execução conforme projeto, controle de qualidade, registro fotográfico com drone e apoio às decisões de campo.",
    specs: [
      ["Serviço", "Acompanhamento e fiscalização de obra"],
      ["Etapas", "Estrutura, alvenaria, cobertura e acabamento"],
      ["Registro", "Levantamento aéreo com drone"]
    ],
    stats: [["Estrutura", "→ entrega"], ["Drone", "registro"]]
  },
  {
    id: "dreno",
    wide: true,
    cat: "Drenagem",
    title: "Dreno de Saída Lateral — PMP 03.2026",
    place: "CAC – Detalhe a partir de croqui de campo",
    year: "2026",
    contain: true,
    cover: IMG_C + "dreno-capa.webp",
    images: [
      { src: IMG_C + "dreno-capa.webp", cap: "Vista isométrica de montagem" },
      { src: IMG_C + "dreno-prancha.webp", cap: "Prancha com quadro de materiais, notas e planta esquemática" }
    ],
    desc: "Transformação de um croqui de campo em detalhe técnico: redução DN 230 × DN 150 com derivação em três saídas paralelas (dois tês e uma curva longa 90°). Inclui vista isométrica, planta esquemática, quadro de materiais e notas para validação pela fiscalização.",
    specs: [
      ["Tubulação principal", "DN 230"],
      ["Derivações", "3 saídas DN 150"],
      ["Peças", "Redução, 2 tês, curva longa 90°"],
      ["Tipo", "Esboço técnico preliminar"]
    ],
    stats: [["DN 230", "principal"], ["3×", "DN 150"]]
  }
];

/* ---------------------------------------------------------
   IMPERIUMS ENGENHARIA — portfólio da empresa
   --------------------------------------------------------- */
window.PROJECTS_IMPERIUMS = [
  {
    id: "hidro-residencia",
    cat: "Hidrossanitário",
    title: "Hidrossanitário — Residência Unifamiliar 01",
    place: "Projeto residencial em BIM",
    featured: true,
    cover: IMG_I + "hidro-render-02.webp",
    images: [
      { src: IMG_I + "hidro-render-02.webp", cap: "Renderização das instalações na estrutura" },
      { src: IMG_I + "hidro-render-01.webp", cap: "Renderização — vista geral" },
      { src: IMG_I + "hidro-render-03.webp", cap: "Reservatórios e aquecimento" },
      { src: IMG_I + "hidro-render-04.webp", cap: "Rede sob a laje" }
    ],
    desc: "Projeto hidrossanitário completo modelado em BIM, com todas as redes compatibilizadas com a estrutura e apresentadas em renderizações realistas.",
    specs: [["Sistemas", "Água fria, água quente, esgoto sanitário, ventilação, água pluvial, rede pressurizada, dreno de ar-condicionado, gás GLP/GN"], ["Metodologia", "BIM"]],
    stats: [["8", "sistemas"], ["BIM", "modelagem"]]
  },
  {
    id: "piscina",
    cat: "Hidrossanitário",
    title: "Piscina Residencial",
    place: "Projeto hidráulico de piscina",
    featured: true,
    contain: true,
    cover: IMG_I + "piscina-01.webp",
    images: [
      { src: IMG_I + "piscina-01.webp", cap: "Planta com sistemas de tubulação e legenda" },
      { src: IMG_I + "piscina-02.webp", cap: "Detalhes isométricos — casa de máquinas" },
      { src: IMG_I + "piscina-03.webp", cap: "Detalhes isométricos — retorno e sucção" }
    ],
    desc: "Projeto hidráulico de piscina residencial com planta de tubulações por sistema, casa de máquinas e detalhes isométricos de sucção, retorno e dispositivos.",
    specs: [["Entregáveis", "Planta, isométricos, legenda de sistemas"], ["Metodologia", "BIM"]],
    stats: [["3", "pranchas"]]
  },
  {
    id: "pranchas-banheiro",
    cat: "Hidrossanitário",
    title: "Modelos de Prancha — Banheiro e Área de Serviço",
    place: "Detalhamento hidrossanitário",
    contain: true,
    cover: IMG_I + "prancha-02.webp",
    images: [
      { src: IMG_I + "prancha-02.webp", cap: "Prancha de detalhamento" },
      { src: IMG_I + "prancha-banheiro-01.webp", cap: "Banheiro residencial — água fria, quente, esgoto e ventilação" },
      { src: IMG_I + "prancha-03.webp", cap: "Prancha de detalhamento" },
      { src: IMG_I + "prancha-04.webp", cap: "Prancha de detalhamento" },
      { src: IMG_I + "prancha-reservatorios.webp", cap: "Reservatórios e barrilete" },
      { src: IMG_I + "detalhe-area-servico-01.webp", cap: "Área de serviço — vista frontal" },
      { src: IMG_I + "detalhe-area-servico-02.webp", cap: "Área de serviço — isométrico" }
    ],
    desc: "Padrão de pranchas com vistas isométricas numeradas, tabela de quantitativos e notas executivas (declividade de 1% para Ø100 ou acima e 2% para Ø75 ou abaixo; esgoto de espuma e ventilação).",
    specs: [["Conteúdo", "Água fria, água quente, esgoto, ventilação, quantitativos"], ["Normas", "Declividades conforme diâmetro"]],
    stats: [["7", "pranchas"]]
  },
  {
    id: "eletrico",
    cat: "Elétrico",
    title: "Elétrico — Residência Unifamiliar 01",
    place: "Planta baixa e detalhamento de QDCs",
    contain: true,
    cover: IMG_I + "eletrico-qdc-01.webp",
    images: [
      { src: IMG_I + "eletrico-qdc-01.webp", cap: "Detalhamento de QDC" },
      { src: IMG_I + "eletrico-qdc-02.webp", cap: "Detalhamento de QDC" },
      { src: IMG_I + "eletrico-planta.webp", cap: "Planta baixa elétrica" },
      { src: IMG_I + "eletrico-detalhe-01.webp", cap: "Detalhe de prumada" }
    ],
    desc: "Projeto elétrico residencial com planta de pontos e circuitos, prumadas e detalhamento tridimensional dos quadros de distribuição (QDCs).",
    specs: [["Entregáveis", "Planta baixa, prumadas, QDCs em 3D"]],
    stats: [["QDC", "3D"]]
  },
  {
    id: "estrutural-cypecad",
    cat: "Estrutural",
    title: "Estrutural — Residência Unifamiliar",
    place: "Concreto armado · CYPECAD",
    contain: true,
    cover: IMG_I + "estrutural-cypecad-3d.webp",
    images: [
      { src: IMG_I + "estrutural-cypecad-3d.webp", cap: "Modelo estrutural 3D" },
      { src: IMG_I + "estrutural-forma-01.webp", cap: "Planta de fôrmas" },
      { src: IMG_I + "estrutural-forma-02.webp", cap: "Planta de locação" }
    ],
    desc: "Dimensionamento estrutural em concreto armado no CYPECAD, com modelo 3D, plantas de fôrma e locação.",
    specs: [["Software", "CYPECAD"], ["Sistema", "Concreto armado"]],
    stats: [["CYPECAD", "software"]]
  },
  {
    id: "estrutural-brejo-santo",
    cat: "Estrutural",
    title: "Residência em Concreto Armado — Brejo Santo",
    place: "Brejo Santo – CE · CYPECAD",
    contain: true,
    cover: IMG_I + "estrutural-brejo-santo.webp",
    images: [
      { src: IMG_I + "estrutural-brejo-santo.webp", cap: "Modelo estrutural" },
      { src: IMG_I + "arquitetura-brejo-santo.webp", cap: "Modelo arquitetônico" }
    ],
    desc: "Projeto estrutural de residência unifamiliar compatibilizado com o modelo arquitetônico.",
    specs: [["Local", "Brejo Santo – CE"], ["Software", "CYPECAD"]],
    stats: [["CE", "Brejo Santo"]]
  },
  {
    id: "estrutural-pereiro",
    cat: "Estrutural",
    title: "Residência em Concreto Armado — Pereiro",
    place: "Pereiro – CE",
    contain: true,
    cover: IMG_I + "estrutural-pereiro-3d.webp",
    images: [
      { src: IMG_I + "estrutural-pereiro-3d.webp", cap: "Modelo da residência" },
      { src: IMG_I + "estrutural-pereiro-arq.webp", cap: "Pórticos estruturais" }
    ],
    desc: "Estrutura em concreto armado para residência térrea, do lançamento estrutural ao modelo final.",
    specs: [["Local", "Pereiro – CE"], ["Sistema", "Concreto armado"]],
    stats: [["CE", "Pereiro"]]
  },
  {
    id: "tqs-edificio",
    cat: "Estrutural",
    title: "Edifício de Múltiplos Pavimentos",
    place: "Modelagem e cálculo no TQS",
    cover: IMG_I + "tqs-render-02.webp",
    images: [
      { src: IMG_I + "tqs-render-02.webp", cap: "Renderização da estrutura" },
      { src: IMG_I + "tqs-render-01.webp", cap: "Implantação no terreno" },
      { src: IMG_I + "tqs-modelagem.webp", cap: "Modelagem estrutural" },
      { src: IMG_I + "tqs-modelo.webp", cap: "Modelo 3D do TQS" }
    ],
    desc: "Projeto estrutural de edifício de múltiplos pavimentos desenvolvido no TQS, com modelagem completa e renderizações de apresentação.",
    specs: [["Software", "TQS"], ["Tipologia", "Edifício multipavimentos"]],
    stats: [["TQS", "software"]]
  },
  {
    id: "casa-suino",
    cat: "Estrutural",
    title: "Edifício Comercial — Casa do Suíno",
    place: "Mauriti – CE",
    contain: true,
    cover: IMG_I + "comercial-casa-suino.webp",
    images: [{ src: IMG_I + "comercial-casa-suino.webp", cap: "Modelo estrutural do edifício comercial" }],
    desc: "Projeto estrutural de edifício comercial com cobertura em estrutura metálica.",
    specs: [["Local", "Mauriti – CE"], ["Uso", "Comercial"]],
    stats: [["CE", "Mauriti"]]
  },
  {
    id: "arquitetonico",
    cat: "Arquitetônico",
    title: "Projeto Arquitetônico em BIM",
    place: "Residências modeladas em BIM",
    contain: true,
    cover: IMG_I + "arquitetonico-bim-02.webp",
    images: [
      { src: IMG_I + "arquitetonico-bim-02.webp", cap: "Residência de dois pavimentos" },
      { src: IMG_I + "arquitetonico-bim-03.webp", cap: "Implantação" }
    ],
    desc: "Modelagem arquitetônica em BIM, base para compatibilização com os projetos complementares.",
    specs: [["Metodologia", "BIM"]],
    stats: [["BIM", "modelagem"]]
  },
  {
    id: "aerolevantamento",
    cat: "Topografia",
    title: "Aerolevantamentos",
    place: "Topografia com drone",
    contain: true,
    cover: IMG_I + "aero-mde.webp",
    images: [
      { src: IMG_I + "aero-mde.webp", cap: "Modelo digital de elevação" },
      { src: IMG_I + "aero-ortomosaico.webp", cap: "Ortomosaico" }
    ],
    desc: "Levantamentos aerofotogramétricos com drone, processamento em ortomosaico e modelo digital de elevação para projetos e medições.",
    specs: [["Produtos", "Ortomosaico, MDE, nuvem de pontos"], ["Ferramentas", "Drone, Agisoft Metashape"]],
    stats: [["Drone", "levantamento"]]
  },
  {
    id: "infra-bim",
    cat: "Infraestrutura BIM",
    title: "Modelagem BIM de Infraestrutura",
    place: "Concordâncias, passarelas, pontilhões e bueiros",
    wide: true,
    cover: IMG_I + "concordancia-obra.webp",
    images: [
      { src: IMG_I + "concordancia-obra.webp", cap: "Estrutura de concordância — modelo inserido na obra" },
      { src: IMG_I + "concordancia-01-explodido.webp", cap: "Concordância Tipo 01 — módulos explodidos" },
      { src: IMG_I + "concordancia-02-prancha.webp", cap: "Concordância Tipo 02 — prancha" },
      { src: IMG_I + "passarela-prancha.webp", cap: "Passarela" },
      { src: IMG_I + "pontilhao-prancha.webp", cap: "Pontilhão" },
      { src: IMG_I + "bueiro-celular.webp", cap: "Bueiro celular" }
    ],
    desc: "Modelagem BIM de obras de infraestrutura hídrica, com decomposição em fases executivas e quantitativos por peça. Veja o detalhamento técnico de cada obra no portfólio de Carlos Ramalho.",
    specs: [["Obras", "Concordâncias, passarelas, pontilhões, bueiros celulares"], ["Metodologia", "BIM aplicado à infraestrutura"]],
    stats: [["6", "tipologias"]]
  }
];
