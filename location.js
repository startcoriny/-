// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getDocs } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Firebase 구성 정보 설정
const firebaseConfig = {
  apiKey: "AIzaSyCW1ZoAJBKfD00H9Bs3lFPZIUi-v11_xrk",
  authDomain: "startcoriny.firebaseapp.com",
  projectId: "startcoriny",
  storageBucket: "startcoriny.appspot.com",
  messagingSenderId: "243347039570",
  appId: "1:243347039570:web:e74e59f23919c1d886c68b",
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

navigator.geolocation.getCurrentPosition(async function (pos) {
  console.log(pos);
  var latitude = pos.coords.latitude;
  var longitude = pos.coords.longitude;

  let location = {
    latitude,
    longitude,
  };
  await addDoc(collection(db, "location"), location);

  alert("현재 위치는 : " + latitude + ", " + longitude);
});
