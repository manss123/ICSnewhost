<template>
    <div class="container center">
      <h1 class="center">สรุปคะแนน PRE-TEST</h1>
      <div class="row">
                <div class="col s12 m12 l12 center">
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                        <div class="circle-clipper left">
                            <div class="circle"></div>
                        </div><div class="gap-patch">
                            <div class="circle"></div>
                        </div><div class="circle-clipper right">
                            <div class="circle"></div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
      <p class="left flow-text">คะแนนรวมทั้งหมด</p>
      <div class="col s12 m12 l12 row center">
            <vue-circle
              ref="myUniqueID"
              :progress="progressP"
              :size="200"
              :reverse="false"
              line-cap="round"
              :fill="fill"
              empty-fill="rgba(117, 117, 117, .5)"
              :animation-start-value="0.0"
              :start-angle="4.8"
              insert-mode="append"
              :thickness="25"
              :show-percent="false"
              @vue-circle-progress="progress"
              @vue-circle-end="progress_end">
                <p class="black-text center" style="font-weight:bold;font-size:30px;margin:15px;">{{Score}}/12</p>
                <p class="black-text center" style="font-weight:normal;font-size:20px;margin:15px;">คะแนน</p>
            </vue-circle>
          </div>
        <div class="col s12 m12 l12 valign-wrapper row">
                    <div class="box sb1 col s12 m6 l6 left-align" style="padding:8px;margin-bottom:1%;font-weight:bold;">
                      <p class="flow-text">
                        เยี่ยมมากครับน้องๆ สำหรับคะแนน
                        การทำแบบทดสอบก่อนเรียนในครั้งนี้
                        หลังจากนี้ พี่โมโม่จะพาน้อง ๆเข้าสู่
                        บทเรียนที่เหมาะสมกับน้อง ๆกันครับ
                      </p>
                    </div>
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="col s6 m3 l3">
            </div> 
    </div>
</template>

<script>
import VueCircle from 'vue2-circle-progress'
import firebase from 'firebase'
import db from '@/firebase/init'
import Vue from 'vue';
export default {
    components:{
      VueCircle,
    },
    data(){
        return{
         Chapter1Status: null,   
         Chapter2Status: null,  
         Chapter3Status: null,  
         Chapter4Status: null,  
         Chapter5Status: null,
         Chapter6Status: null,   
         userTable: null, 
         email: null,



         fill : { gradient: ["#ffd54f", "#ffc107", "#ff8f00"] },
         progressP: 0,
         Score: 0,
        }

    },
    created(){
        this.checkUser();
    },
    methods:{
        progress(event,progress,stepValue){
          console.log(stepValue);
        },
        progress_end(event){
          console.log("Circle progress end");
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
            self.createData(userTable);
        },

        ProgressionDataFetch:function(TotalScore){
            let self = this;
            var GetOptions ={ source: 'server'};
            var CalTotalScore = (TotalScore/12)*100
            self.Score = TotalScore;
            self.$refs.myUniqueID.updateProgress(CalTotalScore);
        },


      createData(){
          let self = this
         var getOptions = {
              source: 'server'
          };
          let UserScoreRef = db.collection('UserData').doc('PreTest').collection('PretestScore').doc(self.userTable);
                  let UserRef = db.collection('UserData').doc('PreTest').collection('PretestScore');

                  UserScoreRef.get(getOptions).then(function(doc) {
                    self.TotalScore = doc.data().PreTestNumber1.Score+doc.data().PreTestNumber2.Score+
                    doc.data().PreTestNumber3.Score+
                    doc.data().PreTestNumber4.Score+
                    doc.data().PreTestNumber5.Score+
                    doc.data().PreTestNumber6.Score+
                    doc.data().PreTestNumber7.Score+
                    doc.data().PreTestNumber8.Score+
                    doc.data().PreTestNumber9.Score+
                    doc.data().PreTestNumber10.Score+
                    doc.data().PreTestNumber11.Score+
                    doc.data().PreTestNumber12.Score;
                    // console.log(self.TotalScore)
                    UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore});
                    self.ProgressionDataFetch(self.TotalScore)
                    if(doc.data().PreTestNumber1.Score+doc.data().PreTestNumber2.Score==2){
                      var Chap1Level = 'Good';
                      UserRef.doc(self.userTable).update({PretestChapter1Level: Chap1Level});
                    }else if(doc.data().PreTestNumber1.Score+doc.data().PreTestNumber2.Score==1){
                      var Chap1Level = 'Medium';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter1Level: Chap1Level});
                    }else{
                      var Chap1Level = 'Low';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter1Level: Chap1Level});
                    }


                    if(doc.data().PreTestNumber3.Score+doc.data().PreTestNumber4.Score==2){
                      var Chap2Level = 'Good';
                      UserRef.doc(self.userTable).update({PretestChapter2Level: Chap2Level});
                    }else if(doc.data().PreTestNumber3.Score+doc.data().PreTestNumber4.Score==1){
                      var Chap2Level = 'Medium';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter2Level: Chap2Level});
                    }else{
                      var Chap2Level = 'Low';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter2Level: Chap2Level});
                    }

                    if(doc.data().PreTestNumber5.Score+doc.data().PreTestNumber6.Score==2){
                      var Chap3Level = 'Good';
                      UserRef.doc(self.userTable).update({PretestChapter3Level: Chap3Level});
                    }else if(doc.data().PreTestNumber5.Score+doc.data().PreTestNumber6.Score==1){
                      var Chap3Level = 'Medium';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter3Level: Chap3Level});
                    }else{
                      var Chap3Level = 'Low';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter3Level: Chap3Level});
                    }

                    if(doc.data().PreTestNumber7.Score+doc.data().PreTestNumber8.Score==2){
                      var Chap4Level = 'Good';
                      UserRef.doc(self.userTable).update({PretestChapter4Level: Chap4Level});
                    }else if(doc.data().PreTestNumber7.Score+doc.data().PreTestNumber8.Score==1){
                      var Chap4Level = 'Medium';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter4Level: Chap4Level});
                    }else{
                      var Chap4Level = 'Low';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter4Level: Chap4Level});
                    }

                    if(doc.data().PreTestNumber9.Score+doc.data().PreTestNumber10.Score==2){
                      var Chap5Level = 'Good';
                      UserRef.doc(self.userTable).update({PretestChapter5Level: Chap5Level});
                    }else if(doc.data().PreTestNumber9.Score+doc.data().PreTestNumber10.Score==1){
                      var Chap5Level = 'Medium';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter5Level: Chap5Level});
                    }else{
                      var Chap5Level = 'Low';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter5Level: Chap5Level});
                    }

                    if(doc.data().PreTestNumber11.Score+doc.data().PreTestNumber12.Score==2){
                      var Chap6Level = 'Good';
                      UserRef.doc(self.userTable).update({PretestChapter6Level: Chap6Level});
                    }else if(doc.data().PreTestNumber11.Score+doc.data().PreTestNumber12.Score==1){
                      var Chap6Level = 'Medium';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter6Level: Chap6Level});
                    }else{
                      var Chap6Level = 'Low';
                      UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore,PretestChapter6Level: Chap6Level});
                    }
                    let UserScoreRef = db.collection('UserData').doc('PreTest').collection('PretestScore').doc(self.userTable);
                UserScoreRef.get(getOptions).then(function(doc) {
                                      // Query Lessons
                  self.Chapter1Status = doc.data().PretestChapter1Level
                  self.Chapter2Status = doc.data().PretestChapter2Level
                  self.Chapter3Status = doc.data().PretestChapter3Level
                  self.Chapter4Status = doc.data().PretestChapter4Level
                  self.Chapter5Status = doc.data().PretestChapter5Level
                  self.Chapter6Status = doc.data().PretestChapter6Level
                  let Time = '1';
                  const Chap1S={
                    Unit1Status: self.Chapter1Status,
                    Unit2Status: self.Chapter1Status,
                    Unit3Status: self.Chapter1Status,
                }
                const Chap2S={
                    Unit1Status: self.Chapter2Status,
                    Unit2Status: self.Chapter2Status,
                    Unit3Status: self.Chapter2Status,
                }
                const Chap3S={
                    Unit1Status: self.Chapter3Status,
                    Unit2Status: self.Chapter3Status,
                    Unit3Status: self.Chapter3Status,
                    
                }
                const Chap4S={
                    Unit1Status: self.Chapter4Status,
                    Unit2Status: self.Chapter4Status,
                    Unit3Status: self.Chapter4Status,
                }
                const Chap5S={
                    Unit1Status: self.Chapter5Status,
                    Unit2Status: self.Chapter5Status,
                    Unit3Status: self.Chapter5Status,
                }
                const Chap6S={
                    Unit1Status: self.Chapter6Status,
                    Unit2Status: self.Chapter6Status,
                    Unit3Status: self.Chapter6Status,
                }
                db.collection('UserData').doc('Status').collection('Chapter1').doc(self.userTable).set(Chap1S);
                db.collection('UserData').doc('Status').collection('Chapter2').doc(self.userTable).set(Chap2S);
                db.collection('UserData').doc('Status').collection('Chapter3').doc(self.userTable).set(Chap3S);
                db.collection('UserData').doc('Status').collection('Chapter4').doc(self.userTable).set(Chap4S);
                db.collection('UserData').doc('Status').collection('Chapter5').doc(self.userTable).set(Chap5S);
                db.collection('UserData').doc('Status').collection('Chapter6').doc(self.userTable).set(Chap6S);
                
                const Chap1T={
                    Unit1Status: self.Chapter1Status,
                    Unit2Status: self.Chapter1Status,
                    Unit3Status: self.Chapter1Status,
                }
                const Chap2T={
                    Unit1Status: self.Chapter2Status,
                    Unit2Status: self.Chapter2Status,
                    Unit3Status: self.Chapter2Status,
                }
                const Chap3T={
                    Unit1Status: self.Chapter3Status,
                    Unit2Status: self.Chapter3Status,
                    Unit3Status: self.Chapter3Status,
                }
                const Chap4T={
                    Unit1Status: self.Chapter4Status,
                    Unit2Status: self.Chapter4Status,
                    Unit3Status: self.Chapter4Status,
                }
                const Chap5T={
                    Unit1Status: self.Chapter5Status,
                    Unit2Status: self.Chapter5Status,
                    Unit3Status: self.Chapter5Status,
                }
                const Chap6T={
                    Unit1Status: self.Chapter6Status,
                    Unit2Status: self.Chapter6Status,
                    Unit3Status: self.Chapter6Status,
                }

                db.collection('UserData').doc('Sequence').collection('SequenceRecord').doc(self.userTable).set({[Time]: Time});
                db.collection('UserData').doc('Sequence').collection('SequenceCount').doc(self.userTable).set({Time: parseInt(Time)})

                db.collection('UserData').doc('Sequence').collection('Chapter1Record').doc(self.userTable).set({[Time]: Time});
                db.collection('UserData').doc('Sequence').collection('Chapter1Count').doc(self.userTable).set({Time: parseInt(Time)})

                db.collection('UserData').doc('Sequence').collection('Chapter2Record').doc(self.userTable).set({[Time]: Time});
                db.collection('UserData').doc('Sequence').collection('Chapter2Count').doc(self.userTable).set({Time: parseInt(Time)})

                db.collection('UserData').doc('Sequence').collection('Chapter3Record').doc(self.userTable).set({[Time]: Time});
                db.collection('UserData').doc('Sequence').collection('Chapter3Count').doc(self.userTable).set({Time: parseInt(Time)})

                db.collection('UserData').doc('Sequence').collection('Chapter4Record').doc(self.userTable).set({[Time]: Time});
                db.collection('UserData').doc('Sequence').collection('Chapter4Count').doc(self.userTable).set({Time: parseInt(Time)})

                db.collection('UserData').doc('Sequence').collection('Chapter5Record').doc(self.userTable).set({[Time]: Time});
                db.collection('UserData').doc('Sequence').collection('Chapter5Count').doc(self.userTable).set({Time: parseInt(Time)})

                db.collection('UserData').doc('Sequence').collection('Chapter6Record').doc(self.userTable).set({[Time]: Time});
                db.collection('UserData').doc('Sequence').collection('Chapter6Count').doc(self.userTable).set({Time: parseInt(Time)})
                  
                  var delayInMilliseconds = 6000;
                  setTimeout(function(){
                      self.createStatus();
                  },delayInMilliseconds)
                  
          })
                })

                self.calculateTime();
      },

      calculateTime:function(){
        let self = this
        let ref = db.collection('UserData').doc('PreTest').collection('PretestScore').doc(self.userTable)
        ref.get().then(function(doc){
          /////////////////////////////////////////////////////////////
            let StartHourP1 = doc.data().PreTestIntro.StartTimeHour;
            let EndHourP1 = doc.data().PreTestNumber1.StartTimeHour;
            let FinalHourP1 = Math.abs(EndHourP1-StartHourP1)*3600;

            let StartMinuteP1 = doc.data().PreTestIntro.StartTimeMinute;
            let EndMinuteP1 = doc.data().PreTestNumber1.StartTimeMinute;
            let FinalMinuteP1 = Math.abs(EndMinuteP1-StartMinuteP1)*60;

            let StartSecondP1 = doc.data().PreTestIntro.StartTimeSecond;
            let EndSecondP1 = doc.data().PreTestNumber1.StartTimeSecond;
            let FinalSecondP1 = Math.abs(EndSecondP1-StartSecondP1);

            let P1AllCalculatedSecond = Math.abs((FinalHourP1-FinalMinuteP1)+FinalSecondP1);
            ////////////////////////////////////////////////////////////
            let StartHourP2 = doc.data().PreTestNumber1.StartTimeHour;
            let EndHourP2 = doc.data().PreTestNumber2.StartTimeHour;
            let FinalHourP2 = Math.abs(EndHourP2-StartHourP2)*3600;

            let StartMinuteP2 = doc.data().PreTestNumber1.StartTimeMinute;
            let EndMinuteP2 = doc.data().PreTestNumber2.StartTimeMinute;
            let FinalMinuteP2 = Math.abs(EndMinuteP2-StartMinuteP2)*60;

            let StartSecondP2 = doc.data().PreTestNumber1.StartTimeSecond;
            let EndSecondP2 = doc.data().PreTestNumber2.StartTimeSecond;
            let FinalSecondP2 = Math.abs(EndSecondP2-StartSecondP2);

            let P2AllCalculatedSecond = Math.abs((FinalHourP2-FinalMinuteP2)+FinalSecondP2);
            ////////////////////////////////////////////////////////////
            let StartHourP3 = doc.data().PreTestNumber2.StartTimeHour;
            let EndHourP3 = doc.data().PreTestNumber3.StartTimeHour;
            let FinalHourP3 = Math.abs(EndHourP3-StartHourP3)*3600;

            let StartMinuteP3 = doc.data().PreTestNumber2.StartTimeMinute;
            let EndMinuteP3 = doc.data().PreTestNumber3.StartTimeMinute;
            let FinalMinuteP3 = Math.abs(EndMinuteP3-StartMinuteP3)*60;

            let StartSecondP3 = doc.data().PreTestNumber2.StartTimeSecond;
            let EndSecondP3 = doc.data().PreTestNumber3.StartTimeSecond;
            let FinalSecondP3 = Math.abs(EndSecondP3-StartSecondP3);

            let P3AllCalculatedSecond = Math.abs((FinalHourP3-FinalMinuteP3)+FinalSecondP3);
            ////////////////////////////////////////////////////////////
            let StartHourP4 = doc.data().PreTestNumber3.StartTimeHour;
            let EndHourP4 = doc.data().PreTestNumber4.StartTimeHour;
            let FinalHourP4 = Math.abs(EndHourP4-StartHourP4)*3600;

            let StartMinuteP4 = doc.data().PreTestNumber3.StartTimeMinute;
            let EndMinuteP4 = doc.data().PreTestNumber4.StartTimeMinute;
            let FinalMinuteP4 = Math.abs(EndMinuteP4-StartMinuteP4)*60;

            let StartSecondP4 = doc.data().PreTestNumber3.StartTimeSecond;
            let EndSecondP4 = doc.data().PreTestNumber4.StartTimeSecond;
            let FinalSecondP4 = Math.abs(EndSecondP4-StartSecondP4);

            let P4AllCalculatedSecond = Math.abs((FinalHourP4-FinalMinuteP4)+FinalSecondP4);
            ////////////////////////////////////////////////////////////
            let StartHourP5 = doc.data().PreTestNumber4.StartTimeHour;
            let EndHourP5 = doc.data().PreTestNumber5.StartTimeHour;
            let FinalHourP5 = Math.abs(EndHourP5-StartHourP5)*3600;

            let StartMinuteP5 = doc.data().PreTestNumber4.StartTimeMinute;
            let EndMinuteP5 = doc.data().PreTestNumber5.StartTimeMinute;
            let FinalMinuteP5 = Math.abs(EndMinuteP5-StartMinuteP5)*60;

            let StartSecondP5 = doc.data().PreTestNumber4.StartTimeSecond;
            let EndSecondP5 = doc.data().PreTestNumber5.StartTimeSecond;
            let FinalSecondP5 = Math.abs(EndSecondP5-StartSecondP5);

            let P5AllCalculatedSecond = Math.abs((FinalHourP5-FinalMinuteP5)+FinalSecondP5);
            ////////////////////////////////////////////////////////////
            let StartHourP6 = doc.data().PreTestNumber5.StartTimeHour;
            let EndHourP6 = doc.data().PreTestNumber6.StartTimeHour;
            let FinalHourP6 = Math.abs(EndHourP6-StartHourP6)*3600;

            let StartMinuteP6 = doc.data().PreTestNumber5.StartTimeMinute;
            let EndMinuteP6 = doc.data().PreTestNumber6.StartTimeMinute;
            let FinalMinuteP6 = Math.abs(EndMinuteP6-StartMinuteP6)*60;

            let StartSecondP6 = doc.data().PreTestNumber5.StartTimeSecond;
            let EndSecondP6 = doc.data().PreTestNumber6.StartTimeSecond;
            let FinalSecondP6 = Math.abs(EndSecondP6-StartSecondP6);

            let P6AllCalculatedSecond = Math.abs((FinalHourP6-FinalMinuteP6)+FinalSecondP6);
            ////////////////////////////////////////////////////////////
            let StartHourP7 = doc.data().PreTestNumber6.StartTimeHour;
            let EndHourP7 = doc.data().PreTestNumber7.StartTimeHour;
            let FinalHourP7 = Math.abs(EndHourP7-StartHourP7)*3600;

            let StartMinuteP7 = doc.data().PreTestNumber6.StartTimeMinute;
            let EndMinuteP7 = doc.data().PreTestNumber7.StartTimeMinute;
            let FinalMinuteP7 = Math.abs(EndMinuteP7-StartMinuteP7)*60;

            let StartSecondP7 = doc.data().PreTestNumber6.StartTimeSecond;
            let EndSecondP7 = doc.data().PreTestNumber7.StartTimeSecond;
            let FinalSecondP7 = Math.abs(EndSecondP7-StartSecondP7);

            let P7AllCalculatedSecond = Math.abs((FinalHourP7-FinalMinuteP7)+FinalSecondP7);
            ////////////////////////////////////////////////////////////
            let StartHourP8 = doc.data().PreTestNumber7.StartTimeHour;
            let EndHourP8 = doc.data().PreTestNumber8.StartTimeHour;
            let FinalHourP8 = Math.abs(EndHourP8-StartHourP8)*3600;

            let StartMinuteP8 = doc.data().PreTestNumber7.StartTimeMinute;
            let EndMinuteP8 = doc.data().PreTestNumber8.StartTimeMinute;
            let FinalMinuteP8 = Math.abs(EndMinuteP8-StartMinuteP8)*60;

            let StartSecondP8 = doc.data().PreTestNumber7.StartTimeSecond;
            let EndSecondP8 = doc.data().PreTestNumber8.StartTimeSecond;
            let FinalSecondP8 = Math.abs(EndSecondP8-StartSecondP8);

            let P8AllCalculatedSecond = Math.abs((FinalHourP8-FinalMinuteP8)+FinalSecondP8);
            ////////////////////////////////////////////////////////////
            let StartHourP9 = doc.data().PreTestNumber8.StartTimeHour;
            let EndHourP9 = doc.data().PreTestNumber9.StartTimeHour;
            let FinalHourP9 = Math.abs(EndHourP9-StartHourP9)*3600;

            let StartMinuteP9 = doc.data().PreTestNumber8.StartTimeMinute;
            let EndMinuteP9 = doc.data().PreTestNumber9.StartTimeMinute;
            let FinalMinuteP9 = Math.abs(EndMinuteP9-StartMinuteP9)*60;

            let StartSecondP9 = doc.data().PreTestNumber8.StartTimeSecond;
            let EndSecondP9 = doc.data().PreTestNumber9.StartTimeSecond;
            let FinalSecondP9 = Math.abs(EndSecondP9-StartSecondP9);

            let P9AllCalculatedSecond = Math.abs((FinalHourP9-FinalMinuteP9)+FinalSecondP9);
            ////////////////////////////////////////////////////////////
            let StartHourP10 = doc.data().PreTestNumber9.StartTimeHour;
            let EndHourP10 = doc.data().PreTestNumber10.StartTimeHour;
            let FinalHourP10 = Math.abs(EndHourP10-StartHourP10)*3600;

            let StartMinuteP10 = doc.data().PreTestNumber9.StartTimeMinute;
            let EndMinuteP10 = doc.data().PreTestNumber10.StartTimeMinute;
            let FinalMinuteP10 = Math.abs(EndMinuteP10-StartMinuteP10)*60;

            let StartSecondP10 = doc.data().PreTestNumber9.StartTimeSecond;
            let EndSecondP10 = doc.data().PreTestNumber10.StartTimeSecond;
            let FinalSecondP10 = Math.abs(EndSecondP10-StartSecondP10);

            let P10AllCalculatedSecond = Math.abs((FinalHourP10-FinalMinuteP10)+FinalSecondP10);
            ////////////////////////////////////////////////////////////
            let StartHourP11 = doc.data().PreTestNumber10.StartTimeHour;
            let EndHourP11 = doc.data().PreTestNumber11.StartTimeHour;
            let FinalHourP11 = Math.abs(EndHourP11-StartHourP11)*3600;

            let StartMinuteP11 = doc.data().PreTestNumber10.StartTimeMinute;
            let EndMinuteP11 = doc.data().PreTestNumber11.StartTimeMinute;
            let FinalMinuteP11 = Math.abs(EndMinuteP11-StartMinuteP11)*60;

            let StartSecondP11 = doc.data().PreTestNumber10.StartTimeSecond;
            let EndSecondP11 = doc.data().PreTestNumber11.StartTimeSecond;
            let FinalSecondP11 = Math.abs(EndSecondP11-StartSecondP11);

            let P11AllCalculatedSecond = Math.abs((FinalHourP11-FinalMinuteP11)+FinalSecondP11);
            ////////////////////////////////////////////////////////////
            let StartHourP12 = doc.data().PreTestNumber11.StartTimeHour;
            let EndHourP12 = doc.data().PreTestNumber12.StartTimeHour;
            let FinalHourP12 = Math.abs(EndHourP12-StartHourP12)*3600;

            let StartMinuteP12 = doc.data().PreTestNumber11.StartTimeMinute;
            let EndMinuteP12 = doc.data().PreTestNumber12.StartTimeMinute;
            let FinalMinuteP12 = Math.abs(EndMinuteP12-StartMinuteP12)*60;

            let StartSecondP12 = doc.data().PreTestNumber11.StartTimeSecond;
            let EndSecondP12 = doc.data().PreTestNumber12.StartTimeSecond;
            let FinalSecondP12 = Math.abs(EndSecondP12-StartSecondP12);

            let P12AllCalculatedSecond = Math.abs((FinalHourP12-FinalMinuteP12)+FinalSecondP12);

            const item={
              PreTest1Time: P1AllCalculatedSecond,
              PreTest2Time: P2AllCalculatedSecond,
              PreTest3Time: P3AllCalculatedSecond,
              PreTest4Time: P4AllCalculatedSecond,
              PreTest5Time: P5AllCalculatedSecond,
              PreTest6Time: P6AllCalculatedSecond,
              PreTest7Time: P7AllCalculatedSecond,
              PreTest8Time: P8AllCalculatedSecond,
              PreTest9Time: P9AllCalculatedSecond,
              PreTest10Time: P10AllCalculatedSecond,
              PreTest11Time: P11AllCalculatedSecond,
              PreTest12Time: P12AllCalculatedSecond,
            }

            db.collection('UserData').doc('PreTest').collection('PretestScore').doc(self.userTable).update(item)
        })

      },



      createStatus:function(){
        let self = this
         var getOptions = {
              source: 'server'
          };

          const Chap1P={
                    Unit1Status: false,
                    Unit2Status: false,
                    Unit3Status: false,
                }
                const Chap2P={
                    Unit1Status: false,
                    Unit2Status: false,
                    Unit3Status: false,
                }
                const Chap3P={
                    Unit1Status: false,
                    Unit2Status: false,
                    Unit3Status: false,
                }
                const Chap4P={
                    Unit1Status: false,
                    Unit2Status: false,
                    Unit3Status: false,
                }
                const Chap5P={
                    Unit1Status: false,
                    Unit2Status: false,
                    Unit3Status: false,
                }
                const Chap6P={
                    Unit1Status: false,
                    Unit2Status: false,
                    Unit3Status: false,
                }
                db.collection('UserData').doc('Progress').collection('Chapter1').doc(self.userTable).set(Chap1P);
                db.collection('UserData').doc('Progress').collection('Chapter2').doc(self.userTable).set(Chap2P);
                db.collection('UserData').doc('Progress').collection('Chapter3').doc(self.userTable).set(Chap3P);
                db.collection('UserData').doc('Progress').collection('Chapter4').doc(self.userTable).set(Chap4P);
                db.collection('UserData').doc('Progress').collection('Chapter5').doc(self.userTable).set(Chap5P);
                db.collection('UserData').doc('Progress').collection('Chapter6').doc(self.userTable).set(Chap6P);

                const item2 = {
                pretest: true
                }

                db.collection('users').doc(self.userTable).update(item2).then(res=>{
                      self.item2=""; 
                })

                self.$router.push({name:'UnitHome'})
      },


    }
}
</script>

<style>
a.btn-large{
  font-family: 'Pridi', serif;
  line-height: 0;
}
span.flow-text{
  line-height: 25px;
  font-family: 'Prompt', sans-serif;
}
.box {
  width: 300px;
  margin: 50px auto;
  background: #4FC3F7;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  color: #fff;
  font-family: arial;
  position:relative;
}
.sb1:before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 10px solid #4FC3F7;
  border-right: 10px solid transparent;
  border-top: 10px solid #4FC3F7;
  border-bottom: 10px solid transparent;
  right: -20px;
  top: 6px;
}
p.flow-text{
  line-height: 15px;
}
a.flow-text{
  font-size: large;
}
div.circle{
  font-family: Impact;
  font-weight: bold;
  font-size: 30px;
  color: black;
}
</style>
