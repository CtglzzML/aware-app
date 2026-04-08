const STORAGE_KEY = "spendscape-data-v3";

const startButton = document.querySelector("#start-button");
const goEventsButton = document.querySelector("#go-events-button");
const goDashboardButton = document.querySelector("#go-dashboard-button");
const landingBrandButton = document.querySelector("#landing-brand-button");
const languageSelect = document.querySelector("#language-select");
const currencySelect = document.querySelector("#currency-select");
const languageStateIcon = document.querySelector("#language-state-icon");
const currencyStateIcon = document.querySelector("#currency-state-icon");
const goDashboardFromEventsButton = document.querySelector("#go-dashboard-from-events-button");
const goCreateButton = document.querySelector("#go-create-button");
const goAddExpenseButton = document.querySelector("#go-add-expense-button");
const dashboardEventsButton = document.querySelector("#dashboard-events-button");
const brandHomeLinks = document.querySelectorAll(".brand-home-link");
const backButtons = document.querySelectorAll("[data-back]");
const eventForm = document.querySelector("#event-form");
const expenseForm = document.querySelector("#expense-form");
const eventList = document.querySelector("#event-list");
const expenseList = document.querySelector("#expense-list");
const deleteEventButton = document.querySelector("#delete-event-button");
const eventTemplate = document.querySelector("#event-card-template");
const eventCount = document.querySelector("#event-count");
const createEventSubmitButton = document.querySelector("#create-event-submit-button");
const saveExpenseSubmitButton = document.querySelector("#save-expense-submit-button");
const setCurrentEventButton = document.querySelector("#set-current-event-button");
const goVoiceExpenseButton = document.querySelector("#go-voice-expense-button");
const voiceCurrentEventLabel = document.querySelector("#voice-current-event-label");
const toggleVoiceButton = document.querySelector("#toggle-voice-button");
const parseVoiceButton = document.querySelector("#parse-voice-button");
const useCurrentEventButton = document.querySelector("#use-current-event-button");
const voiceTranscript = document.querySelector("#voice-transcript");
const voiceFeedback = document.querySelector("#voice-feedback");
const quoteSuggestionForm = document.querySelector("#quote-suggestion-form");
const quoteSuggestionInput = document.querySelector("#quote-suggestion-input");
const quoteSuggestionFeedback = document.querySelector("#quote-suggestion-feedback");
const quoteSuggestionModal = document.querySelector("#quote-suggestion-modal");
const quoteSuggestionClose = document.querySelector("#quote-suggestion-close");
const dashboardInsightCard = document.querySelector("#dashboard-insight-card");

const detailType = document.querySelector("#detail-type");
const detailName = document.querySelector("#detail-name");
const detailTotal = document.querySelector("#detail-total");
const detailBudget = document.querySelector("#detail-budget");
const dashboardTotalSpent = document.querySelector("#dashboard-total-spent");
const dashboardAverageSpent = document.querySelector("#dashboard-average-spent");
const dashboardTopCategory = document.querySelector("#dashboard-top-category");
const dashboardEventCount = document.querySelector("#dashboard-event-count");
const dashboardRangeLabel = document.querySelector("#dashboard-range-label");
const dashboardChart = document.querySelector("#dashboard-chart");
const dashboardInsightTitle = document.querySelector("#dashboard-insight-title");
const dashboardInsightText = document.querySelector("#dashboard-insight-text");
const screens = [...document.querySelectorAll(".screen")];
const landingQuote = document.querySelector("#landing-quote");

const LOCALE_KEY = "aware-locale-v1";
const CURRENCY_KEY = "aware-currency-v1";
const ACCENT_KEY = "aware-accent-v1";

const availableLocales = [
  { code: "en", label: "English", icon: "EN" },
  { code: "es", label: "Espanol", icon: "ES" },
  { code: "fr", label: "Francais", icon: "FR" },
  { code: "de", label: "Deutsch", icon: "DE" },
  { code: "it", label: "Italiano", icon: "IT" },
  { code: "pt", label: "Portugues", icon: "PT" }
];

const availableCurrencies = [
  { code: "USD", label: "USD US$", icon: "$" },
  { code: "EUR", label: "EUR €", icon: "€" },
  { code: "GBP", label: "GBP £", icon: "£" },
  { code: "NOK", label: "NOK kr", icon: "kr" },
  { code: "JPY", label: "JPY ¥", icon: "¥" },
  { code: "MXN", label: "MXN MX$", icon: "MX$" },
  { code: "BRL", label: "BRL R$", icon: "R$" },
  { code: "CAD", label: "CAD C$", icon: "C$" }
];

const availableAccents = [
  { code: "red", hex: "#ff6b6b", rgb: "255, 107, 107" },
  { code: "orange", hex: "#ff9f43", rgb: "255, 159, 67" },
  { code: "yellow", hex: "#ffd93d", rgb: "255, 217, 61" },
  { code: "green", hex: "#b8ff5a", rgb: "184, 255, 90" },
  { code: "blue", hex: "#5ac8ff", rgb: "90, 200, 255" },
  { code: "indigo", hex: "#8b7cff", rgb: "139, 124, 255" },
  { code: "violet", hex: "#d17cff", rgb: "209, 124, 255" }
];

const translations = {
  en: {
    appName: "aware",
    landingCtaCreate: "Add expense",
    landingCtaEvents: "Go to my events",
    landingCtaDashboard: "Dashboard",
    landingFooter: "Made with love by Carlito's Way",
    quoteLab: "Quote lab",
    quoteSuggestionTitle: "Think you can outwrite us?",
    quoteSuggestionBody: "Drop a line. If it actually hits, we might let it into the rotation.",
    quoteSuggestionPlaceholder: "Your best line goes here",
    quoteSuggestionSubmit: "Send quote",
    quoteSuggestionEmpty: "You need to give us something to judge first.",
    quoteSuggestionReady: "Your mail app is opening. Bold move.",
    quoteSuggestionClose: "Close",
    navHome: "Home",
    navEvents: "Events",
    navNew: "New",
    navBack: "Back",
    navDashboard: "Dashboard",
    navLanguage: "Language",
    navCurrency: "Currency",
    titleDashboard: "Dashboard",
    titleEvents: "Your events",
    titleCreate: "Create event",
    titleEvent: "Event",
    titleAddExpense: "Add expense",
    savedEvents: "Saved events",
    createEventLabel: "Create event",
    fieldEventName: "Event name",
    fieldEventNamePlaceholder: "Ibiza weekend, concert night...",
    fieldType: "Type",
    fieldBudget: "Budget",
    fieldCurrency: "Currency",
    fieldBudgetPlaceholder: "500",
    fieldExpenseType: "Type of expense",
    fieldAmount: "Amount",
    fieldAmountPlaceholder: "40",
    fieldNote: "Note",
    fieldNotePlaceholder: "Dinner, taxi, snacks...",
    saveExpense: "Save expense",
    total: "Total",
    budget: "Budget",
    expenses: "Expenses",
    recordExpense: "+ Record expense",
    delete: "Delete",
    deleteConfirm: (name) => `Delete "${name}"?`,
    overview: "Overview",
    lastEvents: (count) => `Last ${count} events`,
    totalSpent: "Total spent",
    averageEvent: "Average event",
    biggestCategory: "Biggest category",
    trackedEvents: "Tracked events",
    categorySpend: "Category spend",
    awareAnalysis: "Analysis",
    currentEvent: "Current events",
    noDramaYet: "No drama yet",
    noDramaBody: "Add a few expenses and I will gently judge your priorities.",
    noDramaDashboard: "Add a few expenses and I will gently judge your priorities across the last five events.",
    unlockDrama: "Create events and add expenses to unlock the drama.",
    noEvents: "No events yet. Create the first one.",
    noExpenses: 'No expenses yet. Tap "+ Record expense".',
    noEventSelected: "No event selected",
    chooseOrCreate: "Choose or create an event.",
    noBudget: "No budget",
    noBudgetSet: "No budget set",
    addOneInEvent: "Add one in the event",
    currentEventActive: "Marked as current",
    setAsCurrent: "Mark as current",
    addByVoice: "Add by voice",
    voiceNote: "Voice note",
    currentEventLabel: (name) => `Current events: ${name}`,
    currentEventNone: "Current events: none",
    startVoice: "Start voice",
    stopVoice: "Stop voice",
    transcript: "Transcript",
    transcriptPlaceholder: "I bought a protein bar for 3 euros",
    parseVoice: "Parse voice note",
    useCurrentEvent: "Use current event",
    voiceHelp: "Speak naturally and I'll try to detect the title, amount, and category.",
    budgetInControl: "Budget in control",
    overBudget: "Over budget",
    ofBudget: (percent, budget) => `${percent}% of ${budget}`,
    topCategoryOwns: (category, count) => `${category} owns your last ${count} events`,
    none: "None",
    itemCount: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    category: {
      food: "Food",
      travel: "Travel",
      other: "Other",
      event: "Event",
      activity: "Activity",
      casual: "Casual plan",
      weekend: "Weekend",
      trip: "Trip",
      concert: "Concert",
      party: "Party",
      cabin: "Cabin"
    },
    quotes: [
      "Fun night. Financial damage.",
      "That weekend was not budget friendly.",
      "Good memories, terrible math.",
      "One trip. Twelve bad decisions.",
      "Cute plan. Expensive consequences.",
      "You had fun. Your wallet didn't.",
      "Romantic weekend, criminal spending.",
      "That party cost emotional stability.",
      "A great night out. A tragic bank account.",
      "Turns out fun is unbelievably expensive.",
      "The vibe was free. Everything else wasn't.",
      "Hangover fades. Receipts don't."
    ]
  },
  es: {
    appName: "aware",
    landingCtaCreate: "Anadir gasto",
    landingCtaEvents: "Ir a mis eventos",
    landingCtaDashboard: "Panel",
    landingFooter: "Hecho con amor por Carlito's Way",
    quoteLab: "Laboratorio de frases",
    quoteSuggestionTitle: "¿Crees que escribes mejor que nosotros?",
    quoteSuggestionBody: "Deja tu frase. Si de verdad tiene nivel, igual entra en la rotacion.",
    quoteSuggestionPlaceholder: "Escribe aqui tu mejor frase",
    quoteSuggestionSubmit: "Enviar frase",
    quoteSuggestionEmpty: "Primero danos algo que juzgar.",
    quoteSuggestionReady: "Tu app de correo se esta abriendo. Valiente.",
    quoteSuggestionClose: "Cerrar",
    navHome: "Inicio",
    navEvents: "Eventos",
    navNew: "Nuevo",
    navBack: "Volver",
    navDashboard: "Panel",
    navLanguage: "Idioma",
    navCurrency: "Moneda",
    titleDashboard: "Panel",
    titleEvents: "Tus eventos",
    titleCreate: "Crear evento",
    titleEvent: "Evento",
    titleAddExpense: "Anadir gasto",
    savedEvents: "Eventos guardados",
    createEventLabel: "Crear evento",
    fieldEventName: "Nombre del evento",
    fieldEventNamePlaceholder: "Fin de semana en Ibiza, concierto...",
    fieldType: "Tipo",
    fieldBudget: "Presupuesto",
    fieldCurrency: "Moneda",
    fieldBudgetPlaceholder: "500",
    fieldExpenseType: "Tipo de gasto",
    fieldAmount: "Importe",
    fieldAmountPlaceholder: "40",
    fieldNote: "Nota",
    fieldNotePlaceholder: "Cena, taxi, snacks...",
    saveExpense: "Guardar gasto",
    total: "Total",
    budget: "Presupuesto",
    expenses: "Gastos",
    recordExpense: "+ Anadir gasto",
    delete: "Borrar",
    deleteConfirm: (name) => `Borrar "${name}"?`,
    overview: "Resumen",
    lastEvents: (count) => `Ultimos ${count} eventos`,
    totalSpent: "Total gastado",
    averageEvent: "Media por evento",
    biggestCategory: "Categoria top",
    trackedEvents: "Eventos registrados",
    categorySpend: "Gasto por categoria",
    awareAnalysis: "Analisis",
    currentEvent: "Eventos actuales",
    noDramaYet: "Aun sin drama",
    noDramaBody: "Anade unos gastos y juzgare tus prioridades con carino.",
    noDramaDashboard: "Anade unos gastos y juzgare tus prioridades en los ultimos cinco eventos.",
    unlockDrama: "Crea eventos y anade gastos para desbloquear el drama.",
    noEvents: "Aun no hay eventos. Crea el primero.",
    noExpenses: 'Aun no hay gastos. Pulsa "+ Anadir gasto".',
    noEventSelected: "Ningun evento seleccionado",
    chooseOrCreate: "Elige o crea un evento.",
    noBudget: "Sin presupuesto",
    noBudgetSet: "Sin presupuesto",
    addOneInEvent: "Anadelo en el evento",
    currentEventActive: "Marcado como actual",
    setAsCurrent: "Marcar actual",
    addByVoice: "Anadir por voz",
    voiceNote: "Nota de voz",
    currentEventLabel: (name) => `Eventos actuales: ${name}`,
    currentEventNone: "Eventos actuales: ninguno",
    startVoice: "Empezar voz",
    stopVoice: "Parar voz",
    transcript: "Transcripcion",
    transcriptPlaceholder: "Me compre una barrita de proteina por 3 euros",
    parseVoice: "Procesar voz",
    useCurrentEvent: "Usar evento actual",
    voiceHelp: "Habla natural y voy a intentar detectar concepto, importe y categoria.",
    budgetInControl: "Presupuesto bajo control",
    overBudget: "Pasado de presupuesto",
    ofBudget: (percent, budget) => `${percent}% de ${budget}`,
    topCategoryOwns: (category, count) => `${category} domina tus ultimos ${count} eventos`,
    none: "Nada",
    itemCount: (count) => `${count} ${count === 1 ? "elemento" : "elementos"}`,
    category: {
      food: "Comida",
      travel: "Viaje",
      other: "Otros",
      event: "Evento",
      activity: "Actividad",
      casual: "Plan casual",
      weekend: "Fin de semana",
      trip: "Viaje",
      concert: "Concierto",
      party: "Fiesta",
      cabin: "Cabaña"
    },
    quotes: [
      "Noche divertida. Danos financieros.",
      "Ese finde no fue precisamente barato.",
      "Buenos recuerdos, matematicas terribles.",
      "Un viaje. Doce malas decisiones.",
      "Plan bonito. Consecuencias caras.",
      "Tu te lo pasaste bien. Tu cartera no.",
      "Fin de semana romantico, gasto criminal.",
      "Esa fiesta costo estabilidad emocional.",
      "Gran noche. Cuenta bancaria tragica.",
      "Resulta que divertirse es carisimo.",
      "El vibe era gratis. Lo demas no.",
      "La resaca se va. Los tickets no."
    ]
  },
  fr: {
    appName: "aware",
    landingCtaCreate: "Ajouter depense",
    landingCtaEvents: "Mes events",
    landingCtaDashboard: "Tableau",
    landingFooter: "Fait avec amour par Carlito's Way",
    quoteLab: "Laboratoire de phrases",
    quoteSuggestionTitle: "Tu penses ecrire mieux que nous ?",
    quoteSuggestionBody: "Laisse ta phrase. Si elle frappe vraiment, on la fera peut-etre entrer dans la rotation.",
    quoteSuggestionPlaceholder: "Ecris ici ta meilleure phrase",
    quoteSuggestionSubmit: "Envoyer",
    quoteSuggestionEmpty: "Donne-nous d'abord quelque chose a juger.",
    quoteSuggestionReady: "Ton app mail s'ouvre. Beau culot.",
    quoteSuggestionClose: "Fermer",
    navHome: "Accueil",
    navEvents: "Events",
    navNew: "Nouveau",
    navBack: "Retour",
    navDashboard: "Tableau",
    navLanguage: "Langue",
    navCurrency: "Devise",
    titleDashboard: "Tableau",
    titleEvents: "Tes events",
    titleCreate: "Creer un event",
    titleEvent: "Event",
    titleAddExpense: "Ajouter depense",
    savedEvents: "Events sauvegardes",
    createEventLabel: "Creer un event",
    fieldEventName: "Nom de l'event",
    fieldEventNamePlaceholder: "Week-end a Ibiza, concert...",
    fieldType: "Type",
    fieldBudget: "Budget",
    fieldCurrency: "Devise",
    fieldBudgetPlaceholder: "500",
    fieldExpenseType: "Type de depense",
    fieldAmount: "Montant",
    fieldAmountPlaceholder: "40",
    fieldNote: "Note",
    fieldNotePlaceholder: "Diner, taxi, snacks...",
    saveExpense: "Enregistrer",
    total: "Total",
    budget: "Budget",
    expenses: "Depenses",
    recordExpense: "+ Ajouter depense",
    delete: "Supprimer",
    deleteConfirm: (name) => `Supprimer "${name}" ?`,
    overview: "Vue generale",
    lastEvents: (count) => `${count} derniers events`,
    totalSpent: "Total depense",
    averageEvent: "Moyenne par event",
    biggestCategory: "Categorie top",
    trackedEvents: "Events suivis",
    categorySpend: "Depenses par categorie",
    awareAnalysis: "Analyse",
    noDramaYet: "Pas encore de drame",
    noDramaBody: "Ajoute quelques depenses et je jugerai doucement tes priorites.",
    noDramaDashboard: "Ajoute quelques depenses et je jugerai doucement tes priorites sur les cinq derniers events.",
    unlockDrama: "Cree des events et ajoute des depenses pour lancer le drame.",
    noEvents: "Aucun event pour le moment. Cree le premier.",
    noExpenses: 'Aucune depense pour le moment. Appuie sur "+ Ajouter depense".',
    noEventSelected: "Aucun event selectionne",
    chooseOrCreate: "Choisis ou cree un event.",
    noBudget: "Pas de budget",
    noBudgetSet: "Pas de budget",
    addOneInEvent: "Ajoute-en un dans l'event",
    budgetInControl: "Budget sous controle",
    overBudget: "Budget depasse",
    ofBudget: (percent, budget) => `${percent}% de ${budget}`,
    topCategoryOwns: (category, count) => `${category} domine tes ${count} derniers events`,
    none: "Aucun",
    itemCount: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    category: {
      food: "Food",
      travel: "Voyage",
      other: "Autre",
      event: "Evenement",
      activity: "Activite",
      casual: "Plan tranquille",
      weekend: "Week-end",
      trip: "Voyage",
      concert: "Concert",
      party: "Fete",
      cabin: "Cabane"
    },
    quotes: [
      "Belle nuit. Degats financiers.",
      "Ce week-end n'etait pas budget friendly.",
      "Bons souvenirs, tres mauvais calculs.",
      "Un voyage. Douze mauvaises decisions.",
      "Joli plan. Consequences couteuses.",
      "Toi tu t'es amuse. Pas ton portefeuille.",
      "Week-end romantique, depense criminelle.",
      "Cette fete a coute la stabilite emotionnelle.",
      "Super sortie. Compte bancaire tragique.",
      "S'amuser coute absurdement cher.",
      "L'ambiance etait gratuite. Pas le reste.",
      "La gueule de bois passe. Pas les tickets."
    ]
  },
  de: {
    appName: "aware",
    landingCtaCreate: "Ausgabe hinzufugen",
    landingCtaEvents: "Zu meinen Events",
    landingCtaDashboard: "Ubersicht",
    landingFooter: "Mit Liebe gemacht von Carlito's Way",
    quoteLab: "Zitatlabor",
    quoteSuggestionTitle: "Denkst du, du schreibst besser als wir?",
    quoteSuggestionBody: "Lass einen Spruch da. Wenn er wirklich trifft, kommt er vielleicht in die Rotation.",
    quoteSuggestionPlaceholder: "Schreib hier deine beste Zeile",
    quoteSuggestionSubmit: "Spruch senden",
    quoteSuggestionEmpty: "Gib uns erst etwas zum Bewerten.",
    quoteSuggestionReady: "Deine Mail-App geht auf. Selbstbewusst.",
    quoteSuggestionClose: "Schliessen",
    navHome: "Start",
    navEvents: "Events",
    navNew: "Neu",
    navBack: "Zuruck",
    navDashboard: "Ubersicht",
    navLanguage: "Sprache",
    navCurrency: "Wahrung",
    titleDashboard: "Ubersicht",
    titleEvents: "Deine Events",
    titleCreate: "Event erstellen",
    titleEvent: "Event",
    titleAddExpense: "Ausgabe hinzufugen",
    savedEvents: "Gespeicherte Events",
    createEventLabel: "Event erstellen",
    fieldEventName: "Eventname",
    fieldEventNamePlaceholder: "Ibiza Wochenende, Konzertnacht...",
    fieldType: "Typ",
    fieldBudget: "Budget",
    fieldCurrency: "Wahrung",
    fieldBudgetPlaceholder: "500",
    fieldExpenseType: "Ausgabeart",
    fieldAmount: "Betrag",
    fieldAmountPlaceholder: "40",
    fieldNote: "Notiz",
    fieldNotePlaceholder: "Abendessen, Taxi, Snacks...",
    saveExpense: "Ausgabe speichern",
    total: "Gesamt",
    budget: "Budget",
    expenses: "Ausgaben",
    recordExpense: "+ Ausgabe erfassen",
    delete: "Loschen",
    deleteConfirm: (name) => `"${name}" loschen?`,
    overview: "Uberblick",
    lastEvents: (count) => `Letzte ${count} Events`,
    totalSpent: "Gesamtausgaben",
    averageEvent: "Durchschnitt",
    biggestCategory: "Top-Kategorie",
    trackedEvents: "Erfasste Events",
    categorySpend: "Ausgaben nach Kategorie",
    awareAnalysis: "Analyse",
    noDramaYet: "Noch kein Drama",
    noDramaBody: "Fuge ein paar Ausgaben hinzu und ich bewerte sanft deine Prioritaten.",
    noDramaDashboard: "Fuge ein paar Ausgaben hinzu und ich bewerte sanft deine Prioritaten aus den letzten funf Events.",
    unlockDrama: "Erstelle Events und Ausgaben, um das Drama freizuschalten.",
    noEvents: "Noch keine Events. Erstelle das erste.",
    noExpenses: 'Noch keine Ausgaben. Tippe auf "+ Ausgabe erfassen".',
    noEventSelected: "Kein Event ausgewahlt",
    chooseOrCreate: "Wahle oder erstelle ein Event.",
    noBudget: "Kein Budget",
    noBudgetSet: "Kein Budget",
    addOneInEvent: "Im Event hinzufugen",
    budgetInControl: "Budget im Griff",
    overBudget: "Uber Budget",
    ofBudget: (percent, budget) => `${percent}% von ${budget}`,
    topCategoryOwns: (category, count) => `${category} dominiert deine letzten ${count} Events`,
    none: "Keine",
    itemCount: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    category: {
      food: "Essen",
      travel: "Reisen",
      other: "Andere",
      event: "Event",
      activity: "Aktivitat",
      casual: "Lockerer Plan",
      weekend: "Wochenende",
      trip: "Reise",
      concert: "Konzert",
      party: "Party",
      cabin: "Hutte"
    },
    quotes: [
      "Gute Nacht. Finanzieller Schaden.",
      "Dieses Wochenende war nicht budgetfreundlich.",
      "Gute Erinnerungen, schlimme Mathematik.",
      "Eine Reise. Zwolf schlechte Entscheidungen.",
      "Schoner Plan. Teure Folgen.",
      "Du hattest Spass. Dein Konto nicht.",
      "Romantisches Wochenende, kriminelle Ausgaben.",
      "Diese Party kostete emotionale Stabilitat.",
      "Toller Abend. Tragisches Bankkonto.",
      "Spass ist erschreckend teuer.",
      "Die Stimmung war gratis. Der Rest nicht.",
      "Der Kater vergeht. Die Belege nicht."
    ]
  },
  it: {
    appName: "aware",
    landingCtaCreate: "Aggiungi spesa",
    landingCtaEvents: "Vai ai miei eventi",
    landingCtaDashboard: "Panoramica",
    landingFooter: "Fatto con amore da Carlito's Way",
    quoteLab: "Laboratorio frasi",
    quoteSuggestionTitle: "Pensi di scrivere meglio di noi?",
    quoteSuggestionBody: "Lascia una frase. Se spacca davvero, potremmo metterla in rotazione.",
    quoteSuggestionPlaceholder: "Scrivi qui la tua frase migliore",
    quoteSuggestionSubmit: "Invia frase",
    quoteSuggestionEmpty: "Prima dacci qualcosa da giudicare.",
    quoteSuggestionReady: "Si apre la tua mail. Bel coraggio.",
    quoteSuggestionClose: "Chiudi",
    navHome: "Home",
    navEvents: "Eventi",
    navNew: "Nuovo",
    navBack: "Indietro",
    navDashboard: "Panoramica",
    navLanguage: "Lingua",
    navCurrency: "Valuta",
    titleDashboard: "Panoramica",
    titleEvents: "I tuoi eventi",
    titleCreate: "Crea evento",
    titleEvent: "Evento",
    titleAddExpense: "Aggiungi spesa",
    savedEvents: "Eventi salvati",
    createEventLabel: "Crea evento",
    fieldEventName: "Nome evento",
    fieldEventNamePlaceholder: "Weekend a Ibiza, concerto...",
    fieldType: "Tipo",
    fieldBudget: "Budget",
    fieldCurrency: "Valuta",
    fieldBudgetPlaceholder: "500",
    fieldExpenseType: "Tipo di spesa",
    fieldAmount: "Importo",
    fieldAmountPlaceholder: "40",
    fieldNote: "Nota",
    fieldNotePlaceholder: "Cena, taxi, snack...",
    saveExpense: "Salva spesa",
    total: "Totale",
    budget: "Budget",
    expenses: "Spese",
    recordExpense: "+ Aggiungi spesa",
    delete: "Elimina",
    deleteConfirm: (name) => `Eliminare "${name}"?`,
    overview: "Panoramica",
    lastEvents: (count) => `Ultimi ${count} eventi`,
    totalSpent: "Totale speso",
    averageEvent: "Media evento",
    biggestCategory: "Categoria top",
    trackedEvents: "Eventi tracciati",
    categorySpend: "Spesa per categoria",
    awareAnalysis: "Analisi",
    noDramaYet: "Ancora nessun dramma",
    noDramaBody: "Aggiungi qualche spesa e giudichero con dolcezza le tue priorita.",
    noDramaDashboard: "Aggiungi qualche spesa e giudichero con dolcezza le tue priorita negli ultimi cinque eventi.",
    unlockDrama: "Crea eventi e aggiungi spese per sbloccare il dramma.",
    noEvents: "Nessun evento ancora. Crea il primo.",
    noExpenses: 'Nessuna spesa ancora. Premi "+ Aggiungi spesa".',
    noEventSelected: "Nessun evento selezionato",
    chooseOrCreate: "Scegli o crea un evento.",
    noBudget: "Nessun budget",
    noBudgetSet: "Nessun budget",
    addOneInEvent: "Aggiungilo nell'evento",
    budgetInControl: "Budget sotto controllo",
    overBudget: "Fuori budget",
    ofBudget: (percent, budget) => `${percent}% di ${budget}`,
    topCategoryOwns: (category, count) => `${category} domina i tuoi ultimi ${count} eventi`,
    none: "Nessuno",
    itemCount: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    category: {
      food: "Cibo",
      travel: "Viaggio",
      other: "Altro",
      event: "Evento",
      activity: "Attivita",
      casual: "Piano casual",
      weekend: "Weekend",
      trip: "Viaggio",
      concert: "Concerto",
      party: "Festa",
      cabin: "Cabina"
    },
    quotes: [
      "Notte divertente. Danno finanziario.",
      "Quel weekend non era amico del budget.",
      "Bei ricordi, matematica terribile.",
      "Un viaggio. Dodici cattive decisioni.",
      "Bel piano. Conseguenze costose.",
      "Ti sei divertito. Il portafoglio no.",
      "Weekend romantico, spesa criminale.",
      "Quella festa e costata stabilita emotiva.",
      "Grande serata. Conto tragico.",
      "Divertirsi e incredibilmente caro.",
      "L'atmosfera era gratis. Il resto no.",
      "La sbornia passa. Gli scontrini no."
    ]
  },
  pt: {
    appName: "aware",
    landingCtaCreate: "Adicionar gasto",
    landingCtaEvents: "Ir para meus eventos",
    landingCtaDashboard: "Painel",
    landingFooter: "Feito com amor por Carlito's Way",
    quoteLab: "Laboratorio de frases",
    quoteSuggestionTitle: "Achas que escreves melhor do que nos?",
    quoteSuggestionBody: "Deixa uma frase. Se realmente bater, talvez entre na rotacao.",
    quoteSuggestionPlaceholder: "Escreve aqui a tua melhor frase",
    quoteSuggestionSubmit: "Enviar frase",
    quoteSuggestionEmpty: "Primeiro da-nos algo para julgar.",
    quoteSuggestionReady: "A tua app de email esta a abrir. Atrevido.",
    quoteSuggestionClose: "Fechar",
    navHome: "Inicio",
    navEvents: "Eventos",
    navNew: "Novo",
    navBack: "Voltar",
    navDashboard: "Painel",
    navLanguage: "Idioma",
    navCurrency: "Moeda",
    titleDashboard: "Painel",
    titleEvents: "Seus eventos",
    titleCreate: "Criar evento",
    titleEvent: "Evento",
    titleAddExpense: "Adicionar gasto",
    savedEvents: "Eventos salvos",
    createEventLabel: "Criar evento",
    fieldEventName: "Nome do evento",
    fieldEventNamePlaceholder: "Fim de semana em Ibiza, concerto...",
    fieldType: "Tipo",
    fieldBudget: "Orcamento",
    fieldCurrency: "Moeda",
    fieldBudgetPlaceholder: "500",
    fieldExpenseType: "Tipo de gasto",
    fieldAmount: "Valor",
    fieldAmountPlaceholder: "40",
    fieldNote: "Nota",
    fieldNotePlaceholder: "Jantar, taxi, snacks...",
    saveExpense: "Salvar gasto",
    total: "Total",
    budget: "Orcamento",
    expenses: "Gastos",
    recordExpense: "+ Adicionar gasto",
    delete: "Apagar",
    deleteConfirm: (name) => `Apagar "${name}"?`,
    overview: "Visao geral",
    lastEvents: (count) => `Ultimos ${count} eventos`,
    totalSpent: "Total gasto",
    averageEvent: "Media por evento",
    biggestCategory: "Maior categoria",
    trackedEvents: "Eventos registrados",
    categorySpend: "Gasto por categoria",
    awareAnalysis: "Analise",
    noDramaYet: "Ainda sem drama",
    noDramaBody: "Adicione alguns gastos e eu vou julgar suavemente suas prioridades.",
    noDramaDashboard: "Adicione alguns gastos e eu vou julgar suavemente suas prioridades nos ultimos cinco eventos.",
    unlockDrama: "Crie eventos e adicione gastos para liberar o drama.",
    noEvents: "Ainda nao ha eventos. Crie o primeiro.",
    noExpenses: 'Ainda nao ha gastos. Toque em "+ Adicionar gasto".',
    noEventSelected: "Nenhum evento selecionado",
    chooseOrCreate: "Escolha ou crie um evento.",
    noBudget: "Sem orcamento",
    noBudgetSet: "Sem orcamento",
    addOneInEvent: "Adicione no evento",
    budgetInControl: "Orcamento sob controle",
    overBudget: "Acima do orcamento",
    ofBudget: (percent, budget) => `${percent}% de ${budget}`,
    topCategoryOwns: (category, count) => `${category} domina seus ultimos ${count} eventos`,
    none: "Nenhum",
    itemCount: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    category: {
      food: "Comida",
      travel: "Viagem",
      other: "Outros",
      event: "Evento",
      activity: "Atividade",
      casual: "Plano casual",
      weekend: "Fim de semana",
      trip: "Viagem",
      concert: "Concerto",
      party: "Festa",
      cabin: "Cabana"
    },
    quotes: [
      "Noite divertida. Estrago financeiro.",
      "Esse fim de semana nao foi amigo do orcamento.",
      "Boas memorias, matematica terrivel.",
      "Uma viagem. Doze decisoes ruins.",
      "Plano bonito. Consequencias caras.",
      "Voce se divertiu. Sua carteira nao.",
      "Fim de semana romantico, gasto criminoso.",
      "Essa festa custou estabilidade emocional.",
      "Otima noite. Conta bancaria tragica.",
      "Se divertir e absurdamente caro.",
      "A vibe era gratis. O resto nao.",
      "A ressaca passa. Os recibos nao."
    ]
  }
};

const sarcasticInsights = {
  en: {
    food: [
    "You didn't travel. You conducted a five-event tasting menu with side quests.",
    "Your recent events suggest you book trips mainly to meet expensive menus.",
    "Apparently every memory now comes with truffle fries.",
    "You call it dinner. Your bank account calls it a hostile takeover.",
    "Those last five events were basically a subscription to eating out.",
    "Impressive commitment to turning hunger into a luxury hobby.",
    "You budgeted for vibes and accidentally financed a food tour.",
    "At this point, restaurants know your card better than your friends do.",
    "The itinerary said culture. The receipts said burrata.",
    "You really looked at every menu and chose chaos.",
    "Your spending says the main event was lunch.",
    "Five events in, and your wallet is still digesting.",
    "You weren't chasing memories. You were chasing starters.",
    "Brave of you to treat every snack like a landmark.",
    "You could have cooked. But apparently drama tastes better.",
    "Your biggest relationship lately is with overpriced plates.",
    "This wasn't event planning. It was edible financial sabotage.",
    "Your most expensive plus-one is clearly dinner.",
    "You traveled for the views and paid mostly for the sauces.",
    "Food keeps winning because apparently restraint wasn't invited."
  ],
  travel: [
    "The destination may have been fun, but transport was the real headliner.",
    "You spent the last five events proving that movement is expensive.",
    "Your receipts suggest you commute like a small royal family.",
    "Every plan became a love letter to trains, planes, and bad decisions.",
    "You weren't going out. You were sponsoring the transport industry.",
    "Your recent spending says taxis are part of your personality now.",
    "The trip was temporary. The travel costs built a legacy.",
    "Apparently you believe every journey deserves premium inconvenience.",
    "You paid a lot just to arrive stressed in another postcode.",
    "Your wallet has frequent flyer trauma.",
    "Those five events were mostly a very expensive way to be somewhere else.",
    "Transport dominated, because walking was beneath the brand.",
    "You really said yes to every transfer fee in sight.",
    "Romantic. Scenic. Financially absurd to get there.",
    "The route may have been smooth. The spending absolutely wasn't.",
    "You move around like surge pricing is a challenge.",
    "The memories are portable. Sadly, the travel bills came too.",
    "You are one delayed taxi away from a personal finance documentary.",
    "Turns out the real destination was overspending on the way there.",
    "Your map history and your bank history are in a toxic relationship."
  ],
  other: [
    "Your top category is 'other', which is a bold way to say 'chaos'.",
    "You spent the most on 'other', also known as financial mystery meat.",
    "Apparently the last five events were powered by vague decisions.",
    "'Other' winning means you freestyle harder than your budget can handle.",
    "You managed to make miscellaneous feel deeply personal.",
    "Nothing says control like your biggest spend being impossible to explain quickly.",
    "Your receipts are now a thriller. The category is 'other'.",
    "You didn't overspend in one place. You scattered the damage artistically.",
    "Financial clarity called. 'Other' sent it to voicemail.",
    "You really built a whole lifestyle around unexplained costs.",
    "The main character of your spending is currently 'miscellaneous nonsense'.",
    "Your wallet would love a few more details next time.",
    "Some people track spending. You curate mysteries.",
    "The category 'other' is carrying this app on its back.",
    "You made random costs look extremely committed.",
    "This isn't a category. It's a cover-up.",
    "Your spending pattern says 'I’ll label it later' and never does.",
    "Very brave to let 'other' become your financial identity.",
    "If 'other' is winning, the plot has officially left the building.",
    "You’ve turned miscellaneous spending into an art form."
  ]
  },
  es: {
    food: [
      "No viajaste. Organizaste un menu degustacion de cinco eventos con secuelas.",
      "Tus ultimos eventos sugieren que reservas viajes solo para conocer menus caros.",
      "Al parecer ahora cada recuerdo viene con patatas trufadas.",
      "Tu lo llamas cena. Tu cuenta lo llama adquisicion hostil.",
      "Tus ultimos cinco eventos fueron basicamente una suscripcion a comer fuera.",
      "Impresionante compromiso con convertir el hambre en hobby de lujo.",
      "Presupuestaste vibes y acabaste financiando una ruta gastronomica.",
      "A este ritmo los restaurantes conocen tu tarjeta mejor que tus amigos.",
      "El itinerario decia cultura. Los tickets decian burrata.",
      "Miraste cada menu y elegiste el caos.",
      "Tus gastos dicen que el evento principal era la comida.",
      "Cinco eventos despues y tu cartera sigue haciendo la digestion.",
      "No ibas detras de recuerdos. Ibas detras de entrantes.",
      "Muy valiente tratar cada snack como si fuera un monumento.",
      "Podias haber cocinado. Pero por lo visto el drama sabe mejor.",
      "Tu relacion mas cara ultimamente es con los platos fuera de precio.",
      "Esto no fue planificar eventos. Fue sabotaje financiero comestible.",
      "Tu acompañante mas caro es claramente la cena.",
      "Viajaste por las vistas y pagaste sobre todo por las salsas.",
      "La comida sigue ganando porque la moderacion no estaba invitada."
    ],
    travel: [
      "Puede que el destino estuviera bien, pero el transporte fue el verdadero cabeza de cartel.",
      "Tus ultimos cinco eventos demuestran que moverse sale carisimo.",
      "Tus tickets sugieren que te desplazas como una pequeña familia real.",
      "Cada plan se convirtio en una carta de amor a trenes, aviones y malas decisiones.",
      "No estabas saliendo. Estabas patrocinando la industria del transporte.",
      "Tus gastos recientes dicen que el taxi ya forma parte de tu personalidad.",
      "El viaje fue temporal. El coste de llegar construyo un legado.",
      "Parece que crees que todo trayecto merece una incomodidad premium.",
      "Pagaste bastante solo para llegar estresado a otro codigo postal.",
      "Tu cartera tiene trauma de viajero frecuente.",
      "Esos cinco eventos fueron basicamente una forma carisima de estar en otro sitio.",
      "El transporte domino porque caminar estaba por debajo de la marca.",
      "Le dijiste que si a cada transbordo con una confianza admirable.",
      "Romantico. Escenico. Financiaramente absurdo para llegar.",
      "La ruta pudo ser suave. El gasto desde luego no.",
      "Te mueves como si el surge pricing fuera un reto personal.",
      "Los recuerdos eran portables. Las facturas del viaje tambien.",
      "Estas a un taxi retrasado de un documental sobre finanzas personales.",
      "Resulta que el verdadero destino era gastar demasiado por el camino.",
      "Tu historial de mapas y tu historial bancario tienen una relacion toxica."
    ],
    other: [
      "Tu categoria top es 'otros', una forma elegante de decir 'caos'.",
      "Gastaste mas en 'otros', tambien conocido como misterio financiero.",
      "Por lo visto tus ultimos cinco eventos se alimentaron de decisiones vagas.",
      "Que gane 'otros' significa que improvisas mas de lo que tu presupuesto soporta.",
      "Has conseguido que lo miscelaneo se sienta muy personal.",
      "Nada dice control como no poder explicar rapido en que se fue tu mayor gasto.",
      "Tus tickets ya son un thriller. La categoria es 'otros'.",
      "No te pasaste en una sola cosa. Repartiste el dano con criterio artistico.",
      "La claridad financiera llamo. 'Otros' le dejo en visto.",
      "Has construido un estilo de vida alrededor de costes imposibles de resumir.",
      "El protagonista de tus gastos ahora mismo es 'nonsense miscelaneo'.",
      "A tu cartera le encantaria un poco mas de detalle la proxima vez.",
      "Hay gente que controla gastos. Tu curas misterios.",
      "La categoria 'otros' esta cargando con toda la app.",
      "Has hecho que los gastos random parezcan muy comprometidos.",
      "Eso no es una categoria. Es una tapadera.",
      "Tu patron de gasto dice 'ya lo clasificare luego' y claramente no lo hace.",
      "Muy valiente dejar que 'otros' se convierta en tu identidad financiera.",
      "Si 'otros' va ganando, la trama ya abandono el edificio.",
      "Has convertido los gastos miscelaneos en una forma de arte."
    ]
  }
};

let state = loadState();
let currentScreenId = "screen-landing";
let selectedEventId = state.events[0]?.id ?? null;
let currentQuoteIndex = -1;
let quoteTypingFrame = null;
let quoteTypingTimeout = null;
let currentLocale = loadLocale();
let currentCurrency = loadCurrency();
let currentAccent = loadAccent();
let speechRecognition = null;
let isListening = false;

startButton.addEventListener("click", handlePrimaryAction);
goEventsButton.addEventListener("click", () => showScreen("screen-events"));
goDashboardButton.addEventListener("click", () => showScreen("screen-dashboard"));
landingBrandButton.addEventListener("click", cycleAccentTheme);
goDashboardFromEventsButton.addEventListener("click", () => showScreen("screen-dashboard"));
goCreateButton?.addEventListener("click", () => showScreen("screen-create-event"));
goAddExpenseButton.addEventListener("click", () => showScreen("screen-add-expense"));
setCurrentEventButton.addEventListener("click", handleSetCurrentEvent);
goVoiceExpenseButton.addEventListener("click", handleOpenVoiceExpense);
dashboardEventsButton.addEventListener("click", () => showScreen("screen-events"));
landingQuote.addEventListener("click", rotateLandingQuote);
brandHomeLinks.forEach((link) => {
  link.addEventListener("click", () => showScreen("screen-landing"));
});
languageSelect.addEventListener("change", handleLocaleChange);
currencySelect.addEventListener("change", handleCurrencyChange);
toggleVoiceButton.addEventListener("click", handleToggleVoice);
parseVoiceButton.addEventListener("click", handleParseVoice);
useCurrentEventButton.addEventListener("click", handleUseCurrentEvent);
backButtons.forEach((button) => {
  button.addEventListener("click", () => showScreen(button.dataset.back));
});
eventForm.addEventListener("submit", handleCreateEvent);
expenseForm.addEventListener("submit", handleAddExpense);
deleteEventButton.addEventListener("click", handleDeleteEvent);
quoteSuggestionForm?.addEventListener("submit", handleQuoteSuggestion);
quoteSuggestionClose?.addEventListener("click", closeQuoteSuggestionModal);
dashboardInsightCard?.addEventListener("click", openQuoteSuggestionModal);

setupPwa();
setupLanguageSelector();
applyAccentTheme();
setLandingQuote();
render();

function loadState() {
  const saved = readStorage(STORAGE_KEY);
  if (!saved) {
    return { events: [], currentEventIds: [] };
  }

  try {
    const parsed = JSON.parse(saved);
    const currentEventIds = Array.isArray(parsed.currentEventIds)
      ? parsed.currentEventIds.filter((id) => typeof id === "string")
      : typeof parsed.currentEventId === "string"
        ? [parsed.currentEventId]
        : [];
    return {
      events: Array.isArray(parsed.events)
        ? parsed.events.map((event) => ({
            ...event,
            currency:
              typeof event.currency === "string" &&
              availableCurrencies.some((currency) => currency.code === event.currency)
                ? event.currency
                : "USD",
          }))
        : [],
      currentEventIds
    };
  } catch {
    return { events: [], currentEventIds: [] };
  }
}

function loadLocale() {
  const saved = readStorage(LOCALE_KEY);
  return availableLocales.some((locale) => locale.code === saved) ? saved : "en";
}

function loadCurrency() {
  const saved = readStorage(CURRENCY_KEY);
  return availableCurrencies.some((currency) => currency.code === saved) ? saved : "USD";
}

function loadAccent() {
  const saved = readStorage(ACCENT_KEY);
  return availableAccents.some((accent) => accent.code === saved) ? saved : "green";
}

function saveState() {
  writeStorage(STORAGE_KEY, JSON.stringify(state));
}

function handleCreateEvent(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const name = formData.get("name").toString().trim();

  if (!name) {
    return;
  }

  const newEvent = {
    id: crypto.randomUUID(),
    name,
    type: formData.get("type").toString(),
    budget: Number(formData.get("budget")) || 0,
    currency: formData.get("currency").toString() || currentCurrency,
    expenses: [],
    createdAt: Date.now(),
  };

  state.events.unshift(newEvent);
  selectedEventId = newEvent.id;
  state.currentEventIds = [newEvent.id, ...state.currentEventIds.filter((id) => id !== newEvent.id)];
  saveState();
  event.currentTarget.reset();
  showScreen("screen-event-detail");
}

function handlePrimaryAction() {
  const currentEvent = getCurrentEvent();
  const fallbackEvent = state.events[0] ?? null;
  const targetEvent = currentEvent ?? fallbackEvent;

  if (!targetEvent) {
    showScreen("screen-create-event");
    return;
  }

  selectedEventId = targetEvent.id;
  showScreen("screen-add-expense");
}

function handleAddExpense(event) {
  event.preventDefault();
  const selectedEvent = getSelectedEvent();
  if (!selectedEvent) {
    return;
  }

  const formData = new FormData(event.currentTarget);
  const title = formData.get("title").toString().trim();
  const amount = Number(formData.get("amount")) || 0;

  if (amount <= 0) {
    return;
  }

  selectedEvent.expenses.unshift({
    id: crypto.randomUUID(),
    title: title || "",
    category: formData.get("category").toString(),
    amount,
    createdAt: Date.now(),
  });

  saveState();
  event.currentTarget.reset();
  showScreen("screen-event-detail");
}

function handleQuoteSuggestion(event) {
  event.preventDefault();
  const t = getCopy();
  const suggestion = quoteSuggestionInput.value.trim();

  if (!suggestion) {
    quoteSuggestionFeedback.textContent = t.quoteSuggestionEmpty;
    return;
  }

  const user = ["karlosldb"].join("");
  const host = ["hotmail", "com"].join(".");
  const subject = encodeURIComponent("aware quote suggestion");
  const body = encodeURIComponent(`Suggested quote:\n${suggestion}`);

  quoteSuggestionFeedback.textContent = t.quoteSuggestionReady;
  window.location.href = `mailto:${user}@${host}?subject=${subject}&body=${body}`;
}

function openQuoteSuggestionModal() {
  quoteSuggestionFeedback.textContent = "";
  if (typeof quoteSuggestionModal?.showModal === "function") {
    quoteSuggestionModal.showModal();
    return;
  }

  quoteSuggestionModal?.setAttribute("open", "open");
}

function closeQuoteSuggestionModal() {
  if (typeof quoteSuggestionModal?.close === "function") {
    quoteSuggestionModal.close();
    return;
  }

  quoteSuggestionModal?.removeAttribute("open");
}

function handleDeleteEvent() {
  const selectedEvent = getSelectedEvent();
  if (!selectedEvent) {
    return;
  }

  if (!window.confirm(getCopy().deleteConfirm(selectedEvent.name))) {
    return;
  }

  state.events = state.events.filter((event) => event.id !== selectedEvent.id);
  selectedEventId = state.events[0]?.id ?? null;
  state.currentEventIds = state.currentEventIds.filter((id) => id !== selectedEvent.id);
  saveState();

  if (state.events.length) {
    showScreen("screen-events");
  } else {
    showScreen("screen-landing");
    render();
  }
}

function showScreen(screenId) {
  currentScreenId = screenId;
  render();
}

function render() {
  renderTranslations();

  for (const screen of screens) {
    screen.classList.toggle("screen-active", screen.id === currentScreenId);
  }

  renderEvents();
  renderDetail();
  renderDashboard();
  renderVoicePanel();
}

function renderEvents() {
  const t = getCopy();
  eventCount.textContent = t.itemCount(state.events.length);
  goCreateButton?.classList.toggle("hidden", state.events.length === 0);

  if (!state.events.length) {
    eventList.innerHTML = `
      <div class="empty-state empty-state-events">
        <p>${escapeHtml(t.noEvents)}</p>
        <button class="accent-plus-button empty-plus-button" id="empty-create-event-button" type="button" aria-label="${escapeHtml(t.createEventLabel)}">+</button>
      </div>
    `;
    eventList.querySelector("#empty-create-event-button")?.addEventListener("click", () => showScreen("screen-create-event"));
    return;
  }

  eventList.innerHTML = "";
  for (const event of state.events) {
    const fragment = eventTemplate.content.cloneNode(true);
    const button = fragment.querySelector(".event-card");
    const spent = sumExpenses(event);
    const budget = Number(event.budget) || 0;
    const progressPercent = budget > 0 ? Math.min((spent / budget) * 100, 100) : 0;
    const isOverBudget = budget > 0 && spent > budget;

    button.innerHTML = `
      <div class="event-card-body">
        <div class="event-card-main">
          <div>
            <p class="mono-label event-card-type">${escapeHtml(translateCategory(event.type))}</p>
            <h3 class="event-card-name">${escapeHtml(event.name)}</h3>
            ${state.currentEventIds.includes(event.id) ? '<span class="status-chip">Current</span>' : ""}
          </div>
          <strong class="event-card-total">${formatCurrency(spent, event.currency)}</strong>
        </div>
        ${
          budget > 0
            ? `
              <div class="budget-progress">
                <div class="budget-progress-meta">
                  <span>${escapeHtml(t.ofBudget(Math.round(progressPercent), formatCurrency(budget, event.currency)))}</span>
                  <span>${escapeHtml(isOverBudget ? t.overBudget : t.budgetInControl)}</span>
                </div>
                <div class="budget-progress-track">
                  <div
                    class="budget-progress-fill ${isOverBudget ? "is-over" : ""}"
                    style="width: ${progressPercent}%"
                  ></div>
                </div>
              </div>
            `
            : `
              <div class="budget-progress">
                <div class="budget-progress-meta">
                  <span>${escapeHtml(t.noBudgetSet)}</span>
                  <span>${escapeHtml(t.addOneInEvent)}</span>
                </div>
                <div class="budget-progress-track">
                  <div class="budget-progress-fill" style="width: 0%"></div>
                </div>
              </div>
            `
        }
      </div>
    `;

    button.addEventListener("click", () => {
      selectedEventId = event.id;
      showScreen("screen-event-detail");
    });

    eventList.appendChild(fragment);
  }
}

function renderDetail() {
  const t = getCopy();
  const selectedEvent = getSelectedEvent();

  if (!selectedEvent) {
    detailType.textContent = "";
    detailName.textContent = t.noEventSelected;
    detailTotal.textContent = formatCurrency(0);
    detailBudget.textContent = t.noBudget;
    expenseList.innerHTML = `<div class="empty-state">${escapeHtml(t.chooseOrCreate)}</div>`;
    return;
  }

  detailType.textContent = translateCategory(selectedEvent.type);
  detailName.textContent = selectedEvent.name;
  detailTotal.textContent = formatCurrency(sumExpenses(selectedEvent), selectedEvent.currency);
  detailBudget.textContent = selectedEvent.budget
    ? formatCurrency(selectedEvent.budget, selectedEvent.currency)
    : t.noBudget;
  detailBudget.classList.toggle(
    "danger-text",
    Boolean(selectedEvent.budget && sumExpenses(selectedEvent) > selectedEvent.budget)
  );
  setCurrentEventButton.classList.toggle("is-current", state.currentEventIds.includes(selectedEvent.id));
  setCurrentEventButton.textContent =
    state.currentEventIds.includes(selectedEvent.id) ? t.currentEventActive : t.setAsCurrent;

  if (!selectedEvent.expenses.length) {
    expenseList.innerHTML = `<div class="empty-state">${escapeHtml(t.noExpenses)}</div>`;
    return;
  }

  expenseList.innerHTML = selectedEvent.expenses
    .map(
      (expense) => `
        <div class="expense-row">
          <div>
            <strong>${escapeHtml(expense.title || translateCategory(expense.category))}</strong>
            <span class="expense-meta">${escapeHtml(translateCategory(expense.category))}</span>
          </div>
          <div class="expense-price">${formatCurrency(expense.amount, selectedEvent.currency)}</div>
        </div>
      `
    )
    .join("");
}

function renderDashboard() {
  const t = getCopy();
  const currentEvents = getCurrentEvents();
  const recentEvents = [...state.events]
    .sort((a, b) => Number(b.createdAt || 0) - Number(a.createdAt || 0))
    .slice(0, 5);
  const totals = getCategoryTotals(recentEvents);
  const categories = [
    { key: "food", label: translateCategory("food"), amount: totals.food },
    { key: "travel", label: translateCategory("travel"), amount: totals.travel },
    { key: "other", label: translateCategory("other"), amount: totals.other }
  ];
  const totalSpent = categories.reduce((sum, item) => sum + item.amount, 0);
  const topCategory = categories.reduce((top, item) => (item.amount > top.amount ? item : top), categories[0]);
  const averageSpent = recentEvents.length ? totalSpent / recentEvents.length : 0;

  dashboardRangeLabel.textContent = t.lastEvents(recentEvents.length || 0);
  document.querySelector("#dashboard-current-event-name").textContent = getCurrentEventSummary(currentEvents, t);
  dashboardTotalSpent.textContent = formatCurrency(totalSpent);
  dashboardAverageSpent.textContent = formatCurrency(averageSpent);
  dashboardTopCategory.textContent = totalSpent ? topCategory.label : t.none;
  dashboardEventCount.textContent = String(recentEvents.length);

  if (!recentEvents.length || !totalSpent) {
    dashboardChart.innerHTML = `<div class="empty-state">${escapeHtml(t.unlockDrama)}</div>`;
    dashboardInsightTitle.textContent = t.noDramaYet;
    dashboardInsightText.textContent = t.noDramaDashboard;
    return;
  }

  const maxAmount = Math.max(...categories.map((item) => item.amount), 1);
  dashboardChart.innerHTML = categories
    .map((item) => {
      const width = (item.amount / maxAmount) * 100;
      const share = totalSpent ? Math.round((item.amount / totalSpent) * 100) : 0;
      return `
        <div class="chart-row">
          <div class="chart-meta">
            <span class="chart-label">${item.label}</span>
            <span>${formatCurrency(item.amount)} · ${share}%</span>
          </div>
          <div class="chart-track">
            <div class="chart-fill" style="width: ${width}%"></div>
          </div>
        </div>
      `;
    })
    .join("");

  dashboardInsightTitle.textContent = t.topCategoryOwns(topCategory.label, recentEvents.length);
  dashboardInsightText.textContent = getSarcasticInsight(topCategory.key, recentEvents, totalSpent, topCategory.amount);
}

function getCategoryTotals(events) {
  return events.reduce(
    (totals, event) => {
      for (const expense of event.expenses) {
        const key = expense.category === "food" || expense.category === "travel" ? expense.category : "other";
        totals[key] += Number(expense.amount || 0);
      }
      return totals;
    },
    { food: 0, travel: 0, other: 0 }
  );
}

function getSarcasticInsight(category, events, totalSpent, topAmount) {
  const localeInsights = sarcasticInsights[currentLocale] ?? sarcasticInsights.en;
  const phrases = localeInsights[category] ?? localeInsights.other ?? sarcasticInsights.en.other;
  const baseIndex = Math.abs(
    Math.round(totalSpent) + Math.round(topAmount) + events.length + category.length + getEventNameSeed(events)
  ) % phrases.length;
  return phrases[baseIndex];
}

function getEventNameSeed(events) {
  return events.reduce((sum, event) => {
    return sum + [...String(event.name || "")].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }, 0);
}

function getSelectedEvent() {
  return state.events.find((event) => event.id === selectedEventId) ?? null;
}

function getCurrentEvents() {
  return state.currentEventIds
    .map((id) => state.events.find((event) => event.id === id) ?? null)
    .filter(Boolean);
}

function getCurrentEvent() {
  return getCurrentEvents()[0] ?? null;
}

function getCurrentEventSummary(currentEvents, t) {
  if (!currentEvents.length) {
    return t.none;
  }

  if (currentEvents.length === 1) {
    return currentEvents[0].name;
  }

  if (currentEvents.length === 2) {
    return `${currentEvents[0].name} + ${currentEvents[1].name}`;
  }

  return `${currentEvents[0].name} +${currentEvents.length - 1}`;
}

function sumExpenses(event) {
  return event.expenses.reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
}

function formatCurrency(value, currencyOverride = currentCurrency) {
  return new Intl.NumberFormat(currentLocale, {
    style: "currency",
    currency: currencyOverride || currentCurrency,
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setupPwa() {
  if (!("serviceWorker" in navigator)) {
    return;
  }

  window.addEventListener("load", async () => {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));

    if ("caches" in window) {
      const cacheKeys = await window.caches.keys();
      await Promise.all(cacheKeys.map((key) => window.caches.delete(key)));
    }
  });
}

function setupLanguageSelector() {
  languageSelect.innerHTML = availableLocales
    .map((locale) => `<option value="${locale.code}">${locale.label}</option>`)
    .join("");
  languageSelect.value = currentLocale;

  currencySelect.innerHTML = availableCurrencies
    .map((currency) => `<option value="${currency.code}">${currency.label}</option>`)
    .join("");
  currencySelect.value = currentCurrency;
  updateStateIcons();
}

function handleLocaleChange(event) {
  currentLocale = event.currentTarget.value;
  writeStorage(LOCALE_KEY, currentLocale);
  currentQuoteIndex = -1;
  setLandingQuote();
  updateStateIcons();
  render();
}

function handleCurrencyChange(event) {
  currentCurrency = event.currentTarget.value;
  writeStorage(CURRENCY_KEY, currentCurrency);
  updateStateIcons();
  render();
}

function handleSetCurrentEvent() {
  const selectedEvent = getSelectedEvent();
  if (!selectedEvent) {
    return;
  }

  if (state.currentEventIds.includes(selectedEvent.id)) {
    state.currentEventIds = state.currentEventIds.filter((id) => id !== selectedEvent.id);
  } else {
    state.currentEventIds = [selectedEvent.id, ...state.currentEventIds];
  }
  saveState();
  render();
}

function handleOpenVoiceExpense() {
  const selectedEvent = getSelectedEvent();
  if (selectedEvent && !state.currentEventIds.includes(selectedEvent.id)) {
    state.currentEventIds = [selectedEvent.id, ...state.currentEventIds];
    saveState();
  }
  showScreen("screen-add-expense");
}

function handleUseCurrentEvent() {
  const currentEvent = getCurrentEvent();
  if (!currentEvent) {
    voiceFeedback.textContent = "Set a current event first.";
    return;
  }

  selectedEventId = currentEvent.id;
  voiceFeedback.textContent = `Using ${currentEvent.name} as current event.`;
  render();
}

function renderVoicePanel() {
  const t = getCopy();
  const currentEvents = getCurrentEvents();
  voiceCurrentEventLabel.textContent = currentEvents.length
    ? t.currentEventLabel(getCurrentEventSummary(currentEvents, t))
    : t.currentEventNone;
  toggleVoiceButton.textContent = isListening ? t.stopVoice : t.startVoice;
}

function handleToggleVoice() {
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!Recognition) {
    voiceFeedback.textContent = "Voice capture is not supported here. Paste the transcript manually.";
    return;
  }

  if (!speechRecognition) {
    speechRecognition = new Recognition();
    speechRecognition.interimResults = true;
    speechRecognition.continuous = false;

    speechRecognition.onresult = (speechEvent) => {
      const transcript = [...speechEvent.results]
        .map((result) => result[0].transcript)
        .join(" ")
        .trim();
      voiceTranscript.value = transcript;
      voiceFeedback.textContent = "Voice note captured. Parse it when ready.";
    };

    speechRecognition.onend = () => {
      isListening = false;
      renderVoicePanel();
    };
  }

  speechRecognition.lang = currentLocale === "es" ? "es-ES" : "en-US";

  if (isListening) {
    speechRecognition.stop();
    isListening = false;
    renderVoicePanel();
    return;
  }

  isListening = true;
  voiceFeedback.textContent = "Listening...";
  renderVoicePanel();
  speechRecognition.start();
}

function handleParseVoice() {
  const currentEvent = getCurrentEvent();
  if (!currentEvent) {
    voiceFeedback.textContent = "Choose a current event before adding voice expenses.";
    return;
  }

  const transcript = voiceTranscript.value.trim();
  if (!transcript) {
    voiceFeedback.textContent = "Say something first or paste a voice transcript.";
    return;
  }

  const parsed = parseExpenseFromTranscript(transcript);
  selectedEventId = currentEvent.id;
  expenseForm.elements.title.value = "";
  expenseForm.elements.amount.value = parsed.amount ? String(parsed.amount) : "";
  expenseForm.elements.category.value = parsed.category;

  voiceFeedback.textContent = parsed.amount
    ? `Ready to save in ${translateCategory(parsed.category)} for ${formatCurrency(parsed.amount, currentEvent.currency)}.`
    : "I detected the expense. Add the amount if I missed it.";
}

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // The app still works without persistence when storage is blocked.
  }
}

function setLandingQuote() {
  const nextIndex = pickNextQuoteIndex();
  currentQuoteIndex = nextIndex;
  renderQuoteText(getQuotes()[nextIndex]);
}

function rotateLandingQuote() {
  const nextIndex = pickNextQuoteIndex();
  currentQuoteIndex = nextIndex;
  typeLandingQuote(getQuotes()[nextIndex]);
}

function pickNextQuoteIndex() {
  const quotes = getQuotes();

  if (quotes.length <= 1) {
    return 0;
  }

  let nextIndex = currentQuoteIndex;
  while (nextIndex === currentQuoteIndex) {
    nextIndex = Math.floor(Math.random() * quotes.length);
  }
  return nextIndex;
}

function typeLandingQuote(text) {
  if (quoteTypingFrame) {
    cancelAnimationFrame(quoteTypingFrame);
  }

  if (quoteTypingTimeout) {
    clearTimeout(quoteTypingTimeout);
  }

  landingQuote.classList.add("is-typing");
  renderQuoteText("");

  let charIndex = 0;

  const step = () => {
    charIndex += 1;
    renderQuoteText(text.slice(0, charIndex));

    if (charIndex < text.length) {
      quoteTypingTimeout = window.setTimeout(() => {
        quoteTypingFrame = requestAnimationFrame(step);
      }, 26);
      return;
    }

    quoteTypingTimeout = window.setTimeout(() => {
      landingQuote.classList.remove("is-typing");
    }, 300);
  };

  quoteTypingFrame = requestAnimationFrame(step);
}

function renderQuoteText(text) {
  if (!text) {
    landingQuote.innerHTML = "";
    return;
  }

  const words = text.split(" ");
  const accentWordIndex = words.findIndex((word) => word.length > 3);

  if (accentWordIndex === -1) {
    landingQuote.innerHTML = `<span class="quote-accent">${escapeHtml(text)}</span>`;
    return;
  }

  words[accentWordIndex] = `<span class="quote-accent">${escapeHtml(words[accentWordIndex])}</span>`;

  landingQuote.innerHTML = words.join(" ");
}

function renderTranslations() {
  const t = getCopy();

  document.title = t.appName;
  document.documentElement.lang = currentLocale;
  document.querySelector('meta[name="apple-mobile-web-app-title"]')?.setAttribute("content", t.appName);

  const brandLabels = document.querySelectorAll(".brand-label");
  brandLabels.forEach((label) => {
    label.textContent = t.appName;
  });

  startButton.textContent = t.landingCtaCreate;
  goEventsButton.textContent = t.landingCtaEvents;
  goDashboardButton.textContent = t.landingCtaDashboard;
  document.querySelector("#landing-footer").textContent = t.landingFooter;
  goDashboardFromEventsButton.textContent = t.navDashboard;
  if (goCreateButton) {
    goCreateButton.textContent = t.navNew;
  }
  dashboardEventsButton.textContent = t.navEvents;
  languageSelect.setAttribute("aria-label", t.navLanguage);
  currencySelect.setAttribute("aria-label", t.navCurrency);
  languageSelect.parentElement?.setAttribute("aria-label", t.navLanguage);
  currencySelect.parentElement?.setAttribute("aria-label", t.navCurrency);
  updateStateIcons();

  for (const button of backButtons) {
    button.textContent = t.navBack;
  }

  document.querySelector("#screen-dashboard h2").textContent = t.titleDashboard;
  document.querySelector("#screen-events h2").textContent = t.titleEvents;
  document.querySelector("#screen-create-event h2").textContent = t.titleCreate;
  document.querySelector("#screen-event-detail h2").textContent = t.titleEvent;
  document.querySelector("#screen-add-expense h2").textContent = t.titleAddExpense;

  setText("#screen-events .section-row .mono-label", 0, t.savedEvents);
  createEventSubmitButton.textContent = t.createEventLabel;
  setText("#screen-event-detail .summary-card span", 0, t.total);
  setText("#screen-event-detail .summary-card span", 1, t.budget);
  setText("#screen-event-detail .section-row .mono-label", 0, t.expenses);
  goAddExpenseButton.textContent = t.recordExpense;
  deleteEventButton.textContent = t.delete;

  setText("#screen-dashboard .section-row .mono-label", 0, t.overview);
  setText("#screen-dashboard .section-row .mono-label", 1, t.categorySpend);
  setText("#screen-dashboard .section-row .mono-label", 2, t.awareAnalysis);
  setText("#screen-dashboard .section-row .subtle-text", 0, t.lastEvents(5));
  setText("#screen-dashboard .section-row .subtle-text", 1, t.lastEvents(5));
  setText(".dashboard-grid .summary-card span", 0, t.totalSpent);
  setText(".dashboard-grid .summary-card span", 1, t.averageEvent);
  setText(".dashboard-grid .summary-card span", 2, t.biggestCategory);
  setText(".dashboard-grid .summary-card span", 3, t.trackedEvents);
  setText(".current-event-banner .mono-label", 0, t.currentEvent);

  setCurrentEventButton.textContent = t.setAsCurrent;
  goVoiceExpenseButton.textContent = t.addByVoice;
  toggleVoiceButton.textContent = isListening ? t.stopVoice : t.startVoice;
  parseVoiceButton.textContent = t.parseVoice;
  useCurrentEventButton.textContent = t.useCurrentEvent;
  document.querySelector("#quote-suggestion-label").textContent = t.quoteLab;
  document.querySelector("#quote-suggestion-title").textContent = t.quoteSuggestionTitle;
  document.querySelector("#quote-suggestion-text").textContent = t.quoteSuggestionBody;
  document.querySelector("#quote-suggestion-submit").textContent = t.quoteSuggestionSubmit;
  document.querySelector("#quote-suggestion-close").textContent = t.quoteSuggestionClose;
  quoteSuggestionInput.placeholder = t.quoteSuggestionPlaceholder;

  updateFormTranslations(t);
}

function updateFormTranslations(t) {
  const eventLabels = document.querySelectorAll("#event-form label span");
  eventLabels[0].textContent = t.fieldEventName;
  eventLabels[1].textContent = t.fieldType;
  eventLabels[2].textContent = t.fieldBudget;
  eventLabels[3].textContent = t.fieldCurrency;
  eventForm.elements.name.placeholder = t.fieldEventNamePlaceholder;
  eventForm.elements.budget.placeholder = t.fieldBudgetPlaceholder;
  eventForm.elements.currency.innerHTML = availableCurrencies
    .map((currency) => `<option value="${currency.code}">${currency.label}</option>`)
    .join("");
  eventForm.elements.currency.value = currentCurrency;

  const expenseLabels = document.querySelectorAll("#expense-form label span");
  expenseLabels[0].textContent = t.fieldExpenseType;
  expenseLabels[1].textContent = t.fieldAmount;
  expenseLabels[2].textContent = t.fieldNote;
  expenseForm.elements.amount.placeholder = t.fieldAmountPlaceholder;
  expenseForm.elements.title.placeholder = t.fieldNotePlaceholder;
  saveExpenseSubmitButton.textContent = t.saveExpense;

  const voiceLabels = document.querySelectorAll(".voice-panel label span");
  if (voiceLabels[0]) {
    voiceLabels[0].textContent = t.transcript;
  }
  voiceTranscript.placeholder = t.transcriptPlaceholder;
  voiceFeedback.textContent = voiceFeedback.textContent.includes("Listening")
    ? voiceFeedback.textContent
    : t.voiceHelp;

  updateSelectOptions(eventForm.elements.type, ["travel", "party", "event", "activity", "casual", "other"]);
  updateSelectOptions(expenseForm.elements.category, ["food", "travel", "other"]);
}

function updateSelectOptions(select, keys) {
  keys.forEach((key, index) => {
    const option = select.options[index];
    if (option) {
      option.textContent = translateCategory(key);
    }
  });
}

function getCopy() {
  return translations[currentLocale] ?? translations.en;
}

function getQuotes() {
  return getCopy().quotes ?? translations.en.quotes;
}

function translateCategory(key) {
  const t = getCopy();
  return t.category[key] ?? capitalize(key);
}

function setText(selector, index, text) {
  const nodes = document.querySelectorAll(selector);
  if (nodes[index]) {
    nodes[index].textContent = text;
  }
}

function updateStateIcons() {
  const locale = availableLocales.find((item) => item.code === currentLocale);
  const currency = availableCurrencies.find((item) => item.code === currentCurrency);

  languageStateIcon.textContent = locale?.icon ?? "EN";
  currencyStateIcon.textContent = currency?.icon ?? "$";
}

function parseExpenseFromTranscript(transcript) {
  const normalized = transcript.toLowerCase().trim();
  const amount = extractAmount(normalized);
  const category = inferExpenseCategory(normalized);
  const title = inferExpenseTitle(normalized, amount);

  return { title, amount, category };
}

function extractAmount(text) {
  const digitMatch = text.match(/(\d+[.,]?\d{0,2})/);
  if (digitMatch) {
    return Number(digitMatch[1].replace(",", "."));
  }

  const numberWords = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    uno: 1,
    una: 1,
    dos: 2,
    tres: 3,
    cuatro: 4,
    cinco: 5,
    seis: 6,
    siete: 7,
    ocho: 8,
    nueve: 9,
    diez: 10
  };

  for (const word of text.split(/\s+/)) {
    if (numberWords[word] !== undefined) {
      return numberWords[word];
    }
  }

  return 0;
}

function inferExpenseCategory(text) {
  const foodKeywords = [
    "food",
    "dinner",
    "lunch",
    "breakfast",
    "snack",
    "coffee",
    "beer",
    "drink",
    "restaurant",
    "protein",
    "proteina",
    "comida",
    "cena",
    "desayuno",
    "almuerzo",
    "barrita"
  ];
  const travelKeywords = [
    "taxi",
    "uber",
    "bus",
    "train",
    "metro",
    "flight",
    "plane",
    "fuel",
    "gas",
    "parking",
    "ride",
    "viaje",
    "tren",
    "vuelo"
  ];

  if (foodKeywords.some((keyword) => text.includes(keyword))) {
    return "food";
  }

  if (travelKeywords.some((keyword) => text.includes(keyword))) {
    return "travel";
  }

  return "other";
}

function inferExpenseTitle(text, amount) {
  let cleaned = text
    .replace(/for\s+\d+[.,]?\d{0,2}.*/i, "")
    .replace(/por\s+\d+[.,]?\d{0,2}.*/i, "")
    .replace(/me compr[eé]\s+/i, "")
    .replace(/i bought\s+/i, "")
    .replace(/paid for\s+/i, "")
    .replace(/gast[eé]\s+en\s+/i, "")
    .replace(/\b(euros?|usd|dollars?|bucks?|eur)\b/gi, "")
    .trim();

  if (!cleaned || cleaned.length < 2) {
    return "";
  }

  return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
}

function applyAccentTheme() {
  const accent = availableAccents.find((item) => item.code === currentAccent) ?? availableAccents[3];
  document.documentElement.style.setProperty("--signal", accent.hex);
  document.documentElement.style.setProperty("--signal-rgb", accent.rgb);
}

function cycleAccentTheme() {
  const currentIndex = availableAccents.findIndex((accent) => accent.code === currentAccent);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % availableAccents.length;
  currentAccent = availableAccents[nextIndex].code;
  writeStorage(ACCENT_KEY, currentAccent);
  applyAccentTheme();
}
