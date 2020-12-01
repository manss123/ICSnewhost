﻿<template>
<div class="container row col s12 m12 l12 center">
  <div class="row">
    <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="active"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
        </ul> 
    <div class="col s12 m12 l12 center" style="margin-top:20px;margin-bottom:20px;">
      <h4 style="font-weight:bold;">  ประเภทของข้อมูลและสื่อต่างๆบนอินเตอร์เน็ต </h4>
    </div>
    <div class="row col s12 m12 l12 center card pink lighten-5 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="2.2" :centerMode="true" :initialSlide="0" :infiniteScroll="true" style="height:250px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit1-1.4/Unit1-1.4.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit1-1.4/Unit1-1.4.2.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit1-1.4/Unit1-1.4.3.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit1-1.4/Unit1-1.4.4.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit1-1.4/Unit1-1.4.5.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit1-1.4/Unit1-1.4.6.png">
            </div>
          </slide>
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text" style="font-size:10px;">การส่งข้อความ ข้อมูล หรือ <br>จดหมายอิเล็กทรอนิกส์ ที่ทำให้ ผู้อื่นเดือดร้อน<br>รำคาญใจไม่สามารถปฏิเสธได้</p>
                    <a class="waves-effect pink lighten-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่าน</a>
                    <p class="flow-text">
                      
                    

                    </p>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text">เผยแพร่ข้อมูล ข่าวสาร<br>บิดเบือนความจริง</p>
                    <p class="flow-text">
                    <a class="waves-effect pink lighten-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่าน</a>
                    
                    </p>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">3.</h5>
                    <p class="flow-text">การกดไลด์<br>แบบผิดกฏหมาย?</p>
                    <p class="flow-text">
                      <a class="waves-effect pink lighten-1 waves-light flow-text btn-small align-center" @click="open3=true">กดเพื่ออ่าน</a>
                    </p>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">4.</h5>
                    <p class="flow-text" style="font-size:12px;">การเผยแพร่ และส่งต่อภาพโป๊<br>เปลือย หรือลามก อนาจาร/การพนัน</p>
                    <p class="flow-text">
                      
                      <a class="waves-effect pink lighten-1 waves-light flow-text btn-small align-center" @click="open4=true">กดเพื่ออ่าน</a>
                    </p>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">5.</h5>
                    <p class="flow-text">การตัดต่อภาพ หรือดัดแปลง<br>ข้อมูลของผู้อื่นในทาง<br>เสื่อมเสีย/การแชร์ภาพผู้เสียชีวิต</p>
                    <p class="flow-text">
                      
                     <a class="waves-effect pink lighten-1 waves-light flow-text btn-small align-center" @click="open5=true">กดเพื่ออ่าน</a>
                    </p>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">6.</h5>
                    <p class="flow-text" style="font-size:11px;">การค้าขาย หรือส่งต่อโปรแกรม<br>ที่สร้างขึ้น โดยไม่ได้รับอนุญาติ/<br>ละเมิดสิทธิทางปัญญา</p>
                    <p class="flow-text">
                      <a class="waves-effect pink lighten-1 waves-light flow-text btn-small align-center" @click="open6=true">กดเพื่ออ่าน</a>
                    </p>
                  </div>
            </slide>

            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C2Unit1MediumRound4P1'}"><a class="waves-effect pink lighten-3 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C2Unit1MediumRound4P1'}"><a class="waves-effect pink lighten-3 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C2Unit1MediumRound4P3'}"><a @click="submit" class="waves-effect pink lighten-3 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C2Unit1MediumRound4P3'}"><a @click="submit" class="waves-effect pink lighten-3 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
                          <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="''" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
                                <p>
                                  <template slot="close-icon">
                                            You Cand Add Any Icon Svg
                                  </template>
                             การส่งข้อความ ข้อมูล หรือจดหมายอิเล็กทรอนิกส์ ที่ทำให้ผู้อื่นเดือนร้อนรำคาญใจ ไม่สามารถปฏิเสธได้ เช่น การส่งโฆษณา แบบ Spam Mail , การฝากร้านค้า เป็นต้น
                                </p>
                                <p class="red-text"> มีโทษปรับไม่เกิน 2 แสนบาท</p>
                          </vue-modaltor>
                          <vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="''" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
                                <p>
                                  <template slot="close-icon">
                                            You Cand Add Any Icon Svg
                                  </template>
                                ผู้ใดเผยแพร่ข้อมูลอันเป็นเท็จ ที่ก่อให้เกิดความเสียหายต่อผู้อื่น หรือการแชร์ข่าวสารที่มีบิดเบือนความจริงที่ก่อให้เกิดการตื่นตระหนักแก่ประชาชน
                                </p>
                                <p class="red-text"> มีโทษจำคุกไม่เกิน 5 ปี หรือปรับไม่เกิน 1 แสนบาท หรือทั้งจำทั้งปรับ ศาลมีสิทธิ์ระงับข้อมูลนั้นๆได้ทันที</p>
                          </vue-modaltor>
                          <vue-modaltor :visible="open3" @hide="open3 = false" :bg-overlay="''" :bg-panel ="''" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
                                <p>
                                  <template slot="close-icon">
                                            You Cand Add Any Icon Svg
                                  </template>
                                การกดไลด์หรือการแสดงรู้สึกในโลกโซเชียลโดยรวมแล้วถือว่าไม่ผิดเพราะถือว่าเป็นแสดงความคิดเห็นตามหลักของกฏหมายรัฐธรรมนูญ
                                </p>
                                <p class="red-text"> ข่าวสารที่ทำให้เกิดความเสื่อมเสียต่อสถานบัน ห้ามกด! เพราะมีความผิดตาม มาตรา 112</p>
                          </vue-modaltor>
                          <vue-modaltor :visible="open4" @hide="open4 = false" :bg-overlay="''" :bg-panel ="''" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
                                <p>
                                  <template slot="close-icon">
                                            You Cand Add Any Icon Svg
                                  </template>
                                ผู้ใดแบ่งปัน แชร์-ส่งต่อ รูปภาพ และวีดีทัศน์ที่ส่อไปในทางโป๊ เปลือย หรือเป็นกระตุ้นทำให้เกิดอารมณ์ทางเพศ เช่น การส่งต่อภาพหรือวิดีโอลามกอนาจาร , การ Live สด! ที่แสดงออกถึงการมีเพศสัมพันธ์-เต้นวาบหวิว
                                </p>
                                <p class="red-text"> มีโทษจำคุกไม่เกิน 5 ปี หรือปรับไม่เกิน 1 แสน หรือทั้งจำทั้งปรับ ศาลมีสิทธิ์ระงับได้ทันที</p>
                          </vue-modaltor>
                          <vue-modaltor :visible="open5" @hide="open5 = false" :bg-overlay="''" :bg-panel ="''" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
                                <p>
                                  <template slot="close-icon">
                                            You Cand Add Any Icon Svg
                                  </template>
                                ผู้ใดนำภาพที่สร้างขึ้นโดยการ ตัดต่อ ต่อเติม หรือดัดแปลง ด้วยวิธีการทางอิเล็กทรอนิกส์ แล้วนำไปแชร์ อันเป็นทำให้ผู้อื่นเสื่อมเสียชื่อเสียง รวมไปถึงภาพของผู้เสียชีวิตทำให้เสื่อมเสียเกียรติ
                                </p>
                                <p class="red-text"> มีโทษระวางจำคุกไม่เกิน 3 ปี หรือปรับไม่เกิน 2 แสนบาท ศาลมีสิทธิ์ที่จะระงับ หรือลบข้อมูลนั้นๆได้</p>
                          </vue-modaltor>
                          <vue-modaltor :visible="open6" @hide="open6 = false" :bg-overlay="''" :bg-panel ="''" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
                                <p>
                                  <template slot="close-icon">
                                            You Cand Add Any Icon Svg
                                  </template>
                                ผู้ใดทำการค้าขาย หรือแบ่งปันชุดคำสั่งที่จัดทำขึ้นโดยเฉพาะ เพื่อนำไปใช้เป็นเครื่องมือในการกระทำความผิด อาทิ การส่งต่อเพลง/ภาพยนตร์/สินค้าที่ละเมิดลิขสิทธ์ทางปัญญา
                                </p>
                                <p class="red-text"> มีโทษจำคุกไม่เกิน 1 ปี หรือปรับไม่เกิน 2 หมื่นบาท หรือทั้งจำทั้งปรับ</p>
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
    name: 'unit2p2',
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
                Round4Page2End:{
                            EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                },
                Round4Page3Start:{
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
                      self.Round4Page2End="";
                      self.Round4Page3Start="";
                      
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
