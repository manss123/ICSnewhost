<template>
    <div class="container" style="margin-top:0px">
         <div class="container section">
           <h5 class="center align-center" style="font-family: Prompt">แบบทดสอบหลังเรียน</h5>
           <h3 class="center align-center" style="font-family: Prompt">12/12</h3>
        <div class="row yellow darken-2" style="padding:10px;">
            <div class="white col s12 m12" style="padding:0px;">
                <form @submit.prevent="PostTest" class="card z-depth-0"
                action="#" name="MyForm1" id="MyForm1">
                    <div class="card-content white" style="margin-top:10px;margin-bottom:10px;padding 10px;">
                        <span class="flow-text center" style="font-size:25px;">{{Question}}</span>
                    </div>
                    <div id="countdown"></div>
                </form>
            </div>
            <div class="col s12 m12 l12" name="ChoiceDiv" id="ChoiceDiv" style="margin-top:61px">
                <div class="col s12 m12 l12" id="Div1" name="Div1">
                  <a class="white black-text waves-effect waves-light btn-large col s12 m6 l6 offset-m3 offset-l3" style=" font-family: 'Pridi', serif;line-height:25px;" id="Choice1" @click="C1Clicked" name="1"  >1. {{C1}}</a>
                </div>
                <div class="col s12 m12 l12" id="Div2" name="Div2" style="margin-top:40px;">
                  <a class="white black-text waves-effect waves-light btn-large col s12 m6 l6 offset-m3 offset-l3" style=" font-family: 'Pridi', serif;line-height:25px;" id="Choice2" @click="C2Clicked" name="2">2. {{C2}}</a>
                </div>
                <div class="col s12 m12 l12" id="Div3" name="Div3" style="margin-top:40px;">
                  <a class="white black-text waves-effect waves-light btn-large col s12 m6 l6 offset-m3 offset-l3" style=" font-family: 'Pridi', serif;line-height:25px;" id="Choice3" @click="C3Clicked" name="3">3. {{C3}}</a>
                </div>
            </div>

        </div>
    </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'PostTest12',
    data(){
        return{
            Question: null, 
            C1: null,
            C2: null,
            C3: null,
            C4: null,
            ArrayQ: [],
            user: null,
            userTable: null,

        }
    },
    created(){
      this.GetQA(),
      this.checkUser()
    },
    methods:{


        GetQA:function(){     
          var self = this
          let QuestionRef = db.collection('Q&A').doc('Question&Answer').collection('Posttest').doc('Number12');
          // Valid options for source are 'server', 'cache', or
          // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
          // for more information.
          var getOptions = {
              source: 'server'
          };
          QuestionRef.get(getOptions).then(function(doc) {
              // Document was found in the cache. If no cached document exists,
              // an error will be returned to the 'catch' block below.
              self.Question = doc.data().Q;
              self.C1 = doc.data().C1;
              self.C2 = doc.data().C2;
              self.C3 = doc.data().C3;
              self.C4 = doc.data().C4;
              self.ArrayQ = doc.data();
                            // console.log("Cached document data:", self.ArrayQ);
          }).catch(function(error) {
              console.log("Error getting cached document:", error);
          });
        },




         C1Clicked:function(){
            var self = this
            var choiceName = document.querySelector('#Choice1').name
            var CorrectChoice = self.ArrayQ.Anum
            var choice = parseInt(choiceName)
            var score = 0
            var value = document.querySelector('#Choice1').text
             var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
            if(choice==self.ArrayQ.Anum){
              score = score + 1;
            }
            
             const item2 = {
                posttest: true
              }

              db.collection('users').doc(self.userTable).update(item2).then(res=>{
                    self.item2=""; 
            })

             const item={
                PostTestNumber12:{
                           Choice: choice,
                            value: value,
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                            Score: score
                              },
                        };
                db.collection('UserData').doc('PostTest').collection('PostTestScore').doc(self.userTable).update(item).then(res=>{
                      self.PostTestNumber12="";
                 })
                 self.$router.push({name: 'PostTestScore'})
        },  
        C2Clicked:function(){
                var self = this
            var choiceName = document.querySelector('#Choice2').name
            var CorrectChoice = self.ArrayQ.Anum
            var choice = parseInt(choiceName)
            var score = 0
            var value = document.querySelector('#Choice2').text
             var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
            if(choice==self.ArrayQ.Anum){
              score = score + 1;
            }
           const item2 = {
                posttest: true,
              }

             const item={
                PostTestNumber12:{
                           Choice: choice,
                            value: value,
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                            Score: score
                              },
                        };
                db.collection('UserData').doc('PostTest').collection('PostTestScore').doc(self.userTable).update(item).then(res=>{
                      self.PostTestNumber12="";
                 })
                db.collection('users').doc(self.userTable).update(item2).then(res=>{
                    self.item2=""; 
            })
                 self.$router.push({name: 'PostTestScore'})
        },
         C3Clicked:function(){
                var self = this
            var choiceName = document.querySelector('#Choice3').name
            var CorrectChoice = self.ArrayQ.Anum
            var choice = parseInt(choiceName)
            var score = 0
            var value = document.querySelector('#Choice3').text
             var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
            if(choice==self.ArrayQ.Anum){
              score = score + 1;
            }
           const item2 = {
                posttest: true
              }

              db.collection('users').doc(self.userTable).update(item2).then(res=>{
                    self.item2=""; 
            })
             const item={
                PostTestNumber12:{
                           Choice: choice,
                            value: value,
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                            Score: score
                              },
                        };
                db.collection('UserData').doc('PostTest').collection('PostTestScore').doc(self.userTable).update(item).then(res=>{
                      self.PostTestNumber12="";
                 })
                 self.$router.push({name: 'PostTestScore'})
        },
         C4Clicked:function(){
                var self = this
            var choiceName = document.querySelector('#Choice4').name
            var CorrectChoice = self.ArrayQ.Anum
            var choice = parseInt(choiceName)
            var score = 0
            var value = document.querySelector('#Choice4').text
             var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
            if(choice==self.ArrayQ.Anum){
              score = score + 1;
            }
            const item2 = {
                posttest: true
              }

              db.collection('users').doc(self.userTable).update(item2).then(res=>{
                    self.item2=""; 
            })
             const item={
                PostTestNumber12:{
                           Choice: choice,
                            value: value,
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                            Score: score
                              },
                        };
                db.collection('UserData').doc('PostTest').collection('PostTestScore').doc(self.userTable).update(item).then(res=>{
                      self.PostTestNumber12="";
                 })
                 self.$router.push({name: 'PostTestScore'})
        },

      
              checkUser:function(){
                    let self = this

                  firebase.auth().onAuthStateChanged((user)=>{
                  if(user){
                    self.userTable = user.email
                  }else{
                      this.user = null
                      console.log(this.user)
                  }
              })
                },



    },

}
</script>

<style>

span.flow-text{
  line-height: 25px;
  font-family: 'Prompt', sans-serif;
}
[type="radio"]:checked + span:after,
[type="radio"].with-gap:checked + span:before,
[type="radio"].with-gap:checked + span:after {
  border: 2px solid #fff;
}
[type="radio"]:checked + span:after,
[type="radio"].with-gap:checked + span:after {
  background-color: #fff;
}
</style>
