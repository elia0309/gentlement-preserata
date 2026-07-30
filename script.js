const roomForm = document.querySelector("#roomForm");
const loadingScreen = document.querySelector("#loadingScreen");
const filmCountdown = document.querySelector("#filmCountdown");
const filmCountdownText = document.querySelector("#filmCountdownText");
const playerNameInput = document.querySelector("#playerName");
const roomChoiceButtons = document.querySelectorAll(".room-choice-button");
const joinCodeField = document.querySelector("#joinCodeField");
const roomCodeInput = document.querySelector("#roomCodeInput");
const roomCodeText = document.querySelector("#roomCodeText");
const selectedModeText = document.querySelector("#selectedModeText");
const playersCount = document.querySelector("#playersCount");
const playersList = document.querySelector("#playersList");
const modeButtons = document.querySelectorAll(".mode-button");
const startGameButton = document.querySelector("#startGame");
const lobbyWaitNote = document.querySelector("#lobbyWaitNote");
const lobbyMusic = document.querySelector("#lobbyMusic");
const backToIntroButton = document.querySelector("#backToIntro");
const backToRoomButton = document.querySelector("#backToRoom");
const backToLobbyButton = document.querySelector("#backToLobby");
const podiumHostNote = document.querySelector("#podiumHostNote");
const gameQuestionMusic = document.querySelector("#gameQuestionMusic");
const showPenaltyButton = document.querySelector("#showPenalty");
const continueGameButton = document.querySelector("#continueGame");
const continueGameUnanimousButton = document.querySelector("#continueGameUnanimous");
const revealBonusQuestionButton = document.querySelector("#revealBonusQuestion");
const continueAfterBonusButton = document.querySelector("#continueAfterBonus");
const wheelCenterSpinButton = document.querySelector("#wheelCenterSpin");
const finishAfterWheelButton = document.querySelector("#finishAfterWheel");
const finishAfterWheelNote = document.querySelector("#finishAfterWheelNote");
const drawGentlementButton = document.querySelector("#drawGentlement");
const introScreen = document.querySelector("#introScreen");
const lobbyScreen = document.querySelector("#lobbyScreen");
const gameScreen = document.querySelector("#gameScreen");
const resultsScreen = document.querySelector("#resultsScreen");
const penaltyScreen = document.querySelector("#penaltyScreen");
const unanimousPenaltyScreen = document.querySelector("#unanimousPenaltyScreen");
const bonusScreen = document.querySelector("#bonusScreen");
const bonusResultScreen = document.querySelector("#bonusResultScreen");
const gentlementIntroScreen = document.querySelector("#gentlementIntroScreen");
const gentlementPhotoScreen = document.querySelector("#gentlementPhotoScreen");
const gentlementAnswersScreen = document.querySelector("#gentlementAnswersScreen");
const gentlementResultScreen = document.querySelector("#gentlementResultScreen");
const wheelScreen = document.querySelector("#wheelScreen");
const endScreen = document.querySelector("#endScreen");
const podiumScreen = document.querySelector("#podiumScreen");
const podiumSuspenseVideo = document.querySelector("#podiumSuspenseVideo");
const podiumFinalScreen = document.querySelector("#podiumFinalScreen");
const podiumPlaces = document.querySelector("#podiumPlaces");
const podiumFinishButton = document.querySelector("#podiumFinishButton");
const podiumRevealMusic = document.querySelector("#podiumRevealMusic");
const podiumFirstPlaceAudio = document.querySelector("#podiumFirstPlaceAudio");
const reviewScreen = document.querySelector("#reviewScreen");
const reviewStars = document.querySelector("#reviewStars");
const reviewComment = document.querySelector("#reviewComment");
const reviewThanks = document.querySelector("#reviewThanks");
const reviewSaveButton = document.querySelector("#reviewSaveButton");
const currentPlayerText = document.querySelector("#currentPlayer");
const timerText = document.querySelector("#timerText");
const cardTypeText = document.querySelector("#cardType");
const cardText = document.querySelector("#cardText");
const answersGrid = document.querySelector("#answersGrid");
const pieChart = document.querySelector("#pieChart");
const resultsLegend = document.querySelector("#resultsLegend");
const hostOnlyNote = document.querySelector("#hostOnlyNote");
const penaltyList = document.querySelector("#penaltyList");
const penaltyHostOnlyNote = document.querySelector("#penaltyHostOnlyNote");
const penaltySlotText = document.querySelector("#penaltySlotText");
const unanimousAnswerText = document.querySelector("#unanimousAnswerText");
const unanimousSlotText = document.querySelector("#unanimousSlotText");
const unanimousHostOnlyNote = document.querySelector("#unanimousHostOnlyNote");
const gentlemanDayIntroScreen = document.querySelector("#gentlemanDayIntroScreen");
const gentlemanDayIntroImage = document.querySelector("#gentlemanDayIntroImage");
const gentlemanDayIntroAudio = document.querySelector("#gentlemanDayIntroAudio");
const gentlemanDayDrawScreen = document.querySelector("#gentlemanDayDrawScreen");
const gentlemanDayQuestionScreen = document.querySelector("#gentlemanDayQuestionScreen");
const gentlemanDayResultScreen = document.querySelector("#gentlemanDayResultScreen");
const gentlemanDayPitFlameScreen = document.querySelector("#gentlemanDayPitFlameScreen");
const gentlemanDayPitFlameVideo = document.querySelector("#gentlemanDayPitFlameVideo");
const gentlemanDayPitVideoScreen = document.querySelector("#gentlemanDayPitVideoScreen");
const gentlemanDayPitVideo = document.querySelector("#gentlemanDayPitVideo");
const gentlemanDayPitQuestionScreen = document.querySelector("#gentlemanDayPitQuestionScreen");
const gentlemanDayPitResultScreen = document.querySelector("#gentlemanDayPitResultScreen");
const bonusIntroScreen = document.querySelector("#bonusIntroScreen");
const bonusIntroVideo = document.querySelector("#bonusIntroVideo");
const bonusIntroVideoBg = document.querySelector("#bonusIntroVideoBg");
const gentlemanDayRevealName = document.querySelector("#gentlemanDayRevealName");
const gentlemanDayPortrait = document.querySelector("#gentlemanDayPortrait");
const gentlemanDayPortraitPlaceholder = document.querySelector("#gentlemanDayPortraitPlaceholder");
const gentlemanDayName = document.querySelector("#gentlemanDayName");
const gentlemanDayProgress = document.querySelector("#gentlemanDayProgress");
const gentlemanDayQuestionText = document.querySelector("#gentlemanDayQuestionText");
const gentlemanDayAnswers = document.querySelector("#gentlemanDayAnswers");
const gentlemanDayAnswerTimerBar = document.querySelector("#gentlemanDayAnswerTimerBar");
const gentlemanDayQuestionHostOnlyNote = document.querySelector("#gentlemanDayQuestionHostOnlyNote");
const continueGentlemanDayButton = document.querySelector("#continueGentlemanDay");
const gentlemanDayCorrectAnswer = document.querySelector("#gentlemanDayCorrectAnswer");
const gentlemanDayUserAnswer = document.querySelector("#gentlemanDayUserAnswer");
const gentlemanDayResultFeedback = document.querySelector("#gentlemanDayResultFeedback");
const gentlemanDayResultHostOnlyNote = document.querySelector("#gentlemanDayResultHostOnlyNote");
const continueGentlemanDayResultButton = document.querySelector("#continueGentlemanDayResult");
const gentlemanDayPitPlayersText = document.querySelector("#gentlemanDayPitPlayersText");
const gentlemanDayPitQuestionText = document.querySelector("#gentlemanDayPitQuestionText");
const gentlemanDayPitAnswers = document.querySelector("#gentlemanDayPitAnswers");
const gentlemanDayPitLockedNote = document.querySelector("#gentlemanDayPitLockedNote");
const continueAfterGentlemanDayPitButton = document.querySelector("#continueAfterGentlemanDayPit");
const gentlemanDayPitResultList = document.querySelector("#gentlemanDayPitResultList");
const gentlemanDayPitResultLockedNote = document.querySelector("#gentlemanDayPitResultLockedNote");
const continueAfterGentlemanDayPitResultButton = document.querySelector("#continueAfterGentlemanDayPitResult");
const bonusPlayersList = document.querySelector("#bonusPlayersList");
const bonusQuestionWrap = document.querySelector("#bonusQuestionWrap");
const bonusCountdown = document.querySelector("#bonusCountdown");
const bonusQuestionText = document.querySelector("#bonusQuestionText");
const bonusOptions = document.querySelector("#bonusOptions");
const bonusLockedText = document.querySelector("#bonusLockedText");
const bonusHostOnlyNote = document.querySelector("#bonusHostOnlyNote");
const bonusWinnerText = document.querySelector("#bonusWinnerText");
const bonusDrinkersList = document.querySelector("#bonusDrinkersList");
const bonusResultHostOnlyNote = document.querySelector("#bonusResultHostOnlyNote");
const bonusFireworks = document.querySelector("#bonusFireworks");
const gentlementIntroVideo = document.querySelector("#gentlementIntroVideo");
const gentlementRoundLabel = document.querySelector("#gentlementRoundLabel");
const gentlementFirstPhotoAudio = document.querySelector("#gentlementFirstPhotoAudio");
const gentlementSecondPhotoAudio = document.querySelector("#gentlementSecondPhotoAudio");
const gentlementPhotoAudio = document.querySelector("#gentlementPhotoAudio");
const gentlementThirdPhotoAudio = document.querySelector("#gentlementThirdPhotoAudio");
const gentlementPhotoStage = document.querySelector("#gentlementPhotoStage");
const gentlementPhoto = document.querySelector("#gentlementPhoto");
const gentlementPhotoPlaceholder = document.querySelector("#gentlementPhotoPlaceholder");
const gentlementPhotoTimer = document.querySelector("#gentlementPhotoTimer");
const gentlementAnswerGrid = document.querySelector("#gentlementAnswerGrid");
const gentlementAnswerTimerBar = document.querySelector("#gentlementAnswerTimerBar");
const gentlementResultTitle = document.querySelector("#gentlementResultTitle");
const gentlementCorrectAnswer = document.querySelector("#gentlementCorrectAnswer");
const gentlementUserAnswer = document.querySelector("#gentlementUserAnswer");
const gentlementResultFeedback = document.querySelector("#gentlementResultFeedback");
const gentlementNextButton = document.querySelector("#gentlementNextButton");
const gentlementResultHostOnlyNote = document.querySelector("#gentlementResultHostOnlyNote");
const finalWheel = document.querySelector("#finalWheel");
const wheelStage = document.querySelector(".wheel-stage");
const wheelResult = document.querySelector("#wheelResult");
const wheelResultText = document.querySelector("#wheelResultText");
const secretChallengePanel = document.querySelector("#secretChallengePanel");
const secretChallengeSelect = document.querySelector("#secretChallengeSelect");
const revealSecretChallengeButton = document.querySelector("#revealSecretChallenge");
const secretChallengeText = document.querySelector("#secretChallengeText");
const secretChallengePublicText = document.querySelector("#secretChallengePublicText");
const rankingList = document.querySelector("#rankingList");
const gentlementSlot = document.querySelector("#gentlementSlot");
const gentlementSlotText = document.querySelector("#gentlementSlotText");
const gentlementNameBadge = document.querySelector("#gentlementNameBadge");

const introBackgrounds = Array.from(
  { length: 12 },
  (_, index) => `assets/intro-backgrounds/intro-bg-${String(index + 1).padStart(2, "0")}.jpeg`
);
const players = [];
const totalRounds = 10;
const gentlemanDayAfterRound = 2;
const gentlemanDayTotalQuestions = 2;
const gentlemanDayAnswerSeconds = 15;
const gentlemanDayPitQuestions = [
  {
    question: "Quante ragazze ha avuto il Pasqui?",
    options: ["0", "2", "4", "6"],
    answer: "6",
  },
  {
    question: "Quanti voio na camioneta ci sono stati?",
    options: ["0", "1", "2", "3"],
    answer: "3",
  },
];
const bonusAfterRound = 5;
const gentlementGameAfterRound = 8;
const gentlementGameTotalRounds = 3;
const gentlementPhotoSeconds = 15;
const gentlementAnswerSeconds = 15;
const chartColors = [
  "#ef4444",
  "#facc15",
  "#3b82f6",
  "#ec4899",
  "#f97316",
  "#22c55e",
  "#14b8a6",
  "#c99700",
  "#8b5cf6",
  "#06b6d4",
  "#84cc16",
  "#f43f5e",
];
const penaltyOptions = ["1 shot", "2 shot", "3 shot", "Drink a goccia"];
const finalWheelPenalties = [
  "Shot amaro 🌶️",
  "Hurricane shot",
  "Shot 🪖",
  "SFIDA",
  "Bicchiere acqua e amaro 🤮",
  "3 shot in serie",
];
const secretChallenges = [
  "Fai una foto a tutti gli altri partecipanti senza che se ne accorgino.",
  "Scambia il tuo drink/shot con quello di qualcun' altro senza che lui si accorga quando lo beve.",
  "Sputati sul drink davanti a tutti e bevilo senza che nessuno si faccia domande.",
];
const gentlementAnswerOptions = [
  "Elia",
  "Mido",
  "Peco",
  "Teste",
  "Plisky",
  "Obi",
  "Mancio",
  "Pescio",
  "Taka",
  "Tommi",
  "Bencio",
  "Atti",
  "Diego",
];
const gentlemanDayDrawOptions = gentlementAnswerOptions.filter(
  (name) => !["Bencio", "Obi", "Mancio", "Pescio", "Atti"].includes(name)
);
const gentlemanDayDefaultAnswers = ["Risposta A", "Risposta B", "Risposta C"];
const gentlemanDayPortraits = {
  Elia: "assets/gentleman-day-portraits/elia.jpg",
  Mido: "assets/gentleman-day-portraits/mido.jpg",
  Peco: "assets/gentleman-day-portraits/peco.jpg",
  Teste: "assets/gentleman-day-portraits/teste.png",
  Plisky: "assets/gentleman-day-portraits/plisky.png",
  Obi: "assets/gentleman-day-portraits/obi.png",
  Mancio: "assets/gentleman-day-portraits/mancio.png",
  Pescio: "assets/gentleman-day-portraits/pescio.png",
  Taka: "assets/gentleman-day-portraits/taka.png",
  Tommi: "assets/gentleman-day-portraits/tommi.png",
  Bencio: "assets/gentleman-day-portraits/bencio.png",
  Atti: "assets/gentleman-day-portraits/atti.png",
  Diego: "assets/gentleman-day-portraits/diego.png",
};
const gentlemanDayQuestions = gentlementAnswerOptions.reduce((questionsByName, name) => {
  questionsByName[name] = [
    {
      question: `Domanda 1 su ${name} da impostare.`,
      options: gentlemanDayDefaultAnswers,
      answer: "Risposta A",
    },
    {
      question: `Domanda 2 su ${name} da impostare.`,
      options: gentlemanDayDefaultAnswers,
      answer: "Risposta A",
    },
  ];

  return questionsByName;
}, {});

gentlemanDayQuestions.Elia = [
  {
    question: "Quanti esami ha dato nell'ultimo anno?",
    options: ["3", "2", "5"],
    answer: "2",
  },
  {
    question: "Da quanti mesi si è unito alla razza canina?",
    options: ["Quasi 10", "9", "Quasi 11"],
    answer: "Quasi 10",
  },
];

gentlemanDayQuestions.Elia = [
  {
    question: "Per cosa il Beciu si e fatto un bel giro in ambulanza?",
    options: ["Una caduta per il corso", "Una caduta in bici", "Una testata contro un vassoio"],
    answer: "Una caduta in bici",
  },
  {
    question: "A chi un giorno il Beciu disse la celebre frase \"Sei una persona speciale\"?",
    options: ["Mido", "Peco", "Bencio"],
    answer: "Bencio",
  },
  {
    question: "Con chi si frequentava durante l'Interrail?",
    options: ["Elisa", "Sofia Betti", "Era solo come un cane"],
    answer: "Elisa",
  },
  {
    question: "A chi offri una valanga di shot per il suo diciottesimo?",
    options: ["Peco", "Claudia Piccini", "A tutti"],
    answer: "A tutti",
  },
  {
    question: "Durante il primo Riccione dove lo ritrovarono i suoi amici?",
    options: ["Al molo", "Sulle rotaie", "Sdraiato in acqua"],
    answer: "Sulle rotaie",
  },
  {
    question: "Quale fu la parte piu dura per lui durante Malaga?",
    options: ["Alora", "Le 8 serate", "La puntura di medusa"],
    answer: "Alora",
  },
];

gentlemanDayQuestions.Mido = [
  {
    question: "A quale ragazza il Polpe ha detto NO, il sergente non vuole?",
    options: ["Elena Giovagnoli", "Sara Gentili", "Elena Celli"],
    answer: "Elena Giovagnoli",
  },
  {
    question: "Chi era il sergente per il Polpe?",
    options: ["Una stella", "Mattarella", "Papa Francesco"],
    answer: "Mattarella",
  },
  {
    question: "Qual e il gioco preferito del Polpe?",
    options: ["The Binding of Isaac", "Pokemon Nero", "Super Mario 64"],
    answer: "Super Mario 64",
  },
  {
    question: "\"Citte ma na bella figa che me la da tipo te\" completa la citazione:",
    options: ["Giulia", "Martina", "Sofi"],
    answer: "Martina",
  },
  {
    question: "Chi conio il termine Napoletano 13 come soprannome del nostro simpatico amico?",
    options: ["Alessio Chigurni", "Andrea Chigurni", "Filippo Antonelli"],
    answer: "Alessio Chigurni",
  },
  {
    question: "Chi e la zia piu bassa del Polpe?",
    options: ["Zia Maria", "Zia Gianna", "Zia Mimma"],
    answer: "Zia Mimma",
  },
];

gentlemanDayQuestions.Taka = [
  {
    question: "Per quanto tempo in totale il Taka e stato senza patente?",
    options: ["2 mesi", "3 mesi", "4 mesi"],
    answer: "3 mesi",
  },
  {
    question: "Qual e il Kinder preferito del Taka?",
    options: ["Kinder fetta al latte", "Kinder Bueno", "Kinder Cereali"],
    answer: "Kinder fetta al latte",
  },
  {
    question: "Qual e il videogioco a cui Taka ha giocato di piu?",
    options: ["Minecraft", "Fifa 18", "Rocket League"],
    answer: "Rocket League",
  },
  {
    question: "Qual e l'anime preferito del Taka?",
    options: ["Death Note", "Attack on Titan", "Fairy Tail"],
    answer: "Fairy Tail",
  },
  {
    question: "In che giorno si e diplomato il Taka?",
    options: ["28/06/2023", "29/06/2023", "30/06/2023"],
    answer: "29/06/2023",
  },
  {
    question: "Qual e stata la vincita maggiore del Taka in un solo giorno di lavoro alla Better?",
    options: ["500 euro", "300 euro", "700 euro"],
    answer: "500 euro",
  },
  {
    question: "Dove era il Taka quando ha iniziato a lanciare sedie e tavoli da quanto era ubriaco?",
    options: ["Borgo", "Malaga", "Perugia"],
    answer: "Borgo",
  },
];

gentlemanDayQuestions.Tommi = [
  {
    question: "Da cosa deriva il suo soprannome CELLY, detto anche Celofan?",
    options: [
      "Perche ha il cazzo cosi nuovo che e incelofanato",
      "Ci avvolge sostanze stupefacenti",
      "Lo usa dandosi 20 giri intorno alla vita per eliminare la buzza da camionista",
    ],
    answer: "Perche ha il cazzo cosi nuovo che e incelofanato",
  },
  {
    question: "Tommaso dopo un problema ha girato per un mese con il ghiaccio legato a quale parte del corpo?",
    options: ["Culo", "Cazzo", "Ginocchio"],
    answer: "Cazzo",
  },
  {
    question: "Come si chiama quella sottospecie di porchetta di sua madre?",
    options: ["Simona Buzzichini", "Simonetta Pellegrino", "Simonetta Pellegrini"],
    answer: "Simonetta Pellegrini",
  },
  {
    question: "Quale e stato il primo tatuaggio di CELLY?",
    options: ["Nakama", "AC Milan", "Il faro"],
    answer: "Il faro",
  },
  {
    question: "Quanti soldi Celly ha speso in puttane a Milano Marittima rimanendo comunque vergine?",
    options: ["265", "375", "190"],
    answer: "375",
  },
  {
    question: "Da chi il Tommi ha preso uno schiaffone per aver strappato la camicia?",
    options: ["Beciu", "Teste", "Bencio"],
    answer: "Bencio",
  },
];

gentlemanDayQuestions.Diego = [
  {
    question: "Come si chiama il suo celebre compagno 61enne di GTA?",
    options: ["Geremy", "Tyler", "Mike"],
    answer: "Tyler",
  },
  {
    question: "Quale celebre citazione Diego fece quando una puttanata virtuale stava facendo uno spettacolo su GTA?",
    options: ["Che bomba sis", "Cazzo fratello cazzo", "Minchia frate zio"],
    answer: "Cazzo fratello cazzo",
  },
  {
    question: "Con chi ha perso la verginita Diego?",
    options: ["Irene Morelli", "Asia Gaggiottini", "Giorgia Biscarini"],
    answer: "Irene Morelli",
  },
  {
    question: "Qual e la paura piu grande di Diego?",
    options: ["Il Pasqui", "I negri", "Che i gentelment non lo includino nella gamblata vincente"],
    answer: "Che i gentelment non lo includino nella gamblata vincente",
  },
];

gentlemanDayQuestions.Plisky = [
  {
    question: "Come il Mido lo ha salvato nel telefono?",
    options: ["Il foca", "Capo bianco", "Tunnel"],
    answer: "Tunnel",
  },
  {
    question: "Dove la schizzata piu grande fatta da ubriaco?",
    options: ["Al Chieli", "A PF", "Parcheggio del F1"],
    answer: "Al Chieli",
  },
  {
    question: "Dove il famoso bocchino gratinato?",
    options: ["A casa sua", "A Riccione", "A Brighton"],
    answer: "A Brighton",
  },
];

gentlemanDayQuestions.Teste = [
  {
    question: "In che anno di liceo il Teste ha studiato a Perugia?",
    options: ["4°", "2°", "3°"],
    answer: "3°",
  },
  {
    question: "Con chi ha scopato in un bosco?",
    options: ["Giulia Orcese", "Ragazza di Riccione", "Alessia"],
    answer: "Giulia Orcese",
  },
];

gentlemanDayQuestions.Teste = [
  {
    question: "Dov'e stato il Taste in Erasmus?",
    options: ["Madrid", "Siviglia", "Valencia"],
    answer: "Madrid",
  },
  {
    question: "Quale infruttuosa storia ha usato il Taste per conquistare una ragazza?",
    options: ["Uno squalo e un pirata", "Un'ape e una lattina", "Un leone e una zebra"],
    answer: "Un'ape e una lattina",
  },
  {
    question: "In che anno di superiori il Taste e andato a studiare a Perugia?",
    options: ["2°", "3°", "4°"],
    answer: "3°",
  },
  {
    question: "Quando e il compleanno del Taste?",
    options: ["3 gen", "5 gen", "6 gen"],
    answer: "5 gen",
  },
  {
    question: "In quale periodo storico il Tastor ha avuto la pelata?",
    options: ["Fine medie", "Periodo covid", "Primo anno di universita"],
    answer: "Periodo covid",
  },
  {
    question: "Cosa odia il Taste piu di ogni altra cosa?",
    options: ["Il Pasqui", "Perdere un qualunque gioco", "Dover andare al green/formula"],
    answer: "Perdere un qualunque gioco",
  },
  {
    question: "La paura piu grande del Taste?",
    options: ["Analisi del sangue e trasfusioni", "Altezza", "Mare aperto"],
    answer: "Analisi del sangue e trasfusioni",
  },
  {
    question: "Qual e il punto debole del Taste?",
    options: ["L'alcol", "Gli esami universitari", "La figa"],
    answer: "La figa",
  },
  {
    question: "Cosa costo al Tastor una multa in Erasmus?",
    options: ["Bere alcol in un luogo pubblico", "Fumare erba", "Girare in costume al di fuori della spiaggia"],
    answer: "Bere alcol in un luogo pubblico",
  },
  {
    question: "Il Taste ha mai bocciato l'esame di guida?",
    options: ["Si, il pratico", "Si, il teorico", "No"],
    answer: "Si, il teorico",
  },
];

gentlemanDayQuestions.Peco = [
  {
    question: "Ai tempi del sacro a cosa era associato?",
    options: ["Una locomotiva", "Un battello navale", "Un jet da caccia"],
    answer: "Una locomotiva",
  },
  {
    question: "Quale soprannome e stato spammato nei commenti sotto il post del Peco nel 2020?",
    options: ["Budino", "Eggy bocachuch", "Buffalo grill"],
    answer: "Eggy bocachuch",
  },
  {
    question: "In quale parco e avvenuta la celebre citazione SEGHINO AL PARCHINO con il Peco e Tommi?",
    options: ["ASL", "PDP", "CAMPA"],
    answer: "ASL",
  },
  {
    question: "Quale e stata la risposta di Peters alla Yasmine che diceva sono tutta bagnata?",
    options: ["Andiamo in casa", "Pure io", "Ah ok"],
    answer: "Ah ok",
  },
  {
    question: "Quale e stato il primo limone di Peters?",
    options: ["Lucrezia", "In disco con sconosciuta", "Asia"],
    answer: "Lucrezia",
  },
  {
    question: "Qual e stato il primo preliminare di Peters fatto ad una tipa?",
    options: ["Succhiata di pocce", "Ditalino", "Leccare fessa"],
    answer: "Succhiata di pocce",
  },
  {
    question: "Di che marca sono i NUOVISSIMI pantaloni tuta neri di Peters presi nel lontano 2019 e indossati tutt'oggi?",
    options: ["Palm Angels", "Burlon", "Gaelle"],
    answer: "Gaelle",
  },
];
const gentlementPhotoPool = [
  { src: "assets/gentlement-photos/tommi-01.png", answer: "Tommi" },
  { src: "assets/gentlement-photos/tommi-02.png", answer: "Tommi" },
  { src: "assets/gentlement-photos/tommi-03.jpeg", answer: "Tommi" },
  { src: "assets/gentlement-photos/obi-01.png", answer: "Obi" },
  { src: "assets/gentlement-photos/obi-02.png", answer: "Obi" },
  { src: "assets/gentlement-photos/teste-01.png", answer: "Teste" },
  { src: "assets/gentlement-photos/teste-02.png", answer: "Teste" },
  { src: "assets/gentlement-photos/peco-01.png", answer: "Peco" },
  { src: "assets/gentlement-photos/peco-02.png", answer: "Peco" },
  { src: "assets/gentlement-photos/peco-03.jpeg", answer: "Peco" },
  { src: "assets/gentlement-photos/elia-01.png", answer: "Elia" },
  { src: "assets/gentlement-photos/elia-02.png", answer: "Elia" },
  { src: "assets/gentlement-photos/elia-03.jpeg", answer: "Elia" },
  { src: "assets/gentlement-photos/mido-01.png", answer: "Mido" },
  { src: "assets/gentlement-photos/mido-02.png", answer: "Mido" },
  { src: "assets/gentlement-photos/plisky-01.png", answer: "Plisky" },
  { src: "assets/gentlement-photos/plisky-02.png", answer: "Plisky" },
  { src: "assets/gentlement-photos/bencio-01.png", answer: "Bencio" },
  { src: "assets/gentlement-photos/bencio-02.png", answer: "Bencio" },
  { src: "assets/gentlement-photos/taka-01.png", answer: "Taka" },
  { src: "assets/gentlement-photos/taka-02.png", answer: "Taka" },
  { src: "assets/gentlement-photos/taka-03.jpeg", answer: "Taka" },
  { src: "assets/gentlement-photos/mancio-01.jpeg", answer: "Mancio" },
  { src: "assets/gentlement-photos/mancio-02.jpeg", answer: "Mancio" },
  { src: "assets/gentlement-photos/diego-01.jpeg", answer: "Diego" },
  { src: "assets/gentlement-photos/pescio-01.jpeg", answer: "Pescio" },
];
const lobbySeatPositions = [
  { x: 50, y: 84 },
  { x: 19, y: 73 },
  { x: 50, y: 73 },
  { x: 81, y: 73 },
  { x: 25, y: 61 },
  { x: 74, y: 61 },
  { x: 50, y: 52 },
  { x: 31, y: 52 },
  { x: 69, y: 52 },
  { x: 33, y: 43 },
  { x: 50, y: 43 },
  { x: 67, y: 43 },
];
const bonusQuestions = [
  {
    question: "Qual e la capitale del Canada?",
    options: ["Ottawa", "Toronto", "Vancouver"],
    answer: "Ottawa",
  },
  {
    question: "Quale fiume attraversa la citta di Budapest?",
    options: ["Danubio", "Reno", "Moldava"],
    answer: "Danubio",
  },
  {
    question: "In quale continente si trova il deserto del Kalahari?",
    options: ["Africa", "Asia", "Oceania"],
    answer: "Africa",
  },
  {
    question: "Qual e lo Stato piu grande del mondo per superficie?",
    options: ["Russia", "Canada", "Cina"],
    answer: "Russia",
  },
  {
    question: "Quale catena montuosa separa Francia e Spagna?",
    options: ["Pirenei", "Alpi", "Carpazi"],
    answer: "Pirenei",
  },
  {
    question: "Qual e la capitale della Nuova Zelanda?",
    options: ["Wellington", "Auckland", "Christchurch"],
    answer: "Wellington",
  },
  {
    question: "In quale Paese si trova la citta di Petra?",
    options: ["Giordania", "Egitto", "Israele"],
    answer: "Giordania",
  },
  {
    question: "Quale mare bagna sia l'Italia sia la Grecia?",
    options: ["Mar Ionio", "Mar Baltico", "Mar Rosso"],
    answer: "Mar Ionio",
  },
  {
    question: "Qual e l'isola piu grande del Mediterraneo?",
    options: ["Sicilia", "Sardegna", "Cipro"],
    answer: "Sicilia",
  },
  {
    question: "Quale citta e attraversata dal fiume Tamigi?",
    options: ["Londra", "Parigi", "Dublino"],
    answer: "Londra",
  },
  {
    question: "Qual e la montagna piu alta del Giappone?",
    options: ["Monte Fuji", "Monte Kita", "Monte Aso"],
    answer: "Monte Fuji",
  },
  {
    question: "In quale Paese si trova il lago di Bled?",
    options: ["Slovenia", "Croazia", "Austria"],
    answer: "Slovenia",
  },
  {
    question: "Qual e la capitale del Marocco?",
    options: ["Rabat", "Casablanca", "Marrakech"],
    answer: "Rabat",
  },
  {
    question: "Quale stretto separa la Spagna dal Marocco?",
    options: ["Stretto di Gibilterra", "Stretto di Messina", "Stretto del Bosforo"],
    answer: "Stretto di Gibilterra",
  },
  {
    question: "Qual e il Paese sudamericano piu esteso?",
    options: ["Brasile", "Argentina", "Peru"],
    answer: "Brasile",
  },
  {
    question: "Quale elemento chimico ha simbolo Fe?",
    options: ["Ferro", "Fluoro", "Francio"],
    answer: "Ferro",
  },
  {
    question: "Quante ossa possiede normalmente il corpo umano adulto?",
    options: ["206", "196", "216"],
    answer: "206",
  },
  {
    question: "Qual e l'organo piu esteso del corpo umano?",
    options: ["Pelle", "Fegato", "Polmoni"],
    answer: "Pelle",
  },
  {
    question: "Come si chiama il processo con cui le piante producono nutrimento grazie alla luce?",
    options: ["Fotosintesi", "Respirazione", "Fermentazione"],
    answer: "Fotosintesi",
  },
  {
    question: "Qual e il gas piu presente nell'atmosfera terrestre?",
    options: ["Azoto", "Ossigeno", "Anidride carbonica"],
    answer: "Azoto",
  },
  {
    question: "Quale pianeta e famoso per i suoi anelli?",
    options: ["Saturno", "Marte", "Venere"],
    answer: "Saturno",
  },
  {
    question: "Qual e l'unita di misura della corrente elettrica?",
    options: ["Ampere", "Volt", "Watt"],
    answer: "Ampere",
  },
  {
    question: "Quale parte della cellula contiene il materiale genetico?",
    options: ["Nucleo", "Mitocondrio", "Citoplasma"],
    answer: "Nucleo",
  },
  {
    question: "Qual e l'animale terrestre piu veloce?",
    options: ["Ghepardo", "Leone", "Antilope"],
    answer: "Ghepardo",
  },
  {
    question: "Come si chiama la scala utilizzata per misurare la durezza dei minerali?",
    options: ["Scala di Mohs", "Scala Richter", "Scala Beaufort"],
    answer: "Scala di Mohs",
  },
  {
    question: "Quale vitamina viene prodotta principalmente grazie all'esposizione al Sole?",
    options: ["Vitamina D", "Vitamina C", "Vitamina B12"],
    answer: "Vitamina D",
  },
  {
    question: "Qual e il metallo liquido a temperatura ambiente?",
    options: ["Mercurio", "Piombo", "Rame"],
    answer: "Mercurio",
  },
  {
    question: "Come si chiama la forza che attrae gli oggetti verso il centro della Terra?",
    options: ["Gravita", "Magnetismo", "Attrito"],
    answer: "Gravita",
  },
  {
    question: "Quale organo del corpo umano produce l'insulina?",
    options: ["Pancreas", "Fegato", "Rene"],
    answer: "Pancreas",
  },
  {
    question: "Chi scrisse I promessi sposi?",
    options: ["Alessandro Manzoni", "Giacomo Leopardi", "Giovanni Verga"],
    answer: "Alessandro Manzoni",
  },
  {
    question: "Quale artista dipinse Guernica?",
    options: ["Pablo Picasso", "Salvador Dali", "Joan Miro"],
    answer: "Pablo Picasso",
  },
  {
    question: "Chi e l'autore della Divina Commedia?",
    options: ["Dante Alighieri", "Francesco Petrarca", "Boccaccio"],
    answer: "Dante Alighieri",
  },
  {
    question: "Quale scrittore creo il personaggio di Sherlock Holmes?",
    options: ["Arthur Conan Doyle", "Agatha Christie", "Edgar Allan Poe"],
    answer: "Arthur Conan Doyle",
  },
  {
    question: "In quale museo e conservata la Gioconda?",
    options: ["Louvre", "Prado", "Uffizi"],
    answer: "Louvre",
  },
  {
    question: "Chi scrisse Il piccolo principe?",
    options: ["Antoine de Saint-Exupery", "Jules Verne", "Victor Hugo"],
    answer: "Antoine de Saint-Exupery",
  },
  {
    question: "A quale corrente artistica apparteneva Claude Monet?",
    options: ["Impressionismo", "Cubismo", "Futurismo"],
    answer: "Impressionismo",
  },
  {
    question: "Chi scolpi il celebre David conservato alla Galleria dell'Accademia di Firenze?",
    options: ["Michelangelo", "Donatello", "Bernini"],
    answer: "Michelangelo",
  },
  {
    question: "Quale autore scrisse 1984?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury"],
    answer: "George Orwell",
  },
  {
    question: "Come si chiama il protagonista dell'Odissea?",
    options: ["Ulisse", "Achille", "Enea"],
    answer: "Ulisse",
  },
  {
    question: "Chi scrisse Romeo e Giulietta?",
    options: ["William Shakespeare", "Charles Dickens", "Oscar Wilde"],
    answer: "William Shakespeare",
  },
  {
    question: "Quale pittore olandese realizzo La notte stellata?",
    options: ["Vincent van Gogh", "Rembrandt", "Vermeer"],
    answer: "Vincent van Gogh",
  },
  {
    question: "Chi scrisse il romanzo Il nome della rosa?",
    options: ["Umberto Eco", "Italo Calvino", "Primo Levi"],
    answer: "Umberto Eco",
  },
  {
    question: "Quale personaggio letterario combatte contro i mulini a vento?",
    options: ["Don Chisciotte", "D'Artagnan", "Robinson Crusoe"],
    answer: "Don Chisciotte",
  },
  {
    question: "Quale gruppo musicale pubblico l'album Abbey Road?",
    options: ["The Beatles", "Queen", "Pink Floyd"],
    answer: "The Beatles",
  },
  {
    question: "Chi interpreto il personaggio di Jack Sparrow?",
    options: ["Johnny Depp", "Orlando Bloom", "Brad Pitt"],
    answer: "Johnny Depp",
  },
  {
    question: "Quale compositore scrisse la Nona sinfonia?",
    options: ["Beethoven", "Mozart", "Bach"],
    answer: "Beethoven",
  },
  {
    question: "In quale saga cinematografica compare il personaggio di Gandalf?",
    options: ["Il Signore degli Anelli", "Harry Potter", "Star Wars"],
    answer: "Il Signore degli Anelli",
  },
  {
    question: "Quale cantante e soprannominato The King of Pop?",
    options: ["Michael Jackson", "Elvis Presley", "Prince"],
    answer: "Michael Jackson",
  },
  {
    question: "Chi ha diretto Pulp Fiction?",
    options: ["Quentin Tarantino", "Martin Scorsese", "Steven Spielberg"],
    answer: "Quentin Tarantino",
  },
  {
    question: "Quale strumento musicale possiede normalmente 88 tasti?",
    options: ["Pianoforte", "Fisarmonica", "Organo"],
    answer: "Pianoforte",
  },
  {
    question: "In quale film compare il personaggio di Forrest Gump?",
    options: ["Forrest Gump", "Cast Away", "The Terminal"],
    answer: "Forrest Gump",
  },
  {
    question: "Quale gruppo cantava Bohemian Rhapsody?",
    options: ["Queen", "The Rolling Stones", "Led Zeppelin"],
    answer: "Queen",
  },
  {
    question: "Come si chiama il regno in cui e ambientato gran parte del film Frozen?",
    options: ["Arendelle", "Narnia", "Genovia"],
    answer: "Arendelle",
  },
  {
    question: "Quale attore interpreto il Joker nel film Il cavaliere oscuro?",
    options: ["Heath Ledger", "Jared Leto", "Joaquin Phoenix"],
    answer: "Heath Ledger",
  },
  {
    question: "Chi compose Le quattro stagioni?",
    options: ["Antonio Vivaldi", "Giuseppe Verdi", "Giacomo Puccini"],
    answer: "Antonio Vivaldi",
  },
  {
    question: "Quale attrice interpreto Hermione Granger nei film di Harry Potter?",
    options: ["Emma Watson", "Emma Stone", "Keira Knightley"],
    answer: "Emma Watson",
  },
  {
    question: "Come si chiama la celebre statuetta assegnata nel principale premio cinematografico statunitense?",
    options: ["Oscar", "Grammy", "Emmy"],
    answer: "Oscar",
  },
  {
    question: "In quale sport si utilizza il termine birdie?",
    options: ["Golf", "Tennis", "Baseball"],
    answer: "Golf",
  },
  {
    question: "Quanti minuti dura normalmente una partita di calcio, escluso il recupero?",
    options: ["90", "80", "100"],
    answer: "90",
  },
  {
    question: "Quale Paese ha inventato il judo?",
    options: ["Giappone", "Cina", "Corea del Sud"],
    answer: "Giappone",
  },
  {
    question: "In quale citta si svolsero le prime Olimpiadi moderne del 1896?",
    options: ["Atene", "Roma", "Parigi"],
    answer: "Atene",
  },
  {
    question: "Quanti punti vale un tiro libero nel basket?",
    options: ["1", "2", "3"],
    answer: "1",
  },
  {
    question: "In quale sport e famoso il torneo di Wimbledon?",
    options: ["Tennis", "Rugby", "Cricket"],
    answer: "Tennis",
  },
  {
    question: "Quale pilota italiano e soprannominato Il Dottore?",
    options: ["Valentino Rossi", "Giacomo Agostini", "Loris Capirossi"],
    answer: "Valentino Rossi",
  },
  {
    question: "Quale nazionale ha vinto i Mondiali di calcio del 2006?",
    options: ["Italia", "Francia", "Germania"],
    answer: "Italia",
  },
  {
    question: "Quanti cerchi sono presenti nel simbolo olimpico?",
    options: ["5", "4", "6"],
    answer: "5",
  },
  {
    question: "In quale sport si assegna la maglia rosa?",
    options: ["Ciclismo", "Atletica", "Sci"],
    answer: "Ciclismo",
  },
  {
    question: "Come si chiama il trofeo assegnato ai vincitori del campionato NBA?",
    options: ["Larry O'Brien Trophy", "Stanley Cup", "Vince Lombardi Trophy"],
    answer: "Larry O'Brien Trophy",
  },
  {
    question: "Qual e la distanza ufficiale di una maratona?",
    options: ["42,195 km", "40 km", "45 km"],
    answer: "42,195 km",
  },
  {
    question: "In quale sport si utilizzano fioretto, spada e sciabola?",
    options: ["Scherma", "Tiro con l'arco", "Pugilato"],
    answer: "Scherma",
  },
  {
    question: "Quale competizione automobilistica si disputa tradizionalmente sul circuito di Monte Carlo?",
    options: ["Gran Premio di Monaco", "24 Ore di Le Mans", "Rally Dakar"],
    answer: "Gran Premio di Monaco",
  },
  {
    question: "Quale moneta viene utilizzata in Giappone?",
    options: ["Yen", "Won", "Yuan"],
    answer: "Yen",
  },
  {
    question: "Quanti lati possiede un dodecagono?",
    options: ["12", "10", "20"],
    answer: "12",
  },
  {
    question: "Qual e il simbolo chimico dell'oro?",
    options: ["Au", "Ag", "Or"],
    answer: "Au",
  },
  {
    question: "Come si chiama lo strumento utilizzato per misurare la pressione atmosferica?",
    options: ["Barometro", "Termometro", "Anemometro"],
    answer: "Barometro",
  },
  {
    question: "Quale animale compare nel logo del WWF?",
    options: ["Panda", "Tigre", "Orso polare"],
    answer: "Panda",
  },
  {
    question: "Quanti giorni ha un anno bisestile?",
    options: ["366", "365", "367"],
    answer: "366",
  },
  {
    question: "Qual e il nome della paura degli spazi chiusi?",
    options: ["Claustrofobia", "Agorafobia", "Acrofobia"],
    answer: "Claustrofobia",
  },
  {
    question: "Quale lingua ufficiale si parla principalmente in Brasile?",
    options: ["Portoghese", "Spagnolo", "Francese"],
    answer: "Portoghese",
  },
  {
    question: "Qual e il numero romano corrispondente a 50?",
    options: ["L", "C", "X"],
    answer: "L",
  },
];
let currentRound = 1;
let selectedMode = "omini";
let reviewRating = 0;
let selectedRoomAction = "join";
let currentRoomCode = "";
let currentUserName = "";
let isHost = false;
let currentPlayerId = sessionStorage.getItem("gentlementPlayerId") || "";
let currentScreenName = "intro";
let currentCard = { type: "Sfida", text: "" };
let roundEndsAt = 0;
let multiplayerPollId = null;
let multiplayerEvents = null;
let multiplayerRoomVersion = 0;
let isApplyingRemoteState = false;
let audioUnlocked = false;
let lastSharedScreenName = "";
let lobbySeatAssignments = {};
let bonusPlayed = false;
let gentlemanDayPlayed = false;
let selectedGentlemanDay = "";
let gentlemanDayQuestionIndex = 0;
let selectedGentlemanDayQuestions = [];
let gentlemanDayAnswersByPlayer = {};
let gentlemanDayPitPlayers = [];
let gentlemanDayPitAnswersByPlayer = {};
let currentGentlemanDayPitQuestion = null;
let scoredGentlemanDayMistakes = {};
let gentlemanDayAnswerTimerId = null;
let gentlementGamePlayed = false;
let gentlementGameRound = 0;
let gentlementPhotoTimerId = null;
let gentlementAnswerTimerId = null;
let gentlementQuizAudioContext = null;
let gentlementQuizMusicIntervalId = null;
let gentlementFinalTickIntervalId = null;
let gentlementQuizMasterGain = null;
let currentGentlementPhoto = null;
let currentGentlementAnswer = "";
let gentlementAnswersByPlayer = {};
let usedGentlementPhotoIndexes = [];
let scoredGentlementMistakes = {};
let timerIntervalId = null;
let remainingSeconds = 90;
let responseCounts = {};
let votesByPlayer = {};
let currentPenalty = "";
let penaltyCounts = {};
let shotCounts = {};
let drinkCounts = {};
let correctCounts = {};
let currentBonusQuestion = null;
let currentBonusPlayers = [];
let bonusQuestionRevealed = false;
let bonusWinner = "";
let bonusAnswerLockedUntil = {};
let bonusQuestionRevealedAt = 0;
let bonusReactionTimes = {};
let bonusCorrectPlayers = {};
let bonusResultTimeoutId = null;
let bonusResultCountdownIntervalId = null;
let bonusRevealTimeoutId = null;
let bonusCountdownIntervalId = null;
let bonusPenaltyScored = false;
let roundScored = false;
let penaltyScored = false;
let wheelRotation = 0;
let gentlementExtracted = false;
let currentGentlement = "";
let currentWheelPenalty = "";
let extractedGentlements = [];
let currentChallengePlayer = "";
let drumAudioContext = null;
let drumSoundIntervalId = null;
let nextDrumIsAccent = false;
let gentlemanDayIntroAudioContext = null;
let gentlemanDayIntroMusicIntervalId = null;
let gentlemanDayIntroMasterGain = null;
let gentlemanDayIntroBeatStep = 0;
let gentlemanDayIntroTimeoutId = null;
let gentlemanDayDrawTimeoutId = null;
let gentlemanDayPitFlameFallbackId = null;
let gentlemanDayPitVideoFallbackId = null;
let bonusIntroFallbackId = null;
let gentlementIntroFallbackId = null;
let podiumSuspenseFallbackId = null;
let podiumTimeoutId = null;
let podiumRevealTimeoutIds = [];
let usedMainQuestionIndexesByMode = { omini: [], completa: [] };
let usedBonusQuestionIndexes = [];
let usedGentlemanDayPitQuestionIndexes = [];

const baseCards = [
  "Chi e il peggior speaker motivazionale?",
  "Chi potrebbe urlare il proprio nome durante un orgasmo?",
  "Chi potrebbe essere arrestato per atti osceni in luogo pubblico?",
  "Chi ha la collezione di porno piu ampia?",
  "Chi e probabile che si faccia fare una pioggia dorata?",
  "Chi ucciderebbe la propria partner per incassare l'assicurazione?",
  "Chi si tatuerebbe una lacrima sul viso?",
  "Se fossimo escort chi si farebbe pagare di piu?",
  "Quale tra i partecipanti avete giudicato male appena conosciuto?",
  "Chi verrebbe sicuramente perquisito ai controlli in aeroporto?",
  "Chi potrebbe diventare vegano perche glielo ha imposto la fidanzata?",
  "Chi chiameresti se ti servisse aiuto per seppellire un cadavere?",
  "Se devi cambiare vita con qualcuno per 1 anno, chi non sceglieresti?",
  "Chi al 99% girera un film porno?",
  "Chi potrebbe finire rinchiuso in un manicomio?",
  "Se fosse una gara, chi resisterebbe piu a lungo senza masturbarsi?",
  "Chi dura di meno, per voi?",
  "Chi e piu propenso ad avere una doppia vita che nessuno del gruppo conosce?",
  "Chi e piu propenso a mentire sul numero di persone con cui e stato?",
  "Chi e piu propenso a sparire dal gruppo quando c'e da pagare?",
  "Chi e piu propenso a dire \"arrivo tra 5 minuti\" mentre e ancora a casa?",
  "Chi e piu propenso a finire la serata senza ricordarsi come e tornato a casa?",
  "Chi e piu propenso a sopravvivere meno di un giorno in un reality show?",
  "Chi e piu propenso a innamorarsi dopo due messaggi?",
  "A chi potrebbe capitare di svegliarsi accanto a qualcuno senza ricordarne il nome?",
  "Chi manderebbe foto intime dopo pochissimi messaggi?",
  "Chi e piu probabile che le prenda dal Pasqui?",
  "Chi e che si farebbe arrestare per coprire qualcun altro?",
  "Chi e piu probabile che farebbe un threesome con Diego e una ragazza?",
  "Chi e che parteciperebbe ad un gioco di ruolo vestito da tirannosauro e lei vestita da meteorite?",
  "Chi e che parteciperebbe ad un gioco di ruolo vestito da Pikachu e lei da Pokeball?",
  "Chi, tra i gentelment, non riuscirebbe a tornare a casa se si perdesse in un viaggio all'estero?",
  "Quale gentelment sarebbe il migliore nel gestire un traffico illegale?",
  "Chi riuscirebbe, se avesse un abbonamento a vita, a mandare in fallimento un sushi all you can eat?",
  "Quale gentelment sarebbe il miglior stripper?",
  "Qual e il gentelment meno affidabile quando si tratta di portare a termine un compito?",
  "Quale gentelment farebbe piu danni se messo a fare il capo di stato?",
  "Quale gentelment sarebbe in grado di vivere piu di una settimana con solo 5 euro?",
  "Qual e il gentelment che si e scopato/limonato la ragazza piu brutta?",
  "In una situazione in cui ci si e persi su un'isola africana lontana dalla civilta occidentale, quale gentelment si adatterebbe alla perfezione a loro?",
  "Nel caso di una guerra, quale gentelment verrebbe mandato per primo al fronte?",
  "Nel caso di una guerra, quale gentelment verrebbe scartato e mandato a fare la crocerossina?",
  "Chi e piu probabile che vada a trans?",
  "Chi diventera omosessuale?",
  "Chi ha tratti cavernicoli?",
  "Quale gentelment potrebbe diventare buddhista?",
].map((text) => ({ type: "Base", text, drinks: 1 }));

const extraCards = [
  { type: "Extra", text: "Domanda aggiuntiva per la modalita completa.", drinks: 2 },
  { type: "Extra", text: "Domanda aggiuntiva per la modalita completa.", drinks: 2 },
  { type: "Extra", text: "Domanda aggiuntiva per la modalita completa.", drinks: 2 },
  { type: "Extra", text: "Domanda aggiuntiva per la modalita completa.", drinks: 2 },
];

const cards = {
  omini: baseCards,
  completa: [...baseCards, ...extraCards],
};

const modeDescriptions = {
  omini: "Solo le domande basi.",
  completa: "Giocabile nel prossimo aggiornamento.",
};

function getRandomUnusedIndex(items, usedIndexes) {
  if (!items.length) return -1;

  const availableIndexes = items
    .map((_, index) => index)
    .filter((index) => !usedIndexes.includes(index));
  const poolIndexes = availableIndexes.length ? availableIndexes : items.map((_, index) => index);
  const randomIndex = poolIndexes[Math.floor(Math.random() * poolIndexes.length)];

  if (!usedIndexes.includes(randomIndex)) {
    usedIndexes.push(randomIndex);
  }

  return randomIndex;
}

function getRandomUnusedItem(items, usedIndexes) {
  const randomIndex = getRandomUnusedIndex(items, usedIndexes);
  return randomIndex >= 0 ? items[randomIndex] : null;
}

function resetUsedQuestionPools() {
  usedMainQuestionIndexesByMode = { omini: [], completa: [] };
  usedBonusQuestionIndexes = [];
  usedGentlemanDayPitQuestionIndexes = [];
}

function setRandomIntroBackground() {
  if (!introScreen) return;

  const randomIndex = Math.floor(Math.random() * introBackgrounds.length);
  introScreen.style.setProperty("--intro-background-image", `url("${introBackgrounds[randomIndex]}")`);
}

function isOnlineMultiplayer() {
  return window.location.protocol === "http:" || window.location.protocol === "https:";
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error || "Errore di rete.");
  }

  return payload;
}

function recomputeResponseCounts() {
  responseCounts = {};
  Object.values(votesByPlayer).forEach((answer) => {
    if (!answer) return;
    responseCounts[answer] = (responseCounts[answer] || 0) + 1;
  });
}

function getSharedState(extraState = {}) {
  return {
    screen: currentScreenName,
    players: [...players],
    selectedMode,
    currentRound,
    currentCard,
    roundEndsAt,
    responseCounts,
    votesByPlayer,
    currentPenalty,
    penaltyCounts,
    shotCounts,
    drinkCounts,
    correctCounts,
    bonusPlayed,
    gentlemanDayPlayed,
    selectedGentlemanDay,
    gentlemanDayQuestionIndex,
    selectedGentlemanDayQuestions,
    gentlemanDayAnswersByPlayer,
    gentlemanDayPitPlayers,
    gentlemanDayPitAnswersByPlayer,
    currentGentlemanDayPitQuestion,
    scoredGentlemanDayMistakes,
    gentlementGamePlayed,
    gentlementGameRound,
    currentGentlementPhoto,
    currentGentlementAnswer,
    gentlementAnswersByPlayer,
    usedGentlementPhotoIndexes,
    scoredGentlementMistakes,
    currentBonusQuestion,
    currentBonusPlayers,
    bonusQuestionRevealed,
    bonusWinner,
    bonusAnswerLockedUntil,
    bonusQuestionRevealedAt,
    bonusReactionTimes,
    bonusCorrectPlayers,
    bonusPenaltyScored,
    roundScored,
    penaltyScored,
    wheelRotation,
    gentlementExtracted,
    currentGentlement,
    currentWheelPenalty,
    extractedGentlements,
    currentChallengePlayer,
    usedMainQuestionIndexesByMode,
    usedBonusQuestionIndexes,
    usedGentlemanDayPitQuestionIndexes,
    lobbySeatAssignments,
    ...extraState,
  };
}

function applyObjectValue(targetName, value) {
  if (typeof value === "undefined") return;

  switch (targetName) {
    case "responseCounts":
      responseCounts = value || {};
      break;
    case "votesByPlayer":
      votesByPlayer = value || {};
      break;
    case "penaltyCounts":
      penaltyCounts = value || {};
      break;
    case "shotCounts":
      shotCounts = value || {};
      break;
    case "drinkCounts":
      drinkCounts = value || {};
      break;
    case "correctCounts":
      correctCounts = value || {};
      break;
    default:
      break;
  }
}

function playVisibleMedia(media, { reset = false, volume = null } = {}) {
  if (!media) return;
  if (typeof volume === "number") media.volume = volume;
  if (reset) media.currentTime = 0;
  if (media.paused || media.ended) {
    media.play().catch(() => {});
  }
}

function safelyPlayMedia(media, { reset = false, volume = null } = {}) {
  if (!media) return Promise.resolve(false);
  if (typeof volume === "number") media.volume = volume;
  if (reset) media.currentTime = 0;
  return media.play()
    .then(() => true)
    .catch(() => false);
}

function scheduleHostVideoFallback(video, screenName, callback, fallbackMs, fallbackSetter) {
  if (!isHost) return;
  const durationMs = Number.isFinite(video?.duration) && video.duration > 0
    ? Math.ceil(video.duration * 1000) + 800
    : fallbackMs;
  const timeoutId = setTimeout(() => {
    if (isHost && currentScreenName === screenName) callback();
  }, durationMs);
  fallbackSetter(timeoutId);
}

function installHostVideoSafety(video, screenName, callback, fallbackMs, fallbackSetter) {
  if (!video) return;
  const recover = () => {
    if (!isHost || currentScreenName !== screenName) return;
    setTimeout(() => {
      if (isHost && currentScreenName === screenName) callback();
    }, 900);
  };

  ["error", "abort"].forEach((eventName) => {
    video.addEventListener(eventName, recover);
  });

  video.addEventListener("stalled", () => {
    if (!isHost || currentScreenName !== screenName) return;
    setTimeout(() => {
      if (isHost && currentScreenName === screenName && !video.ended) callback();
    }, Math.min(fallbackMs, 3500));
  });
}

function scheduleFixedHostAdvance(screenName, callback, fallbackMs, fallbackSetter) {
  if (!isHost) return;
  const timeoutId = setTimeout(() => {
    if (isHost && currentScreenName === screenName) callback();
  }, fallbackMs);
  fallbackSetter(timeoutId);
}

function renderGentlementPhotoScreen() {
  gentlementRoundLabel.textContent = `Foto ${gentlementGameRound}/${gentlementGameTotalRounds}`;
  gentlementPhotoTimer.textContent = gentlementPhotoSeconds;

  if (currentGentlementPhoto?.src) {
    gentlementPhoto.src = currentGentlementPhoto.src;
    gentlementPhoto.classList.remove("hidden");
    gentlementPhotoPlaceholder.classList.add("hidden");
  } else {
    gentlementPhoto.removeAttribute("src");
    gentlementPhoto.classList.add("hidden");
    gentlementPhotoPlaceholder.classList.remove("hidden");
  }
}

function renderSharedScreen(screenChanged = false) {
  selectedModeText.textContent = selectedMode === "omini" ? "Solo maschi" : "Completa";
  roomCodeText.textContent = currentRoomCode;
  startGameButton.classList.toggle("hidden", !isHost);
  lobbyWaitNote.classList.toggle("hidden", isHost);
  renderPlayers();
  updateCurrentPlayer();
  cardTypeText.textContent = currentCard?.type || "Sfida";
  cardText.textContent = currentCard?.text || "";

  if (currentScreenName === "game") {
    renderAnswerOptions();
    startSyncedTimer();
  }

  if (screenChanged && currentScreenName === "gentlemanDayIntro") {
    playVisibleMedia(gentlemanDayIntroAudio, { volume: 0.42 });
  }

  if (currentScreenName === "gentlemanDayDraw") {
    renderGentlemanDayDrawScreen();
  }

  if (currentScreenName === "gentlemanDayQuestion") {
    renderGentlemanDayQuestionScreen();
    if (screenChanged) startGentlemanDayAnswerTimer();
  }

  if (currentScreenName === "gentlemanDayResult") {
    renderGentlemanDayResultScreen();
  }

  if (screenChanged && currentScreenName === "gentlemanDayPitFlame") {
    playVisibleMedia(gentlemanDayPitFlameVideo, { volume: 0.9 });
  }

  if (screenChanged && currentScreenName === "gentlemanDayPitVideo") {
    playVisibleMedia(gentlemanDayPitVideo, { volume: 1 });
  }

  if (currentScreenName === "gentlemanDayPitQuestion") {
    renderGentlemanDayPitQuestionScreen();
  }

  if (currentScreenName === "gentlemanDayPitResult") {
    renderGentlemanDayPitResultScreen();
  }

  if (screenChanged && currentScreenName === "bonusIntro") {
    playVisibleMedia(bonusIntroVideoBg);
    playVisibleMedia(bonusIntroVideo, { volume: 1 });
  }

  if (currentScreenName === "bonus") {
    renderBonusScreen();
  }

  if (screenChanged && currentScreenName === "bonusResult") {
    renderBonusResult();
  }

  if (currentScreenName === "gentlementPhoto") {
    renderGentlementPhotoScreen();
    if (screenChanged) {
      playGentlementPhotoAudio();
      startGentlementQuizMusic();
      startGentlementPhotoTimer();
    }
  }

  if (screenChanged && currentScreenName === "gentlementIntro") {
    playVisibleMedia(gentlementIntroVideo);
  }

  if (currentScreenName === "gentlementAnswers") {
    renderGentlementAnswersScreen();
    if (screenChanged) startGentlementAnswerTimer();
  }

  if (currentScreenName === "gentlementResult") {
    renderGentlementResult();
  }

  if (currentScreenName === "results") renderResults();
  if (currentScreenName === "penalty") renderPenalty();
  if (currentScreenName === "unanimousPenalty") {
    unanimousAnswerText.textContent = `Risposta unanime: ${getUnanimousAnswer()}`;
    unanimousHostOnlyNote.classList.toggle("hidden", isHost);
    continueGameUnanimousButton.classList.toggle("hidden", !isHost);
    unanimousSlotText.innerHTML = "1 SHOT PER TUTTI<br>CACONI";
  }

  if (screenChanged && currentScreenName === "podium") {
    playVisibleMedia(podiumSuspenseVideo, { reset: true, volume: 1 });
  }

  if (screenChanged && currentScreenName === "podiumFinal") {
    renderPodiumFinal();
    playPodiumRevealMusic();
  }

  if (currentScreenName === "end") {
    renderFinalRanking();
  }

  if (currentScreenName === "wheel") {
    renderFinalWheelScreen();
  }
}

function applyRoomPayload(room, playerId = currentPlayerId) {
  if (!room || room.version < multiplayerRoomVersion) return;
  if (room.version === multiplayerRoomVersion) {
    const remoteScreen = room.state?.screen;
    if (!isHost && remoteScreen && remoteScreen !== currentScreenName) {
      isApplyingRemoteState = true;
      setScreen(remoteScreen);
      renderSharedScreen(true);
      isApplyingRemoteState = false;
    }
    return;
  }

  isApplyingRemoteState = true;
  multiplayerRoomVersion = room.version;
  currentRoomCode = room.code || currentRoomCode;
  currentPlayerId = playerId || currentPlayerId;

  if (currentPlayerId) {
    sessionStorage.setItem("gentlementPlayerId", currentPlayerId);
  }

  const currentPlayer = room.players.find((player) => player.id === currentPlayerId);
  if (currentPlayer) {
    currentUserName = currentPlayer.name;
    isHost = Boolean(currentPlayer.isHost);
  }

  const remoteState = room.state || {};
  players.length = 0;
  players.push(...(remoteState.players || room.players.map((player) => player.name)));

  selectedMode = remoteState.selectedMode || selectedMode;
  currentRound = remoteState.currentRound || currentRound;
  currentCard = remoteState.currentCard || currentCard;
  roundEndsAt = remoteState.roundEndsAt || roundEndsAt;
  currentPenalty = remoteState.currentPenalty || currentPenalty;
  bonusPlayed = Boolean(remoteState.bonusPlayed);
  gentlemanDayPlayed = Boolean(remoteState.gentlemanDayPlayed);
  selectedGentlemanDay = remoteState.selectedGentlemanDay || selectedGentlemanDay;
  gentlemanDayQuestionIndex = remoteState.gentlemanDayQuestionIndex || 0;
  selectedGentlemanDayQuestions = remoteState.selectedGentlemanDayQuestions || [];
  gentlemanDayAnswersByPlayer = remoteState.gentlemanDayAnswersByPlayer || {};
  gentlemanDayPitPlayers = remoteState.gentlemanDayPitPlayers || [];
  gentlemanDayPitAnswersByPlayer = remoteState.gentlemanDayPitAnswersByPlayer || {};
  currentGentlemanDayPitQuestion = remoteState.currentGentlemanDayPitQuestion || currentGentlemanDayPitQuestion;
  scoredGentlemanDayMistakes = remoteState.scoredGentlemanDayMistakes || {};
  gentlementGamePlayed = Boolean(remoteState.gentlementGamePlayed);
  gentlementGameRound = remoteState.gentlementGameRound || 0;
  currentGentlementPhoto = remoteState.currentGentlementPhoto || currentGentlementPhoto;
  currentGentlementAnswer = remoteState.currentGentlementAnswer || currentGentlementAnswer;
  gentlementAnswersByPlayer = remoteState.gentlementAnswersByPlayer || {};
  usedGentlementPhotoIndexes = remoteState.usedGentlementPhotoIndexes || [];
  scoredGentlementMistakes = remoteState.scoredGentlementMistakes || {};
  currentBonusQuestion = remoteState.currentBonusQuestion || currentBonusQuestion;
  currentBonusPlayers = remoteState.currentBonusPlayers || [];
  bonusQuestionRevealed = Boolean(remoteState.bonusQuestionRevealed);
  bonusWinner = remoteState.bonusWinner || "";
  bonusAnswerLockedUntil = remoteState.bonusAnswerLockedUntil || {};
  bonusQuestionRevealedAt = remoteState.bonusQuestionRevealedAt || bonusQuestionRevealedAt;
  bonusReactionTimes = remoteState.bonusReactionTimes || {};
  bonusCorrectPlayers = remoteState.bonusCorrectPlayers || {};
  bonusPenaltyScored = Boolean(remoteState.bonusPenaltyScored);
  roundScored = Boolean(remoteState.roundScored);
  penaltyScored = Boolean(remoteState.penaltyScored);
  wheelRotation = remoteState.wheelRotation || 0;
  gentlementExtracted = Boolean(remoteState.gentlementExtracted);
  currentGentlement = remoteState.currentGentlement || "";
  currentWheelPenalty = remoteState.currentWheelPenalty || "";
  extractedGentlements = remoteState.extractedGentlements || [];
  currentChallengePlayer = remoteState.currentChallengePlayer || "";
  usedMainQuestionIndexesByMode = remoteState.usedMainQuestionIndexesByMode || usedMainQuestionIndexesByMode;
  usedBonusQuestionIndexes = remoteState.usedBonusQuestionIndexes || [];
  usedGentlemanDayPitQuestionIndexes = remoteState.usedGentlemanDayPitQuestionIndexes || [];
  lobbySeatAssignments = remoteState.lobbySeatAssignments || {};

  applyObjectValue("responseCounts", remoteState.responseCounts);
  applyObjectValue("votesByPlayer", remoteState.votesByPlayer);
  applyObjectValue("penaltyCounts", remoteState.penaltyCounts);
  applyObjectValue("shotCounts", remoteState.shotCounts);
  applyObjectValue("drinkCounts", remoteState.drinkCounts);
  applyObjectValue("correctCounts", remoteState.correctCounts);

  const nextScreen = remoteState.screen || "lobby";
  const screenChanged = nextScreen !== currentScreenName || nextScreen !== lastSharedScreenName;
  if (nextScreen !== currentScreenName) {
    setScreen(nextScreen);
  }

  renderSharedScreen(screenChanged);
  lastSharedScreenName = nextScreen;

  if (isHost && currentScreenName === "game" && haveAllPlayersAnswered()) {
    finishRound();
  }

  if (
    isHost
    && currentScreenName === "bonus"
    && bonusQuestionRevealed
    && !bonusWinner
    && currentBonusPlayers.length > 0
    && getAllBonusPlayersAnsweredCorrectly()
  ) {
    scheduleBonusResult();
  }

  isApplyingRemoteState = false;
}

async function publishSharedState(extraState = null) {
  if (!isOnlineMultiplayer() || !currentRoomCode || !currentPlayerId || isApplyingRemoteState) return;
  if (!extraState && !isHost) return;

  try {
    const payload = await requestJson(`/api/rooms/${currentRoomCode}/sync`, {
      method: "POST",
      body: JSON.stringify({
        playerId: currentPlayerId,
        state: extraState || getSharedState(),
      }),
    });
    applyRoomPayload(payload.room);
  } catch (error) {
    console.warn(error.message);
  }
}

function startRoomPolling() {
  if (!isOnlineMultiplayer() || !currentRoomCode) return;

  clearInterval(multiplayerPollId);
  multiplayerPollId = setInterval(async () => {
    try {
      const payload = await requestJson(`/api/rooms/${currentRoomCode}/state`);
      applyRoomPayload(payload.room);
    } catch (error) {
      console.warn(error.message);
    }
  }, 700);
}

function startRoomLiveSync() {
  if (!isOnlineMultiplayer() || !currentRoomCode || typeof EventSource === "undefined") {
    startRoomPolling();
    return;
  }

  if (multiplayerEvents) {
    multiplayerEvents.close();
    multiplayerEvents = null;
  }

  multiplayerEvents = new EventSource(`/api/rooms/${currentRoomCode}/events`);
  multiplayerEvents.addEventListener("room", (event) => {
    try {
      const payload = JSON.parse(event.data);
      applyRoomPayload(payload.room);
    } catch (error) {
      console.warn(error.message);
    }
  });
  multiplayerEvents.addEventListener("error", () => {
    startRoomPolling();
  });
}

function startSyncedTimer() {
  clearInterval(timerIntervalId);
  renderTimer();

  timerIntervalId = setInterval(() => {
    if (!roundEndsAt) return;
    remainingSeconds = Math.max(Math.ceil((roundEndsAt - Date.now()) / 1000), 0);
    renderTimer();

    if (remainingSeconds === 0) {
      clearInterval(timerIntervalId);
      if (isHost && currentScreenName === "game") {
        finishRound();
      }
    }
  }, 250);
}

window.addEventListener("load", () => {
  setRandomIntroBackground();

  if ("serviceWorker" in navigator && isOnlineMultiplayer()) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  }

  if (showPreviewFromHash()) {
    loadingScreen.classList.add("is-hidden");
    return;
  }

  setTimeout(() => {
    loadingScreen.classList.add("is-hidden");
  }, 3800);
});

window.addEventListener("hashchange", () => {
  if (showPreviewFromHash()) {
    loadingScreen.classList.add("is-hidden");
  }
});

function resetPreviewPlayers() {
  players.length = 0;
  players.push("Elia", "Mido", "Peco", "Teste", "Plisky", "Obi", "Diego");
  currentUserName = "Elia";
  isHost = true;

  players.forEach((player, index) => {
    shotCounts[player] = Math.max(0, 8 - index);
    drinkCounts[player] = index < 3 ? 2 - index : index < 5 ? 1 : 0;
    correctCounts[player] = Math.max(0, 5 - index);
    penaltyCounts[player] = Math.max(0, index);
  });
}

function showPreviewFromHash() {
  const previewName = window.location.hash.replace("#preview-", "");
  if (!previewName) return false;

  resetPreviewPlayers();

  if (previewName === "bonus-result") {
    bonusWinner = "Elia";
    currentBonusPlayers = ["Elia", "Mido", "Peco"];
    bonusReactionTimes = { Elia: 1210, Mido: 1432, Peco: 1850 };
    renderBonusResult();
    continueAfterBonusButton.classList.remove("hidden");
    continueAfterBonusButton.disabled = false;
    setScreen("bonusResult");
    return true;
  }

  if (previewName === "penalty") {
    currentRound = 3;
    currentPenalty = "drink a goccia";
    votesByPlayer = {
      Elia: "Mido",
      Mido: "Mido",
      Peco: "Elia",
      Teste: "Peco",
    };
    responseCounts = { Elia: 1, Mido: 2, Peco: 1 };
    penaltyScored = true;
    renderPenalty();
    setPenaltySlotDisplay(currentPenalty);
    penaltySlotText.parentElement.classList.remove("is-spinning");
    setScreen("penalty");
    return true;
  }

  if (previewName === "wheel") {
    showFinalWheel();
    gentlementNameBadge.textContent = "Elia";
    gentlementNameBadge.classList.remove("hidden");
    gentlementNameBadge.classList.add("is-visible");
    drawGentlementButton.classList.remove("hidden");
    drawGentlementButton.disabled = false;
    return true;
  }

  if (previewName === "podio") {
    renderPodiumFinal();
    setScreen("podiumFinal");
    return true;
  }

  if (previewName === "bonus") {
    showBonusRound();
    setScreen("bonus");
    return true;
  }

  if (previewName === "bonus-intro") {
    showBonusIntro();
    return true;
  }

  if (previewName === "game") {
    currentRound = 1;
    selectedMode = "omini";
    updateCurrentPlayer();
    renderAnswerOptions();
    cardTypeText.textContent = "Domanda";
    cardText.textContent = "Chi tra voi riuscirebbe a rovinare una serata elegante in meno di dieci minuti?";
    timerText.textContent = "01:30";
    setScreen("game");
    return true;
  }

  if (previewName === "gentleman-day-result") {
    gentlemanDayCorrectAnswer.textContent = "Risposta A";
    gentlemanDayUserAnswer.textContent = "La tua risposta: Risposta B";
    gentlemanDayResultFeedback.className = "gentlement-result-feedback is-wrong";
    gentlemanDayResultFeedback.innerHTML = `
      <span class="gentlement-feedback-mark">X</span>
      <small>Non conosci il tuo amico vergognati, fatti uno shot</small>
    `;
    gentlemanDayResultHostOnlyNote.classList.add("hidden");
    continueGentlemanDayResultButton.disabled = false;
    setScreen("gentlemanDayResult");
    return true;
  }

  if (previewName === "gentleman-day-question") {
    selectedGentlemanDay = "Gentelment lunghissimo";
    gentlemanDayQuestionIndex = 0;
    showGentlemanDayQuestion();
    return true;
  }

  if (previewName === "gentleman-day-pit-question") {
    currentUserName = players[0] || "Elia";
    isHost = true;
    gentlemanDayPitPlayers = [currentUserName, players[1] || "Teste"];
    gentlemanDayPitAnswersByPlayer = {};
    currentGentlemanDayPitQuestion = gentlemanDayPitQuestions[0];
    showGentlemanDayPitQuestion();
    return true;
  }

  if (previewName === "gentleman-day-pit-result") {
    currentUserName = players[0] || "Elia";
    isHost = true;
    gentlemanDayPitPlayers = [players[0] || "Elia", players[1] || "Mido", players[2] || "Peco", players[3] || "Teste"];
    currentGentlemanDayPitQuestion = gentlemanDayPitQuestions[0];
    gentlemanDayPitAnswersByPlayer = {
      [gentlemanDayPitPlayers[0]]: currentGentlemanDayPitQuestion.answer,
      [gentlemanDayPitPlayers[1]]: currentGentlemanDayPitQuestion.options[1],
      [gentlemanDayPitPlayers[2]]: currentGentlemanDayPitQuestion.options[2],
      [gentlemanDayPitPlayers[3]]: currentGentlemanDayPitQuestion.answer,
    };
    showGentlemanDayPitResult();
    return true;
  }

  if (previewName === "gentleman-day-draw") {
    selectedGentlemanDay = "Teste";
    gentlemanDayRevealName.textContent = selectedGentlemanDay;
    gentlemanDayPortrait.classList.remove("is-landscape", "is-portrait", "is-square");
    gentlemanDayPortrait.onload = updateGentlemanDayPortraitFit;
    gentlemanDayPortrait.src = gentlemanDayPortraits[selectedGentlemanDay];
    gentlemanDayPortrait.alt = `Foto di ${selectedGentlemanDay}`;
    if (gentlemanDayPortrait.complete) updateGentlemanDayPortraitFit();
    gentlemanDayPortrait.classList.remove("hidden");
    gentlemanDayPortraitPlaceholder.classList.add("hidden");
    setScreen("gentlemanDayDraw");
    return true;
  }

  if (previewName === "gentleman-day-intro") {
    showGentlemanDayIntro();
    return true;
  }

  if (previewName === "gentlement-intro") {
    showGentlementIntro();
    return true;
  }

  return false;
}

function renderPlayers() {
  playersList.innerHTML = "";
  playersCount.textContent = players.length;
  const currentPlayers = new Set(players);
  Object.keys(lobbySeatAssignments).forEach((player) => {
    if (!currentPlayers.has(player)) {
      delete lobbySeatAssignments[player];
    }
  });

  players.forEach((player, index) => {
    const item = document.createElement("li");
    item.className = index === 0 ? "lobby-player-name lobby-player-host" : "lobby-player-name lobby-player-seat";
    item.textContent = player;

    if (index > 0) {
      const seat = getLobbySeatForPlayer(player);
      item.style.setProperty("--lobby-player-x", `${seat.x}%`);
      item.style.setProperty("--lobby-player-y", `${seat.y}%`);

      if (seat.isExtra) {
        item.classList.add("lobby-player-extra-seat");
      }
    }

    playersList.appendChild(item);
  });
}

function getLobbySeatForPlayer(player) {
  if (lobbySeatAssignments[player]) {
    return lobbySeatAssignments[player];
  }

  const usedSeatIndexes = new Set(
    Object.values(lobbySeatAssignments)
      .filter((seat) => !seat.isExtra)
      .map((seat) => seat.index),
  );
  const primarySeatCount = Math.min(7, lobbySeatPositions.length);
  const candidateSeatIndexes =
    usedSeatIndexes.size < primarySeatCount
      ? lobbySeatPositions.map((_, index) => index).slice(0, primarySeatCount)
      : lobbySeatPositions.map((_, index) => index);
  const availableSeatIndexes = candidateSeatIndexes
    .filter((index) => !usedSeatIndexes.has(index));

  if (availableSeatIndexes.length) {
    const randomSeatIndex = availableSeatIndexes[Math.floor(Math.random() * availableSeatIndexes.length)];
    const seat = { ...lobbySeatPositions[randomSeatIndex], index: randomSeatIndex };
    lobbySeatAssignments[player] = seat;
    return seat;
  }

  const extraSeatCount = Object.values(lobbySeatAssignments).filter((seat) => seat.isExtra).length;
  const extraSeatColumns = 4;
  const extraSeat = {
    x: 20 + (extraSeatCount % extraSeatColumns) * 20,
    y: 72 + Math.floor(extraSeatCount / extraSeatColumns) * 5,
    index: lobbySeatPositions.length + extraSeatCount,
    isExtra: true,
  };
  lobbySeatAssignments[player] = extraSeat;
  return extraSeat;
}

function playDrumHit() {
  if (!drumAudioContext) return;

  const now = drumAudioContext.currentTime;
  const isAccent = nextDrumIsAccent;
  const oscillator = drumAudioContext.createOscillator();
  const noiseBuffer = drumAudioContext.createBuffer(1, drumAudioContext.sampleRate * 0.08, drumAudioContext.sampleRate);
  const noiseData = noiseBuffer.getChannelData(0);
  const noise = drumAudioContext.createBufferSource();
  const toneGain = drumAudioContext.createGain();
  const noiseGain = drumAudioContext.createGain();
  const masterGain = drumAudioContext.createGain();
  const accentGain = isAccent ? 0.72 : 0.5;

  nextDrumIsAccent = !nextDrumIsAccent;

  for (let index = 0; index < noiseData.length; index += 1) {
    noiseData[index] = (Math.random() * 2 - 1) * (1 - index / noiseData.length);
  }

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(isAccent ? 125 : 105, now);
  oscillator.frequency.exponentialRampToValueAtTime(58, now + 0.11);
  toneGain.gain.setValueAtTime(accentGain, now);
  toneGain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

  noise.buffer = noiseBuffer;
  noiseGain.gain.setValueAtTime(0.18, now);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

  masterGain.gain.setValueAtTime(0.22, now);
  oscillator.connect(toneGain).connect(masterGain);
  noise.connect(noiseGain).connect(masterGain);
  masterGain.connect(drumAudioContext.destination);

  oscillator.start(now);
  noise.start(now);
  oscillator.stop(now + 0.16);
  noise.stop(now + 0.08);
}

async function startDrumSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  if (!drumAudioContext) {
    drumAudioContext = new AudioContext();
  }

  clearInterval(drumSoundIntervalId);
  await drumAudioContext.resume();
  nextDrumIsAccent = true;
  playDrumHit();
  setTimeout(playDrumHit, 90);
  drumSoundIntervalId = setInterval(playDrumHit, 180);
}

function stopDrumSound() {
  clearInterval(drumSoundIntervalId);
  drumSoundIntervalId = null;
}

function playTadaaSound() {
  if (!drumAudioContext) return;

  const now = drumAudioContext.currentTime;
  const masterGain = drumAudioContext.createGain();
  const notes = [523.25, 659.25, 783.99, 1046.5];

  masterGain.gain.setValueAtTime(0.001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.24, now + 0.03);
  masterGain.gain.exponentialRampToValueAtTime(0.001, now + 1.18);
  masterGain.connect(drumAudioContext.destination);

  notes.forEach((frequency, index) => {
    const oscillator = drumAudioContext.createOscillator();
    const gain = drumAudioContext.createGain();
    const startTime = now + index * 0.08;

    oscillator.type = index === notes.length - 1 ? "sawtooth" : "triangle";
    oscillator.frequency.setValueAtTime(frequency, startTime);
    oscillator.frequency.linearRampToValueAtTime(frequency * 1.015, startTime + 0.22);
    gain.gain.setValueAtTime(0.001, startTime);
    gain.gain.exponentialRampToValueAtTime(index === notes.length - 1 ? 0.42 : 0.28, startTime + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.48);

    oscillator.connect(gain).connect(masterGain);
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.55);
  });
}

function getGentlemanDayIntroAudioContext() {
  if (!gentlemanDayIntroAudioContext) {
    gentlemanDayIntroAudioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  return gentlemanDayIntroAudioContext;
}

function playGentlemanDayKick(audioContext, time) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(120, time);
  oscillator.frequency.exponentialRampToValueAtTime(42, time + 0.16);
  gain.gain.setValueAtTime(0.001, time);
  gain.gain.exponentialRampToValueAtTime(0.72, time + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.22);
  oscillator.connect(gain).connect(gentlemanDayIntroMasterGain || audioContext.destination);
  oscillator.start(time);
  oscillator.stop(time + 0.24);
}

function playGentlemanDayBass(audioContext, time, frequency) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "sawtooth";
  oscillator.frequency.setValueAtTime(frequency, time);
  gain.gain.setValueAtTime(0.001, time);
  gain.gain.exponentialRampToValueAtTime(0.16, time + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.14);
  oscillator.connect(gain).connect(gentlemanDayIntroMasterGain || audioContext.destination);
  oscillator.start(time);
  oscillator.stop(time + 0.16);
}

function playGentlemanDayHat(audioContext, time) {
  const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 0.04, audioContext.sampleRate);
  const data = buffer.getChannelData(0);
  const noise = audioContext.createBufferSource();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  for (let index = 0; index < data.length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / data.length);
  }

  filter.type = "highpass";
  filter.frequency.setValueAtTime(5200, time);
  gain.gain.setValueAtTime(0.001, time);
  gain.gain.exponentialRampToValueAtTime(0.12, time + 0.006);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);
  noise.buffer = buffer;
  noise.connect(filter).connect(gain).connect(gentlemanDayIntroMasterGain || audioContext.destination);
  noise.start(time);
  noise.stop(time + 0.055);
}

function playGentlemanDayIntroBeat() {
  const audioContext = getGentlemanDayIntroAudioContext();
  const time = audioContext.currentTime;
  const step = gentlemanDayIntroBeatStep % 8;
  const bassPattern = [55, 55, 65.41, 55, 73.42, 65.41, 55, 49];

  if (step === 0 || step === 3 || step === 4 || step === 7) {
    playGentlemanDayKick(audioContext, time);
  }

  playGentlemanDayBass(audioContext, time, bassPattern[step]);
  playGentlemanDayHat(audioContext, time + 0.035);
  gentlemanDayIntroBeatStep += 1;
}

async function startGentlemanDayIntroMusic() {
  const audioContext = getGentlemanDayIntroAudioContext();
  stopGentlemanDayIntroMusic();
  await audioContext.resume?.();

  gentlemanDayIntroMasterGain = audioContext.createGain();
  gentlemanDayIntroMasterGain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gentlemanDayIntroMasterGain.gain.exponentialRampToValueAtTime(0.46, audioContext.currentTime + 0.12);
  gentlemanDayIntroMasterGain.connect(audioContext.destination);
  gentlemanDayIntroBeatStep = 0;
  playGentlemanDayIntroBeat();
  gentlemanDayIntroMusicIntervalId = setInterval(playGentlemanDayIntroBeat, 150);
}

function stopGentlemanDayIntroMusic() {
  clearInterval(gentlemanDayIntroMusicIntervalId);
  gentlemanDayIntroMusicIntervalId = null;

  if (gentlemanDayIntroMasterGain && gentlemanDayIntroAudioContext) {
    gentlemanDayIntroMasterGain.gain.cancelScheduledValues(gentlemanDayIntroAudioContext.currentTime);
    gentlemanDayIntroMasterGain.gain.setValueAtTime(gentlemanDayIntroMasterGain.gain.value || 0.001, gentlemanDayIntroAudioContext.currentTime);
    gentlemanDayIntroMasterGain.gain.exponentialRampToValueAtTime(0.001, gentlemanDayIntroAudioContext.currentTime + 0.08);
    setTimeout(() => {
      gentlemanDayIntroMasterGain?.disconnect();
      gentlemanDayIntroMasterGain = null;
    }, 110);
  }
}

function getFinalScore(player) {
  return (shotCounts[player] || 0) + (drinkCounts[player] || 0) * 3;
}

function getFinalRankingPlayers() {
  return [...players]
    .sort((firstPlayer, secondPlayer) => {
      const firstTotal = getFinalScore(firstPlayer);
      const secondTotal = getFinalScore(secondPlayer);

      if (firstTotal !== secondTotal) return secondTotal - firstTotal;
      return firstPlayer.localeCompare(secondPlayer, "it", { sensitivity: "base" });
    });
}

function getPodiumPlayers() {
  return getFinalRankingPlayers().slice(0, 7);
}

function getRevealDelay(place, availablePlaces) {
  const revealOrder = [5, 4, 3, 2, 1];
  const activeRevealOrder = revealOrder.filter((revealPlace) => availablePlaces.includes(revealPlace));
  return activeRevealOrder.indexOf(place) * 1450;
}

function clearPodiumRevealTimers() {
  podiumRevealTimeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
  podiumRevealTimeoutIds = [];
}

function playPodiumRevealMusic() {
  stopPodiumFirstPlaceAudio();
  podiumRevealMusic.pause();
  podiumRevealMusic.currentTime = 0;
  podiumRevealMusic.volume = 0.72;
  podiumRevealMusic.play().catch(() => {
    // Il browser puo bloccare l'audio se non c'e stata ancora interazione.
  });
}

function stopPodiumRevealMusic() {
  podiumRevealMusic.pause();
  podiumRevealMusic.currentTime = 0;
}

function playPodiumFirstPlaceAudio() {
  podiumFirstPlaceAudio.pause();
  podiumFirstPlaceAudio.currentTime = 0;
  podiumFirstPlaceAudio.volume = 1;
  podiumFirstPlaceAudio.play().catch(() => {
    // Il browser puo bloccare l'audio se non c'e stata ancora interazione.
  });
}

function stopPodiumFirstPlaceAudio() {
  podiumFirstPlaceAudio.pause();
  podiumFirstPlaceAudio.currentTime = 0;
}

function createStickFigure(player, place, revealDelay, isWinner = false) {
  const figure = document.createElement("div");
  figure.className = `podium-person person-place-${place}${isWinner ? " is-winner" : ""}`;
  figure.style.setProperty("--reveal-delay", `${revealDelay}ms`);
  figure.innerHTML = `
    <span class="person-head"></span>
    <span class="person-body">
      <span class="person-shirt-name">${player}</span>
    </span>
    <span class="person-arm arm-left"></span>
    <span class="person-arm arm-right"></span>
    <span class="person-leg leg-left"></span>
    <span class="person-leg leg-right"></span>
  `;
  return figure;
}

function renderPodiumFinal() {
  clearPodiumRevealTimers();
  podiumPlaces.innerHTML = "";
  podiumFinalScreen.classList.add("is-revealing");
  podiumFinishButton.classList.add("is-hidden-during-reveal");

  const podiumPlayers = getPodiumPlayers();
  const podiumTopPlayers = podiumPlayers.slice(0, 3);
  const seatedPlayers = podiumPlayers.slice(3, 5);
  const floorPlayers = podiumPlayers.slice(5, 7);
  const visibleFigurePlayers = podiumPlayers.slice(0, 5);
  const availablePlaces = visibleFigurePlayers.map((_, index) => index + 1);
  const revealPlaces = [5, 4, 3, 2, 1].filter((place) => availablePlaces.includes(place));
  const finalRevealDelay = revealPlaces.length
    ? getRevealDelay(revealPlaces[revealPlaces.length - 1], availablePlaces) + 1350
    : 0;
  const firstScore = podiumTopPlayers.length > 0 ? getFinalScore(podiumTopPlayers[0]) : 0;
  const firstPlaceTieCount = podiumTopPlayers.filter((player) => getFinalScore(player) === firstScore).length;
  const hasFirstPlaceTie = firstPlaceTieCount > 1;
  podiumFinalScreen.classList.toggle("has-first-place-tie", hasFirstPlaceTie);
  const revealCue = document.createElement("p");
  const podiumStage = document.createElement("div");
  const seatedRow = document.createElement("div");
  const floorRow = document.createElement("div");

  revealCue.className = "podium-reveal-cue";
  podiumStage.className = "podium-stage-physical";
  seatedRow.className = "podium-sitters";
  floorRow.className = "podium-floor-names";

  podiumTopPlayers.forEach((player, index) => {
    const placeNumber = index + 1;
    const place = document.createElement("div");
    const isTiedWithFirst = placeNumber > 1 && getFinalScore(player) === firstScore;
    const displayedPlaceNumber = isTiedWithFirst ? 1 : placeNumber;
    place.className = `podium-place podium-place-${placeNumber}${isTiedWithFirst ? " podium-place-tied-first" : ""}`;
    place.innerHTML = `
      <span class="podium-medal">${displayedPlaceNumber}</span>
    `;
    place.appendChild(createStickFigure(
      player,
      placeNumber,
      getRevealDelay(placeNumber, availablePlaces),
      placeNumber === 1,
    ));
    podiumStage.appendChild(place);
  });

  seatedPlayers.forEach((player, index) => {
    const placeNumber = index + 4;
    const sitter = document.createElement("div");
    sitter.className = `podium-sitter podium-sitter-${placeNumber}`;
    sitter.style.setProperty("--reveal-delay", `${getRevealDelay(placeNumber, availablePlaces)}ms`);
    sitter.appendChild(createStickFigure(player, placeNumber, 0));
    seatedRow.appendChild(sitter);
  });

  floorPlayers.forEach((player, index) => {
    const placeNumber = index + 6;
    const nameCard = document.createElement("div");
    nameCard.className = `podium-floor-name podium-floor-name-${placeNumber}`;
    nameCard.innerHTML = `
      <span>${placeNumber}</span>
      <strong>${player}</strong>
    `;
    floorRow.appendChild(nameCard);
  });

  podiumPlaces.appendChild(podiumStage);
  podiumPlaces.appendChild(seatedRow);
  podiumPlaces.appendChild(floorRow);

  if (hasFirstPlaceTie) {
    const tieMessage = document.createElement("p");
    tieMessage.className = "podium-tie-message";
    tieMessage.textContent = "c'è un pareggio, chi finisce prima il drink vince";
    podiumPlaces.appendChild(tieMessage);
  }

  podiumPlaces.appendChild(revealCue);

  if (revealPlaces.includes(1)) {
    const stopMusicTimeoutId = setTimeout(() => {
      stopPodiumRevealMusic();
      playPodiumFirstPlaceAudio();
    }, getRevealDelay(1, availablePlaces));
    podiumRevealTimeoutIds.push(stopMusicTimeoutId);
  }

  revealPlaces.forEach((place) => {
    const timeoutId = setTimeout(() => {
      revealCue.textContent = `${place}° posto`;
      revealCue.classList.remove("is-done");
      revealCue.classList.add("is-active");
    }, getRevealDelay(place, availablePlaces));
    podiumRevealTimeoutIds.push(timeoutId);
  });

  const finishRevealTimeoutId = setTimeout(() => {
    revealCue.classList.remove("is-active");
    revealCue.classList.add("is-done");
    podiumFinalScreen.classList.remove("is-revealing");
    podiumFinishButton.classList.remove("is-hidden-during-reveal");
  }, finalRevealDelay);
  podiumRevealTimeoutIds.push(finishRevealTimeoutId);
}

function showFinalPodium() {
  if (!isHost) return;
  clearTimeout(podiumTimeoutId);
  podiumTimeoutId = null;
  stopDrumSound();
  renderPodiumFinal();
  setScreen("podiumFinal");
  playPodiumRevealMusic();
  playTadaaSound();
}

function renderReviewStars() {
  reviewStars.querySelectorAll("button").forEach((button) => {
    const rating = Number(button.dataset.rating);
    button.classList.toggle("active", rating <= reviewRating);
    button.textContent = rating <= reviewRating ? "★" : "☆";
    button.setAttribute("aria-checked", String(rating === reviewRating));
  });
  reviewSaveButton.disabled = reviewRating === 0;
}

function showReviewScreen() {
  reviewRating = 0;
  reviewComment.value = "";
  reviewSaveButton.textContent = "Torna alla stanza";
  renderReviewStars();
  setScreen("review");
}

function saveReview() {
  if (reviewRating === 0) {
    return;
  }

  const review = {
    player: currentUserName || "Giocatore",
    rating: reviewRating,
    comment: reviewComment.value.trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    const storedReviews = JSON.parse(localStorage.getItem("gentlementReviews") || "[]");
    storedReviews.push(review);
    localStorage.setItem("gentlementReviews", JSON.stringify(storedReviews));
  } catch (error) {
    console.warn("Recensione non salvata in locale", error);
  }

  setScreen("lobby");
}

function showPodiumSuspense() {
  if (!isHost) return;
  setScreen("podium");
  clearTimeout(podiumTimeoutId);
  podiumTimeoutId = null;
  podiumSuspenseVideo.currentTime = 0;
  podiumSuspenseVideo.volume = 1;
  safelyPlayMedia(podiumSuspenseVideo);
  clearTimeout(podiumSuspenseFallbackId);
  scheduleHostVideoFallback(
    podiumSuspenseVideo,
    "podium",
    showFinalPodium,
    9000,
    (timeoutId) => {
      podiumSuspenseFallbackId = timeoutId;
    },
  );
}

function setScreen(screenName) {
  currentScreenName = screenName;
  introScreen.classList.toggle("hidden", screenName !== "intro");
  lobbyScreen.classList.toggle("hidden", screenName !== "lobby");
  gameScreen.classList.toggle("hidden", screenName !== "game");
  resultsScreen.classList.toggle("hidden", screenName !== "results");
  penaltyScreen.classList.toggle("hidden", screenName !== "penalty");
  unanimousPenaltyScreen.classList.toggle("hidden", screenName !== "unanimousPenalty");
  gentlemanDayIntroScreen.classList.toggle("hidden", screenName !== "gentlemanDayIntro");
  gentlemanDayDrawScreen.classList.toggle("hidden", screenName !== "gentlemanDayDraw");
  gentlemanDayQuestionScreen.classList.toggle("hidden", screenName !== "gentlemanDayQuestion");
  gentlemanDayResultScreen.classList.toggle("hidden", screenName !== "gentlemanDayResult");
  gentlemanDayPitFlameScreen.classList.toggle("hidden", screenName !== "gentlemanDayPitFlame");
  gentlemanDayPitVideoScreen.classList.toggle("hidden", screenName !== "gentlemanDayPitVideo");
  gentlemanDayPitQuestionScreen.classList.toggle("hidden", screenName !== "gentlemanDayPitQuestion");
  gentlemanDayPitResultScreen.classList.toggle("hidden", screenName !== "gentlemanDayPitResult");
  bonusIntroScreen.classList.toggle("hidden", screenName !== "bonusIntro");
  bonusScreen.classList.toggle("hidden", screenName !== "bonus");
  bonusResultScreen.classList.toggle("hidden", screenName !== "bonusResult");
  gentlementIntroScreen.classList.toggle("hidden", screenName !== "gentlementIntro");
  gentlementPhotoScreen.classList.toggle("hidden", screenName !== "gentlementPhoto");
  gentlementAnswersScreen.classList.toggle("hidden", screenName !== "gentlementAnswers");
  gentlementResultScreen.classList.toggle("hidden", screenName !== "gentlementResult");
  wheelScreen.classList.toggle("hidden", screenName !== "wheel");
  endScreen.classList.toggle("hidden", screenName !== "end");
  podiumScreen.classList.toggle("hidden", screenName !== "podium");
  podiumFinalScreen.classList.toggle("hidden", screenName !== "podiumFinal");
  reviewScreen.classList.toggle("hidden", screenName !== "review");

  if (screenName !== "podium") {
    clearTimeout(podiumSuspenseFallbackId);
    podiumSuspenseFallbackId = null;
    clearTimeout(podiumTimeoutId);
    podiumTimeoutId = null;
    podiumSuspenseVideo.pause();
    stopDrumSound();
  }

  if (screenName !== "podiumFinal") {
    clearPodiumRevealTimers();
    stopPodiumRevealMusic();
    stopPodiumFirstPlaceAudio();
    podiumFinalScreen.classList.remove("is-revealing");
    podiumFinishButton.classList.remove("is-hidden-during-reveal");
  }

  if (screenName !== "gentlementPhoto") {
    clearInterval(gentlementPhotoTimerId);
    gentlementPhotoTimerId = null;
    gentlementPhotoTimer.classList.remove("is-ending");
    stopGentlementQuizMusic();
    gentlementFirstPhotoAudio.pause();
    gentlementSecondPhotoAudio.pause();
    gentlementPhotoAudio.pause();
    gentlementThirdPhotoAudio.pause();
  }

  if (screenName !== "gentlemanDayIntro") {
    clearTimeout(gentlemanDayIntroTimeoutId);
    gentlemanDayIntroTimeoutId = null;
    clearTimeout(gentlemanDayDrawTimeoutId);
    gentlemanDayDrawTimeoutId = null;
    gentlemanDayIntroAudio.pause();
    gentlemanDayIntroAudio.currentTime = 0;
    stopGentlemanDayIntroMusic();
  }

  if (screenName !== "bonusIntro") {
    clearTimeout(bonusIntroFallbackId);
    bonusIntroFallbackId = null;
    bonusIntroVideo.pause();
    bonusIntroVideoBg.pause();
  }

  if (screenName !== "gentlementAnswers") {
    clearInterval(gentlementAnswerTimerId);
    gentlementAnswerTimerId = null;
  }

  if (screenName !== "gentlemanDayQuestion") {
    clearInterval(gentlemanDayAnswerTimerId);
    gentlemanDayAnswerTimerId = null;
  }

  if (screenName !== "gentlemanDayPitFlame") {
    clearTimeout(gentlemanDayPitFlameFallbackId);
    gentlemanDayPitFlameFallbackId = null;
    gentlemanDayPitFlameVideo.pause();
  }

  if (screenName !== "gentlemanDayPitVideo") {
    clearTimeout(gentlemanDayPitVideoFallbackId);
    gentlemanDayPitVideoFallbackId = null;
    gentlemanDayPitVideo.pause();
  }

  if (screenName !== "gentlementIntro") {
    clearTimeout(gentlementIntroFallbackId);
    gentlementIntroFallbackId = null;
    gentlementIntroVideo.pause();
  }

  if (screenName === "lobby") {
    lobbyMusic.volume = 0.22;
    lobbyMusic.play().catch(() => {});
  } else {
    lobbyMusic.pause();
    lobbyMusic.currentTime = 0;
  }

  if (screenName === "game") {
    gameQuestionMusic.volume = 0.2;
    gameQuestionMusic.play().catch(() => {});
  } else {
    gameQuestionMusic.pause();
    gameQuestionMusic.currentTime = 0;
  }

  document.body.classList.toggle(
    "is-gentlement-intro-active",
    screenName === "gentlementIntro" || screenName === "bonusIntro",
  );

  if (isHost && !isApplyingRemoteState) {
    publishSharedState();
  }
}

function unlockGameAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;

  [
    lobbyMusic,
    gameQuestionMusic,
    gentlemanDayIntroAudio,
    gentlementFirstPhotoAudio,
    gentlementSecondPhotoAudio,
    gentlementPhotoAudio,
    gentlementThirdPhotoAudio,
    podiumFirstPlaceAudio,
    podiumRevealMusic,
  ].forEach((audio) => {
    if (!audio) return;
    const originalVolume = audio.volume;
    audio.volume = 0;
    audio.play()
      .then(() => {
        audio.pause();
        audio.currentTime = 0;
        audio.volume = originalVolume;
      })
      .catch(() => {
        audio.volume = originalVolume;
      });
  });

  [
    gentlementIntroVideo,
    bonusIntroVideo,
    bonusIntroVideoBg,
    gentlemanDayPitFlameVideo,
    gentlemanDayPitVideo,
    podiumSuspenseVideo,
  ].forEach((video) => {
    if (!video) return;
    const wasMuted = video.muted;
    const originalVolume = video.volume;
    video.muted = false;
    video.volume = 0;
    video.play()
      .then(() => {
        video.pause();
        video.currentTime = 0;
        video.muted = wasMuted;
        video.volume = originalVolume;
      })
      .catch(() => {
        video.muted = wasMuted;
        video.volume = originalVolume;
      });
  });

  [
    gentlementQuizAudioContext,
    gentlemanDayIntroAudioContext,
    drumAudioContext,
    podiumRevealAudioContext,
  ].forEach((audioContext) => audioContext?.resume?.());
}

function updateCurrentPlayer() {
  currentPlayerText.textContent = `Round ${currentRound}/${totalRounds}`;
}

function renderTimer() {
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  timerText.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  timerText.parentElement.classList.toggle("is-low", remainingSeconds <= 10);
}

function startTimer() {
  clearInterval(timerIntervalId);
  remainingSeconds = 90;
  roundEndsAt = Date.now() + remainingSeconds * 1000;
  startSyncedTimer();
}

function drawCard() {
  const deck = cards[selectedMode];
  const usedIndexes = usedMainQuestionIndexesByMode[selectedMode] || [];
  const card = getRandomUnusedItem(deck, usedIndexes) || deck[0];
  usedMainQuestionIndexesByMode[selectedMode] = usedIndexes;

  responseCounts = {};
  votesByPlayer = {};
  roundScored = false;
  penaltyScored = false;
  currentCard = card;
  cardTypeText.textContent = card.type;
  cardText.textContent = card.text;
  startTimer();
  publishSharedState();
}

function continueAfterResults() {
  if (!isHost) return;
  if (currentRound >= totalRounds) {
    showFinalWheel();
    return;
  }

  if (currentRound === gentlemanDayAfterRound && !gentlemanDayPlayed) {
    showGentlemanDayIntro();
    return;
  }

  if (currentRound === bonusAfterRound && !bonusPlayed) {
    showBonusIntro();
    return;
  }

  if (currentRound === gentlementGameAfterRound && !gentlementGamePlayed) {
    showGentlementGame();
    return;
  }

  currentRound += 1;
  updateCurrentPlayer();
  drawCard();
  setScreen("game");
}

function renderResults() {
  scoreRoundAnswers();

  const totalAnswers = Object.values(responseCounts).reduce((sum, count) => sum + count, 0);
  resultsLegend.innerHTML = "";
  showPenaltyButton.classList.toggle("hidden", !isHost);
  hostOnlyNote.classList.toggle("hidden", isHost);

  if (totalAnswers === 0) {
    pieChart.style.background = "#ece7dc";
    resultsLegend.innerHTML = '<p class="intro-text">Nessuna risposta registrata. Grave, ma elegante.</p>';
    return;
  }

  let currentPercent = 0;
  const pieSlices = players
    .filter((player) => responseCounts[player])
    .map((player, index) => {
      const count = responseCounts[player];
      const start = currentPercent;
      const end = currentPercent + (count / totalAnswers) * 100;
      const color = chartColors[index % chartColors.length];
      currentPercent = end;

      const item = document.createElement("div");
      item.className = "legend-item";
      item.innerHTML = `
        <span class="legend-color" style="background: ${color}"></span>
        <span class="legend-name">${player}</span>
        <span class="legend-count">${count}</span>
      `;
      resultsLegend.appendChild(item);

      return `${color} ${start}% ${end}%`;
    });

  pieChart.style.background = `conic-gradient(${pieSlices.join(", ")})`;
}

function scoreRoundAnswers() {
  if (roundScored) return;

  const votedAnswerCounts = Object.values(responseCounts).filter((count) => count > 0);
  if (!votedAnswerCounts.length) {
    roundScored = true;
    return;
  }

  const highestVoteCount = Math.max(...votedAnswerCounts);
  const winningAnswers = Object.keys(responseCounts).filter(
    (answer) => responseCounts[answer] === highestVoteCount,
  );

  players.forEach((player) => {
    if (winningAnswers.includes(votesByPlayer[player])) {
      correctCounts[player] = (correctCounts[player] || 0) + 1;
    }
  });

  roundScored = true;
}

function getPenaltyPlayers() {
  const votedAnswerCounts = Object.values(responseCounts).filter((count) => count > 0);
  const highestVoteCount = votedAnswerCounts.length ? Math.max(...votedAnswerCounts) : 0;
  const winningAnswers = Object.keys(responseCounts).filter(
    (answer) => responseCounts[answer] === highestVoteCount,
  );

  return players.filter((player) => {
    const votedAnswer = votesByPlayer[player];

    if (!votedAnswer) return true;
    return !winningAnswers.includes(votedAnswer);
  });
}

function getAnsweredPlayers() {
  return players.filter((player) => votesByPlayer[player]);
}

function haveAllPlayersAnswered() {
  return players.length > 0 && players.every((player) => Boolean(votesByPlayer[player]));
}

function getIsUnanimousVote() {
  const answeredPlayers = getAnsweredPlayers();
  const uniqueAnswers = new Set(answeredPlayers.map((player) => votesByPlayer[player]));

  return answeredPlayers.length === players.length && uniqueAnswers.size === 1;
}

function getUnanimousAnswer() {
  const answeredPlayers = getAnsweredPlayers();
  return answeredPlayers.length ? votesByPlayer[answeredPlayers[0]] : "";
}

function addFinalStats(player, penaltyText) {
  if (!player) return;

  const normalizedPenalty = penaltyText.toLowerCase();
  let shotsToAdd = 0;
  let drinksToAdd = 0;

  if (normalizedPenalty.includes("3 shot")) {
    shotsToAdd = 3;
  } else if (normalizedPenalty.includes("2 shot")) {
    shotsToAdd = 2;
  } else if (normalizedPenalty.includes("1 shot") || normalizedPenalty.includes("shot")) {
    shotsToAdd = 1;
  }

  if (normalizedPenalty.includes("drink") || normalizedPenalty.includes("bicchiere")) {
    drinksToAdd = 1;
  }

  shotCounts[player] = (shotCounts[player] || 0) + shotsToAdd;
  drinkCounts[player] = (drinkCounts[player] || 0) + drinksToAdd;
}

function renderPenalty() {
  const penaltyPlayers = getPenaltyPlayers();
  penaltyList.innerHTML = "";
  penaltyList.style.setProperty("--penalty-count", Math.max(penaltyPlayers.length, 1));
  penaltyList.classList.toggle("is-crowded", penaltyPlayers.length >= 5);
  penaltyList.classList.toggle("is-packed", penaltyPlayers.length >= 8);
  if (currentRound >= totalRounds) {
    continueGameButton.textContent = "Vai alla ruota";
  } else if (currentRound === gentlemanDayAfterRound && !gentlemanDayPlayed) {
    continueGameButton.textContent = "Il gentlement di oggi";
  } else if (currentRound === gentlementGameAfterRound && !gentlementGamePlayed) {
    continueGameButton.textContent = "Indovina il gentlement";
  } else {
    continueGameButton.textContent = "Prossima domanda";
  }
  continueGameButton.classList.toggle("hidden", !isHost);
  penaltyHostOnlyNote.classList.toggle("hidden", isHost);

  if (penaltyPlayers.length === 0) {
    penaltyList.innerHTML = '<p class="penalty-empty">Nessuno beve. Miracolo raro, quasi sospetto.</p>';
    return;
  }

  penaltyPlayers.forEach((player) => {
    if (isHost && !penaltyScored) {
      penaltyCounts[player] = (penaltyCounts[player] || 0) + 1;
      addFinalStats(player, currentPenalty);
    }

    const item = document.createElement("div");
    item.className = "penalty-item";
    const answer = votesByPlayer[player] || "Non ha votato";
    item.innerHTML = `
      <span class="penalty-player">${player}</span>
      <span class="penalty-answer">Risposta: ${answer}</span>
    `;
    penaltyList.appendChild(item);
  });

  if (isHost) {
    penaltyScored = true;
  }
}

function showPenalty() {
  if (!isHost) return;
  if (getIsUnanimousVote()) {
    showUnanimousPenalty();
    return;
  }

  currentPenalty = penaltyOptions[Math.floor(Math.random() * penaltyOptions.length)];
  renderPenalty();
  penaltySlotText.textContent = "Pronti?";
  penaltySlotText.parentElement.classList.add("is-spinning");
  setScreen("penalty");

  let spinIndex = 0;
  const spinIntervalId = setInterval(() => {
    setPenaltySlotDisplay(penaltyOptions[spinIndex % penaltyOptions.length]);
    spinIndex += 1;
  }, 350);

  setTimeout(() => {
    clearInterval(spinIntervalId);
    penaltySlotText.parentElement.classList.remove("is-spinning");
    setPenaltySlotDisplay(currentPenalty);
  }, 3500);
}

function setPenaltySlotDisplay(penalty) {
  if (penalty.toLowerCase() === "drink a goccia") {
    penaltySlotText.innerHTML = "drink a<br>goccia";
    return;
  }

  penaltySlotText.textContent = penalty;
}

function showUnanimousPenalty() {
  if (!isHost) return;
  currentPenalty = "1 SHOT PER TUTTI CACONI";
  if (isHost && !penaltyScored) {
    players.forEach((player) => {
      penaltyCounts[player] = (penaltyCounts[player] || 0) + 1;
      addFinalStats(player, "1 shot");
    });
    penaltyScored = true;
  }
  unanimousAnswerText.textContent = `Risposta unanime: ${getUnanimousAnswer()}`;
  unanimousHostOnlyNote.classList.toggle("hidden", isHost);
  continueGameUnanimousButton.classList.toggle("hidden", !isHost);
  unanimousSlotText.innerHTML = "1 SHOT PER TUTTI<br>CACONI";
  unanimousSlotText.parentElement.classList.remove("is-spinning");
  setScreen("unanimousPenalty");
}

function showGentlemanDayIntro() {
  if (!isHost) return;
  gentlemanDayPlayed = true;
  selectedGentlemanDay = "";
  gentlemanDayQuestionIndex = 0;
  selectedGentlemanDayQuestions = [];
  gentlemanDayAnswersByPlayer = {};
  scoredGentlemanDayMistakes = {};
  clearTimeout(gentlemanDayIntroTimeoutId);
  gentlemanDayIntroTimeoutId = null;
  setScreen("gentlemanDayIntro");
  gentlemanDayIntroAudio.currentTime = 0;
  gentlemanDayIntroAudio.volume = 0.42;
  gentlemanDayIntroAudio.play().catch(() => {});
  gentlemanDayIntroTimeoutId = setTimeout(showGentlemanDayDraw, 8000);
}

function renderGentlemanDayDrawScreen() {
  gentlemanDayRevealName.textContent = selectedGentlemanDay;

  const portraitSrc = gentlemanDayPortraits[selectedGentlemanDay];
  gentlemanDayPortrait.classList.toggle("hidden", !portraitSrc);
  gentlemanDayPortraitPlaceholder.classList.toggle("hidden", Boolean(portraitSrc));

  if (portraitSrc) {
    gentlemanDayPortrait.classList.remove("is-landscape", "is-portrait", "is-square");
    gentlemanDayPortrait.onload = updateGentlemanDayPortraitFit;
    gentlemanDayPortrait.src = portraitSrc;
    gentlemanDayPortrait.alt = `Foto di ${selectedGentlemanDay}`;
    if (gentlemanDayPortrait.complete) updateGentlemanDayPortraitFit();
  } else {
    gentlemanDayPortrait.removeAttribute("src");
    gentlemanDayPortrait.classList.remove("is-landscape", "is-portrait", "is-square");
  }
}

function showGentlemanDayDraw() {
  if (!isHost) return;
  selectedGentlemanDay = gentlemanDayDrawOptions[Math.floor(Math.random() * gentlemanDayDrawOptions.length)];
  selectedGentlemanDayQuestions = getGentlemanDayQuestionSet(selectedGentlemanDay);
  renderGentlemanDayDrawScreen();

  setScreen("gentlemanDayDraw");
  clearTimeout(gentlemanDayDrawTimeoutId);
  gentlemanDayDrawTimeoutId = setTimeout(() => {
    if (isHost && currentScreenName === "gentlemanDayDraw") showGentlemanDayQuestion();
  }, 5000);
}

function getCurrentGentlemanDayQuestion() {
  const questions = selectedGentlemanDayQuestions.length
    ? selectedGentlemanDayQuestions
    : getGentlemanDayQuestionSet(selectedGentlemanDay);
  return questions[gentlemanDayQuestionIndex] || {
    question: "Domanda da impostare.",
    options: gentlemanDayDefaultAnswers,
  };
}

function getGentlemanDayQuestionSet(gentlemanName) {
  const questions = gentlemanDayQuestions[gentlemanName] || [];
  return [...questions].sort(() => Math.random() - 0.5).slice(0, gentlemanDayTotalQuestions);
}

function updateGentlemanDayPortraitFit() {
  if (!gentlemanDayPortrait.naturalWidth || !gentlemanDayPortrait.naturalHeight) return;

  const isLandscape = gentlemanDayPortrait.naturalWidth > gentlemanDayPortrait.naturalHeight * 1.08;
  const isPortrait = gentlemanDayPortrait.naturalHeight > gentlemanDayPortrait.naturalWidth * 1.08;
  gentlemanDayPortrait.classList.toggle("is-landscape", isLandscape);
  gentlemanDayPortrait.classList.toggle("is-portrait", isPortrait);
  gentlemanDayPortrait.classList.toggle("is-square", !isLandscape && !isPortrait);
}

function renderGentlemanDayQuestionScreen() {
  const currentQuestion = getCurrentGentlemanDayQuestion();
  const currentPlayer = currentUserName || players[0] || "Giocatore";
  const playerAnswers = gentlemanDayAnswersByPlayer[currentPlayer] || {};
  const selectedAnswer = playerAnswers[gentlemanDayQuestionIndex] || "";

  gentlemanDayName.textContent = selectedGentlemanDay || "Gentlement";
  gentlemanDayProgress.textContent = `Domanda ${gentlemanDayQuestionIndex + 1}/${gentlemanDayTotalQuestions}`;
  gentlemanDayQuestionText.textContent = currentQuestion.question;
  gentlemanDayAnswers.innerHTML = "";
  gentlemanDayAnswerTimerBar.style.width = "100%";
  gentlemanDayAnswerTimerBar.offsetHeight;

  currentQuestion.options.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "gentleman-day-answer";
    button.type = "button";
    button.textContent = answer;
    button.classList.toggle("is-selected", answer === selectedAnswer);
    button.addEventListener("click", () => answerGentlemanDayQuestion(answer));
    gentlemanDayAnswers.appendChild(button);
  });

  continueGentlemanDayButton.textContent = "Vedi soluzione";
  continueGentlemanDayButton.disabled = !isHost;
  continueGentlemanDayButton.classList.add("hidden");
  gentlemanDayQuestionHostOnlyNote.classList.add("hidden");
}

function showGentlemanDayQuestion() {
  renderGentlemanDayQuestionScreen();
  setScreen("gentlemanDayQuestion");
  startGentlemanDayAnswerTimer();
}

function answerGentlemanDayQuestion(answer) {
  const currentPlayer = currentUserName || players[0] || "Giocatore";
  gentlemanDayAnswersByPlayer[currentPlayer] = {
    ...(gentlemanDayAnswersByPlayer[currentPlayer] || {}),
    [gentlemanDayQuestionIndex]: answer,
  };

  gentlemanDayAnswers.querySelectorAll(".gentleman-day-answer").forEach((button) => {
    button.classList.toggle("is-selected", button.textContent === answer);
  });

  publishSharedState({ gentlemanDayAnswersByPlayer });
}

function continueGentlemanDay() {
  if (!isHost) return;
  showGentlemanDayResult();
}

function startGentlemanDayAnswerTimer() {
  clearInterval(gentlemanDayAnswerTimerId);
  const answerStartedAt = Date.now();
  const answerDuration = gentlemanDayAnswerSeconds * 1000;

  gentlemanDayAnswerTimerId = setInterval(() => {
    const elapsed = Date.now() - answerStartedAt;
    const remainingPercent = Math.max(0, 100 - (elapsed / answerDuration) * 100);
    gentlemanDayAnswerTimerBar.style.width = `${remainingPercent}%`;

    if (elapsed >= answerDuration) {
      clearInterval(gentlemanDayAnswerTimerId);
      gentlemanDayAnswerTimerId = null;
      if (!isHost) return;
      showGentlemanDayResult();
    }
  }, 100);
}

function renderGentlemanDayResultScreen() {
  const currentQuestion = getCurrentGentlemanDayQuestion();
  const currentPlayer = currentUserName || players[0] || "Giocatore";
  const selectedAnswer = gentlemanDayAnswersByPlayer[currentPlayer]?.[gentlemanDayQuestionIndex] || "";
  const correctAnswer = currentQuestion.answer || currentQuestion.options?.[0] || "---";
  const isCorrect = selectedAnswer === correctAnswer;

  gentlemanDayCorrectAnswer.textContent = correctAnswer;
  gentlemanDayUserAnswer.textContent = `La tua risposta: ${selectedAnswer || "Non hai risposto"}`;
  gentlemanDayResultFeedback.classList.toggle("is-correct", isCorrect);
  gentlemanDayResultFeedback.classList.toggle("is-wrong", !isCorrect);
  gentlemanDayResultFeedback.innerHTML = isCorrect
    ? '<span class="gentlement-feedback-mark">✓</span>'
    : '<span class="gentlement-feedback-mark">×</span><small>Non conosci il tuo amico vergognati, fatti uno shot</small>';

  if (isHost) {
    players.forEach((player) => {
      const playerAnswer = gentlemanDayAnswersByPlayer[player]?.[gentlemanDayQuestionIndex] || "";
      const playerIsCorrect = playerAnswer === correctAnswer;
      const mistakeScoreKey = `${player}-${selectedGentlemanDay}-${gentlemanDayQuestionIndex}`;
      if (!playerIsCorrect && !scoredGentlemanDayMistakes[mistakeScoreKey]) {
        scoredGentlemanDayMistakes[mistakeScoreKey] = true;
        penaltyCounts[player] = (penaltyCounts[player] || 0) + 1;
        addFinalStats(player, "1 shot");
      }
    });
  }

  continueGentlemanDayResultButton.textContent =
    gentlemanDayQuestionIndex >= gentlemanDayTotalQuestions - 1 ? "Continua col round 3" : "Prossima domanda";
  continueGentlemanDayResultButton.disabled = !isHost;
  continueGentlemanDayResultButton.classList.toggle("hidden", !isHost);
  gentlemanDayResultHostOnlyNote.classList.toggle("hidden", isHost);
}

function showGentlemanDayResult() {
  renderGentlemanDayResultScreen();
  setScreen("gentlemanDayResult");
}

function continueAfterGentlemanDayResult() {
  if (!isHost) return;

  if (gentlemanDayQuestionIndex < gentlemanDayTotalQuestions - 1) {
    gentlemanDayQuestionIndex += 1;
    showGentlemanDayQuestion();
    return;
  }

  if (getGentlemanDayPitPlayers().length > 0) {
    showGentlemanDayPitFlameVideo();
    return;
  }

  continueAfterGentlemanDay();
}

function continueAfterGentlemanDay() {
  currentRound += 1;
  updateCurrentPlayer();
  drawCard();
  setScreen("game");
}

function getGentlemanDayPitPlayers() {
  const questions = selectedGentlemanDayQuestions.length
    ? selectedGentlemanDayQuestions
    : getGentlemanDayQuestionSet(selectedGentlemanDay);

  return players.filter((player) => {
    const playerAnswers = gentlemanDayAnswersByPlayer[player] || {};
    if (questions.length < gentlemanDayTotalQuestions) return false;

    return questions.slice(0, gentlemanDayTotalQuestions).every((question, index) => {
      const answer = playerAnswers[index];
      return answer && answer !== question.answer;
    });
  });
}

function showGentlemanDayPitFlameVideo() {
  if (!isHost) return;
  gentlemanDayPitPlayers = getGentlemanDayPitPlayers();
  gentlemanDayPitAnswersByPlayer = {};
  currentGentlemanDayPitQuestion = getRandomGentlemanDayPitQuestion();
  if (!gentlemanDayPitPlayers.length) {
    continueAfterGentlemanDay();
    return;
  }

  gentlemanDayPitFlameVideo.currentTime = 0;
  gentlemanDayPitFlameVideo.volume = 0.9;
  setScreen("gentlemanDayPitFlame");
  safelyPlayMedia(gentlemanDayPitFlameVideo);
  clearTimeout(gentlemanDayPitFlameFallbackId);
  scheduleHostVideoFallback(
    gentlemanDayPitFlameVideo,
    "gentlemanDayPitFlame",
    showGentlemanDayPitVideo,
    11000,
    (timeoutId) => {
      gentlemanDayPitFlameFallbackId = timeoutId;
    },
  );
}

function getRandomGentlemanDayPitQuestion() {
  return getRandomUnusedItem(gentlemanDayPitQuestions, usedGentlemanDayPitQuestionIndexes)
    || gentlemanDayPitQuestions[0];
}

function showGentlemanDayPitVideo() {
  if (!isHost) return;
  gentlemanDayPitVideo.currentTime = 0;
  gentlemanDayPitVideo.volume = 1;
  setScreen("gentlemanDayPitVideo");
  safelyPlayMedia(gentlemanDayPitVideo);
  clearTimeout(gentlemanDayPitVideoFallbackId);
  scheduleHostVideoFallback(
    gentlemanDayPitVideo,
    "gentlemanDayPitVideo",
    showGentlemanDayPitQuestion,
    18000,
    (timeoutId) => {
      gentlemanDayPitVideoFallbackId = timeoutId;
    },
  );
}

function renderGentlemanDayPitQuestionScreen() {
  const currentPlayer = currentUserName || players[0] || "Giocatore";
  const canAnswer = gentlemanDayPitPlayers.includes(currentPlayer);
  currentGentlemanDayPitQuestion = currentGentlemanDayPitQuestion || getRandomGentlemanDayPitQuestion();
  gentlemanDayPitPlayersText.textContent = `Nel pozzo: ${gentlemanDayPitPlayers.join(", ")}`;
  gentlemanDayPitQuestionText.textContent = currentGentlemanDayPitQuestion.question;
  gentlemanDayPitAnswers.innerHTML = "";

  currentGentlemanDayPitQuestion.options.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "gentleman-day-answer";
    button.type = "button";
    button.textContent = answer;
    button.disabled = !canAnswer;
    button.classList.toggle("is-selected", gentlemanDayPitAnswersByPlayer[currentPlayer] === answer);
    button.addEventListener("click", () => answerGentlemanDayPitQuestion(answer));
    gentlemanDayPitAnswers.appendChild(button);
  });

  gentlemanDayPitLockedNote.classList.toggle("hidden", canAnswer);
  continueAfterGentlemanDayPitButton.disabled = !isHost;
  continueAfterGentlemanDayPitButton.classList.toggle("hidden", !isHost);
}

function showGentlemanDayPitQuestion() {
  if (!isHost) return;
  renderGentlemanDayPitQuestionScreen();
  setScreen("gentlemanDayPitQuestion");
}

function answerGentlemanDayPitQuestion(answer) {
  const currentPlayer = currentUserName || players[0] || "Giocatore";
  if (!gentlemanDayPitPlayers.includes(currentPlayer)) return;

  gentlemanDayPitAnswersByPlayer[currentPlayer] = answer;
  gentlemanDayPitAnswers.querySelectorAll(".gentleman-day-answer").forEach((button) => {
    button.classList.toggle("is-selected", button.textContent === answer);
  });

  publishSharedState({ gentlemanDayPitAnswersByPlayer });

  if (isHost && gentlemanDayPitPlayers.every((player) => gentlemanDayPitAnswersByPlayer[player])) {
    setTimeout(showGentlemanDayPitResult, 650);
  }
}

function renderGentlemanDayPitResultScreen() {
  gentlemanDayPitResultList.innerHTML = "";
  const correctAnswer = currentGentlemanDayPitQuestion?.answer || "";

  gentlemanDayPitPlayers.forEach((player) => {
    const answer = gentlemanDayPitAnswersByPlayer[player] || "Non ha risposto";
    const isCorrect = answer === correctAnswer;
    const item = document.createElement("div");
    item.className = `pit-result-item ${isCorrect ? "is-correct" : "is-wrong"}`;
    item.innerHTML = `
      <span class="pit-result-player">${player}</span>
      <span class="pit-result-answer">${answer}</span>
      <span class="pit-result-status">${isCorrect ? "salvo dalla palude" : "inghiottito dal fango"}</span>
    `;
    gentlemanDayPitResultList.appendChild(item);
  });

  gentlemanDayPitResultLockedNote.classList.toggle("hidden", isHost);
  continueAfterGentlemanDayPitResultButton.disabled = !isHost;
  continueAfterGentlemanDayPitResultButton.classList.toggle("hidden", !isHost);
}

function showGentlemanDayPitResult() {
  if (!isHost) return;
  renderGentlemanDayPitResultScreen();
  setScreen("gentlemanDayPitResult");
}

function getBonusPlayers() {
  const sortedPlayers = [...players].sort((firstPlayer, secondPlayer) => {
    const firstCount = correctCounts[firstPlayer] || 0;
    const secondCount = correctCounts[secondPlayer] || 0;

    if (firstCount !== secondCount) return secondCount - firstCount;
    return firstPlayer.localeCompare(secondPlayer);
  });

  if (sortedPlayers.length <= 3) return sortedPlayers;

  const cutoffScore = correctCounts[sortedPlayers[2]] || 0;
  return sortedPlayers.filter((player) => (correctCounts[player] || 0) >= cutoffScore);
}

function renderBonusPlayers() {
  bonusPlayersList.innerHTML = "";
  currentBonusPlayers = getBonusPlayers();

  currentBonusPlayers.forEach((player) => {
    const item = document.createElement("div");
    item.className = "bonus-player";
    item.textContent = `${player} (${correctCounts[player] || 0} round azzeccati)`;
    bonusPlayersList.appendChild(item);
  });
}

function renderBonusQuestion() {
  currentBonusQuestion = getRandomUnusedItem(bonusQuestions, usedBonusQuestionIndexes) || bonusQuestions[0];
  bonusQuestionRevealed = false;
  bonusWinner = "";
  bonusPenaltyScored = false;
  bonusAnswerLockedUntil = {};
  bonusQuestionRevealedAt = 0;
  bonusReactionTimes = {};
  bonusCorrectPlayers = {};
  clearTimeout(bonusResultTimeoutId);
  clearInterval(bonusResultCountdownIntervalId);
  filmCountdown.classList.add("hidden");
  renderBonusScreen();
}

function renderBonusScreen() {
  const question = currentBonusQuestion || bonusQuestions[0];
  const currentPlayer = currentUserName || players[0] || "Giocatore";
  const canAnswerBonus = currentBonusPlayers.includes(currentPlayer);
  bonusQuestionText.textContent = question.question;
  bonusOptions.innerHTML = "";
  bonusQuestionWrap.classList.toggle("is-blurred", !bonusQuestionRevealed);
  bonusQuestionWrap.classList.remove("is-counting");
  bonusCountdown.classList.add("hidden");
  revealBonusQuestionButton.classList.toggle("hidden", !isHost || bonusQuestionRevealed);
  continueAfterBonusButton.classList.add("hidden");
  bonusHostOnlyNote.classList.toggle("hidden", isHost);
  bonusLockedText.classList.add("hidden");

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "bonus-option";
    button.type = "button";
    button.textContent = option;
    button.disabled = !bonusQuestionRevealed || !canAnswerBonus || Boolean(bonusWinner);
    button.dataset.canAnswer = String(canAnswerBonus);
    button.addEventListener("click", () => answerBonusQuestion(button, option));
    bonusOptions.appendChild(button);
  });
}

function revealBonusQuestion() {
  if (!isHost) return;
  clearTimeout(bonusRevealTimeoutId);
  clearInterval(bonusCountdownIntervalId);

  let countdown = 5;
  revealBonusQuestionButton.classList.add("hidden");
  bonusCountdown.textContent = countdown;
  bonusCountdown.classList.remove("hidden");
  bonusQuestionWrap.classList.add("is-counting");

  bonusCountdownIntervalId = setInterval(() => {
    countdown -= 1;
    bonusCountdown.textContent = countdown;

    if (countdown <= 1) {
      clearInterval(bonusCountdownIntervalId);
    }
  }, 1000);

  bonusRevealTimeoutId = setTimeout(() => {
    showBonusQuestionNow();
  }, 5000);
}

function showBonusQuestionNow() {
  if (!isHost) return;
  bonusQuestionRevealed = true;
  bonusQuestionRevealedAt = Date.now();
  bonusQuestionWrap.classList.remove("is-blurred");
  bonusQuestionWrap.classList.remove("is-counting");
  bonusCountdown.classList.add("hidden");

  bonusOptions.querySelectorAll(".bonus-option").forEach((button) => {
    button.disabled = button.dataset.canAnswer !== "true";
  });
  publishSharedState();
}

function answerBonusQuestion(selectedButton, selectedAnswer) {
  if (!bonusQuestionRevealed) return;
  if (bonusWinner) return;
  if (bonusCorrectPlayers[currentUserName]) return;

  const now = Date.now();
  const lockedUntil = bonusAnswerLockedUntil[currentUserName] || 0;
  if (now < lockedUntil) return;

  const isCorrect = selectedAnswer === currentBonusQuestion.answer;

  if (!isCorrect) {
    selectedButton.classList.add("is-wrong");
    lockBonusAnswersForCurrentUser(3000);
    publishSharedState({ bonusAnswerLockedUntil });
    return;
  }

  bonusCorrectPlayers[currentUserName] = true;
  bonusReactionTimes[currentUserName] = now - bonusQuestionRevealedAt;
  publishSharedState({ bonusCorrectPlayers, bonusReactionTimes });
  selectedButton.classList.add("is-correct");

  bonusOptions.querySelectorAll(".bonus-option").forEach((button) => {
    button.disabled = true;
  });

  if (isHost && getAllBonusPlayersAnsweredCorrectly()) {
    scheduleBonusResult();
  }
}

function lockBonusAnswersForCurrentUser(duration) {
  const unlockAt = Date.now() + duration;
  bonusAnswerLockedUntil[currentUserName] = unlockAt;

  bonusOptions.querySelectorAll(".bonus-option").forEach((button) => {
    if (button.dataset.canAnswer === "true") {
      button.disabled = true;
    }
  });

  setTimeout(() => {
    if (bonusWinner) return;
    if (!bonusQuestionRevealed) return;
    if ((bonusAnswerLockedUntil[currentUserName] || 0) > Date.now()) return;

    bonusOptions.querySelectorAll(".bonus-option").forEach((button) => {
      if (button.dataset.canAnswer === "true") {
        button.disabled = false;
      }
    });
  }, duration);
}

function getAllBonusPlayersAnsweredCorrectly() {
  return currentBonusPlayers.every((player) => bonusCorrectPlayers[player]);
}

function scheduleBonusResult() {
  if (!isHost) return;
  clearTimeout(bonusResultTimeoutId);
  clearInterval(bonusResultCountdownIntervalId);
  bonusWinner = getFastestBonusPlayer();
  let countdown = 3;

  filmCountdownText.textContent = countdown;
  filmCountdown.classList.remove("hidden");

  bonusResultCountdownIntervalId = setInterval(() => {
    countdown -= 1;
    filmCountdownText.textContent = countdown;

    if (countdown <= 1) {
      clearInterval(bonusResultCountdownIntervalId);
    }
  }, 1000);

  bonusResultTimeoutId = setTimeout(() => {
    filmCountdown.classList.add("hidden");
    renderBonusResult();
    setScreen("bonusResult");
  }, 3000);
}

function getFastestBonusPlayer() {
  return [...currentBonusPlayers].sort((firstPlayer, secondPlayer) => {
    const firstTime = bonusReactionTimes[firstPlayer] ?? Number.POSITIVE_INFINITY;
    const secondTime = bonusReactionTimes[secondPlayer] ?? Number.POSITIVE_INFINITY;

    if (firstTime !== secondTime) return firstTime - secondTime;
    return firstPlayer.localeCompare(secondPlayer);
  })[0];
}

function renderBonusResult() {
  const drinkers = currentBonusPlayers.filter((player) => player !== bonusWinner);
  restartBonusFireworks();
  bonusWinnerText.innerHTML = `
    <span>${bonusWinner}</span>
    <span class="bonus-reaction">${formatReactionTime(bonusWinner)}</span>
  `;
  bonusDrinkersList.innerHTML = "";
  bonusResultHostOnlyNote.classList.toggle("hidden", isHost);
  continueAfterBonusButton.classList.toggle("hidden", !isHost);

  if (!drinkers.length) {
    const item = document.createElement("div");
    item.className = "bonus-drinker";
    item.textContent = "Nessun altro beve";
    bonusDrinkersList.appendChild(item);
    return;
  }

  drinkers.forEach((player) => {
    if (isHost && !bonusPenaltyScored) {
      penaltyCounts[player] = (penaltyCounts[player] || 0) + 1;
      addFinalStats(player, "3 shot");
    }

    const item = document.createElement("div");
    item.className = "bonus-drinker";
    item.innerHTML = `
      <span class="bonus-drinker-name">${player}</span>
      <span class="bonus-drinker-meta">
        <span class="bonus-reaction">${formatReactionTime(player)}</span>
        <span class="bonus-drinker-icons" aria-label="penitenza">❌ 🍺</span>
      </span>
    `;
    bonusDrinkersList.appendChild(item);
  });

  if (isHost) {
    bonusPenaltyScored = true;
  }
}

function restartBonusFireworks() {
  bonusFireworks.querySelectorAll("span").forEach((spark) => {
    spark.style.animation = "none";
    spark.offsetHeight;
    spark.style.animation = "";
  });
}

function formatReactionTime(player) {
  const reactionTime = bonusReactionTimes[player];
  return Number.isFinite(reactionTime) ? `${reactionTime} ms` : "nessuna risposta";
}

function showBonusRound() {
  if (!isHost) return;
  bonusPlayed = true;
  clearInterval(timerIntervalId);
  renderBonusPlayers();
  renderBonusQuestion();
  setScreen("bonus");
}

function showBonusIntro() {
  if (!isHost) return;
  clearInterval(timerIntervalId);
  bonusIntroVideo.currentTime = 0;
  bonusIntroVideoBg.currentTime = 0;
  bonusIntroVideo.volume = 1;
  setScreen("bonusIntro");
  safelyPlayMedia(bonusIntroVideoBg);
  safelyPlayMedia(bonusIntroVideo);
  clearTimeout(bonusIntroFallbackId);
  scheduleHostVideoFallback(
    bonusIntroVideo,
    "bonusIntro",
    showBonusRound,
    11000,
    (timeoutId) => {
      bonusIntroFallbackId = timeoutId;
    },
  );
}

function continueAfterBonus() {
  if (!isHost) return;
  currentRound += 1;
  updateCurrentPlayer();
  drawCard();
  setScreen("game");
}

function showGentlementGame() {
  gentlementGamePlayed = true;
  gentlementGameRound = 0;
  usedGentlementPhotoIndexes = [];
  gentlementAnswersByPlayer = {};
  scoredGentlementMistakes = {};
  showGentlementIntro();
}

function showGentlementIntro() {
  if (!isHost) return;
  clearInterval(gentlementPhotoTimerId);
  gentlementPhotoTimerId = null;
  setScreen("gentlementIntro");
  gentlementIntroVideo.currentTime = 0;
  safelyPlayMedia(gentlementIntroVideo);
  clearTimeout(gentlementIntroFallbackId);
  scheduleHostVideoFallback(
    gentlementIntroVideo,
    "gentlementIntro",
    showNextGentlementPhoto,
    10000,
    (timeoutId) => {
      gentlementIntroFallbackId = timeoutId;
    },
  );
}

function getRandomGentlementPhoto() {
  if (!gentlementPhotoPool.length) {
    return {
      src: "",
      answer: gentlementAnswerOptions[Math.floor(Math.random() * gentlementAnswerOptions.length)],
    };
  }

  const availableIndexes = gentlementPhotoPool
    .map((_, index) => index)
    .filter((index) => !usedGentlementPhotoIndexes.includes(index));
  const poolIndexes = availableIndexes.length ? availableIndexes : gentlementPhotoPool.map((_, index) => index);
  const randomIndex = poolIndexes[Math.floor(Math.random() * poolIndexes.length)];
  usedGentlementPhotoIndexes.push(randomIndex);
  return gentlementPhotoPool[randomIndex];
}

function getRandomZoomPosition() {
  const positions = [
    "18% 22%",
    "50% 16%",
    "78% 24%",
    "26% 58%",
    "50% 50%",
    "74% 58%",
    "38% 82%",
    "62% 82%",
  ];
  return positions[Math.floor(Math.random() * positions.length)];
}

function showNextGentlementPhoto() {
  if (!isHost) return;
  gentlementGameRound += 1;
  currentGentlementPhoto = getRandomGentlementPhoto();
  currentGentlementAnswer = "";
  gentlementAnswersByPlayer = {};

  gentlementRoundLabel.textContent = `Foto ${gentlementGameRound}/${gentlementGameTotalRounds}`;
  gentlementPhotoTimer.textContent = gentlementPhotoSeconds;

  if (currentGentlementPhoto.src) {
    gentlementPhoto.src = currentGentlementPhoto.src;
    gentlementPhoto.classList.remove("hidden");
    gentlementPhotoPlaceholder.classList.add("hidden");
  } else {
    gentlementPhoto.removeAttribute("src");
    gentlementPhoto.classList.add("hidden");
    gentlementPhotoPlaceholder.classList.remove("hidden");
  }

  setScreen("gentlementPhoto");
  playGentlementPhotoAudio();
  startGentlementQuizMusic();
  startGentlementPhotoTimer();
}

function playGentlementPhotoAudio() {
  const audioToPlay = gentlementGameRound === 1
    ? gentlementFirstPhotoAudio
    : gentlementGameRound === 2
      ? gentlementSecondPhotoAudio
    : gentlementGameRound === 3
      ? gentlementThirdPhotoAudio
      : gentlementPhotoAudio;
  const allGentlementPhotoAudio = [
    gentlementFirstPhotoAudio,
    gentlementSecondPhotoAudio,
    gentlementPhotoAudio,
    gentlementThirdPhotoAudio,
  ];

  allGentlementPhotoAudio.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  audioToPlay.play().catch(() => {});
}

function getGentlementQuizAudioContext() {
  if (!gentlementQuizAudioContext) {
    gentlementQuizAudioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  return gentlementQuizAudioContext;
}

function playGentlementQuizNote(frequency, startOffset = 0, duration = 0.18, volume = 0.035) {
  const audioContext = getGentlementQuizAudioContext();
  const startTime = audioContext.currentTime + startOffset;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(frequency, startTime);
  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.exponentialRampToValueAtTime(volume, startTime + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

  oscillator.connect(gain).connect(gentlementQuizMasterGain || audioContext.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.04);
}

function startGentlementQuizMusic() {
  const audioContext = getGentlementQuizAudioContext();
  audioContext.resume?.();
  stopGentlementQuizMusic();

  gentlementQuizMasterGain = audioContext.createGain();
  gentlementQuizMasterGain.gain.setValueAtTime(0.58, audioContext.currentTime);
  gentlementQuizMasterGain.connect(audioContext.destination);

  const pattern = [392, 494, 587, 494, 440, 554, 659, 554];
  let step = 0;

  const playStep = () => {
    playGentlementQuizNote(pattern[step % pattern.length], 0, 0.16, 0.034);
    playGentlementQuizNote(pattern[(step + 2) % pattern.length] / 2, 0.02, 0.18, 0.024);
    step += 1;
  };

  playStep();
  gentlementQuizMusicIntervalId = setInterval(playStep, 330);
}

function playGentlementFinalTick() {
  const audioContext = getGentlementQuizAudioContext();
  const startTime = audioContext.currentTime;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(880, startTime);
  oscillator.frequency.exponentialRampToValueAtTime(660, startTime + 0.16);
  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.22, startTime + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.2);

  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(startTime);
  oscillator.stop(startTime + 0.24);
}

function stopGentlementQuizMusic() {
  clearInterval(gentlementQuizMusicIntervalId);
  clearInterval(gentlementFinalTickIntervalId);
  gentlementQuizMusicIntervalId = null;
  gentlementFinalTickIntervalId = null;

  if (gentlementQuizMasterGain) {
    gentlementQuizMasterGain.disconnect();
    gentlementQuizMasterGain = null;
  }
}

function startGentlementPhotoTimer() {
  let remainingPhotoSeconds = gentlementPhotoSeconds;
  clearInterval(gentlementPhotoTimerId);
  clearInterval(gentlementFinalTickIntervalId);
  gentlementPhotoTimer.classList.remove("is-ending");

  gentlementPhotoTimerId = setInterval(() => {
    remainingPhotoSeconds -= 1;
    gentlementPhotoTimer.textContent = remainingPhotoSeconds;

    if (remainingPhotoSeconds <= 5 && remainingPhotoSeconds > 0) {
      gentlementPhotoTimer.classList.add("is-ending");
      playGentlementFinalTick();
    }

    if (remainingPhotoSeconds <= 0) {
      clearInterval(gentlementPhotoTimerId);
      gentlementPhotoTimerId = null;
      gentlementPhotoTimer.classList.remove("is-ending");
      stopGentlementQuizMusic();
      if (!isHost) return;
      showGentlementAnswers();
    }
  }, 1000);
}

function renderGentlementAnswersScreen() {
  gentlementAnswerGrid.innerHTML = "";
  const selectedAnswer = gentlementAnswersByPlayer[currentUserName || players[0] || "Giocatore"] || "";
  gentlementAnswerTimerBar.style.width = "100%";
  gentlementAnswerTimerBar.offsetHeight;

  gentlementAnswerOptions.forEach((answer) => {
    const button = document.createElement("button");
    button.className = "gentlement-answer-button";
    button.type = "button";
    button.textContent = answer;
    button.classList.toggle("is-selected", answer === selectedAnswer);
    button.addEventListener("click", () => answerGentlementQuestion(answer));
    gentlementAnswerGrid.appendChild(button);
  });
}

function showGentlementAnswers() {
  if (!isHost) return;
  currentGentlementAnswer = "";
  renderGentlementAnswersScreen();
  setScreen("gentlementAnswers");
  startGentlementAnswerTimer();
}

function answerGentlementQuestion(answer) {
  currentGentlementAnswer = answer;
  gentlementAnswersByPlayer[currentUserName || players[0] || "Giocatore"] = answer;
  gentlementAnswerGrid.querySelectorAll(".gentlement-answer-button").forEach((button) => {
    button.classList.toggle("is-selected", button.textContent === answer);
  });

  publishSharedState({ gentlementAnswersByPlayer });
}

function startGentlementAnswerTimer() {
  clearInterval(gentlementAnswerTimerId);
  const answerStartedAt = Date.now();
  const answerDuration = gentlementAnswerSeconds * 1000;

  gentlementAnswerTimerId = setInterval(() => {
    const elapsed = Date.now() - answerStartedAt;
    const remainingPercent = Math.max(0, 100 - (elapsed / answerDuration) * 100);
    gentlementAnswerTimerBar.style.width = `${remainingPercent}%`;

    if (elapsed >= answerDuration) {
      clearInterval(gentlementAnswerTimerId);
      gentlementAnswerTimerId = null;
      if (!isHost) return;
      renderGentlementResult();
      setScreen("gentlementResult");
    }
  }, 100);
}

function renderGentlementResult() {
  const correctAnswer = currentGentlementPhoto?.answer || "Da impostare";
  const currentPlayer = currentUserName || players[0] || "Giocatore";
  const playerAnswer = gentlementAnswersByPlayer[currentPlayer] || "";
  const isCorrect = playerAnswer === correctAnswer;

  gentlementResultTitle.textContent = "Il gentlement era ...";
  gentlementCorrectAnswer.textContent = correctAnswer;
  gentlementUserAnswer.textContent = `La tua risposta: ${playerAnswer || "---"}`;
  gentlementResultFeedback.className = `gentlement-result-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
  gentlementResultFeedback.innerHTML = isCorrect
    ? '<span class="gentlement-feedback-mark">✓</span>'
    : '<span class="gentlement-feedback-mark">×</span><small>Ti sei meritato uno shottino</small>';

  if (isHost) {
    players.forEach((player) => {
      const playerAnswerForScore = gentlementAnswersByPlayer[player] || "";
      const playerIsCorrect = playerAnswerForScore === correctAnswer;
      const mistakeScoreKey = `${gentlementGameRound}-${player}`;
      if (!playerIsCorrect && !scoredGentlementMistakes[mistakeScoreKey]) {
        scoredGentlementMistakes[mistakeScoreKey] = true;
        penaltyCounts[player] = (penaltyCounts[player] || 0) + 1;
        addFinalStats(player, "1 shot");
      }
    });
  }

  gentlementNextButton.textContent = gentlementGameRound >= gentlementGameTotalRounds
    ? "Continua col round 9"
    : "Prossima foto";
  gentlementNextButton.classList.toggle("hidden", !isHost);
  gentlementNextButton.disabled = !isHost;
  gentlementResultHostOnlyNote.classList.toggle("hidden", isHost);
}

function continueGentlementGame() {
  if (!isHost) return;

  if (gentlementGameRound >= gentlementGameTotalRounds) {
    currentRound += 1;
    updateCurrentPlayer();
    drawCard();
    setScreen("game");
    return;
  }

  showNextGentlementPhoto();
}

function showFinalWheel() {
  if (!isHost) return;
  gentlementExtracted = false;
  currentGentlement = "";
  currentWheelPenalty = "";
  extractedGentlements = [];
  wheelRotation = 0;
  wheelStage.classList.remove("is-spinning");
  finalWheel.style.transform = "rotate(0deg)";
  gentlementSlot.classList.add("hidden");
  gentlementSlot.classList.remove("is-leaving");
  gentlementSlotText.textContent = "Pronti?";
  gentlementNameBadge.classList.add("hidden");
  gentlementNameBadge.classList.remove("is-visible");
  wheelResult.classList.add("hidden");
  wheelResultText.textContent = "---";
  resetSecretChallenge();
  wheelCenterSpinButton.disabled = true;
  drawGentlementButton.classList.toggle("hidden", !isHost);
  drawGentlementButton.disabled = false;
  drawGentlementButton.textContent = "Estrai il gentlement";
  finishAfterWheelButton.classList.add("hidden");
  finishAfterWheelNote.classList.add("hidden");
  setScreen("wheel");
}

function renderFinalWheelScreen() {
  finalWheel.style.transform = `rotate(${wheelRotation}deg)`;
  wheelStage.classList.toggle("is-spinning", false);
  gentlementSlot.classList.add("hidden");
  gentlementSlot.classList.remove("is-leaving");
  gentlementSlotText.parentElement.classList.remove("is-spinning");

  if (currentGentlement) {
    gentlementNameBadge.textContent = currentGentlement;
    gentlementNameBadge.classList.remove("hidden");
    gentlementNameBadge.classList.add("is-visible");
  } else {
    gentlementNameBadge.classList.add("hidden");
    gentlementNameBadge.classList.remove("is-visible");
  }

  if (currentWheelPenalty) {
    wheelResultText.textContent = currentWheelPenalty;
    wheelResult.classList.remove("hidden");
  } else {
    wheelResultText.textContent = "---";
    wheelResult.classList.add("hidden");
  }

  if (currentChallengePlayer) {
    showSecretChallengePicker(currentChallengePlayer);
  } else {
    resetSecretChallenge();
  }

  const allExtracted = extractedGentlements.length >= players.length && players.length > 0;
  wheelCenterSpinButton.disabled = !gentlementExtracted || currentUserName !== currentGentlement;
  drawGentlementButton.classList.toggle("hidden", !isHost || gentlementExtracted || allExtracted);
  drawGentlementButton.disabled = !isHost || gentlementExtracted || allExtracted;
  drawGentlementButton.textContent = "Estrai il gentlement";
  finishAfterWheelButton.classList.toggle("hidden", !isHost || !allExtracted);
  finishAfterWheelButton.disabled = !isHost || !allExtracted;
  finishAfterWheelNote.classList.toggle("hidden", isHost || !allExtracted);
}

function resetSecretChallenge() {
  currentChallengePlayer = "";
  secretChallengePanel.classList.add("hidden");
  secretChallengePublicText.classList.add("hidden");
  secretChallengePublicText.textContent = "";
  secretChallengeSelect.value = "0";
  secretChallengeSelect.disabled = false;
  revealSecretChallengeButton.disabled = false;
  revealSecretChallengeButton.textContent = "Rivela la sfida";
  secretChallengeText.classList.add("hidden");
  secretChallengeText.textContent = "";
}

function showSecretChallengePicker(player) {
  currentChallengePlayer = player;
  secretChallengeText.classList.add("hidden");
  secretChallengeText.textContent = "";
  secretChallengePublicText.classList.add("hidden");
  secretChallengePublicText.textContent = "";

  if (currentUserName === currentChallengePlayer) {
    secretChallengePanel.classList.remove("hidden");
    secretChallengeSelect.disabled = false;
    revealSecretChallengeButton.disabled = false;
    revealSecretChallengeButton.textContent = "Rivela la sfida";
  } else {
    secretChallengePanel.classList.add("hidden");
    secretChallengePublicText.textContent = `${currentChallengePlayer} ha scelto una sfida segreta. Se non riesce a farla sono 4 shot.`;
    secretChallengePublicText.classList.remove("hidden");
  }
}

function revealSecretChallenge() {
  if (currentUserName !== currentChallengePlayer) return;

  const challengeIndex = Number(secretChallengeSelect.value);
  secretChallengeText.textContent = secretChallenges[challengeIndex] || secretChallenges[0];
  secretChallengeText.classList.remove("hidden");
  secretChallengeSelect.disabled = true;
  revealSecretChallengeButton.disabled = true;
  revealSecretChallengeButton.textContent = "Sfida rivelata";
}

function showEndScreen() {
  renderFinalRanking();
  backToLobbyButton.classList.toggle("hidden", !isHost);
  backToLobbyButton.disabled = !isHost;
  podiumHostNote.classList.toggle("hidden", isHost);
  setScreen("end");
}

function renderFinalRanking() {
  if (!rankingList) return;

  rankingList.innerHTML = "";
  rankingList.classList.remove("is-compact", "is-dense", "is-ultra");

  const rankedPlayers = [...players].sort((firstPlayer, secondPlayer) =>
    firstPlayer.localeCompare(secondPlayer, "it", { sensitivity: "base" }),
  );

  if (rankedPlayers.length > 12) {
    rankingList.classList.add("is-ultra");
  } else if (rankedPlayers.length > 8) {
    rankingList.classList.add("is-dense");
  } else if (rankedPlayers.length > 5) {
    rankingList.classList.add("is-compact");
  }

  rankedPlayers.forEach((player, index) => {
    const item = document.createElement("div");
    item.className = "final-player";
    item.innerHTML = `
      <span class="final-player-name">${index + 1}. ${player}</span>
      <span class="final-player-stat">
        <small>Shot</small>
        <strong>${shotCounts[player] || 0}</strong>
      </span>
      <span class="final-player-stat">
        <small>Drink</small>
        <strong>${drinkCounts[player] || 0}</strong>
      </span>
    `;
    rankingList.appendChild(item);
  });
}

function spinFinalWheel() {
  if (!gentlementExtracted) return;
  if (currentUserName !== currentGentlement) return;

  wheelCenterSpinButton.disabled = true;
  gentlementExtracted = false;
  currentWheelPenalty = "";
  wheelResult.classList.add("hidden");
  resetSecretChallenge();
  wheelStage.classList.add("is-spinning");
  const spinningGentlement = currentGentlement;

  const selectedIndex = Math.floor(Math.random() * finalWheelPenalties.length);
  const segmentSize = 360 / finalWheelPenalties.length;
  const segmentCenter = selectedIndex * segmentSize + segmentSize / 2;
  const extraSpins = 7 + Math.floor(Math.random() * 3);
  const spinRotation = extraSpins * 360 + (360 - segmentCenter);
  wheelRotation += spinRotation;

  finalWheel.style.transform = `rotate(${wheelRotation}deg)`;

  setTimeout(() => {
    wheelStage.classList.remove("is-spinning");
    const selectedPenalty = finalWheelPenalties[selectedIndex];
    currentWheelPenalty = selectedPenalty;
    wheelResultText.textContent = selectedPenalty;
    wheelResult.classList.remove("hidden");
    if (selectedPenalty === "SFIDA") {
      showSecretChallengePicker(spinningGentlement);
    }
    if (!extractedGentlements.includes(currentGentlement)) {
      penaltyCounts[currentGentlement] = (penaltyCounts[currentGentlement] || 0) + 1;
      addFinalStats(currentGentlement, selectedPenalty);
      extractedGentlements.push(currentGentlement);
    }
    prepareNextGentlementStep();
    publishSharedState({
      wheelRotation,
      gentlementExtracted,
      currentGentlement,
      currentWheelPenalty,
      extractedGentlements,
      currentChallengePlayer,
      penaltyCounts,
      shotCounts,
      drinkCounts,
    });
  }, 5600);
}

function drawGentlement() {
  if (extractedGentlements.length >= players.length) {
    return;
  }

  if (!players.length) return;

  const availablePlayers = players.filter((player) => !extractedGentlements.includes(player));
  if (!availablePlayers.length) {
    return;
  }

  const selectedPlayer = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
  gentlementSlot.classList.remove("hidden");
  gentlementSlot.classList.remove("is-leaving");
  gentlementSlotText.textContent = "Pronti?";
  gentlementSlotText.parentElement.classList.add("is-spinning");
  gentlementNameBadge.classList.add("hidden");
  gentlementNameBadge.classList.remove("is-visible");
  wheelResult.classList.add("hidden");
  wheelResultText.textContent = "---";
  currentWheelPenalty = "";
  resetSecretChallenge();
  drawGentlementButton.disabled = true;
  drawGentlementButton.classList.add("hidden");
  wheelCenterSpinButton.disabled = true;

  let spinIndex = 0;
  const spinIntervalId = setInterval(() => {
    gentlementSlotText.textContent = availablePlayers[spinIndex % availablePlayers.length];
    spinIndex += 1;
  }, 350);

  setTimeout(() => {
    clearInterval(spinIntervalId);
    gentlementSlotText.parentElement.classList.remove("is-spinning");
    gentlementSlotText.textContent = selectedPlayer;
    revealGentlementFinale(selectedPlayer);
  }, 3500);
}

function revealGentlementFinale(selectedPlayer) {
  setTimeout(() => {
    gentlementSlot.classList.add("is-leaving");
  }, 450);

  setTimeout(() => {
    gentlementSlot.classList.add("hidden");
    gentlementSlot.classList.remove("is-leaving");
    currentGentlement = selectedPlayer;
    gentlementNameBadge.textContent = selectedPlayer;
    gentlementNameBadge.classList.remove("hidden");
    gentlementNameBadge.classList.add("is-visible");
    gentlementExtracted = true;
    wheelCenterSpinButton.disabled = currentUserName !== currentGentlement;
    publishSharedState();
  }, 900);
}

function prepareNextGentlementStep() {
  currentGentlement = "";

  if (extractedGentlements.length >= players.length) {
    drawGentlementButton.classList.add("hidden");
    drawGentlementButton.disabled = true;
    finishAfterWheelButton.classList.toggle("hidden", !isHost);
    finishAfterWheelButton.disabled = !isHost;
    finishAfterWheelNote.classList.toggle("hidden", isHost);
  } else {
    finishAfterWheelButton.classList.add("hidden");
    finishAfterWheelNote.classList.add("hidden");
    if (!isHost) return;

    drawGentlementButton.classList.remove("hidden");
    drawGentlementButton.disabled = false;
    drawGentlementButton.textContent = "Estrai il gentlement";
  }
}

function finishRound() {
  clearInterval(timerIntervalId);
  renderResults();
  setScreen("results");
  publishSharedState();
}

function recordAnswer(player) {
  if (!currentUserName) return;

  votesByPlayer[currentUserName] = player;
  recomputeResponseCounts();
  renderAnswerOptions();
  publishSharedState({ votesByPlayer, responseCounts });

  if (isHost && haveAllPlayersAnswered()) {
    finishRound();
  }
}

function renderAnswerOptions() {
  answersGrid.innerHTML = "";
  answersGrid.classList.toggle("is-many", players.length > 6);
  answersGrid.classList.toggle("is-crowded", players.length > 10);
  gameScreen.classList.toggle("has-many-answers", players.length > 6);
  gameScreen.classList.toggle("has-crowded-answers", players.length > 10);

  players.forEach((player) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = player;
    button.classList.toggle("is-selected", votesByPlayer[currentUserName] === player);
    button.addEventListener("click", () => recordAnswer(player));
    answersGrid.appendChild(button);
  });
}

function createRoomCode() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";

  for (let index = 0; index < 4; index += 1) {
    code += letters[Math.floor(Math.random() * letters.length)];
  }

  return code;
}

async function enterLobby() {
  const playerName = playerNameInput.value.trim();
  const typedCode = roomCodeInput.value.trim().toUpperCase();

  if (!playerName) return;
  if (selectedRoomAction === "join" && typedCode.length < 4) return;

  if (isOnlineMultiplayer()) {
    try {
      const endpoint =
        selectedRoomAction === "create" ? "/api/rooms" : `/api/rooms/${typedCode}/join`;
      const payload = await requestJson(endpoint, {
        method: "POST",
        body: JSON.stringify({ name: playerName, mode: selectedMode }),
      });

      applyRoomPayload(payload.room, payload.playerId);

      if (selectedRoomAction === "create") {
        resetGameStats();
        publishSharedState(getSharedState({ screen: "lobby" }));
      }

      startRoomLiveSync();
      return;
    } catch (error) {
      alert(error.message);
      return;
    }
  }

  players.length = 0;
  players.push(playerName);
  currentUserName = playerName;
  isHost = selectedRoomAction === "create";
  lobbySeatAssignments = {};
  gentlemanDayPlayed = false;
  selectedGentlemanDay = "";
  gentlemanDayQuestionIndex = 0;
  gentlemanDayAnswersByPlayer = {};
  scoredGentlemanDayMistakes = {};
  gentlementGamePlayed = false;
  gentlementGameRound = 0;
  usedGentlementPhotoIndexes = [];
  gentlementAnswersByPlayer = {};
  scoredGentlementMistakes = {};
  penaltyCounts = {};
  shotCounts = {};
  drinkCounts = {};
  correctCounts = {};
  players.forEach((player) => {
    penaltyCounts[player] = 0;
    shotCounts[player] = 0;
    drinkCounts[player] = 0;
    correctCounts[player] = 0;
  });
  currentRoomCode = selectedRoomAction === "create" ? createRoomCode() : typedCode;
  roomCodeText.textContent = currentRoomCode;
  selectedModeText.textContent = selectedMode === "omini" ? "Solo maschi" : "Completa";
  startGameButton.classList.toggle("hidden", !isHost);
  lobbyWaitNote.classList.toggle("hidden", isHost);
  renderPlayers();
  setScreen("lobby");
}

function resetGameStats() {
  penaltyCounts = {};
  shotCounts = {};
  drinkCounts = {};
  correctCounts = {};
  players.forEach((player) => {
    penaltyCounts[player] = 0;
    shotCounts[player] = 0;
    drinkCounts[player] = 0;
    correctCounts[player] = 0;
  });
}

roomChoiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    roomChoiceButtons.forEach((choiceButton) => choiceButton.classList.remove("active"));
    button.classList.add("active");
    selectedRoomAction = button.dataset.roomAction;

    if (selectedRoomAction === "create") {
      enterLobby();
    } else {
      roomCodeInput.focus();
    }
  });
});

roomForm.addEventListener("submit", (event) => {
  event.preventDefault();
  selectedRoomAction = "join";
  enterLobby();
});

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.mode === "completa") {
      modeDescription.textContent = modeDescriptions.completa;
      return;
    }

    modeButtons.forEach((modeButton) => modeButton.classList.remove("active"));
    button.classList.add("active");
    selectedMode = button.dataset.mode;
    modeDescription.textContent = modeDescriptions[selectedMode];
  });
});

startGameButton.addEventListener("click", () => {
  if (!isHost) return;

  if (players.length === 0) {
    players.push("Giocatore 1");
    renderPlayers();
  }

  currentRound = 1;
  bonusPlayed = false;
  gentlemanDayPlayed = false;
  selectedGentlemanDay = "";
  gentlemanDayQuestionIndex = 0;
  selectedGentlemanDayQuestions = [];
  gentlemanDayAnswersByPlayer = {};
  gentlemanDayPitAnswersByPlayer = {};
  currentGentlemanDayPitQuestion = null;
  scoredGentlemanDayMistakes = {};
  gentlementGamePlayed = false;
  gentlementGameRound = 0;
  usedGentlementPhotoIndexes = [];
  gentlementAnswersByPlayer = {};
  scoredGentlementMistakes = {};
  bonusAnswerLockedUntil = {};
  bonusQuestionRevealedAt = 0;
  currentWheelPenalty = "";
  gentlementExtracted = false;
  currentGentlement = "";
  extractedGentlements = [];
  currentChallengePlayer = "";
  resetGameStats();
  resetUsedQuestionPools();
  updateCurrentPlayer();
  renderAnswerOptions();
  setScreen("game");
  drawCard();
});

backToIntroButton.addEventListener("click", () => {
  clearInterval(timerIntervalId);
  setScreen("lobby");
});

backToRoomButton.addEventListener("click", () => {
  setScreen("intro");
});

backToLobbyButton.addEventListener("click", () => {
  if (!isHost) return;
  showPodiumSuspense();
});

podiumSuspenseVideo.addEventListener("ended", () => {
  if (isHost) showFinalPodium();
});
installHostVideoSafety(
  podiumSuspenseVideo,
  "podium",
  showFinalPodium,
  9000,
  (timeoutId) => {
    clearTimeout(podiumSuspenseFallbackId);
    podiumSuspenseFallbackId = timeoutId;
  },
);

showPenaltyButton.addEventListener("click", showPenalty);

continueGameButton.addEventListener("click", continueAfterResults);

continueGameUnanimousButton.addEventListener("click", continueAfterResults);

continueGentlemanDayButton.addEventListener("click", continueGentlemanDay);

continueGentlemanDayResultButton.addEventListener("click", continueAfterGentlemanDayResult);

gentlemanDayPitFlameVideo.addEventListener("ended", () => {
  if (isHost) showGentlemanDayPitVideo();
});
installHostVideoSafety(
  gentlemanDayPitFlameVideo,
  "gentlemanDayPitFlame",
  showGentlemanDayPitVideo,
  6500,
  (timeoutId) => {
    clearTimeout(gentlemanDayPitFlameFallbackId);
    gentlemanDayPitFlameFallbackId = timeoutId;
  },
);
gentlemanDayPitVideo.addEventListener("ended", () => {
  if (isHost) showGentlemanDayPitQuestion();
});
installHostVideoSafety(
  gentlemanDayPitVideo,
  "gentlemanDayPitVideo",
  showGentlemanDayPitQuestion,
  12000,
  (timeoutId) => {
    clearTimeout(gentlemanDayPitVideoFallbackId);
    gentlemanDayPitVideoFallbackId = timeoutId;
  },
);

continueAfterGentlemanDayPitButton.addEventListener("click", () => {
  if (!isHost) return;
  showGentlemanDayPitResult();
});

continueAfterGentlemanDayPitResultButton.addEventListener("click", () => {
  if (!isHost) return;
  continueAfterGentlemanDay();
});

revealBonusQuestionButton.addEventListener("click", revealBonusQuestion);

continueAfterBonusButton.addEventListener("click", continueAfterBonus);

bonusIntroVideo.addEventListener("ended", () => {
  if (isHost) showBonusRound();
});
installHostVideoSafety(
  bonusIntroVideo,
  "bonusIntro",
  showBonusRound,
  11000,
  (timeoutId) => {
    clearTimeout(bonusIntroFallbackId);
    bonusIntroFallbackId = timeoutId;
  },
);

gentlementIntroVideo.addEventListener("ended", () => {
  if (isHost) showNextGentlementPhoto();
});
installHostVideoSafety(
  gentlementIntroVideo,
  "gentlementIntro",
  showNextGentlementPhoto,
  10000,
  (timeoutId) => {
    clearTimeout(gentlementIntroFallbackId);
    gentlementIntroFallbackId = timeoutId;
  },
);

gentlementNextButton.addEventListener("click", continueGentlementGame);

wheelCenterSpinButton.addEventListener("click", spinFinalWheel);

finishAfterWheelButton.addEventListener("click", () => {
  if (!isHost) return;
  showEndScreen();
});

revealSecretChallengeButton.addEventListener("click", revealSecretChallenge);

drawGentlementButton.addEventListener("click", drawGentlement);

podiumFinishButton.addEventListener("click", showReviewScreen);

reviewStars.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    reviewRating = Number(button.dataset.rating);
    renderReviewStars();
  });
});

reviewSaveButton.addEventListener("click", saveReview);

["pointerdown", "touchstart", "click"].forEach((eventName) => {
  window.addEventListener(eventName, unlockGameAudio, {
    once: true,
    passive: true,
    capture: true,
  });
});
