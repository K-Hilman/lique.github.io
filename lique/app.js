const firebaseConfig = {
    apiKey: "AIzaSyDFhjtTzRg466bZPhOTlu47dD3Onhj_P0M",
    authDomain: "liqueapprentice.firebaseapp.com",
    databaseURL: "https://liqueapprentice.firebaseio.com",
    projectId: "liqueapprentice",
    storageBucket: "liqueapprentice.appspot.com",
    messagingSenderId: "599693877190",
    appId: "1:599693877190:web:ec2c9e4b8a8dbe39"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//get elements

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');
const btnStart = document.getElementById('btnStart');
const user_email = document.getElementById("user-email");
const display_text = document.getElementById("display-text");

//login event TODO: Add sign/display the user is signed in
btnLogin.addEventListener('click', e => {
    //get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign in
    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));
    
    //Sign in validator
    promise.catch(e => display_text.innerHTML =(e.message));
    
  
});

//create user TODO:Indicate to user that sign up is successfull
btnSignUp.addEventListener('click', e => {
    //get email and pass
    // TODO: EMAIL VALIDATOR
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //sign up
    const promise = auth.createUserWithEmailAndPassword(email,pass);
    
   promise
       .catch(e => console.log(e.message));
    
    //Sign Up Validator
    promise
        .catch(e => display_text.innerHTML =(e.message));
    
});

//sign out btn hid/show TODO:Inform user that they are logged out
btnLogout.addEventListener('click', e =>{
    firebase.auth().signOut();
});

//RT listener
firebase.auth().onAuthStateChanged(firebaseUser =>{
    if(firebaseUser) {
        console.log(firebaseUser);
        btnLogin.classList.add('hide');
        btnSignUp.classList.add('hide');
        txtEmail.classList.add('hide');
        txtPassword.classList.add('hide');
        btnLogout.classList.remove('hide');
        btnStart.classList.remove('hide');
        display_text.innerHTML = "Logged in as";
        user_email.innerHTML =  txtEmail.value;
    } else {
        console.log('not logged in');
        btnLogin.classList.remove('hide');
        btnSignUp.classList.remove('hide');
        txtEmail.classList.remove('hide');
        txtPassword.classList.remove('hide');
        btnLogout.classList.add('hide');
        btnStart.classList.add('hide');
        display_text.innerHTML = "";
        user_email.innerHTML = "";
    }
    });


//Firestore



