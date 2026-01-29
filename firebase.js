const firebaseConfig = {
  apiKey: "INSERISCI_API_KEY",
  authDomain: "INSERISCI_DOMAIN",
  databaseURL: "INSERISCI_DB_URL",
  projectId: "INSERISCI_PROJECT_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
