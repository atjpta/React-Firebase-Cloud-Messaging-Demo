// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyC6BA9m_bpPTMyRC26cCh6HKa5lsEXuprA",
  authDomain: "stg-gain.firebaseapp.com",
  databaseURL: "https://stg-gain-default-rtdb.firebaseio.com",
  projectId: "stg-gain",
  storageBucket: "stg-gain.appspot.com",
  messagingSenderId: "276756743439",
  appId: "1:276756743439:web:b465a981e77c091abcea7a",
  measurementId: "G-DPN453J8EE",
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: `BJAejdqlx_rPm2Tj6P4KZxyqujGVCIWH6LVzJQpC6OkiaL4fXVHC_9-abNfA848SF-lr12lf45xQKZ6Nw-k2OFk` })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

  
