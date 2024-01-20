import { initializeApp } from 'firebase-admin';

const admin = require('firebase-admin');
const serviceAccount = require("./firebaseAd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://wewbea-2ca52-default-rtdb.firebaseio.com"
});




