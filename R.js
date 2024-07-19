import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
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
const submit = document.getElementById('submitt');
submit.addEventListener("click", function(event){
  // prevent page to refresh
event.preventDefault()

// inputs
const email = document.getElementById('emaill').value;
const password = document.getElementById('passwordd').value;

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account created")
    window.location.href="https:/google.com";
    // window.open('questions.html', '_self');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})

