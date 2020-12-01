<template>
    <div class="unit black-text">
        <div class="container col s12 m12 l12 center" style="margin-top:2%">
            <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="active"><a href="#!">4</a></li>
        </ul>
             <div class="row card-panel light-blue accent-1 s12 m12 l12 valign-wrapper black-text" style="margin-top:10px;">
                    <div class="container col s6 m6 l6 right right-align" style="margin-top:0%;padding:0%;">
                    <img src="http://167.71.221.10/ics//Materials/Icon%20-%20Unit/Addition%20Icons/Practice.png" alt="" class="circle responsive-img col s10 m4 l4 right right-align offset-l4">
                    </div>
                    <div class="left-align flow-text col s10 m8 l8 left"><h5 style="font-weight:bold;"> สะกิดความคิด<br>ชีวิตพลิกแพลง </h5></div> 
            </div>


            <div class="card-panel row  light-blue darken-1 col s12 m12 l12" style="padding:10px;padding-bottom:10px;margin-top:30px;">
                <img src="https://dlabi.com/project/interactive-computing-science/Materials/InfoUI/Question.png" alt="" class="responsive-img col s4 m2 l2 offset-s4 offset-m5 offset-l5" style="margin-bottom:10px;">
                <div class="col s12 m12 l12"> <p class="flow-text center white-text" style="font-weight:bold;"> เมื่ออ่านทั้ง 3 เหตุการณ์ น้องๆรู้สึกอย่างไร </p></div>
                <div class="col s12 m12 l12 row valign-wrapper" style="margin:0px;margin-top:20px;">
                    <div class="col s12 m12 l12 row valign-wrapper" style="margin:0px;margin-top:20px;">
                    <div class="input-field col s12 m4 l4 offset-m4 offset-l4 white">
                        <textarea id="textarea1" class="materialize-textarea" v-model="AnswerText"></textarea>
                        <label for="textarea1">ใส่คำตอบตรงนี้จ้า</label>
                    </div>
                    <div class="right col s12 m12 l6 flow-text">
                        <router-link :to="{name:'C3Unit3EasyRound4P4'}"><a @click="submit" class="waves-effect grey darken-1 waves-light btn-large align-center right"> ส่งคำตอบ </a></router-link>
                    </div>
                    </div>
                </div>
            </div>
                <div class="right col s12 m12 l12 row">
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="responsive-img col s6 m4 l4 offset-s3 offset-m4 offset-l4">
                </div>
                <!-- <div class="left col s12 m12 l12">
                        <router-link :to="{name:'C3Unit3EasyRound4P2'}"><a @click="submit" style="" class="waves-effect cyan darken-4 waves-light flow-text btn-large hide-on-small-only align-center left"> ย้อนกลับ </a></router-link>
                        <router-link :to="{name:'C3Unit3EasyRound4P2'}"><a @click="submit" style="" class="waves-effect cyan darken-4 waves-light flow-text btn-small hide-on-med-and-up align-center left"> ย้อนกลับ </a></router-link>
                </div> -->
                
            
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'Unit3Mp1',
    data(){
        return{
            userTable: null,
            Email: null,
            P1AllSecond: null,
            P2AllSecond: null,
            AnswerText: null,
        }
    },
    created(){
        let self = this
        var getOptions = {
                source: 'server'
              };
        
        this.checkUser()
    },
    methods:{

        GetEmail:function(userTable){
            let self = this
            var delayInMilliseconds = 3000;
            this.Email = userTable;
            setTimeout(function(){
                self.TimeCal(self.Email);
            },delayInMilliseconds)
        },

        TimeCal:function(Email){
            var getOptions = {
                source: 'server'
              };
              var self = this;

            let ref = db.collection('UserData').doc('Content').collection('Chapter3').doc('Unit3').collection('Level').doc('Easy').collection('Content').doc(Email);
        ref.get(getOptions).then(function(doc){

            let StartHourP1 = doc.data().Round4Page1Start.StartTimeHour;
            let EndHourP1 = doc.data().Round4Page1End.EndTimeHour;
            let FinalHourP1 = Math.abs(EndHourP1-StartHourP1)*3600;

            let StartMinuteP1 = doc.data().Round4Page1Start.StartTimeMinute;
            let EndMinuteP1 = doc.data().Round4Page1End.EndTimeMinute;
            let FinalMinuteP1 = Math.abs(EndMinuteP1-StartMinuteP1)*60;

            let StartSecondP1 = doc.data().Round4Page1Start.StartTimeSecond;
            let EndSecondP1 = doc.data().Round4Page1End.EndTimeSecond;
            let FinalSecondP1 = Math.abs(EndSecondP1-StartSecondP1);

            let P1AllCalculatedSecond = Math.abs((FinalHourP1-FinalMinuteP1)+FinalSecondP1);
            // self.P1AllSecond = P1AllCalculatedSecond;
            // // console.log(StartSecond,EndSecond);
            // console.log(FinalHourP1,FinalMinuteP1,FinalSecondP1);
            // console.log(P1AllCalculatedSecond);
            // console.log(self.AllSecond)


            let StartHourP2 = doc.data().Round4Page2Start.StartTimeHour;
            let EndHourP2 = doc.data().Round4Page2End.EndTimeHour;
            let FinalHourP2 = Math.abs(EndHourP2-StartHourP2)*3600;

            let StartMinuteP2 = doc.data().Round4Page2Start.StartTimeMinute;
            let EndMinuteP2 = doc.data().Round4Page2End.EndTimeMinute;
            let FinalMinuteP2 = Math.abs(EndMinuteP2-StartMinuteP2)*60;

            let StartSecondP2 = doc.data().Round4Page2Start.StartTimeSecond;
            let EndSecondP2 = doc.data().Round4Page2End.EndTimeSecond;
            let FinalSecondP2 = Math.abs(EndSecondP2-StartSecondP2);

            let P2AllCalculatedSecond = Math.abs((FinalHourP2-FinalMinuteP2)+FinalSecondP2);
            self.P2AllSecond = P2AllCalculatedSecond;

            const item={
                Round4Page1Time:{
                        AllSecond: P1AllCalculatedSecond,
                },
                Round4Page2Time:{
                        AllSecond: P2AllCalculatedSecond,
                },
            }

            let SequenceRef = db.collection('UserData').doc('Sequence').collection('Chapter3Count').doc(Email)
            SequenceRef.get().then(function(doc){
                self.UnitTime = doc.data().Time.toString();
                // console.log("Data Ref"+doc.data().Time)
             db.collection('UserData').doc('Loging').collection('Chapter3').doc('Unit1').collection('Level').doc('Easy').collection('Chapter3Unit3EasyLoging').doc(Email).collection('Chapter3Unit3EasySequence').doc(self.UnitTime).update(item).then(res=>{
                    self.UnitTime=""; 
            })
            })

            db.collection('UserData').doc('Content').collection('Chapter3').doc('Unit3').collection('Level').doc('Easy').collection('Content').doc(Email).update(item)
            db.collection('UserData').doc('Loging').collection('Chapter3').doc('Unit3').collection('Level').doc('Easy').collection('Chapter3Unit3EasyLoging').doc(Email).update(item)
            // // console.log(StartSecond,EndSecond);
            // // console.log(FinalHour,FinalMinute,FinalSecond);
            // // console.log(AllCalculatedSecond);
            // console.log(self.AllSecond)
        })
        },

 // ********* check user id
        checkUser:function(){
            let self = this
        let users= db.collection("users").orderBy("email")
        .limit(25);
        let Gusers = db.collection("Gusers").orderBy("Email")
              .limit(25);

          firebase.auth().onAuthStateChanged((user)=>{
          if(user){
          db.collection("users").where("email","==",user.email)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  self.userTable = doc.id;
                  self.GetEmail(self.userTable);
                //   console.log(doc.id, " => ", doc.data());
                //   console.log(doc.id, " => ", self.userTable);
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


         submit:function(){
            
            let self = this
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
                   var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
            const item={
                Round4Page3End:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                            Choice: self.AnswerText,
                },
                Round4Page4Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter3').doc('Unit3').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round4Page3End="";
                      self.Round4Page4Start="";
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
