import * as firebase from "firebase/app";
import "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyAfjg4iXPTSCXwFQFfBdq8fLfOchlUoZbU",
  authDomain: "ivao-a5ea8.firebaseapp.com",
  databaseURL: "https://ivao-a5ea8.firebaseio.com",
  projectId: "ivao-a5ea8",
  storageBucket: "ivao-a5ea8.appspot.com",
  messagingSenderId: "1066641189398",
  appId: "1:1066641189398:web:564e58bf62134cba846337",
  measurementId: "G-SBVR243Y0B"
};

const initializedFirebaseApp = firebase.initializeApp(firebaseConfig);
const messaging = initializedFirebaseApp.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  "BK_WQxWd__oq1PvZC1k9r-RzpbXOzIitHL93GpQL6VSyvt6jSVnJzzb5Xutko1Dq2J2NrlifK_zKqEg2l_p1Vd8"
);
export { messaging };
