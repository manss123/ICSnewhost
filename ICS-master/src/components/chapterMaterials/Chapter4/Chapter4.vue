<template>

    <div class="unit container center col s12 m12 l12 row" style="margin-top:20px">
        
        <div class="row card-panel light-green darken-1 s12 m12 l12 valign-wrapper white-text">
                    <div class="container col s6 m6 l6 right right-align" style="margin:0%;padding:0%;">
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/6lesson/Unit4icon.png" alt="" class="circle responsive-img col s10 m4 l4 right right-align offset-l4">
                    </div>
                    <div class="left-align flow-text col s8 m8 l8 left" style="margin:0%;font-weight:bold;">ถูกหลอกโดยไม่รู้ตัว</div> 
        </div>

        <div class="row valign-wrapper" v-if="QuizShow==true">
                <div class="col s8 m6 l6 offset-m3 offset-l3">
                  <div class="card light-blue lighten-1" style="margin-top:30px;">
                    <div class="card-content white-text" style="padding-bottom: 5px;">
                      <span class="card-title flow-text">หลังจากน้องๆ ทำ 3 unit ครบแล้วมาลองทำ quiz กันเถอะน้อง ๆ </span>
                    </div>
                    <div class="card-action col s12 m12 l12 valign-wrapper" style="padding-top: 0px;padding-bottom: 24px;">
                          <a @click="QuizTest" style="font-weight:bold;" class="waves-effect waves-light btn-large light-blue darken-1 col s4 offset-s4">Quiz</a>
                    </div>
                  </div>
                </div>
                <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="col s4 m3 l3 right">
              </div>
        
        <div class="card-panel container col s12 m10 l10 light-green accent-1 offset-m1 offset-l1" style="margin-top:4%;">
                    <div class="card-panel white col s8 m8 l8 center-align offset-s2 offset-m2 offset-l2" style="margin-top:30px;">
                            <img src="https://dlabi.com/project/interactive-computing-science/Materials/Icon%20-%20Unit/Chapter4/unit4.1.png" style="margin-top:12px" alt="" class="responsive-img circle col s10 m4 l4 offset-s1 offset-m4 offset-l4">
                            <p class="flow-text col s12 m12 l12" style="margin-top:5px;margin-bottom:2%;padding:2%;font-weight:bold;">ข่าวลวง</p>
                            <div class="center col s12 m12 l12 hide-on-med-and-up" v-if="this.U1Status=='Low'" style="margin-bottom:13px;">
                                    <a @click="submitU1E" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน(ง่าย) </a>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" v-if="this.U1Status=='Low'" style="margin-bottom:13px;">
                                    <a @click="submitU1E" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน(ง่าย) </a>
                            </div>


                            <div class="center col s12 m12 l12 hide-on-med-and-up" v-if="this.U1Status=='Medium'" style="margin-bottom:13px;">
                                    <a @click="submitU1M" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน(กลาง) </a>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" v-if="this.U1Status=='Medium'" style="margin-bottom:13px;">
                                    <a @click="submitU1M" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน(กลาง) </a>
                            </div>


                            <div class="center col s12 m12 l12 hide-on-med-and-up" v-if="this.U1Status=='Good'" style="margin-bottom:13px;">
                                    <a @click="submitU1H" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน(ยาก) </a>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" v-if="this.U1Status=='Good'" style="margin-bottom:13px;">
                                    <a @click="submitU1H" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน(ยาก) </a>
                            </div>
                            <i v-if="this.Unit1Done==true" class="material-icons circle green md-light white-text">done</i>
                            
                            
                    </div>

                     <div class="card-panel white col s8 m8 l8 center-align offset-s2 offset-m2 offset-l2" style="margin-top:30px;">
                            <img src="https://dlabi.com/project/interactive-computing-science/Materials/Icon%20-%20Unit/Chapter4/unit4.2.png" style="margin-top:12px" alt="" class="responsive-img circle col s10 m4 l4 offset-s1 offset-m4 offset-l4">
                            <p class="flow-text col s12 m12 l12" style="margin-top:5px;margin-bottom:2%;padding:0px;font-weight:bold;">คนลวง</p>
                            <div class="center col s12 m12 l12 hide-on-med-and-up" v-if="this.U2Status=='Low'" style="margin-bottom:13px;">
                                    <a @click="submitU2E" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน(ง่าย) </a>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" v-if="this.U2Status=='Low'" style="margin-bottom:13px;">
                                    <a @click="submitU2E" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน(ง่าย) </a>
                            </div>


                            <div class="center col s12 m12 l12 hide-on-med-and-up" v-if="this.U2Status=='Medium'" style="margin-bottom:13px;">
                                    <a @click="submitU2M" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน(กลาง) </a>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" v-if="this.U2Status=='Medium'" style="margin-bottom:13px;">
                                    <a @click="submitU2M" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน(กลาง) </a>
                            </div>


                            <div class="center col s12 m12 l12 hide-on-med-and-up" v-if="this.U2Status=='Good'" style="margin-bottom:13px;">
                                    <a @click="submitU2H" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน(ยาก) </a>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" v-if="this.U2Status=='Good'" style="margin-bottom:13px;">
                                    <a @click="submitU2H" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน(ยาก) </a>
                            </div>
                            <i v-if="this.Unit2Done==true" class="material-icons circle green md-light white-text">done</i>
                    </div>

                    <div class="card-panel white col s8 m8 l8 center-align offset-s2 offset-m2 offset-l2" style="margin-top:30px;">
                            <img src="https://dlabi.com/project/interactive-computing-science/Materials/Icon%20-%20Unit/Chapter4/unit4.3.png" style="margin-top:12px" alt="" class="responsive-img circle col s10 m4 l4 offset-s1 offset-m4 offset-l4">
                            <p class="flow-text col s12 m12 l12" style="margin-top:5px;margin-bottom:2%;padding:0px;font-weight:bold;">กลลวง</p>
                            <div class="center col s12 m12 l12 hide-on-med-and-up" v-if="this.U3Status=='Low'" style="margin-bottom:13px;">
                                    <a @click="submitU3E" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน(ง่าย) </a>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" v-if="this.U3Status=='Low'" style="margin-bottom:13px;">
                                    <a @click="submitU3E" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน(ง่าย) </a>
                            </div>


                            <div class="center col s12 m12 l12 hide-on-med-and-up" v-if="this.U3Status=='Medium'" style="margin-bottom:13px;">
                                    <a @click="submitU3M" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน(กลาง) </a>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" v-if="this.U3Status=='Medium'" style="margin-bottom:13px;">
                                    <a @click="submitU3M" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน(กลาง) </a>
                            </div>


                            <div class="center col s12 m12 l12 hide-on-med-and-up" v-if="this.U3Status=='Good'" style="margin-bottom:13px;">
                                    <a @click="submitU3H" class="waves-effect grey darken-1 waves-light btn-small align-center"> เริ่มเรียน(ยาก) </a>
                            </div>
                            <div class="center col s12 m12 l12 hide-on-small-only" v-if="this.U3Status=='Good'" style="margin-bottom:13px;">
                                    <a @click="submitU3H" class="waves-effect grey darken-1 waves-light btn-large align-center"> เริ่มเรียน(ยาก) </a>
                            </div>
                            <i v-if="this.Unit3Done==true" class="material-icons circle green md-light white-text">done</i>
                    </div>
        </div>
        <div class="col s12 m12 l12">
            <router-link :to="{name: 'UnitHome'}"><a class="waves-effect light-green darken-1 btn-large col s4 m4 l2 flow-text">ย้อนกลับ</a></router-link>
          </div>
    
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'chap1Medium',
    data(){
        return{
            U1Status: null,
            U2Status: null,
            U3Status: null,
            Email: null,
            userTable: null,
            UnitTime: null,
            QuizShow: null,
            Unit1Done: null,
            Unit2Done: null,
            Unit3Done: null,
        }
    },
    created(){
        this.checkUser();
    },
    methods:{

        GetEmail:function(userTable){
            this.Email = userTable;
            this.GetCurrentStatus(userTable);
            this.QuizCheck(userTable);
            this.DoneStatusCheck(userTable);
        },

        DoneStatusCheck:function(userTable){
            let self = this;
            var getOptions ={source:'server'};
            let Chapter4Status = db.collection('UserData').doc('Progress').collection('Chapter4').doc(userTable)
            Chapter4Status.get(getOptions).then(function(doc){
                self.Unit1Done = doc.data().Unit1Status;
                self.Unit2Done = doc.data().Unit2Status;
                self.Unit3Done = doc.data().Unit3Status;
            })
        },

        QuizCheck:function(userTable){
            var GetOptions = { source: 'server'};
            let self = this;
            let Chapter4StatusRef = db.collection('UserData').doc('Progress').collection('Chapter4').doc(userTable)
            Chapter4StatusRef.get(GetOptions).then(function(doc){
                if(doc.data().Unit1Status==true&&doc.data().Unit2Status==true&&doc.data().Unit3Status==true){
                  self.QuizShow = true;
                }
            })
        },
        QuizTest:function(){
            this.$router.push({name:'Chapter4QuizIntro'});
        },

        GetCurrentStatus:function(userTable){
            var GetOptions = { source: 'server'};
            let self = this;
            let Chapter4Ref = db.collection('UserData').doc('Status').collection('Chapter4').doc(userTable)
            Chapter4Ref.get(GetOptions).then(function(doc){
                self.U1Status = doc.data().Unit1Status;
                self.U2Status = doc.data().Unit2Status;
                self.U3Status = doc.data().Unit3Status;
                console.log("Unit1: "+self.U1Status,doc.data().Unit1Status);
                console.log("Unit2: "+self.U2Status,doc.data().Unit2Status);
                console.log("Unit3: "+self.U3Status,doc.data().Unit3Status);
            })
        },

        RecordLog:function(unit,level){
            var getOptions={source:'server'}
            let self = this;
            let SequenceRef = db.collection('UserData').doc('Sequence').collection('SequenceCount').doc(self.Email)
            SequenceRef.get(getOptions).then(function(doc){
                self.UnitTime = doc.data().Time.toString();
                // console.log("Data Ref"+doc.data().Time)

                const SequenceRec={
                    [self.UnitTime]:{
                        Chapter: 4,
                        Unit: unit,
                        Level: level
                    }
                }
                db.collection('UserData').doc('Sequence').collection('SequenceRecord').doc(self.Email).update(SequenceRec)

                console.log(unit)
            })
        },


/////////////////////////////  Unit1 Submit
        submitU1E:function(){
            
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
            self.$router.push({name: 'C4Unit1EasyIntro'})
            let unit = 'Unit1'
            let level = 'Low'
            self.RecordLog(unit,level)

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

        submitU1M:function(){
            
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
            self.$router.push({name: 'C4Unit1MediumIntro'})
            let unit = 'Unit1'
            let level = 'Medium'
            self.RecordLog(unit,level)

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

        submitU1H:function(){
            
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
            self.$router.push({name: 'C4Unit1HardIntro'})
            let unit = 'Unit1'
            let level = 'Good'
            self.RecordLog(unit,level)

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////// Unit 2 Submit


        submitU2E:function(){
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
                self.$router.push({name: 'C4Unit2EasyIntro'})
                let unit = 'Unit2'
            let level = 'Low'
            self.RecordLog(unit,level)
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


        submitU2M:function(){
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
                self.$router.push({name: 'C4Unit2MediumIntro'})
                let unit = 'Unit2'
            let level = 'Medium'
            self.RecordLog(unit,level)
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

        submitU2H:function(){
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
                self.$router.push({name: 'C4Unit2HardIntro'})
                let unit = 'Unit2'
            let level = 'Good'
            self.RecordLog(unit,level)
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        submitU3E:function(){
            let self = this
        let users= db.collection("users").orderBy("email")
        .limit(25);

          firebase.auth().onAuthStateChanged((user)=>{
          if(user){
          db.collection("users").where("email","==",user.email)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  

                self.$router.push({name: 'C4Unit3EasyIntro'})
                let unit = 'Unit3'
            let level = 'Low'
            self.RecordLog(unit,level)

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

        submitU3M:function(){
            let self = this
        let users= db.collection("users").orderBy("email")
        .limit(25);

          firebase.auth().onAuthStateChanged((user)=>{
          if(user){
          db.collection("users").where("email","==",user.email)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  

                self.$router.push({name: 'C4Unit3MediumIntro'})
                let unit = 'Unit3'
            let level = 'Medium'
            self.RecordLog(unit,level)

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


        submitU3H:function(){
            let self = this
        let users= db.collection("users").orderBy("email")
        .limit(25);

          firebase.auth().onAuthStateChanged((user)=>{
          if(user){
          db.collection("users").where("email","==",user.email)
          .get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  

                self.$router.push({name: 'C4Unit3HardIntro'})
                let unit = 'Unit3'
            let level = 'Good'
            self.RecordLog(unit,level)

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////

        // ********* check user id
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
                  self.GetEmail(self.userTable);
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
