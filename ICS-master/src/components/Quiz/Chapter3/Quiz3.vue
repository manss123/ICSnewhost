<template>
    <div class="container " style="margin-top:0px">
         <div class="container section ">
           <h3 class="center align-center" style="font-family: Bahnschrift;">Question 3 of 5</h3>
                <div class="row light-blue lighten-2" style="padding:10px;">
                    <div class="white col s12 m12" style="padding:0px;">
                        <div class="card z-depth-0"
                          name="MyForm1" id="MyForm1">
                            <div class="card-content white" style="margin-top:40px;margin-bottom:40px">
                                <span class="flow-text center" style="font-family: Bahnschrift;font-size:25px;">{{Question}}</span>
                            </div>
                            <div id="countdown"></div>
                        </div>
                    </div>
                </div>
            <div class="col s12 m12 l12" name="ChoiceDiv" id="ChoiceDiv" style="margin-top:61px">
                    <form id="quiz" name="quiz" @submit.prevent="Onsubmit">
                      <div class="card-panel light-blue darken-1 white-text row col s12 m12 l12">
                          <p>
                            <label>
                              <input class="with-gap" name="group1" type="radio" value=1 v-model="choice" checked />
                              <span class="white-text">{{C1}}</span>
                            </label>
                          </p>
                      </div>
                      <div class="card-panel light-blue darken-1 white-text row col s12 m12 l12">
                          <p>
                            <label>
                              <input class="with-gap" name="group1" type="radio" value=2  v-model="choice" />
                              <span class="white-text">{{C2}}</span>
                            </label>
                          </p>
                      </div>
                      <div class="card-panel light-blue darken-1 white-text row col s12 m12 l12">
                          <p>
                            <label>
                              <input class="with-gap" name="group1" value=3 type="radio"  v-model="choice" />
                              <span class="white-text">{{C3}}</span>
                            </label>
                          </p>
                      </div>
                      <div class="col s12 m12 l12 offset-s6">
                        <button class="btn waves-effect waves-light light-blue darken-1 white-text" style="display: inline-block;margin: auto;display: block" type="submit" name="action">
                          ส่งคำตอบ 
                        </button>
                      </div>
                    </form>
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'Quiz',
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
            choice: null,

        }
    },
    created(){
      let self = this;
      self.GetQA();
      this.checkUser();
    },
    methods:{ 
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

        GetQA:function(){     
          var self = this
          let QuestionRef = db.collection('Q&A').doc('Question&Answer').collection('Quiz').doc('Chapter3');
          // Valid options for source are 'server', 'cache', or
          // 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
          // for more information.
          var getOptions = {
              source: 'server'
          };
          QuestionRef.get(getOptions).then(function(doc) {
              // Document was found in the cache. If no cached document exists,
              // an error will be returned to the 'catch' block below.
              self.Question = doc.data().Number3.Q;
              self.C1 = doc.data().Number3.C1;
              self.C2 = doc.data().Number3.C2;
              self.C3 = doc.data().Number3.C3;
              self.ArrayQ = doc.data();
                            // console.log("Cached document data:", self.ArrayQ);
          }).catch(function(error) {
              console.log("Error getting cached document:", error);
          });
        },

        Onsubmit:function(){
          if(this.choice!=null){
            var self = this;
            var CorrectChoice = self.ArrayQ.Anum
            var score = 0
             var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
            if(parseInt(this.choice)==self.ArrayQ.Number3.Anum){
              score = score + 1;
            }
             const item={
                QuizNumber3:{
                           Choice: parseInt(this.choice),
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
                db.collection('UserData').doc('Quiz').collection('QuizChapter3').doc(self.userTable).update(item).then(res=>{
                      self.QuizNumber3="";
                 })
                //  console.log(self.choice,self.ArrayQ.Anum)
                 self.$router.push({name: 'Chapter3Quiz4'})
                 } 
                },
                
    },

}
</script>

<style>
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
