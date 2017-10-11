import {initializeApp} from 'firebase'

const app = initializeApp({
    apiKey: "AIzaSyADrHG0aZ1mcFmMFbtcF5Fw-Mlz6IvmfcQ",
    authDomain: "jobs-board-e7be4.firebaseapp.com",
    databaseURL: "https://jobs-board-e7be4.firebaseio.com",
    projectId: "jobs-board-e7be4",
    storageBucket: "jobs-board-e7be4.appspot.com",
    messagingSenderId: "738430337246"
  })

  export const db = app.database();
  export const nameRef = db.ref('names');