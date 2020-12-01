<template>
    <div class="login row container">
        <form @submit.prevent="login">
            <div class="card-panel" style="padding:0px;">
            <div class="card-panel blue darken-3 center"><h5 class="center white-text"> รู้เท่าทันดิจิทัลกับ ICS</h5></div>
            <h4 class="center deep-blue-text">ลงชื่อเข้าใช้</h4>
                <div class="input-field col s12 m12 l12" style="margin-left:10px;">
                    <i class="material-icons prefix">email</i>
                    <input type="email" name="email" id="email" class="col s9 m10 l10" style="margin-left: 40px;" v-model="email">
                    <label for="email" style="font-family: Century Gothic;color: #003762;font-size: 18px;margin-left: 40px;">อีเมล</label>
                </div>
                <!-- <div class="input-field">
                        <i class="material-icons prefix">account_circle</i>
                        <input type="text" name="username" id="username" style="margin-left: 40px;width: 300px;" v-model="username">
                        <label for="name" style="font-family: Century Gothic;color: #003762;font-size: 18px;margin-left: 40px;">ชื่อผู้ใช้</label>
                 </div> -->
                    <div  class="input-field col s12 m12 l12" style="margin-left:10px;">
                        <i class="material-icons prefix">lock</i>
                        <input type="password" name="password" class="col s9 m10 l10" id="password" style="margin-left: 40px;" v-model="password">
                        <label for="password" style="font-family: Century Gothic;color: #003762;font-size: 18px;margin-left: 40px;">รหัสผ่าน</label>
                </div>
                 
                 <div class="field">
                     <p v-if="feedback" class="red-text center">{{feedback}}</p>
                     <div class="row" v-if="loading==true">
                        <div class="col s12 m12 l12 center">
                            <div class="preloader-wrapper big active">
                                <div class="spinner-layer spinner-red-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                </div><div class="gap-patch">
                                    <div class="circle"></div>
                                </div><div class="circle-clipper right">
                                    <div class="circle"></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <button class="btn blue darken-3" style="display: inline-block; margin: auto;display: block">เข้าระบบ</button>
                 </div>
                 
                 <!-- <h6 class="center deep-blue-text"> หรือเข้าสู่ระบบด้วย </h6>
                 <br>
                 <div id="google-signin-button" style="margin:auto;display:block;width: 100px;height: 20px;margin-bottom: 10px;"></div>
                 <br> -->
                 <div class="center">
                     <p class="center deep-blue-text" style="display:inline-block"> ยังไม่มีบัญชี? </p>
                     <router-link :to="{name: 'Signup'}"><a class="center red-text"> <u>กดที่นี่</u> </a></router-link>
                 </div>
                 <!-- Facebook button
                     <v-facebook-login app-id="273779753566508" button-style=""></v-facebook-login> -->
                 </div>
        </form>
    </div>
</template>

<script>
// import { VFBLogin as VFacebookLogin } from 'vue-facebook-login-component'
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'Login',
    data(){
        return{
            email: null,
            username: null,
            password: null,
            feedback: null,
            users: null,
            id_token: null,
            loading: false,
        }
    },
    // components:{
    //     VFacebookLogin
    // },
    mounted(){
        gapi.signin2.render('google-signin-button', {
      onsuccess: this.OnSignIn
    })
    },
    created(){
        let self = this
        let users= db.collection("users").orderBy("email")
        .limit(25);
        let Gusers = db.collection("Gusers").orderBy("Email")
              .limit(25);
    },
    methods:{
        
        login(){
            const self = this;
            self.loading = true;
            if(this.email&&this.password){
                this.feedback = null
                firebase.auth().signInWithEmailAndPassword(this.email,this.password)
                .then(cred=>{
                    console.log(cred.user)
                    let Usersref = db.collection('users').doc(this.email)
                    var getOptions = {
                    source: 'server'
                    };
                     Usersref.get(getOptions).then(function(doc) {
                        // Document was found in the cache. If no cached document exists,
                        // an error will be returned to the 'catch' block below.
                        console.log("Cached document data:", doc.data().pretest);
                        if(doc.data().pretest==false){
                            self.$router.push({name:'PreTestIntro'});
                        }else if(doc.data().pretest==true){
                            self.$router.push({name:'UnitHome'});
                        }
                        
                    }).catch(function(error) {
                        console.log("Error getting cached document:", error);
                    });
                }).catch(err=>{
                    this.feedback = err.message 
                })
                
            }else{
                this.feedback = 'Please fill in all fields'
            }
        },
        OnSignIn(user){
            const profile = user.getBasicProfile();
            var id_token = user.getAuthResponse().id_token;
            let ref = db.collection('users').doc(profile.getEmail())
            ref.get().then(doc=>{
                if(doc.exist){
                     firebase.auth().signInWithEmailAndPassword(profile.getEmail(),profile.getEmail())
                .then(cred=>{
                    console.log(cred.user)
                    // let GUsersref = db.collection('Gusers').doc(profile.getEmail())
                    var getOptions = {
                    source: 'server'
                    };
                     ref.get(getOptions).then(function(doc) {
                        // Document was found in the cache. If no cached document exists,
                        // an error will be returned to the 'catch' block below.
                        console.log("Cached document data:", doc.data().pretest);
                        if(doc.data().pretest==false){
                            self.$router.push({name:'PreTestIntro'});
                        }else{
                            self.$router.push({name:'UnitHome'});
                        }
                     })
                }).catch(err=>{
                    this.feedback = err.message 
                })
                }else{
                     firebase.auth().createUserWithEmailAndPassword(profile.getEmail(),profile.getEmail())
                    .then(cred=>{
                        ref.set({
                            // GID: id_token,
                            user_id: cred.user.uid,
                            name: profile.getName(),
                            email: profile.getEmail(),
                            ImageURL:  profile.getImageUrl(),
                            level: null,
                            gender: null,
                            pretest: false,
                            userType: 'Gusers', 
                        })
                    }).then(()=>{
                        this.$router.push({name: 'PreTestIntro'})
                    })
                    .catch(err=>{
                        console.log(err)
                        this.feedback = err.message
                    })
                }
            })
            // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            // console.log('Name: ' + profile.getName());
            // console.log('Image URL: ' + profile.getImageUrl());
            // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        },
    }
}
</script>

<style>
p{
    font-family: 'Prompt', sans-serif;
    font-size: 16px;
}
div{
    font-family: 'Prompt', sans-serif;
}
h1{
    font-family: 'Prompt', serif;
}
h2{
    font-family: 'Prompt', serif;
}
h3{
    font-family: 'Prompt', serif;
}
h4{
    font-family: 'Prompt', serif;
}
h5{
    font-family: 'Prompt', serif;
}
h6{
    font-family: 'Prompt', serif;
}
a{
  font-family: 'Pridi', serif;
}
button{
    font-family: 'Pridi', serif;
}
.box {
  width: 300px;
  margin: 50px auto;
  background: #636363;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  color: #fff;
  font-family: 'Prompt', sans-serif;
  position:relative;
}
.sb1:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #636363;
  border-right: 10px solid transparent;
  border-top: 10px solid #636363;
  border-bottom: 10px solid transparent;
  right: -20px;
  top: 6px;
}
.login{
    max-width: 400px;
    margin-top: 30px;
}
.login h2{
    font-size: 2.4em;   
}
.login .field{
    margin-bottom:16px;
}
</style>
