<template>
        <div class="container col s12 m12 l12 row">
                <div class="col s12 m12 l12 valign-wrapper" style="margin-top:60px;">
                    <div class="container col s12 m12 l12">
                        <div class="col s12 m12 l12 valign-wrapper" style="margin-top:20px" >
                            <img src="https://dlabi.com/project/interactive-computing-science/Materials/Icon%20-%20Unit/Chapter5/unit5.1.png" alt="" class="responsive-img circle col s8 m4 l2 offset-s2 offset-l5 offset-m4">
                        </div>
                        <h4 class="center center-align col s12 m12 l12" style="font-weight:bold;">Variety of Malware<br> ระบุตัวตนเจ้ามัลแวร์ตัวปัญหา</h4>
                        
                    </div>
                </div>


                <div class="col s12 m12 l12 valign-wrapper">
                    <div class="box sb1 col s12 m12 l8 flow-text left" style="padding:8px;margin-bottom:1%;font-weight:bold;">
                        ยินดีต้อนรับน้องๆเข้าสู่ บทเรียน ระบุตัวตนเจ้า มัลแวร์ตัวปัญหา ความ สนุกรออยู่ครับน้องๆ ตามพี่โมโม่มาเลยครับ
                    </div>
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="col s5 m3 l3">
                </div>

                <div class="row col s12 m12 l12" style="margin-top:30px">
                    <div class="col s6 m6 l6 hide-on-med-and-up">
                            <router-link :to="{name:'Chapter5'}"><a class="waves-effect red darken-1 waves-light btn-small left align-center"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="col s6 m6 l6 hide-on-small-only">
                            <router-link :to="{name:'Chapter5'}"><a class="waves-effect red darken-1 waves-light btn-large left align-center"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="col s6 m6 l6 hide-on-med-and-up">
                            <router-link :to="{name:'C5Unit1EasyRound1P1'}"><a @click="submit" class="waves-effect red darken-1 waves-light btn-small  right align-center"> เข้าสู่บทเรียน </a></router-link>
                    </div>
                    <div class="col s6 m6 l6 hide-on-small-only">
                            <router-link :to="{name:'C5Unit1EasyRound1P1'}"><a @click="submit" class="waves-effect red darken-1 waves-light btn-large right align-center"> เข้าสู่บทเรียน </a></router-link>
                    </div>
                 </div>
        </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'unit1Mp1',
    data(){
        return{
            userTable: null,
            email: null,
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
        submit:function(){
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
                Round1Page1Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                },
            };
            db.collection('UserData').doc('Content').collection('Chapter5').doc('Unit1').collection('Level').doc('Easy').collection('Content').doc(self.userTable).set(item).then(res=>{
                      self.Round1Page1Start="";
                      
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

        Start:function(email){
            const item={
                // Round1Page1Time:{
                //         AllSecond: P1AllCalculatedSecond,
                // },
                Starting:{
                        Start: true,
                },
            }

            db.collection('UserData').doc('Loging').collection('Chapter5').doc('Unit1').collection('Level').doc('Easy').collection('Chapter5Unit1EasyLoging').doc(this.email).set(item).then(res=>{
                    self.Starting=""; 
            })
        },
        GetEmail:function(userTable){
                        
            this.email = userTable
            this.Start(userTable);
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
