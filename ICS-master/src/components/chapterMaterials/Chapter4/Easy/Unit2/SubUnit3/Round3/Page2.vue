﻿﻿<template>
<div class="container row col s12 m12 l12 center">
  <div class="row">
            <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="active"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
        </ul>
    <div class="col s12 m12 l12 center" style="margin-top:20px;margin-bottom:20px;">
      <h4 style="font-weight:bold;"> รู้วิธีรับมือคนลวงปลอดภัย 100% </h4>
    </div>
    <div class="row col s12 m12 l12 center card light-green accent-1 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="2.2" :centerMode="true" :initialSlide="0" :infiniteScroll="true" style="height:340px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit2-2.3/unit2-2.3.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit2-2.3/unit2-2.3.2.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit2-2.3/unit2-2.3.3.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit2-2.3/unit2-2.3.4.png">
            </div>
          </slide>
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text">
                      รหัสผ่านที่เดาง่าย
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text">
                      ไม่ควรไปเข้าบัญชีบนอุปกรณ์อื่นๆ
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">3.</h5>
                    <p class="flow-text">
                      ระวัง Key Logger<br>โปรแกรมดักคีย์บอร์ด
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open3=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">4.</h5>
                    <p class="flow-text">
                      ใช้ฟีเจอร์<br>“ตั้งค่าการยืนยันตัวตนสองปัจจัย”<br>ของ Facebook
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open4=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C4Unit2EasyRound3P1'}"><a class="waves-effect  light-green darken-1 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C4Unit2EasyRound3P1'}"><a class="waves-effect  light-green darken-1 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C4Unit2EasyRound3P3'}"><a @click="submit" class="waves-effect  light-green darken-1 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C4Unit2EasyRound3P3'}"><a @click="submit" class="waves-effect  light-green darken-1 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
  <!-- 1 -->
 <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; อย่าตั้งรหัสผ่านที่เดาง่าย หรือพยายามอย่าใช้รหัสผ่านเดียวกันกับที่ใช้เข้า E-mail ของเรา เผื่อเราเผลอนำรหัสนี้ไปสมัครเว็บบริการต่าง ๆ ที่อาจมีความปลอดภัยไม่มาก ก็มีโอกาสที่ข้อมูลจะหลุดแล้วถูกแฮกบัญชี Facebook ได้สูง เพราะคนแฮกอาจขยายผลมายังบัญชีเฟสของเรานั้นเอง และถ้าโดนแฮกบัญชี E-mail ด้วย ก็ซวยหลายต่อเลยครับ
      </p>
  </vue-modaltor>
  <!-- 2 -->
<vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ไม่ควรไปเข้าบัญชีบนอุปกรณ์อื่น ๆ เพราะมีโอกาสลืม Log-Out ออก เช่น สมาร์ทโฟนเพื่อน หรือคอมฯ สาธารณะ (ร้านเกม) วันต่อมาก็ถูกใครก็ไม่รู้ เอาบัญชี Facebook ของเราไปใช้งานจนได้ ฉะนั้นพยายามหลีกการ Log-In บัญชีของเราบนอุปกรณ์อื่น ๆ จะดีกว่า แต่หากจำเป็นจริง ๆ ก็อย่าลืม Log-Out ออกโดยเด็ดขาด
      </p>
  </vue-modaltor>
  <!-- 3 -->
  <vue-modaltor :visible="open3" @hide="open3 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ระวัง Key Logger โปรแกรมดักคีย์บอร์ดที่มาพร้อมกับโปรแกรมเถื่อน โดยหลายเว็บที่ปล่อยให้โหลดโปรแกรมเถื่อนฟรี มักจะแอบฝังมัลแวร์หรือโปรแกรมประสงค์ร้ายติดมาด้วย หนึ่งในนั้นคือ Key Logger นี้เอง โดยเมื่อมันถูกติดตั้งบนคอมฯ (แน่นอนว่าเราไม่รู้ตัว) มันจะคอยบันทึกข้อมูลการพิมพ์ของเราแล้วส่งไปยัง “แคร็กเกอร์” ที่กำลังส่องข้อมูลอยู่ตลอด วิธีป้องกันก็ง่าย ๆ คือ ไม่โหลดของเถื่อน และติดตั้งโปรแกรม Anti Virus ที่มาพร้อมฟีเจอร์ป้องกันมัลแวร์ให้เรียบร้อย​
      </p>
  </vue-modaltor>
  <!-- 4 -->
  <vue-modaltor :visible="open4" @hide="open4 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ใช้ฟีเจอร์ “ตั้งค่าการยืนยันตัวตนสองปัจจัย” ของ Facebook โดยเข้าได้ที่ การตั้งค่า > การรักษาความปลอดภัยและการเข้าสู่ระบบ ในหน้านี้จะมีสารพัดวิธีการยืนยันตัวตนช่วยเสริมให้เจาะรหัสเข้าบัญชีได้ยากขึ้น​ในที่นี้ก็ขอแนะนำ “ข้อความ (SMS)” ใช้สมาร์ทโฟนเป็นตัวช่วย ซึ่งจะอยู่ในหัวข้อ ใช้การยืนยันตัวตนแบบสองปัจจัย นั้นเอง หลังตั้งค่าตรงนี้เสร็จแล้ว ต่อไปทุกครั้งที่เรา Log-In บัญชี มันจะขึ้นหน้าต่าง “ป้อนรหัสเข้าสู่ระบบของคุณ” ถามหารหัสที่ส่งมาทาง SMS บนสมาร์ทโฟนที่ใช้ยืนยันผ่านเบอร์โทรของเรา วิธีนี้จะช่วยให้แฮกบัญชีได้ยากขึ้นแบบเห็น ๆ เลยครับ
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
    name: 'Unit2p2',
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
            db.collection('UserData').doc('Content').collection('Chapter4').doc('Unit2').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
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
