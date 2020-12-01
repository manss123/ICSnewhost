﻿<template>
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
      <h5 style="font-weight:bold;"> เคล็ดลับป้องกันมัลแวร์ </h5>
    </div>
    <div class="row col s12 m12 l12 center card red accent-1 black-text" style="margin-top:10px;">
          <hooper :itemsToShow="2.2" :centerMode="true" :initialSlide="0" :infiniteScroll="true" style="height:340px;padding-top:20px;" sync="myCarousel2">
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.1.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.2.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.3.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.4.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.5.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.6.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.7.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.8.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.9.png">
            </div>
          </slide>
          <slide style="margin-top:65px;">
            <div class="col s12 m12 l12">
                <img class="responsive-img col s12 m6 l6 offset-l3" src="https://dlabi.com/project/interactive-computing-science/Materials/Chapter%205/Unit1-1.4/unit1-1.4.10.png">
            </div>
          </slide>
          </hooper>

          <hooper ref="myCarousel2" :itemsToShow="1" :centerMode="false" :infiniteScroll="true" style="height:300px;">
            <slide>
                  <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">1.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      ติดตั้งซอฟต์แวร์ ป้องกันไวรัสและมัลแวร์<br>
                      (Anti-Virus/Malware Software)
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open1=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">2.</h5>
                    <p class="flow-text">
                      ให้ซอฟต์แวร์ป้องกันไวรัส<br>อัปเดตอยู่เสมอ
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open2=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">3.</h5>
                    <p class="flow-text" style="font-size:12px;">
                      เปิดใช้งานกำหนดเวลาให้ซอฟต์แวร์<br>ป้องกันไวรัสสแกนล่วงหน้า
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open3=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">4.</h5>
                    <p class="flow-text">
                      รักษาระบบปฏิบัติการให้เป็นปัจจุบัน
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open4=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">5.</h5>
                    <p class="flow-text">
                      รักษาความปลอดภัยระบบเครือข่าย
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open5=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">6.</h5>
                    <p class="flow-text">
                      คิดก่อนคลิกทุกครั้ง
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open6=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">7.</h5>
                    <p class="flow-text">
                      เก็บข้อมูลส่วนตัวให้ปลอดภัย
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open7=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">8.</h5>
                    <p class="flow-text">
                      อย่าใช้งาน Open Wi-Fi<br>หรือ ไวไฟสาธารณะ
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open8=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">9.</h5>
                    <p class="flow-text">
                      สำรองไฟล์ข้อมูล
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open9=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <slide>
              <div class="col s12 m12 l12 center">
                    <h5 style="margin-top:50px;">10.</h5>
                    <p class="flow-text">
                      ใช้รหัสผ่านที่แข็งแรงไม่ซ้ำกัน
                    </p>
                    <a class="waves-effect grey darken-1 waves-light flow-text btn-small align-center" @click="open10=true">กดเพื่ออ่านเพิ่ม</a>
                  </div>
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
          </hooper>
    </div>
                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C5Unit1EasyRound4P1'}"><a class="waves-effect  red darken-1 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C5Unit1EasyRound4P1'}"><a class="waves-effect  red darken-1 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C5Unit1EasyRound4P3'}"><a @click="submit" class="waves-effect  red darken-1 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s6 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C5Unit1EasyRound4P3'}"><a @click="submit" class="waves-effect  red darken-1 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 
  </div>
  <!-- 1 -->
 <vue-modaltor :visible="open1" @hide="open1 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ขั้นตอนป้องกันนี้สำคัญมากจำเป็นต้องทำเป็นสิ่งแรกเพื่อช่วยให้คอมพิวเตอร์ปลอดภัยจากไวรัส
      </p>
  </vue-modaltor>
  <!-- 2 -->
<vue-modaltor :visible="open2" @hide="open2 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ขั้นตอนต่อมาคือการบำรุงดูแลรักษา แม้ว่าเราใช้ซอฟต์แวร์ป้องกันไวรัสแบบฟรีก็ยังดีกว่าไม่มีอะไรเลย นอกจากนี้ บริษัท Microsoft เองก็เตรียมแพคเกจความปลอดภัยแบบใช้งานได้ “ฟรี” คุณได้สิทธ์ใช้งานฟรีเพียงแค่มี Windows ในเครื่องคอมพิวเตอร์ แต่คุณต้องจ่ายเงินค่าลิขสิทธิ์ Windows ผู้ใช้งานหลายคนไม่เคยทราบว่ามีโปรแกรมนี้อยู่ แต่ทว่าโปรแกรมนี้เป็นการป้องกันที่ดี
      </p>
  </vue-modaltor>
  <!-- 3 -->
  <vue-modaltor :visible="open3" @hide="open3 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ควรตั้งค่าซอฟต์แวร์ให้รันทำงานเป็นประจำ และกำหนดให้สแกนสัปดาห์ละครั้ง และไม่ต้องรอระหว่างสแกนอยู่ มันเป็นเรื่องยากมากที่จะทำงานไปด้วยขณะที่โปรแกรมป้องกันไวรัสกำลังสแกนอยู่ ทางออกที่ดีคือรันโปรแกรมในช่วงเวลากลางคืนเป็นช่วงที่คอมพิวเตอร์ไม่ได้ใช้งาน และควรตรวจสอบให้แน่ใจว่าไม่ได้ปิดเครื่องหรือเข้าสู่โหมดไฮเบอร์เนต (Hibernation mode) โดยอัตโนมัติ
      </p>
  </vue-modaltor>
  <!-- 4 -->
  <vue-modaltor :visible="open4" @hide="open4 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; ไม่ว่าคุณจะใช้ปฏิบัติการ Windows, Mac OS X, Linux หรือระบบอื่น ๆ ให้อัปเดตอยู่เสมอ นักพัฒนาซอฟต์แวร์ระบบปฏิบัติการมักออกแพทช์ด้านความปลอดภัยเพื่อแก้ไขปัญหาและอุดรูรั่วระบบรักษาความปลอดภัยอยู่บ่อยครั้ง แพทช์เหล่านี้จะช่วยให้ระบบของคุณปลอดภัย เช่นเดียวกันช่วยให้ซอฟต์แวร์ป้องกันไวรัสอัปเดตอยู่เสมอ ไวรัสและมัลแวร์ถูกสร้างขึ้นตลอดเวลา ทว่าซอฟต์แวร์สแกนทำงานได้ดีขึ้นอยู่กับฐานข้อมูล ฐานข้อมูลต้องทันสมัยอยู่เสมอเท่าที่จะเป็นไปได้
      </p>
  </vue-modaltor>
  <!-- 5 -->
  <vue-modaltor :visible="open5" @hide="open5 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; คอมพิวเตอร์หลายเครื่องของเราเชื่อมต่อกับไฟล์ เครื่องพิมพ์ หรืออินเทอร์เน็ตผ่านการเชื่อมต่อกับ Wi-Fi ต้องมั่นใจว่ารหัสผ่านที่จำเป็นต้องใช้และรหัสผ่านนั้นมีความแข็งแรง ไม่เคยเผยแพร่เมื่อเชื่อมต่อ Wi-Fi แบบเปิด ให้ใช้การเข้ารหัส WPA หรือ WPA2 ส่วนการเข้ารหัส WEP ไม่แข็งแรงเพียงพอเนื่องจากมันสามารถบายพาส (Bypass) ได้จากผู้เชี่ยวชาญ นอกจากนี้คุณไม่ควรเผยแพร่ SSID (ชื่อเครือข่าย Wi-Fi ของคุณ) คุณยังคงสามารถเข้าถึงจากอุปกรณ์ของคุณได้ คุณจะต้องพิมพ์ SSID และรหัสผ่านด้วยตนเอง หากคุณมีแขกประจำที่ใช้อินเทอร์เน็ตอยู่บ่อย ๆ ให้ระบุ SSID แบบผู้มาเยือนที่ใช้รหัสผ่านอื่น
      </p>
  </vue-modaltor>
  <!-- 6 -->
  <vue-modaltor :visible="open6" @hide="open6 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; หลีกเลี่ยงเว็บไซต์ที่ให้ข้อมูลละเมิดลิขสิทธิ์ อย่าเปิดไฟล์แนบในอีเมลจากบุคคลหรือบริษัทที่คุณไม่รู้จัก อย่าคลิกลิงก์ในอีเมลที่ไม่พึงประสงค์ วางเมาส์ไว้เหนือลิงก์ดูก่อนเสมอ (โดยเฉพาะอย่างยิ่งลิงค์ที่มี URL shortener) ดูก่อนคลิกลิงค์เชื่อมโยง หากคุณจำเป็นต้องดาวน์โหลดไฟล์ทั้งจากอินเทอร์เน็ต, อีเมล, FTP site หรือบริการแชร์ไฟล์ต่าง ฯลฯ ให้สแกนไฟล์ก่อนเรียกใช้งาน ซอฟต์แวร์ป้องกันไวรัสที่ดีนั้นจะสแกนให้โดยอัตโนมัติ แต่ต้องมั่นใจว่าโปรแกรมเปิดใช้งานอยู่
      </p>
  </vue-modaltor>
  <!-- 7 -->
  <vue-modaltor :visible="open7" @hide="open7 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; แฮกเกอร์หลายคนเข้าถึงไฟล์ของคุณโดยไม่ต้องออกแรงมาก แต่โจมตีผ่านทางวิศวกรรมสังคม (social engineering) พวกเขาได้ข้อมูลเพียงพอจนเข้าถึงบัญชีออนไลน์ของคุณและเก็บข้อมูลส่วนตัวได้มากพอ พวกเขาจะจัดการต่อจากบัญชีหนึ่งไปยังอีกบัญชีจนกว่าจะได้ข้อมูลเพียงพอทำให้สามารถเข้าถึงข้อมูลธนาคารหรือขโมยข้อมูลส่วนตัวของคุณได้ทั้งหมด จงรอบคอบเมื่อใช้กระดานสนทนาและโซเชียลมีเดีย ล็อกตั้งค่าความเป็นส่วนตัวทั้งหมดและหลีกเลี่ยงการใช้ชื่อจริงหรือข้อมูลส่วนตัวในกระดานสนทนา
      </p>
  </vue-modaltor>
  <!-- 8 -->
  <vue-modaltor :visible="open8" @hide="open8 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; อย่าใช้งาน Open Wi-Fi เมื่อคุณอยู่ที่ร้านกาแฟในท้องถิ่น ห้องสมุด และโดยเฉพาะอย่างยิ่งที่สนามบิน อย่าใช้งาน Open Wi-Fi (ที่ไม่มีรหัสผ่านและไม่เข้ารหัส)
      </p>
  </vue-modaltor>
  <!-- 9 -->
  <vue-modaltor :visible="open9" @hide="open9 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; สิ่งที่ดีที่สุดที่คุณสามารถทำได้คือ สำรองไฟล์ข้อมูลทั้งหมด ซึ่งมีไฟล์ข้อมูลอย่างน้อย 3 แห่งด้วยกัน ได้แก่ ที่ทำงาน บนอุปกรณ์จัดเก็บข้อมูลที่แยกต่างหาก และนอกสถานที่ เก็บไฟล์ไว้ในคอมพิวเตอร์ของคุณ สำรองข้อมูลไว้ในฮาร์ดไดรฟ์ภายนอก จากนั้นก็สำรองข้อมูลไว้ในสถานที่อื่นเอาไว้ด้วย
      </p>
  </vue-modaltor>
  <!-- 10 -->
  <vue-modaltor :visible="open10" @hide="open10 = false" :bg-overlay="''" :bg-panel ="'white'" :default="'#fff'" :resize-width='{1200:"60%",992:"80%",768:"90%"}'>
      <p>
        <template slot="close-icon">
          You Cand Add Any Icon Svg
        </template>
          &nbsp;&nbsp; อย่าใช้รหัสผ่านเดียวกันโดยเฉพาะอย่างยิ่งกับบัญชีธนาคารของคุณ โดยปกติเราใช้ที่อยู่อีเมลเดียวกันหรือชื่อผู้ใช้เดียวกันทุก ๆ บัญชี ทำให้คนพบเจอและถูกขโมยได้ง่าย ถ้าคุณใช้รหัสผ่านเดียวกันสำหรับทุกสิ่งทุกอย่าง
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
            db.collection('UserData').doc('Content').collection('Chapter5').doc('Unit1').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
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
