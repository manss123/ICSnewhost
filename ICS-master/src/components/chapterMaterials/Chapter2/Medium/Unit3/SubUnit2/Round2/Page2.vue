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
      <h4 style="font-weight:bold;">  ห้ามทำ!! ผิดกฎหมาย พ.ร.บ.คอมพิวเตอร์ </h4>
    </div>
    <div class="row col s12 m12 l12 center card pink lighten-5 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="2.2" :centerMode="true" :initialSlide="0" :infiniteScroll="true" style="height:340px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit3-3.2/unit3-3.2.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit3-3.2/unit3-3.2.2.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit3-3.2/unit3-3.2.3.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter2/Unit3-3.2/unit3-3.2.4.png">
            </div>
          </slide>
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      เข้าถึงระบบหรือข้อมูล<br>ของผู้อื่นโดยไม่ชอบ (มาตรา 5-8)
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      แก้ไข ดัดแปลง หรือทำให้ข้อมูล<br>ผู้อื่นเสียหาย (มาตรา 9-10)
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">3.</h5>
                    <p class="flow-text"  style="font-size:12px;">
                      ส่งข้อมูลหรืออีเมลก่อกวนผู้อื่น<br>หรือส่งอีเมลสแปม (มาตรา 11)
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open3=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">4.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      เข้าถึงระบบ หรือข้อมูลทางด้าน<br>ความมั่นคงโดยมิชอบ (มาตรา 12)
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open4=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>

            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C2Unit3MediumRound2P1'}"><a class="waves-effect pink lighten-3 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C2Unit3MediumRound2P1'}"><a class="waves-effect pink lighten-3 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C2Unit3MediumRound2P3'}"><a @click="submit" class="waves-effect pink lighten-3 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C2Unit3MediumRound2P3'}"><a @click="submit" class="waves-effect pink lighten-3 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
  <!-- 1 -->
 <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; การปล่อยไวรัส มัลแวร์เข้าคอมพิวเตอร์ เพื่อเจาะข้อมูลบางอย่าง หรือพวกแฮคเกอร์ ที่เข้าไปขโมยข้อมูลของน้องๆ คนที่ทำก็จะมีความผิดตามพ.ร.บ.คอมพิวเตอร์นะครับ<br>
          </p>
          <p class="red-text">มาดูบทลงโทษกันครับ</p>
          <p> เข้าถึงระบบคอมพิวเตอร์: จำคุกไม่เกิน 6 เดือน ปรับไม่เกิน 1 หมื่นบาท หรือทั้งจำทั้งปรับ<br>
          เข้าถึงข้อมูลคอมพิวเตอร์: จำคุกไม่เกิน 2 ปี ปรับไม่เกิน 4 หมื่นบาท หรือทั้งจำทั้งปรับ<br>
          ล่วงรู้มาตรการป้องกันการเข้าถึงระบบคอมพิวเตอร์และนำไปเปิดเผย: จำคุกไม่เกิน 1 ปี ปรับไม่เกิน 2 หมื่นบาท หรือทั้งจำทั้งปรับ<br>
          ดักรับข้อมูลคอมพิวเตอร์: จำคุกไม่เกิน 2 ปี ปรับไม่เกิน 4 หมื่นบาท หรือทั้งจำทั้งปรับ</p>
  </vue-modaltor>
  <!-- 2 -->
<vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; การทำให้ข้อมูลเสียหาย ทำลาย แก้ไข เปลี่ยนแปลง เพิ่มเติมข้อมูลของผู้อื่นโดยมิชอบ หรือจะเป็นในกรณีที่ทำให้ระบบคอมพิวเตอร์ของผู้อื่นไม่สามารถทำงานได้ตามปกติ
      </p>
      <p class="red-text" style="display:inline;"> บทลงโทษ</p>
      - จำคุกไม่เกิน 5 ปี ปรับไม่เกิน 1 แสนบาท หรือทั้งจำทั้งปรับ
  </vue-modaltor>
  <!-- 3 -->
  <vue-modaltor :visible="open3" @hide="open3 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; สำหรับพ่อค้า แม่ค้าออนไลน์ ที่ส่งอีเมลขายของที่ลูกค้าไม่ยินดีที่จะรับ หรือแม้แต่การฝากร้านตาม Facebook กับ IG ก็เป็นสิ่งที่ไม่ควรทำและยังรวมถึงคนที่ขโมยข้อมูลลูกค้าจากคนอื่นแล้วส่งอีเมลหรือข้อความขายของตัวเองครับ
      </p>
        <p class="red-text"> บทลงโทษ</p>
        <p> -ส่งโดยปกปิดหรือปลอมแปลงแหล่งที่มา ปรับไม่เกิน 1 แสนบาท </p>
        <p> -ส่งโดยไม่เปิดโอกาสให้ปฏิเสธตอบรับได้โดยงาน ต้องได้รับโทษจำคุกไม่เกิน 2 ปี ปรับไม่เกิน 4 หมื่นบาท หรือทั้งจำทั้งปรับ</p>
  </vue-modaltor>
  <!-- 4 -->
  <vue-modaltor :visible="open4" @hide="open4 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; หาน้องๆโพสต์เกี่ยวกับเรื่องการเมืองที่ส่งผลให้เกิดความเสียหายหรือความมั่นคงต่อประเทศ หรือโพสต์ที่เป็นการก่อกวน หรือการก่อการร้ายขึ้น น้องๆจะมีความผิดนะครับ 
      </p>
      <p class="red-text">  บทลงโทษ</p>
      <p>- กรณีไม่เกิดความเสียหาย: จำคุก 1-7 ปี และปรับ 2 หมื่น – 1.4 แสนบาท</p>
      <p>- กรณีเกิดความเสียหาย: จำคุก 1-10 ปี และปรับ 2 หมื่น – 2 แสนบาท </p>
      <p>- กรณีเป็นเหตุให้ผู้อื่นถึงแก่ความตาย: จำคุก 5-20 ปี และปรับ 1 แสน – 4 แสนบาท</p>
  </vue-modaltor>
  <!-- 5 -->
  <vue-modaltor :visible="open5" @hide="open5 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; กรณีทำเพื่อเป็นเครื่องมือในการกระทำความผิดทางคอมพิวเตอร์ตามมาตรา 5-11 (หรือข้อ 1-3 ในบทความนี้) ต้องจำคุกไม่เกิน 1 ปี ปรับไม่เกิน 2 หมื่นบาท หรือทั้งจำทั้งปรับ หากมีผู้นำไปใช้กระทำความผิด ผู้จำหน่ายหรือผู้เผยแพร่ต้องรับผิดชอบร่วมด้วย<br>
          <br>
          กรณีทำเพื่อเป็นเครื่องมือในการกระทำความผิดทางคอมพิวเตอร์ มาตรา 12 ต้องจำคุกไม่เกิน 2 ปี ปรับไม่เกิน 4 หมื่นบาท หรือทั้งจำทั้งปรับ หากมีผู้นำไปใช้กระทำความผิด ผู้จำหน่ายหรือผู้เผยแพร่ต้องรับผิดชอบร่วมด้วย
      </p>
  </vue-modaltor>
  <!-- 6 -->
  <vue-modaltor :visible="open6" @hide="open6 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; โพสต์ข้อมูลปลอม ทุจริต หลอกลวง (อย่างเช่น ข่าวปลอม โฆษณาธุรกิจลูกโซ่ที่หลอกลวงเอาเงินลูกค้า และไม่มีการส่งมอบของให้จริงๆ เป็นต้น) <br>
          &nbsp;&nbsp; โพสต์ข้อมูลความผิดเกี่ยวกับความมั่งคงปลอดภัย <br>
          &nbsp;&nbsp; โพสต์ข้อมูลความผิดเกี่ยวกับความมั่นคง ก่อการร้าย โพสต์ข้อมูลลามก ที่ประชาชนเข้าถึงได้ เผยแพร่ ส่งต่อข้อมูล ที่รู้แล้วว่าผิด (อย่างเช่น กด Share ข้อมูลที่มีเนื้อหาเข้าข่ายความผิดพ.ร.บ.คอมพิวเตอร์ก็มีความผิดค่ะ ) 
      </p>
      <p class="red-text">  บทลงโทษ</p>
       หากเป็นการกระทำที่ส่งผลถึงประชาชน ต้องได้รับโทษจำคุกไม่เกิน 5 ปี ปรับไม่เกิน 1 แสนบาท หรือทั้งจำทั้งปรับ หากเป็นการกระทำที่ส่งผลต่อบุคลใดบุคคลหนึ่ง ต้องได้รับโทษจำคุกไม่เกิน 3 ปี ปรับไม่เกิน 6 แสนบาท หรือทั้งจำทั้งปรับ (แต่ในกรณีอย่างหลังนี้สามารถยอมความกันได้)
  </vue-modaltor>
   <!-- 7 -->
  <vue-modaltor :visible="open7" @hide="open7 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp; หากน้องๆเป็นแอดมินเพจต่างๆ แล้วมีลูกเพจมาแสดงความคิดเห็นที่มีเนื้อหาผิดกฎหมาย น้องๆก็จะมีความผิดเหมือนกันนะครับ แต่ถ้าหากน้องๆตรวจสอบแล้วพบเจอ และลบออก จะถือว่าเป็นผู้ที่พ้นความผิด
      </p>
      <p class="red-text">  บทลงโทษ</p>
       ถ้าหากน้องๆไม่ลบความคิดเห็นที่ผิดกฎหมายออกน้องๆถือว่าเป็นผู้กระทำความผิดตามมาตร 14 ต้องได้รับโทษเช่นเดียวกันผู้โพสต์ หรือแสดงความคิดเห็นทางออนไลน์
  </vue-modaltor>
   <!-- 8 -->
  <vue-modaltor :visible="open8" @hide="open8 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ความผิดข้อนี้ แบ่งออกเป็น 2 ประเด็นหลักคือ<br>
          • การโพสต์ภาพของผู้อื่นที่เกิดจากการสร้าง ตัดต่อ หรือดัดแปลง ที่น่าจะทำให้ผู้อื่นนั้นเสียชื่อเสียง ถูกดูหมิ่นเกลียดชัง อย่างเช่นกรณีที่เอาภาพดาราไปตัดต่อ และตกแต่งเรื่องขึ้นมา จนทำให้บุคคลนั้นเกิดความเสียหาย ก็ถือว่ามีความผิดตามพ.ร.บ.คอมพิวเตอร์ค่ะ<br>
          • การโพสต์ภาพผู้เสียชีวิต หากเป็นการโพสต์ที่ทำให้บิดามารดา คู่สมรส หรือบุตรของผู้ตายเสียชื่อเสียง ถูกดูหมิ่นเกลียดชัง หรือได้รับความอับอาย
      </p>
       <p class="red-text">  บทลงโทษ</p>
        หากทำผิดตามนี้ ต้องได้รับโทษจำคุกไม่เกิน 3 ปี และปรับไม่เกิน 2 แสนบาท
  </vue-modaltor>
</div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
import { Hooper, Slide,   Navigation as HooperNavigation , Pagination as HooperPagination} from 'hooper';
import 'hooper/dist/hooper.css';

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
            db.collection('UserData').doc('Content').collection('Chapter2').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(self.userTable).update(item).then(res=>{
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
