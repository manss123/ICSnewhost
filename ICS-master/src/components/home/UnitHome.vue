<template>
  <div class="container" >
    <div class="card-panel blue darken-3 center"><h5 class="center white-text"> รู้เท่าทันดิจิทัลกับ ICS</h5></div>
              <div class="row" v-if="Chapter1Progress==true&&Chapter2Progress==true&&
                    Chapter3Progress==true&&Chapter4Progress==true&&
                    Chapter5Progress==true&&Chapter6Progress==true">
                <div class="col s8 m6 l6 offset-s2 offset-m3 offset-l3">
                  <div class="card light-blue lighten-1" style="margin-top:30px;">
                    <div class="card-content white-text" style="padding-bottom: 4px;">
                      <span class="card-title flow-text center">มาทำแบบทดสอบหลังเรียนกันครับ</span>
                    </div>
                    <div class="card-action col s12 m12 l12 valign-wrapper" style="padding-top: 0px;padding-bottom: 0px;margin-top: -;">
                      <div class="col s12">
                        <a @click="PostTest" style="font-weight:bold;" class="waves-effect waves-light btn-large light-blue darken-1 col s12">Posttest</a>
                      </div>
                      <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="col s6 m3 l3" style="margin-left: 0px;">
                    </div>
                  </div>
                </div>
              </div>
     
              <h4 class="center">เลือกบทเรียน</h4>
              
      
      
    <!-- <div class="card-panel teal lighten-3 left col s12 m5 l5">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align"  v-if="this.Chapter1Level=='Low'||this.Chapter1Level=='Medium'" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div> 
    <div class="teal lighten-3 left col s12 m12 l12 valign-wrapper" style="margin-top:0%;">
                <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><router-link :to="{name: 'chap1Easy'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_1icon.png"
                alt="" class="circle responsive-img col s12 m12 l12"> </router-link></div>
            <div class="col s12 m12 l12"><h5 class="flow-text"> สร้างพื้นที่ปลอดภัยด้วย Safety Wall </h5></div>
    </div>
    </div> -->

    <!-- <div class="card-panel teal lighten-3 left col s12 m5 l5" v-if="this.Chapter1Level=='Low'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div> 
    <div class="teal lighten-3 left col s12 m12 l12 valign-wrapper" style="margin-top:0%;">
                <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><router-link :to="{name: 'chap1Easy'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_1icon.png"
                alt="" class="circle responsive-img col s12 m12 l12"> </router-link></div>
            <div class="col s12 m12 l12"><h5 class="flow-text"> สร้างพื้นที่ปลอดภัยด้วย Safety Wall </h5></div>
    </div>
    </div> -->
    <div class="row col s12 m6 l6">
      <router-link :to="{name: 'Chapter1'}">
        <div class="card-panel teal lighten-3 col s12 m6 l5">
        <div class="card-panel red col s3 m3 l3 flow-text white-text center-align" v-if="this.C1S=='Low'||this.C1S=='Medium'" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div> 
        <div class="teal lighten-3 left col s12 m12 l12 valign-wrapper" style="margin-top:0%;">
                    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_1icon.png"
                    alt="" class="circle responsive-img col s12 m12 l12"></div>
                <div class="col s12 m12 l12"><h5 class="flow-text black-text center" style="font-weight:bold;"> สร้างพื้นที่ปลอดภัยด้วย Safety Wall </h5></div>
        </div>
        </div>
      </router-link>

      <router-link :to="{name: 'Chapter2'}">
          <div class="card-panel pink lighten-3 col s12 m5 l5 offset-l2">
          <div class="card-panel red col s3 m3 l3 flow-text white-text center-align" v-if="this.C2S=='Low'||this.C2S=='Medium'" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
          <div class="pink lighten-3 right col s12 m12 l12 valign-wrapper">    
                    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_2icon.png"
                    alt="" class="circle responsive-img col s12 m12 l12"></div>
                  <div class="col s12 m12 l12"><h5 class="flow-text black-text center" style="font-weight:bold;"> ฝึกความคิดและจิตใจ<br>ไปกับโมโม่จัง </h5></div>
          </div>
          </div>
      </router-link>
    </div>

    <div class="row col s12 m6 l6">
      <router-link :to="{name: 'Chapter3'}">
          <div class="card-panel light-blue lighten-3 col s12 m5 l5">
          <div class="card-panel red col s3 m3 l3 flow-text white-text center-align" v-if="this.C3S=='Low'||this.C3S=='Medium'" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
          <div class="light-blue lighten-3 right col s12 m12 l12 valign-wrapper">
                    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_3.png"
                    alt="" class="circle responsive-img col s12 m12 l12"></div>
                    <div class="col s12 m12 l12"><h5 class="flow-text black-text center" style="font-weight:bold;"> ภัยจากมือที่สาม </h5></div>
          </div>
          </div>
      </router-link>

      <router-link :to="{name: 'Chapter4'}">
          <div class="card-panel light-green lighten-3 col s12 m5 l5 offset-l2">
          <div class="card-panel red col s3 m3 l3 flow-text white-text center-align" v-if="this.C4S=='Low'||this.C4S=='Medium'" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
          <div class="light-green lighten-3 left col s12 m12 l12 valign-wrapper">
                    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit4icon.png"
                    alt="" class="circle responsive-img col s11 m12 l12"></div>
                    <div class="col s12 m12 l12" style="padding:0px;"><h5 class="flow-text black-text center" style="font-weight:bold;"> ถูกหลอกโดยไม่รู้ตัว </h5></div>
          </div>
          </div>
      </router-link>
    </div>

    <div class="row col s12 m6 l6" style="display:inline;">
      <router-link :to="{name: 'Chapter5'}">
          <div class="card-panel red lighten-3 col s12 m5 l5">
          <div class="card-panel red col s3 m3 l3 flow-text white-text center-align" v-if="this.C5S=='Low'||this.C5S=='Medium'" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
          <div class="red lighten-3 left col s12 m12 l12 valign-wrapper">
                    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit5icon.png"
                    alt="" class="circle responsive-img col s12 m12 l12"></div>
                    <div class="col s12 m12 l12"><h5 class="flow-text black-text center" style="font-weight:bold;"> เจ้ามัลแวร์จอมล้วงข้อมูล </h5></div>
          </div>
          </div>
      </router-link>

      <router-link :to="{name: 'Chapter6'}">
          <div class="card-panel yellow lighten-3 col s12 m5 l5  offset-l2">
          <div class="card-panel red col s3 m3 l3 flow-text white-text center-align" v-if="this.C6S=='Low'||this.C6S=='Medium'" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
          <div class="yellow lighten-3 right col s12 m12 l12 valign-wrapper">
                    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit6icon.png"
                    alt="" class="circle responsive-img col s12 m12 l12"></div>
                    <div class="col s12 m12 l12"><h5 class="flow-text black-text center" style="font-weight:bold;"> ดีจังตังค์อยู่ครบ </h5></div>
          </div>
          </div>
      </router-link>
    </div>
    

    <!-- <div class="card-panel teal accent-3 right col s12 m5 l5" v-if="this.Chapter2Level=='Low'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class=" teal accent-3 right col s12 m12 l12 valign-wrapper">    
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><router-link :to="{name: 'chap2Easy'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_2icon.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
            <div class="col s12 m12 l12"><h5 class="flow-text"> ฝึกความคิดและจิตใจไปกับโมโม่จัง </h5></div>
    </div>
    </div>

    <div class="card-panel teal accent-3 right col s12 m5 l5"  v-if="this.Chapter2Level=='Medium'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class="teal accent-3 right col s12 m12 l12 valign-wrapper">
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><router-link :to="{name: 'chap2Medium'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_2icon.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
              <div class="col s12 m12 l12"><h5 class="flow-text"> ฝึกความคิดและจิตใจไปกับโมโม่จัง </h5></div>
    </div>
    </div> -->

    <!-- <div class="card-panel light-blue lighten-3 right col s12 m5 l5"  v-if="this.Chapter3Level=='Low'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class="light-blue lighten-3 right col s12 m12 l12 valign-wrapper">
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><router-link :to="{name: 'chap3Easy'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_3.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
              <div class="col s12 m12 l12"><h5 class="flow-text"> ภัยจากมือที่สาม </h5></div>
    </div>
    </div>


    <div class="card-panel light-blue lighten-3 right col s12 m5 l5"  v-if="this.Chapter3Level=='Medium'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class="light-blue lighten-3 left col s12 m12 l12 valign-wrapper">
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap3Medium'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_3.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
              <div class="col s12 m12 l12"><h5 class="flow-text"> ภัยจากมือที่สาม </h5></div>
    </div>
    </div>


    <div class="card-panel light-green lighten-3 left col s12 m5 l5" v-if="this.Chapter4Level=='Low'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class="light-green lighten-3 left col s12 m12 l12 valign-wrapper">
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap4Easy'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit4icon.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
              <div class="col s12 m12 l12"><h5 class="flow-text"> ถูกหลอกโดยไม่รู้ตัว </h5></div>
    </div>
    </div>


    <div class="card-panel light-green lighten-3 left col s12 m5 l5" v-if="this.Chapter4Level=='Medium'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class="light-green lighten-3 left col s12 m12 l12 valign-wrapper">
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap4Medium'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit4icon.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
              <div class="col s12 m12 l12"><h5 class="flow-text"> ถูกหลอกโดยไม่รู้ตัว </h5></div>
    </div>
    </div>

    
    <div class="card-panel red lighten-3 right col s12 m5 l5" v-if="this.Chapter5Level=='Low'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class="red lighten-3 left col s12 m12 l12 valign-wrapper">
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap5Easy'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit5icon.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
              <div class="col s12 m12 l12"><h5 style="padding-bottom:45px;"> เจ้ามัลแวร์จอมล้วงข้อมูล </h5></div>
    </div>
    </div>


    
    <div class="card-panel red lighten-3 right col s12 m5 l5" v-if="this.Chapter5Level=='Medium'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class="red lighten-3 left col s12 m12 l12 valign-wrapper">
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap5Medium'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit5icon.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
              <div class="col s12 m12 l12" style="padding-bottom:45px;"><h5 class="flow-text"> เจ้ามัลแวร์จอมล้วงข้อมูล </h5></div>
    </div>
    </div>


    <div class="card-panel yellow lighten-3 left col s12 m5 l5" v-if="this.Chapter6Level=='Low'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class="yellow lighten-3 right col s12 m12 l12 valign-wrapper">
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;" ><router-link :to="{name: 'chap6Easy'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit6icon.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
              <div class="col s12 m12 l12"><h5 class="flow-text"> ดีจังตังค์อยู่ครบ </h5></div>
    </div>
    </div>
    

    <div class="card-panel yellow lighten-3 row left col s12 m5 l5"  v-if="this.Chapter6Level=='Medium'">
    <div class="card-panel red col s3 m3 l3 right flow-text white-text center-align" style="margin-top:2%;margin-bottom:0%;padding:0%;"><h6> แนะนำ </h6></div>
    <div class="yellow lighten-3 right col s12 m12 l12 valign-wrapper">
              <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap6Medium'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit6icon.png"
              alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
              <div class="col s12 m12 l12"><h5 class="flow-text"> ดีจังตังค์อยู่ครบ </h5></div>
    </div>
    </div> -->


    

   <div class="row">

     <!-- <div class="card-panel red lighten-2 left col s12 m5 l5 valign-wrapper" v-if="this.Chapter1Level=='Good'"> 
      <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap1Hard'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_1icon.png"
      alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
      <div class="col s12 m12 l12"><h5 class="flow-text"> สร้างพื้นที่ปลอดภัยด้วย Safety Wall </h5></div>
    </div>

    <div class="card-panel teal accent-3 right col s12 m5 l5 valign-wrapper" v-if="this.Chapter2Level=='Good'">
    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap2Hard'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_2icon.png"
    alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
    <div class="col s12 m12 l12"><h5 class="flow-text"> ฝึกความคิดและจิตใจไปกับโมโม่จัง </h5></div>
    </div>

    <div class="card-panel light-blue lighten-3 left col s12 m5 l5 valign-wrapper" v-if="this.Chapter3Level=='Good'">
    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap3Hard'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit_3.png"
    alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
    <div class="col s12 m12 l12"><h5 class="flow-text"> ภัยจากมือที่สาม </h5></div>
    </div>

    <div class="card-panel light-green lighten-3 left col s12 m5 l5 valign-wrapper" v-if="this.Chapter4Level=='Good'">
    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap4Hard'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit4icon.png"
    alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
    <div class="col s12 m12 l12"><h5 class="flow-text"> ถูกหลอกโดยไม่รู้ตัว </h5></div>
    </div>

    <div class="card-panel red lighten-3 right col s12 m5 l5 valign-wrapper" v-if="this.Chapter5Level=='Good'">
    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap5Hard'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit5icon.png"
    alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
    <div class="col s12 m12 l12"><h5 class="flow-text"> เจ้ามัลแวร์จอมล้วงข้อมูล </h5></div>
    </div>

    <div class="card-panel red lighten-3 right col s12 m5 l5 valign-wrapper" v-if="this.Chapter6Level=='Good'">
    <div class="col s12 m12 l12 center" style="margin-top:10px;margin-bottom:10px;"><router-link :to="{name: 'chap6Hard'}"><img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit6icon.png"
    alt="" class="circle responsive-img col s12 m12 l12"></router-link></div>
    <div class="col s12 m12 l12"><h5 class="flow-text"> ดีจังตังค์อยู่ครบ </h5></div>
    </div>
     -->
   </div>
   <div class="row">
    
  </div>
  


      </div>
</template>



<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'UnitHome',
    data(){
        return{
          userTable: null,
          email: null,
          Chapter1Progress: null,
          Chapter2Progress: null,
          Chapter3Progress: null,
          Chapter4Progress: null,
          Chapter5Progress: null,
          Chapter6Progress: null,
          C1S: null,
          C2S: null,
          C3S: null,
          C4S: null,
          C5S: null,
          C6S: null,


        }
    },
      created(){
      this.checkUser();
    },

    mounted(){
      //  let self = this
      //   let users= db.collection("users").orderBy("email")
      //         .limit(25);
      //         var getOptions = {
      //         source: 'server'
      //     };
      //     firebase.auth().onAuthStateChanged((user)=>{
      //      if(user){
      //          user.email
      //          let query = users.where("email","==",user.email)

      //         return users.get().then(function (documentSnapshots) {
      //           // Get the last visible document
      //           var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
      //           self.userTable = lastVisible.id
              
      //         })
      //      }else{
      //          this.user = null
      //          console.log(this.user)
      //      }
      //  })
    },



    methods:{
      PostTest:function(){
        this.$router.push({name:'PostTest'})
        var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
             const item={
                PostTestIntro:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                              },
                        };
                db.collection('UserData').doc('PreTest').collection('PostTestScore').doc(self.userTable).set(item)
      },
       checkUser:function(){
        let self = this
              var getOptions = {
                source: 'server'
              };
          firebase.auth().onAuthStateChanged((user)=>{
            self.userTable = user.email
            self.GetEmail(user.email)
       })
      },
      GetEmail:function(userTable){  
            this.email = userTable
            let self = this
            
            this.Email = userTable;
            self.PostTestCheck(userTable);
            self.StatusCheck(userTable);
        },

        StatusCheck:function(userTable){
            let self = this;
            var getOptions={source:'server'};
            let C1Ref = db.collection('UserData').doc('Status').collection('Chapter1').doc(userTable)
            C1Ref.get(getOptions).then(function(doc){
              self.C1S = doc.data().Unit1Status;
            })
            let C2Ref = db.collection('UserData').doc('Status').collection('Chapter2').doc(userTable)
            C2Ref.get(getOptions).then(function(doc){
              self.C2S = doc.data().Unit1Status;
            })
            let C3Ref = db.collection('UserData').doc('Status').collection('Chapter3').doc(userTable)
            C3Ref.get(getOptions).then(function(doc){
              self.C3S = doc.data().Unit1Status;
            })
            let C4Ref = db.collection('UserData').doc('Status').collection('Chapter4').doc(userTable)
            C4Ref.get(getOptions).then(function(doc){
              self.C4S = doc.data().Unit1Status;
            })
            let C5Ref = db.collection('UserData').doc('Status').collection('Chapter5').doc(userTable)
            C5Ref.get(getOptions).then(function(doc){
              self.C5S = doc.data().Unit1Status;
            })
            let C6Ref = db.collection('UserData').doc('Status').collection('Chapter6').doc(userTable)
            C6Ref.get(getOptions).then(function(doc){
              self.C6S = doc.data().Unit1Status;
            })

        },

        PostTestCheck:function(userTable){
          let self = this
          var getOptions ={source:'server'};
          let Chapter1StatusRef = db.collection('UserData').doc('Progress').collection('Chapter1').doc(userTable)
          let Chapter2StatusRef = db.collection('UserData').doc('Progress').collection('Chapter2').doc(userTable)
          let Chapter3StatusRef = db.collection('UserData').doc('Progress').collection('Chapter3').doc(userTable)
          let Chapter4StatusRef = db.collection('UserData').doc('Progress').collection('Chapter4').doc(userTable)
          let Chapter5StatusRef = db.collection('UserData').doc('Progress').collection('Chapter5').doc(userTable)
          let Chapter6StatusRef = db.collection('UserData').doc('Progress').collection('Chapter6').doc(userTable)
          Chapter1StatusRef.get(getOptions).then(function(doc){
            if(doc.data().Unit1Status==true&&doc.data().Unit2Status==true&&doc.data().Unit3Status==true){
              self.Chapter1Progress = true;

              Chapter2StatusRef.get(getOptions).then(function(doc){
                if(doc.data().Unit1Status==true&&doc.data().Unit2Status==true&&doc.data().Unit3Status==true){
                  self.Chapter2Progress = true;
                  
                  Chapter3StatusRef.get(getOptions).then(function(doc){
                    if(doc.data().Unit1Status==true&&doc.data().Unit2Status==true&&doc.data().Unit3Status==true){
                      self.Chapter3Progress = true;

                      Chapter4StatusRef.get(getOptions).then(function(doc){
                        if(doc.data().Unit1Status==true&&doc.data().Unit2Status==true&&doc.data().Unit3Status==true){
                          self.Chapter4Progress = true;

                          Chapter5StatusRef.get(getOptions).then(function(doc){
                            if(doc.data().Unit1Status==true&&doc.data().Unit2Status==true&&doc.data().Unit3Status==true){
                              self.Chapter5Progress = true;
                              
                              Chapter6StatusRef.get(getOptions).then(function(doc){
                                if(doc.data().Unit1Status==true&&doc.data().Unit2Status==true&&doc.data().Unit3Status==true){
                                  self.Chapter6Progress = true;
                                  
                                }
                              })
                            }
                          })
                          
                        }
                      })
                    }
                  })
                  
                }
              })
            }
          })






          
        },

    },
}
</script>



<style>
a.btn-large{
  font-family: 'Pridi', serif;
  line-height:50px;
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
</style>
