// Firebase SDK 라이브러리 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { collection, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
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
let num = 1; // 전역 변수로 선언하여 문서 아이디를 계속 증가시킬 수 있도록 합니다.

navigator.geolocation.getCurrentPosition(async function (pos) {
  console.log(pos);
  var latitude = pos.coords.latitude;
  var longitude = pos.coords.longitude;

  let location = {
    latitude,
    longitude,
    timestamp: new Date(),
  };

  const locationRef = doc(db, "location", `${num}`); // 문서 아이디를 동적으로 설정하고 증가시킵니다.
  await setDoc(locationRef, location);

  alert("현재 위치는@@@@ : " + latitude + ", " + longitude);
  num++;
});
