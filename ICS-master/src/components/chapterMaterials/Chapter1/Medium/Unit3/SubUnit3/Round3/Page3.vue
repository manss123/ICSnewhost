<template>
    <div class="unit black-text container center col s12 m12 l12">
        <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="active"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
        </ul>
        <div class="col s12 m12 l12" style="margin-top:2%">
             <div class="row card-panel teal accent-2 s12 m12 l12 valign-wrapper black-text" style="margin-top:10px;">
                    <div class="container col s6 m6 l6 right right-align" style="margin-top:0%;padding:0%;">
                    <img src="http://167.71.221.10/ics//Materials/Icon%20-%20Unit/Addition%20Icons/Practice.png" alt="" class="circle responsive-img col s10 m4 l4 right right-align offset-l4">
                    </div>
                    <div class="left-align flow-text col s10 m8 l8 left"><h5 style="font-weight:bold;"> สะกิดความคิด<br>ชีวิตพลิกแพลง </h5></div> 
            </div>


            <div class="card-panel row teal darken-1 col s12 m12 l12" style="padding:10px;padding-bottom:10px;margin-top:30px;">
                <img src="https://dlabi.com/project/interactive-computing-science/Materials/InfoUI/Question.png" alt="" class="responsive-img col s4 m2 l2 offset-s4 offset-m5 offset-l5" style="margin-bottom:10px;">
                <div class="col s12 m12 l12"> <p class="flow-text center white-text" style="font-weight:bold;"> น้องๆควรใช้อักษรตัวใหญ่และเล็กอย่างน้อยอย่างละเท่าไหร่? </p></div>
                <div class="col s12 m12 l12 row valign-wrapper" style="margin:0px;margin-top:20px;">
                    <div class="left col s6 m12 l6 hide-on-small-only">
                        <a @click="submit1" class="waves-effect waves-light flow-text white-text  grey darken-1 btn-large col s6 m5 l5 left center-align" style="margin-left:0px;font-weight:bold;"> ไม่ต้องใส่ </a>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                        <a @click="submit1" class="waves-effect waves-light flow-text white-text  grey darken-1 btn-small col s10 m5 l5 left center-align" style="margin-left:0px;font-weight:bold;"> ไม่ต้องใส่ </a>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-small-only">
                        <a @click="submit2" class="waves-effect waves-light flow-text white-text  grey darken-1 btn-large col s6 m5 l5 right center-align" style="margin-right:0px;font-weight:bold;"> 1 ตัว</a><br>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                        <a @click="submit2" class="waves-effect waves-light flow-text white-text  grey darken-1 btn-small col s10 m5 l5 right center-align" style="margin-right:0px;font-weight:bold;"> 1 ตัว</a><br>
                    </div>
                </div>
            </div>
                <div class="right col s12 m12 l12 row">
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="responsive-img col s6 m4 l4 offset-s3 offset-m4 offset-l4">
                </div>
                <!-- <div class="left col s12 m12 l12">
                        <router-link :to="{name:'C1Unit3MediumRound3P2'}"><a @click="submit" style="" class="waves-effect cyan darken-4 waves-light flow-text btn-large hide-on-small-only align-center left"> ย้อนกลับ </a></router-link>
                        <router-link :to="{name:'C1Unit3MediumRound3P2'}"><a @click="submit" style="" class="waves-effect cyan darken-4 waves-light flow-text btn-small hide-on-med-and-up align-center left"> ย้อนกลับ </a></router-link>
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
            UnitTime: null,
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

            let ref = db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(Email);
        ref.get(getOptions).then(function(doc){

            let StartHourP1 = doc.data().Round3Page1Start.StartTimeHour;
            let EndHourP1 = doc.data().Round3Page1End.EndTimeHour;
            let FinalHourP1 = Math.abs(EndHourP1-StartHourP1)*3600;

            let StartMinuteP1 = doc.data().Round3Page1Start.StartTimeMinute;
            let EndMinuteP1 = doc.data().Round3Page1End.EndTimeMinute;
            let FinalMinuteP1 = Math.abs(EndMinuteP1-StartMinuteP1)*60;

            let StartSecondP1 = doc.data().Round3Page1Start.StartTimeSecond;
            let EndSecondP1 = doc.data().Round3Page1End.EndTimeSecond;
            let FinalSecondP1 = Math.abs(EndSecondP1-StartSecondP1);

            let P1AllCalculatedSecond = Math.abs((FinalHourP1-FinalMinuteP1)+FinalSecondP1);
            self.P1AllSecond = P1AllCalculatedSecond;
            // console.log(StartSecond,EndSecond);
            console.log(FinalHourP1,FinalMinuteP1,FinalSecondP1);
            console.log(P1AllCalculatedSecond);
            console.log(self.AllSecond)


            let StartHourP2 = doc.data().Round3Page2Start.StartTimeHour;
            let EndHourP2 = doc.data().Round3Page2End.EndTimeHour;
            let FinalHourP2 = Math.abs(EndHourP2-StartHourP2)*3600;

            let StartMinuteP2 = doc.data().Round3Page2Start.StartTimeMinute;
            let EndMinuteP2 = doc.data().Round3Page2End.EndTimeMinute;
            let FinalMinuteP2 = Math.abs(EndMinuteP2-StartMinuteP2)*60;

            let StartSecondP2 = doc.data().Round3Page2Start.StartTimeSecond;
            let EndSecondP2 = doc.data().Round3Page2End.EndTimeSecond;
            let FinalSecondP2 = Math.abs(EndSecondP2-StartSecondP2);

            let P2AllCalculatedSecond = Math.abs((FinalHourP2-FinalMinuteP2)+FinalSecondP2);
            self.P2AllSecond = P2AllCalculatedSecond;

            const item={
                Round3Page1Time:{
                        AllSecond: P1AllCalculatedSecond,
                },
                Round3Page2Time:{
                        AllSecond: P2AllCalculatedSecond,
                },
            }

            let SequenceRef = db.collection('UserData').doc('Sequence').collection('Chapter1Count').doc(Email)
            SequenceRef.get().then(function(doc){
                self.UnitTime = doc.data().Time.toString();
                // console.log("Data Ref"+doc.data().Time)
             db.collection('UserData').doc('Loging').collection('Chapter1').doc('Unit1').collection('Level').doc('Medium').collection('Chapter1Unit3MediumLoging').doc(Email).collection('Chapter1Unit3MediumSequence').doc(self.UnitTime).update(item).then(res=>{
                    self.UnitTime=""; 
            })
            })

            db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(Email).update(item)
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


         submit1:function(){
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
                  self.userTable = doc.id
                  
            var choice = 1;
             var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
            const item={
                Round3Page3End:{
                        EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                            Choice: choice,
                },
                Round3Page4Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                       },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round3Page3End="";
                      self.Round3Page4Start="";
                      
            })
            self.$router.push({name: 'C1Unit3MediumRound3P4'})
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


    submit2:function(){
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
                  self.userTable = doc.id
                  
            var choice = 2;
             var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
            console.log("Cached document data:", self.ArrayQ);
            const item={
                Round3Page3End:{
                            EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                            Choice: choice,
                },
                Round3Page4Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                       },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round3Page3End="";
                      self.Round3Page4Start="";
                      
            })
            self.$router.push({name: 'C1Unit3MediumRound3P4'})
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
