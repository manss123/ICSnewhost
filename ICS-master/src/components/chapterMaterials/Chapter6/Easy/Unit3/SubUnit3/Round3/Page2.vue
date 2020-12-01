﻿<template>
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
      <h4 style="font-weight:bold;"> ข้อตกลงและเงื่อนไขในการใช้เว็บ Lazada </h4>
    </div>
    <div class="row col s12 m12 l12 center card yellow accent-1 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="2.2" :centerMode="true" :initialSlide="0" :infiniteScroll="true" style="height:340px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter6/unit3-3.3/unit3-3.3.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter6/unit3-3.3/unit3-3.3.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter6/unit3-3.3/unit3-3.3.2.png">
            </div>
          </slide>
          <!-- <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Unit3-3.3%20pw%20Setting/Unit3-3.3.2.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Unit3-3.3%20pw%20Setting/Unit3-3.3.2.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Unit3-3.3%20pw%20Setting/Unit3-3.3.2.png">
            </div>
          </slide> -->
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text">
                      ข้อตกลง
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text">
                      เลือกร้านค้าที่มี<br>เสียงตอบรับในทางที่ดี
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">3.</h5>
                    <p class="flow-text">
                      เงื่อนไขเพิ่มเติม
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open3=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <!-- <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">4.</h5>
                    <p class="flow-text">
                      ตรวจสอบการตอบคำถามของผู้ขาย
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open4=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">5.</h5>
                    <p class="flow-text">
                      ดูเงื่อนไขการรับประกันสินค้า
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open5=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">6.</h5>
                    <p class="flow-text">
                      สินค้าที่สนใจจะซื้อไม่ควร<br>เป็นสินค้าที่ผิดกฎหมาย
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open6=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide> -->
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C6Unit3EasyRound3P1'}"><a class="waves-effect  yellow darken-2 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C6Unit3EasyRound3P1'}"><a class="waves-effect  yellow darken-2 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C6Unit3EasyRound3P3'}"><a @click="submit" class="waves-effect  yellow darken-2 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C6Unit3EasyRound3P3'}"><a @click="submit" class="waves-effect  yellow darken-2 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
  <!-- 1 -->
 <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; กิจกรรมที่ต้องห้าม: <br>
          ท่านตกลงและให้คำมั่นที่จะไม่: <br>
      </p>
      <p>
        (ก)ปลอมเป็นบุคคลหรือหน่วยงานใดๆหรือระบุถ้อยคำอันเป็นเท็จหรือแสดงตนโดยหลอกลวงด้วยประการอื่นใดในความเกี่ยวข้องสัมพันธ์กับบุคคลหรือหน่วยงานใดๆ เช่น สั่งสินค้า แล้วส่งไปที่ชื่อผู้รับคนอื่น โดยที่เจ้าตัวไม่รู้เห็นเป็นต้น
      </p>
      <p>(ข)ใช้แพลตฟอร์มหรือบริการเพื่อวัตถุประสงค์ที่ไม่ชอบด้วยกฎหมาย เช่น ใช้หน้าร้านบังหน้า แต่ขาย แผ่นเกมส์เถื่อน</p>
      <p>
         (ค)พยายามจะเข้าใช้โดยไม่ได้รับอนุญาตหรือทำการรบกวนหรือทำให้ระบบคอมพิวเตอร์หรือเครือข่ายอื่นที่เชื่อมต่อกับแพลตฟอร์มหรือบริการขัดข้อง เช่นแฮกระบบของผู้ใช้ คนอื่น<br>
      </p>
      <p>(ง)โพสต์ ส่งเสริม หรือส่งเอกสารข้อมูลต้องห้ามใดๆผ่านทางแพลตฟอร์มหรือบริการ เช่น ข้อมูลปลอม ว่ามาจากรีวิว ของลูกค้า</p>
  </vue-modaltor>
  <!-- 2 -->
<vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; (จ)รบกวนการใช้งานและการใช้ประโยชน์จากแพลตฟอร์มหรือบริการของผู้อื่น เช่น เจาะระบบ ทำให้ระบบขัดข้อง<br>
          &nbsp;&nbsp; (ฉ)ใช้หรืออัพโหลด ในทางใดทางหนึ่ง ซึ่งซอฟต์แวร์หรือเอกสารข้อมูลใดๆ ที่มี หรือที่ท่านมีเหตุให้สงสัยว่ามีไวรัสส่วนประกอบที่ทำให้เสียหายรหัสที่เป็นอันตราย หรือส่วนประกอบที่ทำอันตรายซึ่งอาจจะทำให้ข้อมูลของแพลตฟอร์มเสียหายหรือผิดพลาดได้หรือทำให้เสียหายหรือรบกวนการทำงานของคอมพิวเตอร์หรืออุปกรณ์มือถือของลูกค้ารายอื่นหรือของแพลตฟอร์มหรือบริการได้และ เช่น ปลอมเป็นพ่อค้า/แม่ค้า แล้วแอบแฝงโดยการใส่ไวรัสไว้ในภาพโปรโมทสินค้า<br>
          &nbsp;&nbsp; (ช)ใช้แพลตฟอร์มหรือบริการนอกเหนือจากที่สอดคล้องกับนโยบายการใช้งานที่เป็นที่ยอมรับของเครือข่ายที่เชื่อมต่อใดๆ มาตรฐานอินเทอร์เน็ตใด ๆ ที่เกี่ยวข้อง และกฎหมายอื่นใดที่เกี่ยวข้อง
      </p>
  </vue-modaltor>
  <!-- 3 -->
  <vue-modaltor :visible="open3" @hide="open3 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; นอกเหนือจากเงื่อนไขในการใช้บริการนี้การใช้งานเอกสารข้อมูลและบริการในด้านหนึ่งด้านใดโดยเฉพาะเอกสารข้อมูลฉบับที่ละเอียดขึ้นหรือได้รับการปรับปรุงที่เสนอโดยเราหรือโดยผู้รับเหมาช่วงที่เรากำหนดอาจจะอยู่ภายใต้บังคับเงื่อนไขและข้อกำหนดเพิ่มเติมซึ่งจะใช้บังคับโดยมีผลสมบูรณ์ทุกประการ
      </p>
  </vue-modaltor>
  <!-- 4 -->
  <!-- <vue-modaltor :visible="open4" @hide="open4 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; สามารถตรวจสอบได้จากการตอบคำถามในกระทู้ (Webboard) ว่าผู้ขายหมั่นตอบคำถามของลูกค้าหรือไม่ มีการตอบคำถามอย่างไร และเอาใจใส่ลูกค้าหรือไม่ หากในกระทู้มีลูกค้าเข้ามาคุยเป็นจำนวนมาก แล้วผู้ขายมีการให้ความใส่ใจในการตอบคำถามของลูกค้าที่ดี ผู้บริโภคก็สามารถมั่นใจได้ในระดับหนึ่งว่าปลอดภัย
      </p>
  </vue-modaltor> -->
  <!-- 5 -->
  <!-- <vue-modaltor :visible="open5" @hide="open5 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ดูเงื่อนไขการรับประกันสินค้าหรือบริการหลังการขายเนื่องจากการซื้อสินค้าผ่านทางเว็บไซต์ หากสินค้ามีปัญหาไม่ว่าจะเป็นการส่งที่ผิดพลาดหรือสินค้าไม่ได้มาตรฐาน ทางร้านจะมีการรับประกันหรือสามารถเปลี่ยนหรือคืนสินค้าได้หรือไม่ ระยะเวลาในการรับประกันมีมากน้อยเพียงใด หากทางผู้ขายไม่ได้ระบุไว้ ผู้บริโภคก็ควรถามให้เข้าใจ และชัดเจนก่อนการตัดสินใจซื้อ ซึ่งในทางที่ดีควรสอบถามผ่านทาง เว็บบอร์ดหรืออีเมล์ เพื่อจะได้มีหลักฐานที่เป็นลายลักษณ์อักษร และไม่ควรตกลงซื้อขายกันทางโทรศัพท์
      </p>
  </vue-modaltor> -->
  <!-- 6 -->
  <!-- <vue-modaltor :visible="open6" @hide="open6 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; สินค้าที่สนใจจะซื้อไม่ควรเป็นสินค้าที่ผิดกฎหมาย เช่น ซีดีเถื่อน สินค้าปลอม สินค้าผิดกฎหมาย หรือสินค้าที่มีราคาสูงมากๆ ถ้าไม่ใช่สินค้าพวกนี้ก็ไม่ต้องกังวลใจมากมาย เพราะปัญหาส่วนใหญ่จะเกิดกับสินค้าประเภทนี้
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
            db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit3').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
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
