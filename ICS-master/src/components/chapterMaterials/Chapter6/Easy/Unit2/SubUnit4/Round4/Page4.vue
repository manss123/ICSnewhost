﻿<template>
    <div class="unit container black-text">
        <div class="container col s12 m12 l12 center" style="margin-top:2%">
            <ul class="pagination">
                <p class="flow-text" style="display:inline;">หน่วยที่: </p>
                <li class="waves-effect"><a href="#!">1</a></li>
                <li class="waves-effect"><a href="#!">2</a></li>
                <li class="waves-effect"><a href="#!">3</a></li>
                <li class="active"><a href="#!">4</a></li>
            </ul>     
            <div class="row card-panel yellow accent-1 s12 m12 l12 valign-wrapper black-text" style="margin-top:10px;">
                    <div class="container col s6 m6 l6 right right-align" style="margin-top:0%;padding:0%;">
                    <img src="http://167.71.221.10/ics//Materials/Icon%20-%20Unit/Addition%20Icons/Feedbackgoodbad.png" alt="" class="circle responsive-img col s10 m4 l4 right right-align offset-l4">
                    </div>
                    <div class="left-align flow-text col s12 m8 l8 left"><h5 style="font-weight:bold;"> สะท้อนความคิด<br>ชีวิตไม่หลงทาง </h5></div> 
            </div>


            <div class="card-panel row yellow darken-2 col s12 m12 l12 white-text" style="padding:10px;padding-bottom:10px;margin-top:30px;">
                <div v-if="usedTo==false" class="flow-text left col s12 m12 l12" style="font-weight:bold;">ยังไม่ใช่ครับ พี่โมโม่ว่าน้อง ควร กลับไปดูเนื้อหาก่อนหน้าเพื่อความ เข้าใจนะครับ</div>
                <div v-if="usedTo==true" class="flow-text left col s12 m12 l12" style="font-weight:bold;">น้องๆใช้ของอะไรก็ได้นะครับ แต่น้องๆควรใช้ด้วยความระมัด ระวังนะครับ อย่าใช้จนเพลินเงิน หมดนะครับ</div>
                <div @click="FollowLink()"><router-link :to="{name:'C6Unit2EasyRound4P1'} "><a @click="submit" class="waves-effect grey darken-1 waves-light flow-text btn-large align-center col s6 m4 l4 offset-s3 offset-m4 offset-l4" style="margin-top:10px;"> ทบทวนความรู้ </a></router-link></div>
                <div v-if="usedTo==false" class="col s12 m12 l12" style="margin:0px;margin-top:20px;">
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/InfoUI/Bad.png" class="responsive-img cirlcle col s4 m4 l4 offset-s4 offset-m4 offset-l4" >
                </div>
                <div v-if="usedTo==true" class="col s12 m12 l12" style="margin:0px;margin-top:20px;">
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/InfoUI/Good.png" class="responsive-img cirlcle col s4 m2 l4 offset-s4 offset-m5 offset-l4" >
                </div>
            </div>

            <div class="right row col s6 m6 l6">
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="responsive-img col s6 m4 l4 offset-s3 offset-m4 offset-l4">
            </div>
             
             <div class="col s12 m12 l12 feedback" style="margin-top:80px;margin-bottom:230px;">
                <!-- <div class="left col s6 m12 l6 hide-on-small-only">
                <router-link :to="{name:'Unit2MedRound4P1'}"><a v-if="usedTo==false" class="waves-effect yellow darken-2 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                </div>
                <div class="left col s6 m12 l6 hide-on-med-and-up">
                    <router-link :to="{name:'Unit2MedRound4P1'}"><a v-if="usedTo==false" class="waves-effect yellow darken-2 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                </div>

                <div class="left col s6 m12 l6 hide-on-small-only">
                <router-link :to="{name:'Unit2MedRound4P1'}"><a v-if="usedTo==true" class="waves-effect yellow darken-2 waves-light flow-text btn-large align-center left"> ทบทวนความรู้ </a></router-link>
                </div>
                <div class="left col s6 m12 l6 hide-on-med-and-up">
                    <router-link :to="{name:'Unit2MedRound4P1'}"><a v-if="usedTo==true" class="waves-effect yellow darken-2 waves-light flow-text btn-small align-center left"> ทบทวนความรู้ </a></router-link>
                </div> -->

                <div class="right col s6 m12 l6 hide-on-small-only">
                    <router-link :to="{name:'C6Unit2EasyEnd'}"><a @click="submit" class="waves-effect yellow darken-2 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                </div>
                <div class="right col s6 m12 l6 hide-on-med-and-up">
                    <router-link :to="{name:'C6Unit2EasyEnd'}"><a @click="submit" class="waves-effect yellow darken-2 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                </div> 
                
            </div>
            
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'Unit2Mp1',
    data(){
        return{
            usedTo: null,
            userTable: null,
            email: null,
            Choice: null,
        }
    },
    created(){
        let self = this
        var getOptions = {
                source: 'server'
              };
        this.checkUser()
        this.AnswerCheck();
    },
    methods:{
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
            let Correct = 0
            if(self.usedTo==true){
                Correct = 1
            }
            console.log("Cached document data:", self.ArrayQ);
            const item={
                Round4Page4End:{
                            EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                },
                Round4Page1Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                       },
                        };
            // const item2={
            //      Round4Log:{
            //                 Choice: self.Choice,
            //                 Correct: Correct,

            //     },
            // }
            db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit2').collection('Level').doc('Easy').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round4Page4End="";
                      self.Round4Page1Start="";
                      
            })

            // db.collection('UserData').doc('Loging').collection('Chapter6').doc('Unit2').collection('Level').doc('Easy').collection('Chapter6Unit2EasyLoging').doc(self.email).update(item2).then(res=>{
            //         self.Round4Log=""; 
            // })
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
            AnswerCheck:function(){

                 let self = this
                 var getOptions = {
                        source: 'server'
                    };
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
                            let Qref = db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit2').collection('Level').doc('Easy').collection('Content').doc(self.userTable);
                        Qref.get(getOptions).then(function(doc){
                            self.Choice = doc.data().Round4Page3End.Choice;
                            if(doc.data().Round4Page3End.Choice!=null){
                                self.usedTo = true;
                            }else{
                                self.usedTo = false;
                            }
                            
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

            GetEmail:function(userTable){
         
            this.email = userTable
            this.FollowLinkCheck(userTable);
        },

        FollowLinkCheck:function(email){
            let self = this
            var getOptions ={source:'server'}
            let SequenceRef = db.collection('UserData').doc('Sequence').collection('Chapter6Count').doc(email)
                SequenceRef.get().then(function(doc){
                    let UnitTime = doc.data().Time.toString();
            let LogRef = db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit2').collection('Level').doc('Easy').collection('Content').doc(email)
            LogRef.get(getOptions).then(function(doc){
                if(doc.data().Round4Page4Log==undefined){
            const item={
                Round4Page4Log:{
                            FollowLink: false,
                },  
            };
            // const item2={
            //     Round4FollowLink:{
            //                 FollowLink: false,
            //     },  
            // };
            db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit2').collection('Level').doc('Easy').collection('Content').doc(email).update(item).then(res=>{
                    self.Round4Page4Log=""; 
            })
            // db.collection('UserData').doc('Loging').collection('Chapter6').doc('Unit2').collection('Level').doc('Easy').collection('Chapter6Unit2EasyLoging').doc(email).collection('Chapter6Unit2EasySequence').doc(UnitTime).update(item2).then(res=>{
            //         self.Round4FollowLink=""; 
            // })

                }
            })
            })
        },

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


        FollowLink:function(){
           let self = this;
           let SequenceRef = db.collection('UserData').doc('Sequence').collection('Chapter6Count').doc(self.email)
                SequenceRef.get().then(function(doc){
                    let UnitTime = doc.data().Time.toString();
           const item={
                Round4Page4Log:{
                            FollowLink: true,
                },  
            };

            const item2={
                Round4FollowLink:{
                            FollowLink: true,
                },  
            };
            db.collection('UserData').doc('Content').collection('Chapter6').doc('Unit2').collection('Level').doc('Easy').collection('Content').doc(self.email).update(item).then(res=>{
                    self.Round4Page4Log=""; 
            })
            db.collection('UserData').doc('Loging').collection('Chapter6').doc('Unit2').collection('Level').doc('Easy').collection('Chapter6Unit2EasyLoging').doc(self.email).collection('Chapter6Unit2EasySequence').doc(UnitTime).update(item2).then(res=>{
                    self.Round4FollowLink=""; 
            })
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
