﻿﻿<template>
<div class="container row col s12 m12 l12 center">
  <div class="row">
            <ul class="pagination">
                <p class="flow-text" style="display:inline;">หน่วยที่: </p>
                <li class="active"><a href="#!">1</a></li>
                <li class="waves-effect"><a href="#!">2</a></li>
                <li class="waves-effect"><a href="#!">3</a></li>
                <li class="waves-effect"><a href="#!">4</a></li>
            </ul>  
    <div class="col s12 m12 l12 center" style="margin-top:20px;margin-bottom:20px;">
      <h4 style="font-weight:bold;"> VPN คืออะไร </h4>
    </div>
    <div class="row col s12 m12 l12 center card red accent-1 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="2.2" :centerMode="true" :initialSlide="0" :infiniteScroll="true" style="height:340px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit3-3.1/unit3-3.1.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit3-3.1/unit3-3.1.2.png">
            </div>
          </slide>
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text">
                      VPN ย่อมากจาก<br>
                      Virtual Private Network
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text">
                      ลักษณะการทำงานของ VPN
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C5Unit3MediumRound1P1'}"><a class="waves-effect  red darken-1 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C5Unit3MediumRound1P1'}"><a class="waves-effect  red darken-1 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C5Unit3MediumRound1P3'}"><a @click="submit" class="waves-effect  red darken-1 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C5Unit3MediumRound1P3'}"><a @click="submit" class="waves-effect  red darken-1 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
  <!-- 1 -->
 <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; เป็นเทคโนโลยีที่มีการเชื่อมต่อกับเครือข่ายภายนอก ใช้สำหรับเป็นระบบที่ใช้ในการเชื่อมโยงแต่ละสำนักงาน และ ถูกใช้เพื่อป้องกันการเข้าชมเว็บส่วนตัวจากการถูกสอดแนม การแทรกแซง<br>
      </p>
  </vue-modaltor>
  <!-- 2 -->
<vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ปัจจุบันมี Public Network หรือ เครือข่ายสาธารณะ ที่ใช้กันเป็นเรื่องปกติอยู่ในทุกวันนี้ ระบบ VPN จะเป็นเหมือนการสร้างทางส่วนตัวเฉพาะเชื่อมต่อกันระหว่างหน่วยงาน 2 หน่วยงาน ผ่านเครือข่ายสาธารณะที่มีอยู่แล้ว เพราะจะช่วยในเรื่องความรวดเร็ว โดยการส่งข้อมูลผ่านระบบ VPN นี้จะต้องมีการเข้ารหัสแพ็กเกจก่อน เพื่อสร้างความปลอดภัยให้กับข้อมูลจะมีเพียงผู้รับปลายทางเท่านั้นที่สามารถถอดรหัสข้อมูล และนำข้อมูลไปใช้งานได้
      </p>
  </vue-modaltor>
</div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import { Hooper, Slide,   Navigation as HooperNavigation , Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';
import Vue from 'vue'
import VueModalTor from 'vue-modaltor'
Vue.use(VueModalTor)

export default {
    name: 'Unit3p2',
    data(){
        return{
            questionText: null,
            choice1Text: null,
            choice2Text:null,
            userTable: null,
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
            open6: false,
            open7: false,
            open8: false,
            open9: false,
            open10: false,
        }
    },
    created(){
         let self = this
        var getOptions = {
                source: 'server'
              };
    },
    components:{
        Hooper,
        Slide,
        HooperNavigation,
        HooperPagination,
    },
    methods:{
      hideModal1() {
              this.open1 = false
          },
      hideModal2() {
              this.open2 = false
          },
      hideModal3() {
              this.open3 = false
          },
      hideModal4() {
              this.open4 = false
          },
      hideModal5() {
              this.open5 = false
          },
      hideModal6() {
              this.open6 = false
          },
      hideModal7() {
              this.open7 = false
          },
      hideModal8() {
              this.open8 = false
          },
      hideModal9() {
              this.open9 = false
          },
      hideModal10() {
              this.open10 = false
          },

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
                Round1Page2End:{
                            EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                },
                Round1Page3Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                       },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter5').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round1Page2End="";
                      self.Round1Page3Start="";
                      
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
p.flow-text{
  line-height: 25px;
}
a.flow-text{
  font-size: large;
}
.hooper-slide.is-current {
  transform: scale(1.4);
}
.hooper-slide{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
</style>
