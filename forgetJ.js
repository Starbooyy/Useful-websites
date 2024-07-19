import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth,sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCwjyTZ12tfP9O1p0FpW2xQb1RZkIO6F64",
    authDomain: "starboy-edab2.firebaseapp.com",
    projectId: "starboy-edab2",   
    storageBucket: "starboy-edab2.appspot.com",
    messagingSenderId: "846558291593",
    appId: "1:846558291593:web:7385aa122280e4c6078858"
  };

const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);


 
// Reset
const resett = document.getElementById('resettt');
resett.addEventListener("click", function(event){
  // prevent page to refresh
event.preventDefault()

// inputs
const emaill = document.getElementById('emailll').value;


  sendPasswordResetEmail(auth, emaill)
  .then(() => {
    
    alert("Mail send to your Email")
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})


