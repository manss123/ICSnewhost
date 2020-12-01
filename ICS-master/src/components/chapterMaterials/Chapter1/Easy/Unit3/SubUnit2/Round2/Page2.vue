﻿<template>
<div class="container row col s12 m12 l12 center">
  <div class="row">
            <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="active"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
        </ul>
    <div class="col s12 m12 l12 center" style="margin-top:20px;margin-bottom:20px;">
      <h4 style="font-weight:bold;">  ป้องกันไว้ก่อนนะ </h4>
    </div>
    <div class="row col s12 m12 l12 center card teal accent-2 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="2.2" :centerMode="true" :initialSlide="0" :infiniteScroll="true" style="height:340px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-3.2%20Privacy%20protection/Unit3-3.2.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-3.2%20Privacy%20protection/Unit3-3.2.2.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-3.2%20Privacy%20protection/Unit3-3.2.3.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-3.2%20Privacy%20protection/Unit3-3.2.4.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-3.2%20Privacy%20protection/Unit3-3.2.5.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-3.2%20Privacy%20protection/Unit3-3.2.6.png">
            </div>
          </slide>
          <!-- <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-1.2/Unit3-1.2.7.png">
            </div>
          </slide> -->
          <!-- <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-1.2/Unit3-1.2.8.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-1.2/Unit3-1.2.9.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter1/Unit3-1.2/Unit3-1.2.10.png">
            </div>
          </slide> -->
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      ตรวจสอบการตั้งค่าความ<br>เป็นส่วนตัวบนบัญชีโซเชียลมีเดีย
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      อย่าบันทึกหรือเก็บข้อมูล<br>ส่วนตัวในพื้นที่สาธารณะ
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">3.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      เก็บที่อยู่อีเมลหลักและ<br>หมายเลขโทรศัพท์ส่วนตัว
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open3=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">4.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      ใช้รหัสผ่านที่ปลอดภัย
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open4=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">5.</h5>
                    <p class="flow-text" style="font-size:11px;">
                      ตรวจสอบการอนุญาตสำหรับ<br>แอปพลิเคชันมือถือและ ส่วนขยายเบราว์เซอร์
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open5=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">6.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      รักษาความปลอดภัยโทรศัพท์<br>และคอมพิวเตอร์ด้วยรหัสผ่าน
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open6=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <!-- <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">7.</h5>
                    <p class="flow-text">
                      ไม่โพสต์กำหนดการรายวัน<br>เช่น ไปเที่ยววันไหน<br>ไม่อยู่บ้านวันไหน
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open7=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">8.</h5>
                    <p class="flow-text">
                      ไม่โพสต์ว่าน้องๆกำลัง<br>ออกเดินทางในวันหยุด
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open8=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">9.</h5>
                    <p class="flow-text">
                      ไม่โพสต์เกี่ยวกับชาติ<br>ศาสนา การเมือง
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open9=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">10.</h5>
                    <p class="flow-text">
                      อย่าเชื่อมโยงเว็บไซต์<br>ส่วนบุคคลกับเว็บไซต์ธุรกิจ
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open10=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide> -->

            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C1Unit3EasyRound2P1'}"><a class="waves-effect teal darken-1 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C1Unit3EasyRound2P1'}"><a class="waves-effect teal darken-1 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C1Unit3EasyRound2P3'}"><a @click="submit" class="waves-effect teal darken-1 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C1Unit3EasyRound2P3'}"><a @click="submit" class="waves-effect teal darken-1 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
  <!-- 1 -->
 <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; น้องๆควรตรวจสอบการตั้งค่าความเป็นส่วนตัวของน้องๆ ว่าต้องการแบ่งปันข้อมูลใดกับคนแปลกหน้าบ้าง หรือกับเพื่อนของน้องๆคนไหนบ้าง
      </p>
  </vue-modaltor>
  <!-- 2 -->
<vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; อย่าใช้บริการออนไลน์ที่มีไว้สำหรับแบ่งปันข้อมูลเพื่อจัดเก็บข้อมูลส่วนตัวของน้องๆ เช่น Dropbox หรือใช้งานข้อมูลของน้องๆในที่สาธารณะโดยไม่ได้ล็อกเอาท์ออกจากระบบ
      </p>
  </vue-modaltor>
  <!-- 3 -->
  <vue-modaltor :visible="open3" @hide="open3 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; การที่น้องๆแบ่งปันที่อยู่อีเมลและหมายเลขโทรศัพท์จะทำให้เกิด สแปมจำนวนมาก ในกล่องจดหมายอีเมล แม้จะเลี่ยงการแบ่งปันข้อมูนี้กับบริการอินเตอร์เน็ตและร้านค้าออนไลน์ แต่อย่าแชร์กับคนอื่นบนเครือข่ายสังคม
      </p>
  </vue-modaltor>
  <!-- 4 -->
  <vue-modaltor :visible="open4" @hide="open4 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ควรตั้งรหัสผ่านเพื่อปกป้องข้อมูลส่วนตัวของน้องๆ อย่างการใช้รหัสผ่านยาวๆราวๆ 6-12 ตัวอักษร และใช้รหัสผ่านที่แตกต่างกันสำหรับแต่ละบริการ/บัญชี
      </p>
  </vue-modaltor>
  <!-- 5 -->
  <vue-modaltor :visible="open5" @hide="open5 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; แอปพลิเคชันมือถือจะแจ้งให้น้องๆอนุญาตให้พวกเขาเข้าถึงรายชื่อติดต่อหรือไฟล์ที่เก็บไว้บนเครื่องและใช้กล้อง, ไมโครโฟน, ตำแหน่งทางภูมิศาสตร์ (Location) และส่วนขยายเบราว์เซอร์ที่อาจมีการสอดแนมน้องๆ
      </p>
  </vue-modaltor>
  <!-- 6 -->
  <vue-modaltor :visible="open6" @hide="open6 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; คอมพิวเตอร์และโทรศัพท์เก็บข้อมูลของน้องเป็นจำนวนมาก ดังนั้นต้องปกป้องด้วยรหัสผ่าน ไม่จำเป็นต้องซับซ้อนและไม่ซ้ำใคร แต่ควรป้องกันไม่ห้คนอื่นสุ่มเดาได้ง่าย และรหัสที่ป้องกันได้ดีคือ PIN รวมถึงการปลดล็อกด้วยข้อมูลทางชีวภาพ เช่น ใบหน้า
      </p>
  </vue-modaltor>
   <!-- 7 -->
  <vue-modaltor :visible="open7" @hide="open7 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ไม่ควรโพสต์กำหนดการรายวันของน้องๆ ... เพราะนักย่องเบาอาจใช้คำแนะนำเล็กน้อยเหล่านี้เพื่อประโยชน์ของพวกเขา
      </p>
  </vue-modaltor>
   <!-- 8 -->
  <vue-modaltor :visible="open8" @hide="open8 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ไม่ควรโพสต์ว่าน้องๆกำลังออกเดินทางในวันหยุด หรือออกเดินทางวันไหน ... เพราะอาจะมีผู้ประสงค์ร้ายลอบทำร้ายหรือปล้นจี้ระหว่างทางได้ ก่อนให้เกิดอันตรายต่อตนเองและคนรอบข้าง
      </p>
  </vue-modaltor>
   <!-- 9 -->
  <vue-modaltor :visible="open9" @hide="open9 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ไม่ควรเปิดเผยมุมมองสุดขั้วเกี่ยวกับเชื้อชาติ ศาสนา หรือการเมือง
      </p>
  </vue-modaltor>
   <!-- 10 -->
  <vue-modaltor :visible="open10" @hide="open10 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; อย่าเชื่อมโยงเว็บไซต์ส่วนบุคคลกับเว็บไซต์ธุรกิจ เว็บไซต์สำคัญๆ หรือเว็บไซต์ทางการ
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
                Round2Page2End:{
                            EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                },
                Round2Page3Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                       },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round2Page2End="";
                      self.Round2Page3Start="";
                      
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
