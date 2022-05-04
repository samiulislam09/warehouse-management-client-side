import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDu3z_fomSxaz1SvmmYQGmyBL-nuK0EeFk",
  authDomain: "book-warehouse-c7013.firebaseapp.com",
  projectId: "book-warehouse-c7013",
  storageBucket: "book-warehouse-c7013.appspot.com",
  messagingSenderId: "688445948776",
  appId: "1:688445948776:web:5b5342cc799a1065cb0cdd",
  measurementId: "G-N5BQD85ZTQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;