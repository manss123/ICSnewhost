<template>

    <div class="unit container center col s12 m12 l12" style="margin-top:20px">
        <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="active"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
        </ul>
        <div class="row card-panel light-blue accent-1 s12 m12 l12 valign-wrapper black-text" style="margin-top:10px;">
                    <div class="container col s6 m6 l6 right right-align" style="margin-top:0%;padding:0%;">
                    <img src="http://167.71.221.10/ics//Materials/Icon%20-%20Unit/Addition%20Icons/Practice.png" alt="" class="circle responsive-img col s10 m4 l4 right right-align offset-l4">
                    </div>
                    <div class="left-align flow-text col s10 m8 l8 left"><h5 style="font-weight:bold;"> สะกิดความคิด<br>ชีวิตพลิกแพลง </h5></div> 
            </div>

         <div class="row container col s12 m6 l6 black-text valign-wrapper" style="margin-bottom:2%;">
                    <div class="box sb1 col s5 m6 l5 flow-text left-align" style="padding:2%;margin-bottom:1%;font-weight:bold;">
                            เอ๋ จากสถานการณ์ก่อนหน้า น้องๆลองตอบพี่โมโม่มา หน่อยสิว่า ใครเป็นคนตัดต่อ ภาพ แล้วตัดต่อภาพของใคร
                    </div>
                    <p class="col s7 m6 l6 right">
                         <img src="http://167.71.221.10/ics//Materials/Momo/momofinal.gif" class="responsive-img col s12 m12 l12">
                    </p> 
            </div>  
        
        <div class="container col s12 m12 l12">
            <div class="card-panel col s12 m12 l12 light-blue lighten-3  white-text row" style="margin-top:4%;">
                        <div class="card-panel light-blue col s12 m12 l12 center-align">
                                <h4 style="font-weight:bold;"> 1.</h4>
                                <p class="flow-text">เมฆตัดต่อรูปภาพของมีนา</p>
                                <div class="center col s12 m12 l12" style="margin-bottom:10px;">
                                    <a @click="submit1" class="waves-effect grey darken-1 waves-light btn-large align-center flow-text"> เลือก </a>
                                </div>
                        </div>



                        <div class="card-panel light-blue col s12 m12 l12 center-align">
                                <h4 style="font-weight:bold;"> 2.</h4>
                                <p class="flow-text">เมฆตัดต่อรูปภาพของท้องฟ้า</p>
                                <div class="center col s12 m12 l12" style="margin-bottom:10px;">
                                    <a @click="submit2" class="waves-effect grey darken-1 waves-light btn-large align-center flow-text"> เลือก </a>
                                </div>
                        </div>




                        <div class="card-panel light-blue col s12 m12 l12 center-align">
                                <h4 style="font-weight:bold;"> 3.</h4>
                                <p class="flow-text">สายรุ้งถูกเพื่อนเอาภาพไปตัดต่อ แล้วโพสต์ลงเฟสบุค</p>
                                <div class="center col s12 m12 l12" style="margin-bottom:10px;">
                                    <a @click="submit3" class="waves-effect grey darken-1 waves-light btn-large align-center flow-text"> เลือก </a>
                                </div>
                        </div>



            </div>
        </div>


        <div class="col s12 m12 l12" style="margin-top:30px;margin-bottom:30px">
                <!-- <div class="left col s6 m12 l6 hide-on-small-only">
                <router-link :to="{name:''}"><a @click="submit" class="waves-effect grey darken-1 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                </div>
                <div class="left col s6 m12 l6 hide-on-med-and-up">
                    <router-link :to="{name:''}"><a @click="submit" class="waves-effect grey darken-1 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                </div>
                <div class="right col s6 m6 l6">
                    <img src="URLรูปภาพโมโม่" alt="" class="responsive-img col s12 m12 l12">
                </div> -->
        </div>
    
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'chap1Medium',
    data(){
        return{
            userTable: null,
            Email: null,
            P1AllSecond: null,
            P2AllSecond: null,
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

            let ref = db.collection('UserData').doc('Content').collection('Chapter3').doc('Unit1').collection('Level').doc('Easy').collection('Content').doc(Email);
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

            let SequenceRef = db.collection('UserData').doc('Sequence').collection('Chapter3Count').doc(Email)
            SequenceRef.get().then(function(doc){
                self.UnitTime = doc.data().Time.toString();
                // console.log("Data Ref"+doc.data().Time)
             db.collection('UserData').doc('Loging').collection('Chapter3').doc('Unit1').collection('Level').doc('Easy').collection('Chapter3Unit1EasyLoging').doc(Email).collection('Chapter3Unit1EasySequence').doc(self.UnitTime).update(item).then(res=>{
                    self.UnitTime=""; 
            })
            })
            db.collection('UserData').doc('Content').collection('Chapter3').doc('Unit1').collection('Level').doc('Easy').collection('Content').doc(Email).update(item)
            db.collection('UserData').doc('Loging').collection('Chapter3').doc('Unit1').collection('Level').doc('Easy').collection('Chapter3Unit1EasyLoging').doc(Email).update(item)
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
                  self.userTable = doc.id
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
                Round1Page3End:{
                        EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                            Choice: choice,
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
            db.collection('UserData').doc('Content').collection('Chapter3').doc('Unit1').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round1Page3End="";
                      self.Round1Page4Start="";
                      
            })
            self.$router.push({name: 'C3Unit1EasyRound1P4'})
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
                Round1Page3End:{
                        EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                            Choice: choice,
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
            db.collection('UserData').doc('Content').collection('Chapter3').doc('Unit1').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round1Page3End="";
                      self.Round1Page4Start="";
                      
            })
            self.$router.push({name: 'C3Unit1EasyRound1P4'})
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

        submit3:function(){
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
                  
            var choice = 3;
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
                Round1Page3End:{
                        EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                            Choice: choice,
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
            db.collection('UserData').doc('Content').collection('Chapter3').doc('Unit1').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round1Page3End="";
                      self.Round1Page4Start="";
                      
            })
            self.$router.push({name: 'C3Unit1EasyRound1P4'})
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
</style>
