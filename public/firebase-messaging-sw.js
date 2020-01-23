importScripts("https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAfjg4iXPTSCXwFQFfBdq8fLfOchlUoZbU",
  authDomain: "ivao-a5ea8.firebaseapp.com",
  databaseURL: "https://ivao-a5ea8.firebaseio.com",
  projectId: "ivao-a5ea8",
  storageBucket: "ivao-a5ea8.appspot.com",
  messagingSenderId: "1066641189398",
  appId: "1:1066641189398:web:564e58bf62134cba846337",
  measurementId: "G-SBVR243Y0B"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("my notification title");
    });
  return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
  // do what you want
  // ...
});
