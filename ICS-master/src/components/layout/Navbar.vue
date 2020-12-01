<template>
    <div class="navbar-fixed col s12">
        <nav class="blue darken-1 nav-extended">
                <div class="nav-wrapper">
                    
                    <div class="col s2 row" style="margin:0px;margin-left:10px;">
                        <router-link :to="{name: 'UnitHome'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/logo/ICS.png" 
                        style="padding-top: 5px;padding-right: 20px;padding-bottom: 15px;" alt="" 
                        class="responsive-img brand-logo left col s2 m1 l1"></router-link> 
                    </div>
                    
                <ul class="right">
                    <li v-if="user"><a @click="dashboard">Result</a></li>
                    <li v-if="user"><a @click="logout">Logout</a></li>
                </ul>
                </div>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Navbar',
    data(){
        return{
            user: null
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.push({name:'Login'})
            })
        },
        dashboard(){
                this.$router.push({name:'Dashboard'})
        },
    },
    created(){
       // let user = firebase.auth().currentUser
       firebase.auth().onAuthStateChanged((user)=>{
           if(user){
               this.user = user
           }else{
               this.user = null
           }
       })
    }
}
</script>

<style>
a{text-decoration:none;}
p{
    font-family: 'Prompt', sans-serif;
}
</style>
