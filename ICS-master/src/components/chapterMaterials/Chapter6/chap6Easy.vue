<template>

    <div class="unit container center col s12 m12 l12 row" style="margin-top:20px">
        
        <div class="row card-panel yellow darken-2 s12 m12 l12 valign-wrapper white-text">
                    <div class="container col s6 m6 l6 right right-align" style="margin:0%;padding:0%;">
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit4icon.png" alt="" class="circle responsive-img col s10 m4 l4 right right-align offset-l4">
                    </div>
                    <div class="left-align flow-text col s8 m8 l8 left" style="margin:0%;font-weight:bold;">เจ้ามัลแวร์จอมล้วงข้อมูล</div> 
        </div>
        
        <div class="card-panel container col s12 m10 l10 yellow accent-1 offset-m1 offset-l1" style="margin-top:4%;">
                    <div class="card-panel white col s8 m8 l8 center-align offset-s2 offset-m2 offset-l2" style="margin-top:30px;">
                            <img src="https://dlabi.com/project/interactive-computing-science/Materials/Icon%20-%20Unit/Chapter6/unit6.1.png" style="margin-top:12px" alt="" class="responsive-img circle col s10 m4 l4 offset-s1 offset-m4 offset-l4">
                            <p class="flow-text col s12 m12 l12" style="margin-top:5px;margin-bottom:2%;padding:2%;font-weight:bold;">ระบุตัวตนเจ้ามัลแวร์ตัวปัญหา</p>
                            <div class="center col s12 m12 l12 hide-on-med-and-up" style="margin-bottom:13px;">
                                    <router-link :to="{name:'C6Unit1EasyIntro'}"><a @click="submitU1" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน </a></router-link>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" style="margin-bottom:13px;">
                                    <router-link :to="{name:'C6Unit1EasyIntro'}"><a @click="submitU1" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน </a></router-link>
                            </div>
                    </div>

                     <div class="card-panel white col s8 m8 l8 center-align offset-s2 offset-m2 offset-l2" style="margin-top:30px;">
                            <img src="https://dlabi.com/project/interactive-computing-science/Materials/Icon%20-%20Unit/unit1.2.png" style="margin-top:12px" alt="" class="responsive-img circle col s10 m4 l4 offset-s1 offset-m4 offset-l4">
                            <p class="flow-text col s12 m12 l12" style="margin-top:5px;margin-bottom:2%;padding:0px;font-weight:bold;">ตามจับเจ้ามัลแวร์ตัวปวน</p>
                            <div class="center col s12 m12 l12 hide-on-med-and-up" style="margin-bottom:13px;">
                                    <router-link :to="{name:'C6Unit2EasyIntro'}"><a @click="submitU2" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน </a></router-link>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" style="margin-bottom:13px;">
                                    <router-link :to="{name:'C6Unit2EasyIntro'}"><a @click="submitU2" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน </a></router-link>
                            </div>
                    </div>

                    <div class="card-panel white col s8 m8 l8 center-align offset-s2 offset-m2 offset-l2" style="margin-top:30px;">
                            <img src="https://dlabi.com/project/interactive-computing-science/Materials/Icon%20-%20Unit/unit1.3.png" style="margin-top:12px" alt="" class="responsive-img circle col s10 m4 l4 offset-s1 offset-m4 offset-l4">
                            <p class="flow-text col s12 m12 l12" style="margin-top:5px;margin-bottom:2%;padding:0px;font-weight:bold;">ปฎิบัติการหลบเจ้ามัลแวร์จอมตื๊อ</p>
                            <div class="center col s12 m12 l12 hide-on-med-and-up" style="margin-bottom:13px;">
                                    <router-link :to="{name:'C6Unit3EasyIntro'}"><a @click="submitU3" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน </a></router-link>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" style="margin-bottom:13px;">
                                    <router-link :to="{name:'C6Unit3EasyIntro'}"><a @click="submitU3" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน </a></router-link>
                            </div>
                    </div>
        </div>
        <div class="col s12 m12 l12">
            <a class="waves-effect yellow darken-2 btn-large col s4 m4 l2 flow-text">ย้อนกลับ</a>
          </div>
    
    </div>
</template>

<script>
import db from '@/firebase/init'
import firebase from 'firebase'
export default {
    name: 'chap1Medium',
    data(){
        return{

        }
    },
    methods:{
        submitU1:function(){
            
            let self = this
        let users= db.collection("users").orderBy("email")
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
            const item={
                Round1Page1Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit1').collection('Level').doc('Medium').collection('Content').doc(self.userTable).set(item).then(res=>{
                      self.Round1Page1Start="";
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

        submitU2:function(){
            
            let self = this
        let users= db.collection("users").orderBy("email")
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
            const item={
                Round1Page1Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit2').collection('Level').doc('Medium').collection('Content').doc(self.userTable).set(item).then(res=>{
                      self.Round1Page1Start="";
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

        submitU3:function(){
            
            let self = this
        let users= db.collection("users").orderBy("email")
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
            const item={
                Round1Page1Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                },
               
            };
            db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit3').collection('Level').doc('Medium').collection('Content').doc(self.userTable).set(item).then(res=>{
                      self.Round1Page1Start="";
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

</style>
