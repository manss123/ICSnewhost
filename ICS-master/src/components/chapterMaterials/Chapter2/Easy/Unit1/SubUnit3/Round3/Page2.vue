﻿<template>
<div class="container row col s12 m12 l12 center">
  <div class="row">
    <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="active"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
        </ul> 
    <div class="col s12 m12 l12 center" style="margin-top:20px;margin-bottom:20px;">
      <h4 style="font-weight:bold;">  ประเภทของข้อมูลและสื่อต่างๆบนอินเตอร์เน็ต </h4>
    </div>
<div class="row col s12 m12 l12 center card pink lighten-5 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="1.8" :centerMode="true" :initialSlide="0" :infiniteScroll="true" style="height:340px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit1-1.3/unit1-1.3.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit1-1.3/unit1-1.3.2.png">
            </div>
          </slide>
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text">
                      Interactive Social Media<br>Post
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text">
                      Visual Social Media Post
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>

            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C2Unit1EasyRound3P1'}"><a class="waves-effect pink lighten-3 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C2Unit1EasyRound3P1'}"><a class="waves-effect pink lighten-3 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C2Unit1EasyRound3P3'}"><a @click="submit" class="waves-effect pink lighten-3 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C2Unit1EasyRound3P3'}"><a @click="submit" class="waves-effect pink lighten-3 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
    <!-- 1 -->
 <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; Interactive Social Media Post โพสต์โซเชียลมีเดียแบบอินเตอร์แอคทีฟ เป็นเนื้อหาที่ใช้ในการสื่อสารแบบสองทาง มีความสารถในการโต้ตอบกับผู้ติดตาม ซึ่งบางครั้งข้อมูลที่น้องๆได้รับมาอาจช่วยให้น้องเรียนรู้และนำไปปรับใช้ปรับปรุงเนื้อหาของน้องได้ เช่น 
          <br>&nbsp;&nbsp;a. Poll (แบบสำรวจหรือโพลล์): น้องๆสามารถใช้โพลล์สำรวจความคิดเห็นภายในเนื้อหาของ น้องๆได้ ทั้งยังเป็นการดึงดูดความสนใจของผู้อื่นและเพียงแค่คลิก ก็เป็นการเริ่มต้น การสนทนาที่ยอดเยี่ยมได้<br>
          &nbsp;&nbsp; b. Quiz (แบบทดสอบ): น้องๆอาจเคยเจอคำถามน่าหัวเราะและแปลก ประหลาดมากมาย ซึ่งนั่นหมายถึงการสร้างแบบทดสอบที่น่าสนใจนั้น ทำให้สนุกและ ไม่เป็นทางการมากนัก เพียงแค่สร้างคำถามที่น่าสนใจก็สามารถทำให้เกิดการมีส่วน ร่วมระหว่างน้องๆและคนอื่นๆในโพสต์นั้นได้
      </p>
  </vue-modaltor>
  <!-- 2 -->
<vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; Visual Social Media Post คือ โพสต์โซเชียลมีเดียในลักษณะของภาพและการมองเห็นในแบบอื่นๆ มีผลโดยตรงต่อสายตาหรือการมองเห็นของน้องๆ และการโพสต์ลักษณะนี้จะสร้างภาพลักษณ์และดึงดูดความสนใจของผู้คนได้ดี เช่น 
          <br>
          <br>&nbsp;&nbsp;a. Video (วิดีโอ): เป็นรูปแบบเนื้อหาออนไลน์ มีทั้งภาพและเสียง รวมถึงข้อความและตัวอักษรที่มีความหมาย ก็ดึงดูดผู้คนได้มาก
          <br>
          <br>&nbsp;&nbsp;b. Graphic and Photo (กราฟิกและภาพถ่าย): หนึ่งภาพที่โพสต์อาจมีการตีความที่แตกต่างกันไปตามแต่ละบุคคล ทำให้มันมีความหมายและน่าสนใจในตัวเอง ยิ่งเป็นกราฟิกที่กำหนดเองหรือภาพถ่ายระดับมืออาชีพยิ่งดึงดูดความสนใจได้มากเช่นกัน 
          <br>
          <br>&nbsp;&nbsp;c. Infographic (อินโฟกราฟิก): คือภาพหรือกราฟิกที่บอกข้อมูลน้องๆด้วยการกวาดตามอง เป็นการเข้าถึงข้อมูลที่ซับซ้อนมหาศาลในเวลาจำกัด โดยใช้ภาพ สัญลักษณ์และไอคอน ประกอบกับตัวอักษรเพียงเล็กน้อย
      </p>
  </vue-modaltor>
</div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import { Hooper, Slide,   Navigation as HooperNavigation , Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: 'unit2p2',
    data(){
        return{
            questionText: null,
            choice1Text: null,
            choice2Text:null,
            userTable: null,
            open1: false,
            open2: false,
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
                Round3Page2End:{
                            EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                },
                Round3Page3Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                       },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter2').doc('Unit1').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round3Page2End="";
                      self.Round3Page3Start="";
                      
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
  font-size: 12px;
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
