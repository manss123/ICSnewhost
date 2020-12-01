<template>
<div class="signup container col s12 m12 l12" style="margin-top: 0px;">
        <form @submit.prevent="signup" id="MyForm1" name="MyForm1" style="margin:auto;display:inline-block;">
            <div class="content" style="width: 340px;margin:auto;display:inline-block;">
                <h5 class="center deep-blue-text">สมัครสมาชิก</h5>
                <div>
                        <div class="input-field" style="display:inline-block;width: 150px;">
                            <input type="text" name="firstname" id="firstname" style="width: 120px;" v-model="firstname">
                            <label for="firstname" style="font-family: Century Gothic;color: #003762;font-size: 18px;margin-left: 15px;">ชื่อ</label>
                        </div>
                        <div class="input-field" style="display:inline-block;width: 150px;">
                                <input type="text" name="lastname" id="lastname" style="margin-left: 20px;width: 120px;" v-model="lastname">
                                <label for="lastname" style="font-family: Century Gothic;color: #003762;font-size: 18px;margin-left: 20px;">นามสกุล</label>
                        </div>
                </div>    
                <div class="col s6 m6 l6">
                        <label class="left flow-text" for="firstname" style="font-family: Century Gothic;
                        color: #003762;font-size: 14px;font-weight:bold;">วันเกิด</label>
                        <div class="left" style="width:90px;display:inline-block">
                            <!-- <v-date-picker :mode='Datemode' v-model='selectedDate'></v-date-picker> -->
                            <datepicker v-model='selectedDate' :language="th" style="margin:0px;"> </datepicker>
                        </div>
                        <div class="cc-selector align-right" id="GenderSelect" style="width:150px;display:inline-block;margin-left: 50px;">
                            <label class="left flow-text" for="firstname" style="font-family: Century Gothic;
                            color: #003762;font-size: 14px;font-weight:bold;">เพศ</label>
                            <input id="boyIcon" type="radio" name="Icon" value="Male" />
                            <label class="drinkcard-cc boyIcon" for="boyIcon"></label>
                            <input id="girlIcon" type="radio" name="Icon" value="Female" />
                            <label class="drinkcard-cc girlIcon" for="girlIcon"></label>
                        </div>
                        
                </div>
                <div>
                 <label class="left" style="width:60;font-family: Century Gothic;color: #003762;font-size: 14px;font-weight:bold;">ระดับการศึกษา</label>
                        <select class="browser-default" style="margin-left: 20px;width: 300px;" id="level" name="level">
                            <option value="0" disabled selected>เลือกชั้นเรียน</option>
                            <option value="1">มัธยมศึกษาปีที่ 1</option>
                            <option value="2">มัธยมศึกษาปีที่ 2</option>
                            <option value="3">มัธยมศึกษาปีที่ 3</option>
                        </select>
                </div>
                <div>
                 <label class="left" style="width:60;font-family: Century Gothic;color: #003762;font-size: 14px;font-weight:bold;">จังหวัด</label>
                        <select v-model="province" class="browser-default" style="margin-left: 20px;width: 300px;" id="province" name="provice">
                            <option value="0" disabled selected>เลือกจังหวัด</option>
                            <option value="กระบี่">กระบี่   </option>
                            <option value="กรุงเทพมหานคร">กรุงเทพมหานคร   </option>
                            <option value="กาญจนบุรี">กาญจนบุรี   </option>
                            <option value="กาฬสินธุ์">กาฬสินธุ์   </option>
                            <option value="กำแพงเพชร">กำแพงเพชร   </option>
                            <option value="ขอนแก่น">ขอนแก่น   </option>
                            <option value="จันทบุรี">จันทบุรี   </option>
                            <option value="ฉะเชิงเทรา">ฉะเชิงเทรา   </option>
                            <option value="ชลบุรี">ชลบุรี   </option>
                            <option value="ชัยนาท">ชัยนาท   </option>
                            <option value="ชัยภูมิ">ชัยภูมิ   </option>
                            <option value="ชุมพร">ชุมพร   </option>
                            <option value="ตรัง ">ตรัง   </option>
                            <option value="ตราด ">ตราด   </option>
                            <option value="ตาก">ตาก   </option>
                            <option value="นครนายก">นครนายก   </option>
                            <option value="นครปฐม">นครปฐม   </option>
                            <option value="นครพนม ">นครพนม   </option>
                            <option value="นครราชสีมา">นครราชสีมา   </option>
                            <option value="นครศรีธรรมราช ">นครศรีธรรมราช   </option>
                            <option value="นครสวรรค์ ">นครสวรรค์   </option>
                            <option value="นนทบุรี">นนทบุรี   </option>
                            <option value="นราธิวาส">นราธิวาส   </option>
                            <option value="น่าน">น่าน   </option>
                            <option value="บึงกาฬ">บึงกาฬ</option>
                            <option value="บุรีรัมย์">บุรีรัมย์   </option>
                            <option value="ปทุมธานี">ปทุมธานี   </option>
                            <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์   </option>
                            <option value="ปราจีนบุรี">ปราจีนบุรี   </option>
                            <option value="ปัตตานี">ปัตตานี   </option>
                            <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา   </option>
                            <option value="พะเยา">พะเยา   </option>
                            <option value="พังงา">พังงา   </option>
                            <option value="พัทลุง">พัทลุง   </option>
                            <option value="พิจิตร">พิจิตร   </option>
                            <option value="พิษณุโลก">พิษณุโลก   </option>
                            <option value="ภูเก็ต">ภูเก็ต   </option>
                            <option value="มหาสารคาม">มหาสารคาม   </option>
                            <option value="มุกดาหาร">มุกดาหาร   </option>
                            <option value="ยะลา">ยะลา   </option>
                            <option value="ยโสธร">ยโสธร   </option>
                            <option value="ร้อยเอ็ด">ร้อยเอ็ด   </option>
                            <option value="ระนอง">ระนอง   </option>
                            <option value="ระยอง">ระยอง   </option>
                            <option value="ราชบุรี">ราชบุรี   </option>
                            <option value="ลพบุรี">ลพบุรี   </option>
                            <option value="ลำปาง">ลำปาง   </option>
                            <option value="ลำพูน">ลำพูน   </option>
                            <option value="ศรีสะเกษ">ศรีสะเกษ   </option>
                            <option value="สกลนคร">สกลนคร   </option>
                            <option value="สงขลา">สงขลา   </option>
                            <option value="สตูล">สตูล   </option>
                            <option value="สมุทรปราการ">สมุทรปราการ   </option>
                            <option value="สมุทรสงคราม">สมุทรสงคราม   </option>
                            <option value="สมุทรสาคร">สมุทรสาคร   </option>
                            <option value="สระบุรี">สระบุรี</option>
                            <option value="สระแก้ว">สระแก้ว   </option>
                            <option value="สิงห์บุรี">สิงห์บุรี   </option>
                            <option value="สุพรรณบุรี">สุพรรณบุรี   </option>
                            <option value="สุราษฎร์ธานี">สุราษฎร์ธานี   </option>
                            <option value="สุรินทร์">สุรินทร์   </option>
                            <option value="สุโขทัย">สุโขทัย   </option>
                            <option value="หนองคาย">หนองคาย   </option>
                            <option value="หนองบัวลำภู">หนองบัวลำภู   </option>
                            <option value="อ่างทอง">อ่างทอง   </option>
                            <option value="อำนาจเจริญ">อำนาจเจริญ   </option>
                            <option value="อุดรธานี">อุดรธานี   </option>
                            <option value="อุตรดิตถ์">อุตรดิตถ์   </option>
                            <option value="อุทัยธานี">อุทัยธานี   </option>
                            <option value="อุบลราชธานี">อุบลราชธานี   </option>
                            <option value="เชียงราย">เชียงราย   </option>
                            <option value="เชียงใหม่">เชียงใหม่   </option>
                            <option value="เพชรบุรี">เพชรบุรี   </option>
                            <option value="เพชรบูรณ์">เพชรบูรณ์   </option>
                            <option value="เลย">เลย   </option>
                            <option value="แพร่">แพร่   </option>
                            <option value="แม่ฮ่องสอน">แม่ฮ่องสอน   </option>
                        </select>

                </div>
                <!-- <div>
                        <label class="left" style="width:60;">เพศ</label>
                        <br>
                        <select class="browser-default" style="margin-left: 20px;width: 300px;" id="gender">
                            <option value="0" disabled selected>เลือกเพศ</option>
                            <option value="1">เพศชาย</option>
                            <option value="2">เพศหญิง</option>
                        </select>
                </div> -->
                  <div class="input-field">
                     <i class="material-icons prefix">email</i>
                    <input type="email" name="email" id="email" style="margin-left: 40px;width: 300px;" v-model="email">
                    <label for="email" style="font-family: Century Gothic;color: #003762;font-size: 18px;margin-left: 40px;">อีเมล</label>
                 </div>
                 <!-- <div class="input-field">
                        <i class="material-icons prefix">account_circle</i>
                        <input type="text" name="username" id="username" style="margin-left: 40px;width: 300px;display: inline-block;" v-model="username">
                        <label for="name" style="font-family: Century Gothic;color: #003762;font-size: 18px;margin-left: 40px;">ชื่อผู้ใช้</label>
                 </div> -->
                 <div class="input-field">
                        <i class="material-icons prefix">lock</i>
                        <input type="password" name="password" id="password" style="margin-left: 40px;width: 300px;" v-model="password">
                        <label for="password" style="font-family: Century Gothic;color: #003762;font-size: 18px;margin-left: 40px;">รหัสผ่าน</label>
                </div>
                
                
                
                
                 <!-- <div class="input-field col s12" style="margin-left: 20px;width: 300px;" id="level">
                        <select name="level">
                          <option  value="0" selected>Level</option>
                          <option  value="1">M.1</option>
                          <option  value="2">M.2</option>
                          <option  value="3">M.3</option>
                        </select>
                        <label style="font-family: Century Gothic;color: #003762;font-size: 18px;left: 0px;">Level</label>
                 </div>
                 <div class="input-field col s12" style="margin-left: 20px;width: 300px;" id="gender">
                        <select name="gender">
                          <option value="0" selected>Gender</option>
                          <option value="1">Male</option>
                          <option value="2">Female</option>
                          <option value="3">Other</option>
                        </select>
                        <label style="font-family: Century Gothic;color: #003762;font-size: 18px;left: 0px;">Gender</label>
                 </div> -->
            </div>
            <div><p class="red-text center" id="error" v-if="feedback">{{feedback}}</p></div>
            <input class="btn blue" type="submit" style="display: inline-block;margin: auto;display: block" value="Submit">
        </form>
        </div>
</template>

<script>
import slugify from 'slugify'
import db from '@/firebase/init'
import firebase from 'firebase'
import Vue from 'Vue'
import VCalendar from 'v-calendar'
import Datepicker from 'vuejs-datepicker';
import {th} from 'vuejs-datepicker/dist/locale'

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
    name: 'v',
  componentPrefix: 'v',  // Use <vc-calendar /> instead of <v-calendar />              // ...other defaults
});
            
export default {
    name: 'Signup',
    data(){
        return{
            username: null,
            password: null,
            email: null,
            firstname: null,
            lastname: null,
            level: null,
            gender: null,
            feedback: null,
            slug: null,
            Datemode: 'single',
            selectedDate: null,
            province: null,
            th: th,
        }
    },
    components:{
    Datepicker
    },
    methods:{
        signup(){
             var choiceleng = document.MyForm1.Icon.length;
    for(let i=0;i<choiceleng;i++) {
        var checkValue = document.MyForm1.Icon[i].checked;
        if(checkValue){
            var checkResult = document.MyForm1.Icon.value;
            var Values = document.MyForm1.Icon.value;
            console.log(Values)
            var getDate = this.selectedDate.getDate();
            var getMonth = this.selectedDate.getMonth()+1;
            var getYear = this.selectedDate.getFullYear();
            var FullBirthDay = getDate + "/" + getMonth + "/" + getYear;
            const level = document.MyForm1.level;
            const gender = document.querySelector('#gender');
            let ref = db.collection('users').doc(this.email)
            const form = document.querySelector('form');
            var l = document.MyForm1.level;
            // var levelText = l.options[l.selectedIndex].text;
            
            // && level.value!=0
            if(this.firstname&&this.lastname&&this.selectedDate!=null&&Values!=0 &&  this.email && this.password&&this.province!=0){
            ref.get().then(doc=>{
                if(doc.exist){
                    this.feedback = 'This Email already been use'
                }else{
                    firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                    .then(cred=>{
                        ref.set({
                            // username: this.username,
                            // geolocation: null,
                            firstname: this.firstname,
                            lastname: this.lastname,
                            birthday: FullBirthDay,
                            birthDate: getDate,
                            birthMonth: getMonth,
                            birthYear: getYear,
                            gender: Values, 
                            // level : levelText,
                            level : 'MFU',
                            email: this.email,
                            password: this.password,
                            user_id: cred.user.uid,
                            pretest: false,
                            posttest: false,
                            userType: 'users', 
                            province: this.province,
                        })
                        this.$router.push({name: 'PreTestIntro'})
                        
                    })
                    .catch(err=>{
                        console.log(err)
                        this.feedback = err.message
                    })
                    this.feedback = 'This Email is free to use'
                    
                    
                }
            })
            }else{
            this.feedback = "You must enter all fields"
            console.log(this.firstname,this.lastname,this.selectedDate,Values.value,level.value,this.email,this.password)
        }
        }
    }
        },
    },
}
</script>

<style>
    input[type=text]:not(.browser-default)[readonly="readonly"]{
    color: rgba(0,0,0,0.42);
    border-bottom: 1px solid rgba(0,0,0,0.42);
    }
    .signup{
        max-width:400px;
        margin-top:60px;
    }
    .browser-default{
        margin-bottom:10px;
    }
    .cc-selector input{
    margin:0;padding:0;
    -webkit-appearance:none;
       -moz-appearance:none;
            appearance:none;
    }
    .boyIcon{background-image:url(https://image.flaticon.com/icons/svg/145/145867.svg);}
    .girlIcon{background-image:url(https://image.flaticon.com/icons/svg/145/145862.svg);}

    .cc-selector input:active +.drinkcard-cc{opacity: .9;}
    .cc-selector input:checked +.drinkcard-cc{
        -webkit-filter: none;
        -moz-filter: none;
                filter: none;
    }
    .drinkcard-cc{
        cursor:pointer;
        background-size:contain;
        background-repeat:no-repeat;
        display:inline-block;
        width:50px;height:50px;
        -webkit-transition: all 100ms ease-in;
        -moz-transition: all 100ms ease-in;
                transition: all 100ms ease-in;
        -webkit-filter: brightness(1.8) grayscale(1) opacity(.7);
        -moz-filter: brightness(1.8) grayscale(1) opacity(.7);
                filter: brightness(1.8) grayscale(1) opacity(.7);
    }
    .drinkcard-cc:hover{
        -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);
        -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);
                filter: brightness(1.2) grayscale(.5) opacity(.9);
    }


</style>
