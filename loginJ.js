
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth ,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCwjyTZ12tfP9O1p0FpW2xQb1RZkIO6F64",
    authDomain: "starboy-edab2.firebaseapp.com",
    projectId: "starboy-edab2",   
    storageBucket: "starboy-edab2.appspot.com",
    messagingSenderId: "846558291593",
    appId: "1:846558291593:web:7385aa122280e4c6078858"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);

// submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
  // prevent page to refresh
event.preventDefault()

// inputs
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Loged in")
    window.location.href="questions.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})
