﻿<template>
    <div class="unit container black-text center col s12 m12 l12">
        <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="active"><a href="#!">3</a></li>
            <li class="waves-effect"><a href="#!">4</a></li>
            <li class="waves-effect"><a href="#!">5</a></li>
        </ul>
        <div class="container col s12 m12 l12" style="margin-top:2%">    
            <div class="row card-panel teal accent-2 s12 m12 l12 valign-wrapper black-text" style="margin-top:10px;">
                    <div class="container col s6 m6 l6 right right-align" style="margin-top:0%;padding:0%;">
                    <img src="http://167.71.221.10/ics//Materials/Icon%20-%20Unit/Addition%20Icons/Feedbackgoodbad.png" alt="" class="circle responsive-img col s10 m4 l4 right right-align offset-l4">
                    </div>
                    <div class="left-align flow-text col s12 m8 l8 left"><h5 style="font-weight:bold;"> สะท้อนความคิด<br>ชีวิตไม่หลงทาง </h5></div> 
            </div>


            <div class="card-panel row teal darken-1 col s12 m12 l12 white-text" style="padding:10px;padding-bottom:10px;margin-top:30px;">
                <div v-if="usedTo==false" class="flow-text left col s12 m12 l12" style="font-weight:bold;">แอ๊ดดด!!! หากไม่มีการประสมกันระหว่างตัวอักษรภาษาอังกฤษใหญ่และเล็กไม่ได้นะครับ มันไม่ปลอดภัย น้องๆควรเปลี่ยน password ใหม่นะครับ </div>
                <div v-if="usedTo==true" class="flow-text left col s12 m12 l12" style="font-weight:bold;">ใช่แล้วครับ! น้องๆอย่าลืมนะครับอย่างน้อยต้องภาษาอังกฤษตัวใหญ่และเล็กอย่างละหนึ่งผสมกันนะครับ</div>
                <div @click="FollowLink()"><router-link :to="{name:'C1Unit3HardRound3P1'} "><a @click="submit" class="waves-effect grey darken-1 waves-light flow-text btn-large align-center col s6 m4 l4 offset-s3 offset-m4 offset-l4" style="margin-top:10px;"> ทบทวนความรู้ </a></router-link></div>
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
                <router-link :to="{name:'Unit3MedRound3P1'}"><a v-if="usedTo==false" class="waves-effect teal accent-2 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                </div>
                <div class="left col s6 m12 l6 hide-on-med-and-up">
                    <router-link :to="{name:'Unit3MedRound3P1'}"><a v-if="usedTo==false" class="waves-effect teal accent-2 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                </div>

                <div class="left col s6 m12 l6 hide-on-small-only">
                <router-link :to="{name:'Unit3MedRound3P1'}"><a v-if="usedTo==true" class="waves-effect teal accent-2 waves-light flow-text btn-large align-center left"> ทบทวนความรู้ </a></router-link>
                </div>
                <div class="left col s6 m12 l6 hide-on-med-and-up">
                    <router-link :to="{name:'Unit3MedRound3P1'}"><a v-if="usedTo==true" class="waves-effect teal accent-2 waves-light flow-text btn-small align-center left"> ทบทวนความรู้ </a></router-link>
                </div> -->

                <div class="right col s6 m12 l6 hide-on-small-only">
                    <router-link :to="{name:'C1Unit3HardRound4P1'}"><a @click="submit" class="waves-effect teal darken-1 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                </div>
                <div class="right col s6 m12 l6 hide-on-med-and-up">
                    <router-link :to="{name:'C1Unit3HardRound4P1'}"><a @click="submit" class="waves-effect teal darken-1 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                </div> 
                
            </div>
            
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'Unit3Mp1',
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

        FollowLinkCheck:function(email){
            let self = this
            var getOptions ={source:'server'}
            let SequenceRef = db.collection('UserData').doc('Sequence').collection('Chapter1Count').doc(userTable)
                SequenceRef.get().then(function(doc){
                    let UnitTime = doc.data().Time.toString();
            let LogRef = db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Hard').collection('Content').doc(email)
            LogRef.get(getOptions).then(function(doc){
                if(doc.data().Round3Page4Log==undefined){
            const item={
                Round3Page4Log:{
                            FollowLink: false,
                },  
            };
            // const item2={
            //     Round3FollowLink:{
            //                 FollowLink: false,
            //     },  
            // };
            db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Hard').collection('Content').doc(email).update(item).then(res=>{
                    self.Round3Page4Log=""; 
            })
            // db.collection('UserData').doc('Loging').collection('Chapter1').doc('Unit3').collection('Level').doc('Hard').collection('Chapter1Unit3HardLoging').doc(email).collection('Chapter1Unit3HardSequence').doc(UnitTime).update(item2).then(res=>{
            //         self.Round3FollowLink=""; 
            // })

                }
            })
            })
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
            let Correct = 0
            if(self.usedTo==true){
                Correct = 1
            }
            console.log("Cached document data:", self.ArrayQ);
            const item={
                Round3Page4End:{
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
            //      Round3Log:{
            //                 Choice: self.Choice,
            //                 Correct: Correct,

            //     },
            // }
            db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Hard').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round3Page4End="";
                      self.Round4Page1Start="";
                      
            })

            // db.collection('UserData').doc('Loging').collection('Chapter1').doc('Unit3').collection('Level').doc('Hard').collection('Chapter1Unit3HardLoging').doc(self.email).update(item2).then(res=>{
            //         self.Round3Log=""; 
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
                            let Qref = db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Hard').collection('Content').doc(self.userTable);
                        Qref.get(getOptions).then(function(doc){
                            self.Choice = doc.data().Round3Page3End.Choice;
                            if(doc.data().Round3Page3End.Choice==2){
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
           let SequenceRef = db.collection('UserData').doc('Sequence').collection('Chapter1Count').doc(self.email)
                SequenceRef.get().then(function(doc){
                    let UnitTime = doc.data().Time.toString();
           const item={
                Round3Page4Log:{
                            FollowLink: true,
                },  
            };

            // const item2={
            //     Round3FollowLink:{
            //                 FollowLink: true,
            //     },  
            // };
            db.collection('UserData').doc('Content').collection('Chapter1').doc('Unit3').collection('Level').doc('Hard').collection('Content').doc(self.email).update(item).then(res=>{
                    self.Round3Page4Log=""; 
            })
            // db.collection('UserData').doc('Loging').collection('Chapter1').doc('Unit3').collection('Level').doc('Hard').collection('Chapter1Unit3HardLoging').doc(self.email).collection('Chapter1Unit3HardSequence').doc(UnitTime).update(item2).then(res=>{
            //         self.Round3FollowLink=""; 
            // })
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
