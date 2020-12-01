<template>
    <div class="unit black-text container row center col s12 m12 l12">
        <div class="col s12 m12 l12" style="margin-top:2%">
            <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="active"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
        </ul>
             <div class="row card-panel pink lighten-5 s12 m12 l12 valign-wrapper black-text" style="margin-top:10px;">
                    <div class="container col s6 m6 l6 right right-align" style="margin-top:0%;padding:0%;">
                    <img src="http://167.71.221.10/ics//Materials/Icon%20-%20Unit/Addition%20Icons/Practice.png" alt="" class="circle responsive-img col s10 m4 l4 right right-align offset-l4">
                    </div>
                    <div class="left-align flow-text col s10 m8 l8 left"><h5 style="font-weight:bold;"> สะกิดความคิด<br>ชีวิตพลิกแพลง </h5></div> 
            </div>


            <div class="card-panel row pink darken-1 col s12 m12 l12" style="padding:10px;padding-bottom:10px;margin-top:30px;">
                <img src="https://dlabi.com/project/interactive-computing-science/Materials/InfoUI/Question.png" alt="" class="responsive-img col s4 m2 l2 offset-s4 offset-m5 offset-l5" style="margin-bottom:10px;">
                <div class="col s12 m12 l12"> <p class="flow-text center white-text" style="font-weight:bold;"> คลิปข่าวเมื่อสักครู่ชายคนนั้นทำผิด พ.ร.บ. คอมพิวเตอร์ ฉบับที่เท่าไหร่ มาตราที่เท่าไหร่ น้องๆตอบได้ไหมครับ </p></div>
                <div class="col s12 m12 l12 row" style="margin:0px;margin-top:20px;">
                    <div class="col s12 m12 l12 row" style="margin:0px;margin-top:20px;">
                        <h5 class="white-text center" style="font-weight:bold;" >{{WarnText}}</h5>
                        <div class="input-field col s12 m4 l4 offset-m4 offset-l4 white">
                            <textarea id="textarea1" class="materialize-textarea" v-model="AnswerText1"></textarea>
                             <label for="textarea1">พ.ร.บ. คอมฯ <p class="flow-text" style="font-weight:bold;display:inline;">ฉบับที่</p> [ ตัวอย่าง: 33 ] </label>
                        </div>
                        <div class="input-field col s12 m4 l4 offset-m4 offset-l4 white">
                            <textarea id="textarea2" name="textarea2" class="materialize-textarea" v-model="AnswerText2"></textarea>
                            <label for="textarea2">และ <p class="flow-text" style="font-weight:bold;display:inline;">มาตราที่ </p>[ ตัวอย่าง: 22 ]</label>
                        </div>
                    </div>

                </div>

                <div class="col s12 m12 l12 flow-text">
                        <a @click="submit" class="waves-effect pink lighten-3 waves-light btn-large align-center col s6 m4 l4 offset-s3 offset-m4 offset-l4"> ส่งคำตอบ </a>
                    </div>
            </div>
                <div class="right col s12 m12 l12 row">
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="responsive-img col s6 m4 l4 offset-s3 offset-m4 offset-l4">
                </div>
                <!-- <div class="left col s12 m12 l12">
                        <router-link :to="{name:'C2Unit3MediumRound1P2'}"><a @click="submit" style="" class="waves-effect cyan darken-4 waves-light flow-text btn-large hide-on-small-only align-center left"> ย้อนกลับ </a></router-link>
                        <router-link :to="{name:'C2Unit3MediumRound1P2'}"><a @click="submit" style="" class="waves-effect cyan darken-4 waves-light flow-text btn-small hide-on-med-and-up align-center left"> ย้อนกลับ </a></router-link>
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
            AnswerText1: null,
            AnswerText2: null,
            WarnText: null,
        }
    },
    created(){
        
        this.checkUser()
    },
    methods:{

        GetEmail:function(userTable){
            this.Email = userTable;
            this.TimeCal(userTable);
        },

        TimeCal:function(Email){
            var getOptions = {
                source: 'server'
              };
              var self = this;

            let ref = db.collection('UserData').doc('Content').collection('Chapter2').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(Email);
        ref.get(getOptions).then(function(doc){

            let StartHourP1 = doc.data().Round1Page1Start.StartTimeHour;
            let EndHourP1 = doc.data().Round1Page1End.EndTimeHour;
            let FinalHourP1 = Math.abs(EndHourP1-StartHourP1)*3600;

            let StartMinuteP1 = doc.data().Round1Page1Start.StartTimeMinute;
            let EndMinuteP1 = doc.data().Round1Page1End.EndTimeMinute;
            let FinalMinuteP1 = Math.abs(EndMinuteP1-StartMinuteP1)*60;

            let StartSecondP1 = doc.data().Round1Page1Start.StartTimeSecond;
            let EndSecondP1 = doc.data().Round1Page1End.EndTimeSecond;
            let FinalSecondP1 = Math.abs(EndSecondP1-StartSecondP1);

            let P1AllCalculatedSecond = Math.abs((FinalHourP1-FinalMinuteP1)+FinalSecondP1);
            self.P1AllSecond = P1AllCalculatedSecond;
            // // console.log(StartSecond,EndSecond);
            // console.log(FinalHourP1,FinalMinuteP1,FinalSecondP1);
            // console.log(P1AllCalculatedSecond);
            // console.log(self.AllSecond)


            let StartHourP2 = doc.data().Round1Page2Start.StartTimeHour;
            let EndHourP2 = doc.data().Round1Page2End.EndTimeHour;
            let FinalHourP2 = Math.abs(EndHourP2-StartHourP2)*3600;

            let StartMinuteP2 = doc.data().Round1Page2Start.StartTimeMinute;
            let EndMinuteP2 = doc.data().Round1Page2End.EndTimeMinute;
            let FinalMinuteP2 = Math.abs(EndMinuteP2-StartMinuteP2)*60;

            let StartSecondP2 = doc.data().Round1Page2Start.StartTimeSecond;
            let EndSecondP2 = doc.data().Round1Page2End.EndTimeSecond;
            let FinalSecondP2 = Math.abs(EndSecondP2-StartSecondP2);

            let P2AllCalculatedSecond = Math.abs((FinalHourP2-FinalMinuteP2)+FinalSecondP2);
            self.P2AllSecond = P2AllCalculatedSecond;

            const item={
                Round1Page1Time:{
                        AllSecond: P1AllCalculatedSecond,
                },
                Round1Page2Time:{
                        AllSecond: P2AllCalculatedSecond,
                },
            }

            let SequenceRef = db.collection('UserData').doc('Sequence').collection('Chapter2Count').doc(Email)
            SequenceRef.get().then(function(doc){
                self.UnitTime = doc.data().Time.toString();
                // console.log("Data Ref"+doc.data().Time)
             db.collection('UserData').doc('Loging').collection('Chapter2').doc('Unit1').collection('Level').doc('Medium').collection('Chapter2Uni3MediumLoging').doc(Email).collection('Chapter2Uni3MediumSequence').doc(self.UnitTime).update(item).then(res=>{
                    self.UnitTime=""; 
            })
            })
            db.collection('UserData').doc('Content').collection('Chapter2').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(Email).update(item)
            db.collection('UserData').doc('Loging').collection('Chapter2').doc('Unit3').collection('Level').doc('Medium').collection('Chapter2Unit3MediumLoging').doc(Email).update(item)
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
            if(this.AnswerText1!=null&&this.AnswerText2!=null){
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
                Round1Page3End:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                            Choice1: parseInt(self.AnswerText1),
                            Choice2: parseInt(self.AnswerText2),
                },
                Round1Page4Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter2').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round1Page3End="";
                      self.Round1Page4Start="";
            })
                    self.$router.push({name:'C2Unit3MediumRound1P4'})
                    

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
        }else{
        this.WarnText = "น้องๆช่วยใส่คำตอบให้พี่โมโม่หน่อยนะครับ";
       }
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
