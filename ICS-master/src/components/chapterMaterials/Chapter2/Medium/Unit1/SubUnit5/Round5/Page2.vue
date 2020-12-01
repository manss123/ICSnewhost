﻿<template>
    <div class="unit container center col s12 m12 l12">
        <div class="container center col s12 m12 l12" style="margin-top:1%;">
            <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="active"><a href="#!">5</a></li>
        </ul>  
            <div class="row card-panel pink lighten-5 s12 m12 l12 valign-wrapper black-text" style="margin-top:10px;">
                    <div class="left-align flow-text col s12 m12 l12 center"><h5 style="font-weight:bold;"> กรณีศึกษาไม่คิดก่อนแชร์ </h5></div> 
            </div>   


            <div class="card-panel pink darken-1 s12 m12 l12 white" style="padding:0px;">
                <div class="card-content col s12 m12 l12 white-text" style="padding:0px;margin:0px;">
                    <p class="flow-text left-align"> 
                        <iframe width="853" height="480" src="//www.youtube.com/embed/X9R4aEXOE6g" frameborder="0" allowfullscreen></iframe>
                    </p>
                </div>
            </div>

            <div class="col s12 m12 l12 valign-wrapper row">
                    <div class="box sb1 col s12 m12 l12 flow-text left-align" style="padding:8px;margin-bottom:1%;font-weight:bold;">
                        ดูจบแล้วอย่าทำตามเป็น ตัวอย่างนะครับน้องๆ
                    </div>
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="col s6 m3 l3">
            </div>  

            <div class="left col s6 m12 l6 hide-on-small-only">
                <router-link :to="{name:'C2Unit1MediumRound5P1'}"><a class="waves-effect pink lighten-3 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
            </div>
            <div class="left col s6 m12 l6 hide-on-med-and-up">
                <router-link :to="{name:'C2Unit1MediumRound5P1'}"><a class="waves-effect pink lighten-3 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
            </div>
            <div class="right col s6 m12 l6 hide-on-small-only">
                <router-link :to="{name:'C2Unit1MediumRound5P3'}"><a @click="submit" class="waves-effect pink lighten-3 waves-light flow-text btn-large align-center right"> หน้าถัดไป </a></router-link>
            </div>
            <div class="right col s6 m12 l6 hide-on-med-and-up">
                <router-link :to="{name:'C2Unit1MediumRound5P3'}"><a @click="submit" class="waves-effect pink lighten-3 waves-light flow-text btn-small align-center right"> หน้าถัดไป </a></router-link>
            </div> 

        </div>
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'unit2P3',
    data(){
        return{
            userTable: null,
        }
    },
    created(){
         let self = this
        var getOptions = {
                source: 'server'
              };
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
                Round5Page2End:{
                            EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                },
                Round5Page3Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                       },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter2').doc('Unit1').collection('Level').doc('Medium').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round5Page2End="";
                      self.Round5Page3Start="";
                      
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
        }

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
