﻿﻿<template>
<div class="container row col s12 m12 l12 center">
  <div class="row">
            <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="active"><a href="#!">4</a></li>
        </ul>
    <div class="col s12 m12 l12 center" style="margin-top:20px;margin-bottom:20px;">
      <h4 style="font-weight:bold;"> ข่าวปลอม ข่าวลวงตรวจสอบได้ง่ายนิดเดียว </h4>
    </div>
    <div class="row col s12 m12 l12 center card light-green accent-1 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="2.2" :centerMode="true" :initialSlide="0" :infiniteScroll="true" style="height:340px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit1-1.4/unit1-1.4.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit1-1.4/unit1-1.4.2.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit1-1.4/unit1-1.4.3.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit1-1.4/unit1-1.4.4.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit1-1.4/unit1-1.4.5.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit1-1.4/unit1-1.4.6.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%204/Unit1-1.4/unit1-1.4.7.png">
            </div>
          </slide>
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text">
                      ตั้งสติ
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text">
                      อย่าอ่านแค่หัวข้อข่าว
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">3.</h5>
                    <p class="flow-text">
                      ดูแหล่งที่มา
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open3=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">4.</h5>
                    <p class="flow-text">
                      ดูรายละเอียดข่าว
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open4=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">5.</h5>
                    <p class="flow-text">
                      หาข้อมูลอื่นๆประกอบ
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open5=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">6.</h5>
                    <p class="flow-text">
                      ถามผู้รู้
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open6=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">7.</h5>
                    <p class="flow-text">
                      โพสต์บอกว่าเป็นข่าวปลอม
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open7=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>

            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C4Unit1MediumRound4P1'}"><a class="waves-effect  light-green darken-1 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C4Unit1MediumRound4P1'}"><a class="waves-effect  light-green darken-1 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C4Unit1MediumRound4P3'}"><a @click="submit" class="waves-effect  light-green darken-1 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C4Unit1MediumRound4P3'}"><a @click="submit" class="waves-effect  light-green darken-1 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
  <!-- 1 -->
 <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; อย่าเพิ่งเชื่อ เมื่อเห็นข่าวหรือได้รับสารจากที่ต่างๆควร ตั้งสติก่อน อย่าเพิ่งเชื่อ ถึงแม้ว่าข่าวจะ ดูน่าเชื่อถือก็ตาม
      </p>
  </vue-modaltor>
  <!-- 2 -->
<vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; บางข่าวก็ชอบพาดหัวชวนให้คนสนใจ ชวนให้คนคลิกเข้าไปอ่าน จึงควรอ่านเนื้อหาข้างในก่อนที่จะตัดสินใจแชร์หรือโพสต์
      </p>
  </vue-modaltor>
  <!-- 3 -->
  <vue-modaltor :visible="open3" @hide="open3 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ว่าข่าวนั้นมันมาจากไหน ใครเป็นคนเขียน เอามาจากเว็บข่าวที่น่าเชื่อถือหรือไม่ ควรตรวจสอบว่าข่าวนี้มีที่มาจากไหน ถ้าไม่ได้มาจากเว็บข่าวโดยตรง ลองเอาไปค้นหาในgoogle หรือเข้าเว็บข่าวเพื่อหาแหล่งข่าวที่เชื่อถือได้
      </p>
  </vue-modaltor>
  <!-- 4 -->
  <vue-modaltor :visible="open4" @hide="open4 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; และองค์ประกอบอื่น ๆ นอกจากแหล่งข่าวแล้ว ควรดูวันเดือนปีของข่าว ภาพ รวมไปถึงคนเขียนข่าว และเนื้อหาอื่น ๆ ในข่าว การสะกดคำ ถ้าในข่าวมีภาพประกอบสามารถใช้วิธีการตรวจสอบรูปภาพจากกูเกิล
      </p>
  </vue-modaltor>
  <!-- 5 -->
  <vue-modaltor :visible="open5" @hide="open5 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ไม่ใช่ว่าเห็นข่าวปุ๊บ ก็กดแชร์ถามคนอื่นก่อนเลย เพราะการแชร์แบบนั้นก็อาจจะยิ่งทำให้คนอื่นเห็นแล้วเข้าใจผิดกันได้นะ
      </p>
  </vue-modaltor>
  <!-- 6 -->
  <vue-modaltor :visible="open6" @hide="open6 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; อาจจะถามไปตามสำนักข่าวต่าง ๆ หรือถามคนที่รู้จริง ผู้เชี่ยวชาญในด้านนั้น ๆ หรือคนที่อยู่ในที่เกิดเหตุ รับรองว่าจะได้ข้อเท็จจริงกลับมาอย่างแน่นอน
      </p>
  </vue-modaltor>
  <!-- 7 -->
  <vue-modaltor :visible="open7" @hide="open7 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; หลังจากที่ตรวจสอบเสร็จ รู้ว่าข่าวนั้นเป็นข่าวเท็จ ควรบอกต่อให้คนอื่นรู้ หรือว่าถ้าแชร์แล้วควรกลับไปลบด้วย
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
            db.collection('UserData').doc('Content').collection('Chapter4').doc('Unit1').collection('Level').doc('Medium').collection('Content').doc(self.userTable).update(item).then(res=>{
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
