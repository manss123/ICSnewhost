﻿﻿<template>
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
      <h4 style="font-weight:bold;"> เก็บบัตรกันมิจฉาชีพ </h4>
    </div>
    <div class="row col s12 m12 l12 center card yellow accent-1 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="2.2" :centerMode="true" :initialSlide="0" :infiniteScroll="false" style="height:340px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter6/unit1-1.4/unit1-1.4.1.png">
            </div>
          </slide>
          <!-- <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter6/unit1-1.4/unit1-1.4.1.png">
            </div>
          </slide> -->
          <!-- <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Unit1-3.3%20pw%20Setting/Unit1-3.3.2.png">
            </div>
          </slide> -->
          <!-- <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Unit1-3.3%20pw%20Setting/Unit1-3.3.2.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Unit1-3.3%20pw%20Setting/Unit1-3.3.2.png">
            </div>
          </slide> -->
          <!-- <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Unit1-3.3%20pw%20Setting/Unit1-3.3.2.png">
            </div>
          </slide> -->
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text">
                      วิธีการป้องกัน
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text">
                      วิธีการป้องกัน
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่านเพิ่ม(ต่อ)</a>
                  </div>
            </slide>
            <!-- <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">3.</h5>
                    <p class="flow-text">
                      EXP 04/21<br>
                      ย่อมาจาก<br>
                      Expiry Date / Expiration Date
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open3=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide> -->
            <!-- <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">4.</h5>
                    <p class="flow-text">
                      ธนบัตรและเหรียญ
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open4=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">5.</h5>
                    <p class="flow-text">
                      บัตรเงินสด
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open5=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide> -->
            <!-- <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">6.</h5>
                    <p class="flow-text">
                      Computer Virus (ไวรัส)
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open6=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide> -->
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C6Unit1EasyRound4P1'}"><a class="waves-effect  yellow darken-2 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C6Unit1EasyRound4P1'}"><a class="waves-effect  yellow darken-2 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C6Unit1EasyRound4P3'}"><a @click="submit" class="waves-effect  yellow darken-2 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C6Unit1EasyRound4P3'}"><a @click="submit" class="waves-effect  yellow darken-2 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
  <!-- 1 -->
 <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; เนื่องจากรหัส CVV นั้นเป็นตัวยืนยันการทำธุรกรรมต่างๆ ของเราในขั้นตอนสุดท้ายตามที่อธิบายไปแล้วข้างต้น ถ้าหากมีคนรู้รหัส 3 ตัวหลังบัตรเครดิตของเรา หรือกรณีถูกขโมยบัตรเครดิตไป และนำไปใช้ทำธุรกรรมต่างๆ แทนเรา ก็จะก่อให้เกิดความเสียหายได้ เพราะฉะนั้นวิธีการป้องกันการเกิดหนี้ หรือการโจรกรรมข้อมูลบัตรเครดิตจากมิจฉาชีพทั้งหลายนั้นก็ทำได้ไม่ยากค่ะ เรามีวิธีมาแนะนำคร่าวๆ ดังนี้<br>
          &nbsp;&nbsp; -เก็บข้อมูลบัตรเครดิตไว้ให้เป็นความลับที่สุด (ข้อมูลทั้งหมดบนหน้าบัตรและหลังบัตร) โดยเฉพาะอย่างยิ่ง หมายเลขบัตรเครดิต 16 หลัก และเลขรหัส CVV
      </p>
  </vue-modaltor>
  <!-- 2 -->
<vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; - ฝึกนิสัยการเก็บบัตรเครดิตเข้ากระเป๋าสตางค์ทันที หลังจากที่ใช้บัตรฯ ซื้อสินค้าหรือทำธุกรรมเสร็จเรียบร้อยแล้ว เพื่อป้องกันบัตรฯ หาย และอย่าจดรหัส CVV ไว้ในกระเป๋าสตางค์เด็ดขาด<br>
          &nbsp;&nbsp; - อย่าเผลอถ่ายรูปหน้าบัตรเครดิต หรือบัตรเดบิตที่โชว์ภาพหมายเลขบัตรต่างๆ ลง Social Media เพราะนั่นจะเป็นการชี้ทางให้มิจฉาชีพเข้าใกล้ตัวเราได้ง่ายมากขึ้น<br>
          &nbsp;&nbsp; - หาเทปกาวมาแปะทับรหัส CVV ไว้ เพื่อป้องกันการมองเห็นจากมิจฉาชีพ หรือผู้ที่ไม่หวังดีกับเรา<br>
          &nbsp;&nbsp; - หากพบว่าบัตรเครดิตหาย ควรรีบโทรแจ้งอายัดบัตรฯ ทันทีที่นึกขึ้นได้
      </p>
  </vue-modaltor>
  <!-- 3 -->
  <!-- <vue-modaltor :visible="open3" @hide="open3 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ในทางการเงิน คือ ตราสารทางการเงิน ซึ่งตามประมวลกฎหมายแพ่งและพาณิชย์ ได้กำหนดชนิดของตั๋วเงินออกเป็น 3 ประเภท คือ<br>
          &nbsp;&nbsp; - เช็ค คือ ตั๋วเงินที่บุคคลหนึ่งสั่งให้ธนาคารจ่ายเงินให้แก่อีกบุคคลหนึ่ง หรือจ่ายให้แก่ตนเองโดยกำหนดจำนวนเงินและเวลาไว้แน่นอน<br>
          &nbsp;&nbsp; -ตั๋วแลกเงิน คือ ตั๋วเงินที่บุคคลที่หนึ่ง สั่งให้บุคคลที่ 2 จ่ายเงินให้กับบุคคลที่ 3 โดยมีวันครบกำหนดใช้เงินและจำนวนเงินที่แน่นอน<br>
          &nbsp;&nbsp; -ตั๋วสัญญาใช้เงิน คือ ตั๋วเงินที่บุคคลหนึ่งสัญญาว่าจะใช้เงินแก่บุคคลหนึ่ง ณ วันที่ครบกำหนด โดยระบุจำนวนเงินที่แน่นอน ตั๋วสัญญาใช้เงินอาจจะระบุดอกเบี้ยหรือไม่ระบุก็ได้
      </p>
  </vue-modaltor> -->
  <!-- 4 -->
  <!-- <vue-modaltor :visible="open4" @hide="open4 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; เป็นสิ่งที่เป็นตัวแทนในการแลกเปลี่ยน ซึ่งสามารถใช้ชำระหนี้ได้ตามกฎหมาย ธนบัตรจะใช้ควบคู่ไปกับเหรียญกษาปณ์ แต่โดยทั่วไปแล้วธนบัตรมักใช้สำหรับเงินจำนวนมาก ส่วนเหรียญกษาปณ์ใช้กับเงินจำนวนน้อย หรือเศษสตางค์
      </p>
  </vue-modaltor> -->
  <!-- 5 -->
  <!-- <vue-modaltor :visible="open5" @hide="open5 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; หนึ่งในรูปแบบของสินเชื่อทางการเงินที่ให้แก่บุคคลธรรมดา โดยความนิยมในการใช้งานของบัตรเงินสดนั้นมีอยู่สองรูปแบบ คือ หนึ่ง ใช้กดเงินสด และสอง ใช้ในการซื้อสินค้าเงินผ่อน ซึ่งทั่วไปแล้ว หากไม่มีการใช้บัตรก็จะไม่มีค่าใช้จ่ายในการรักษาสถานภาพของบัตร
      </p>
  </vue-modaltor> -->
  <!-- 6 -->
  <!-- <vue-modaltor :visible="open6" @hide="open6 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ซึ่งเป็นชื่อที่เลียนแบบกับสิ่งมีชีวิตเพราะ โปรแกรมชนิดนี้จะสามารถแพร่กระจายได้เหมือนกับเชื้อไวรัส โดยโปรแกรมนี้สามารถติดต่อจากไฟล์สู่ไฟล์ได้ ไม่ว่าจะเป็นจากในระบบเดียวกันหรือเคลื่อนย้ายข้ามระบบไปที่คอมพิวเตอร์เครื่องอื่นผ่านการฝังตัวเองไปตามโปรแกรมต่างๆ ก็ได้ ซึ่งเมื่อผู้ใช้เปิดใช้งานโปรแกรมไวรัสก็จะทำงาน โดยไวรัสจะสามารถทำลายได้ทั้ง Hardware Software และข้อมูล
      </p>
  </vue-modaltor> -->
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
    name: 'Unit1p2',
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
            db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit1').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
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
