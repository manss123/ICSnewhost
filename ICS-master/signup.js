document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
    var instance = M.FormSelect.getInstance(elems);
  });

const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const level = document.MyForm1.level;
const gender = document.querySelector('#gender');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var l = document.MyForm1.level;
    var levelText = l.options[l.selectedIndex].text;
    var g = document.MyForm1.gender;
    var genderText = g.options[g.selectedIndex].text;
    if(username.value&&password.value&&email.value&&firstname.value&&lastname.value&&level.value!=0&&g.value!=0){
        const item={
            username: username.value,
            password: password.value,
            email: email.value,
            firstname: firstname.value,
            lastname: lastname.value,
            level : levelText,
            gender: genderText,
    };
    db.collection('UserInfo').add(item).then(res=>{
        error.textContent = "";
        username.value.value = "";
        password.value = "";
        email.value = "";
        firstname.value = "";
        lastname.value = "";
        level.value = "";
        gender.value = "";
        window.location.href='login.html';
        
    })
}else{
    error.textContent='Please enter value before submitting';
}
SignUp();
});

function SignUp(){
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
    var errorCode = error.code;
    var errorMessage = error.message;
    if(errorCode ==='auth/weak-password'){
        alert('The password is too weak');
    } else{
        alert(errorMessage);
    }
    console.log(error);
});
}

