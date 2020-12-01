<template>
    <div class="unit container white-text">
        <div class="row col s12 m12 l12 valign-wrapper" style="margin-top:25%;">    

            <div class="card-content blue center col s3 m3 l3" style="padding-bottom:10px">
                <p class="flow-text">Unit 1</p>
            <a class="waves-effect waves-light btn-large col s12 m12 l12">Button</a>  
            </div>
            

            <div class="card-content blue center col s3 m3 l3 " style="padding-bottom:10px">
                <p class="flow-text">Unit 2</p>
            <router-link :to="{name:'unit2Hp1'}"><a v-if="this.Nlevel=='Good'" class="waves-effect waves-light btn-large col s12 m12 l12">Button</a></router-link>
            <router-link :to="{name:'unit2Mp1'}"> <a v-if="this.Nlevel=='Medium'" class="waves-effect waves-light btn-large col s12 m12 l12">Button</a></router-link>
            <router-link :to="{name:'unit2Ep1'}"><a v-if="this.Nlevel=='Low'" class="waves-effect waves-light btn-large col s12 m12 l12">Button</a></router-link>      
            </div>

            <div class="card-content blue center col s3 m3 l3 " style="padding-bottom:10px">
                <p class="flow-text">Unit 3</p>
            <a class="waves-effect waves-light btn-large col s12 m12 l12">Button</a>  
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'UnitSelection',
    data(){
        return{
            Nlevel: null
        }
    },
    methods:{

    },
    created(){
        let self = this
        var getOptions = {
                source: 'server'
              };
        let users= db.collection("users").orderBy("email")
        .limit(25);

          firebase.auth().onAuthStateChanged((user)=>{
          if(user){
          db.collection("users").where("email","==",user.email)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  self.userTable = doc.id
                  let userRef = db.collection('Unit1-Medium-UserInfo').doc(self.userTable)
                  userRef.get().then(function(doc){
                      self.Nlevel = doc.data().NextLevel
                  })
              });
          })
          .catch(function(error) {
              console.log("Error getting documents: ", error);
          });
          }else{
               this.user = null
               console.log(this.user)
           }
       })
    },

}
</script>

<style>
div.feedback{
    margin-bottom: 230 px;
}
p{
    font-family: 'Prompt', sans-serif;
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

</style>
