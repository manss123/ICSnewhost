<template>
    <div class="container center">
      <h1 class="center">สรุปคะแนน POST-TEST</h1>
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
                <p class="black-text center" style="font-weight:bold;font-size:30px;">{{Score}}/12</p>
                <p class="black-text center" style="font-weight:normal;font-size:20px;">คะแนน</p>
            </vue-circle>
          </div>
        <div class="col s12 m12 l12 valign-wrapper row">
                    <div class="box sb1 col s12 m6 l6 left-align" style="padding:8px;margin-bottom:1%;font-weight:bold;">
                      <p class="flow-text">
                        เยี่ยมมากครับน้องๆ สำหรับคะแนน
                        การทำแบบทดสอบหลังเรียนในครั้งนี้
                        หลังจากนี้ พี่โมโม่จะพาน้อง ๆเข้าสู่
                        บทเรียนที่เหมาะสมกับน้อง ๆกันครับ
                      </p>
                    </div>
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="col s6 m3 l3">
            </div> 
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
import VueCircle from 'vue2-circle-progress'
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
            this.Email = userTable;
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
          let UserScoreRef = db.collection('UserData').doc('PostTest').collection('PostTestScore').doc(self.userTable);
                  let UserRef = db.collection('UserData').doc('PostTest').collection('PostTestScore');

                  UserScoreRef.get(getOptions).then(function(doc) {
                    self.TotalScore = doc.data().PostTestNumber1.Score+
                    doc.data().PostTestNumber2.Score+
                    doc.data().PostTestNumber3.Score+
                    doc.data().PostTestNumber4.Score+
                    doc.data().PostTestNumber5.Score+
                    doc.data().PostTestNumber6.Score+
                    doc.data().PostTestNumber7.Score+
                    doc.data().PostTestNumber8.Score+
                    doc.data().PostTestNumber9.Score+
                    doc.data().PostTestNumber10.Score+
                    doc.data().PostTestNumber11.Score+
                    doc.data().PostTestNumber12.Score;
                    // console.log(self.TotalScore)
                    self.ProgressionDataFetch(self.TotalScore)
                    UserRef.doc(self.userTable).update({ToTalScore: self.TotalScore});
                    var delayInMilliseconds = 6000;
                    setTimeout(function(){
                        self.HomeRoute();
                    },delayInMilliseconds)
                    
                })
                self.calculateTime();
      },

      calculateTime:function(){
        let self = this
        let ref = db.collection('UserData').doc('PostTest').collection('PostTestScore').doc(self.userTable)
        ref.get().then(function(doc){
          /////////////////////////////////////////////////////////////
            let StartHourP1 = doc.data().PostTestIntro.StartTimeHour;
            let EndHourP1 = doc.data().PostTestNumber1.StartTimeHour;
            let FinalHourP1 = Math.abs(EndHourP1-StartHourP1)*3600;

            let StartMinuteP1 = doc.data().PostTestIntro.StartTimeMinute;
            let EndMinuteP1 = doc.data().PostTestNumber1.StartTimeMinute;
            let FinalMinuteP1 = Math.abs(EndMinuteP1-StartMinuteP1)*60;

            let StartSecondP1 = doc.data().PostTestIntro.StartTimeSecond;
            let EndSecondP1 = doc.data().PostTestNumber1.StartTimeSecond;
            let FinalSecondP1 = Math.abs(EndSecondP1-StartSecondP1);

            let P1AllCalculatedSecond = Math.abs((FinalHourP1-FinalMinuteP1)+FinalSecondP1);
            ////////////////////////////////////////////////////////////
            let StartHourP2 = doc.data().PostTestNumber1.StartTimeHour;
            let EndHourP2 = doc.data().PostTestNumber2.StartTimeHour;
            let FinalHourP2 = Math.abs(EndHourP2-StartHourP2)*3600;

            let StartMinuteP2 = doc.data().PostTestNumber1.StartTimeMinute;
            let EndMinuteP2 = doc.data().PostTestNumber2.StartTimeMinute;
            let FinalMinuteP2 = Math.abs(EndMinuteP2-StartMinuteP2)*60;

            let StartSecondP2 = doc.data().PostTestNumber1.StartTimeSecond;
            let EndSecondP2 = doc.data().PostTestNumber2.StartTimeSecond;
            let FinalSecondP2 = Math.abs(EndSecondP2-StartSecondP2);

            let P2AllCalculatedSecond = Math.abs((FinalHourP2-FinalMinuteP2)+FinalSecondP2);
            ////////////////////////////////////////////////////////////
            let StartHourP3 = doc.data().PostTestNumber2.StartTimeHour;
            let EndHourP3 = doc.data().PostTestNumber3.StartTimeHour;
            let FinalHourP3 = Math.abs(EndHourP3-StartHourP3)*3600;

            let StartMinuteP3 = doc.data().PostTestNumber2.StartTimeMinute;
            let EndMinuteP3 = doc.data().PostTestNumber3.StartTimeMinute;
            let FinalMinuteP3 = Math.abs(EndMinuteP3-StartMinuteP3)*60;

            let StartSecondP3 = doc.data().PostTestNumber2.StartTimeSecond;
            let EndSecondP3 = doc.data().PostTestNumber3.StartTimeSecond;
            let FinalSecondP3 = Math.abs(EndSecondP3-StartSecondP3);

            let P3AllCalculatedSecond = Math.abs((FinalHourP3-FinalMinuteP3)+FinalSecondP3);
            ////////////////////////////////////////////////////////////
            let StartHourP4 = doc.data().PostTestNumber3.StartTimeHour;
            let EndHourP4 = doc.data().PostTestNumber4.StartTimeHour;
            let FinalHourP4 = Math.abs(EndHourP4-StartHourP4)*3600;

            let StartMinuteP4 = doc.data().PostTestNumber3.StartTimeMinute;
            let EndMinuteP4 = doc.data().PostTestNumber4.StartTimeMinute;
            let FinalMinuteP4 = Math.abs(EndMinuteP4-StartMinuteP4)*60;

            let StartSecondP4 = doc.data().PostTestNumber3.StartTimeSecond;
            let EndSecondP4 = doc.data().PostTestNumber4.StartTimeSecond;
            let FinalSecondP4 = Math.abs(EndSecondP4-StartSecondP4);

            let P4AllCalculatedSecond = Math.abs((FinalHourP4-FinalMinuteP4)+FinalSecondP4);
            ////////////////////////////////////////////////////////////
            let StartHourP5 = doc.data().PostTestNumber4.StartTimeHour;
            let EndHourP5 = doc.data().PostTestNumber5.StartTimeHour;
            let FinalHourP5 = Math.abs(EndHourP5-StartHourP5)*3600;

            let StartMinuteP5 = doc.data().PostTestNumber4.StartTimeMinute;
            let EndMinuteP5 = doc.data().PostTestNumber5.StartTimeMinute;
            let FinalMinuteP5 = Math.abs(EndMinuteP5-StartMinuteP5)*60;

            let StartSecondP5 = doc.data().PostTestNumber4.StartTimeSecond;
            let EndSecondP5 = doc.data().PostTestNumber5.StartTimeSecond;
            let FinalSecondP5 = Math.abs(EndSecondP5-StartSecondP5);

            let P5AllCalculatedSecond = Math.abs((FinalHourP5-FinalMinuteP5)+FinalSecondP5);
            ////////////////////////////////////////////////////////////
            let StartHourP6 = doc.data().PostTestNumber5.StartTimeHour;
            let EndHourP6 = doc.data().PostTestNumber6.StartTimeHour;
            let FinalHourP6 = Math.abs(EndHourP6-StartHourP6)*3600;

            let StartMinuteP6 = doc.data().PostTestNumber5.StartTimeMinute;
            let EndMinuteP6 = doc.data().PostTestNumber6.StartTimeMinute;
            let FinalMinuteP6 = Math.abs(EndMinuteP6-StartMinuteP6)*60;

            let StartSecondP6 = doc.data().PostTestNumber5.StartTimeSecond;
            let EndSecondP6 = doc.data().PostTestNumber6.StartTimeSecond;
            let FinalSecondP6 = Math.abs(EndSecondP6-StartSecondP6);

            let P6AllCalculatedSecond = Math.abs((FinalHourP6-FinalMinuteP6)+FinalSecondP6);
            ////////////////////////////////////////////////////////////
            let StartHourP7 = doc.data().PostTestNumber6.StartTimeHour;
            let EndHourP7 = doc.data().PostTestNumber7.StartTimeHour;
            let FinalHourP7 = Math.abs(EndHourP7-StartHourP7)*3600;

            let StartMinuteP7 = doc.data().PostTestNumber6.StartTimeMinute;
            let EndMinuteP7 = doc.data().PostTestNumber7.StartTimeMinute;
            let FinalMinuteP7 = Math.abs(EndMinuteP7-StartMinuteP7)*60;

            let StartSecondP7 = doc.data().PostTestNumber6.StartTimeSecond;
            let EndSecondP7 = doc.data().PostTestNumber7.StartTimeSecond;
            let FinalSecondP7 = Math.abs(EndSecondP7-StartSecondP7);

            let P7AllCalculatedSecond = Math.abs((FinalHourP7-FinalMinuteP7)+FinalSecondP7);
            ////////////////////////////////////////////////////////////
            let StartHourP8 = doc.data().PostTestNumber7.StartTimeHour;
            let EndHourP8 = doc.data().PostTestNumber8.StartTimeHour;
            let FinalHourP8 = Math.abs(EndHourP8-StartHourP8)*3600;

            let StartMinuteP8 = doc.data().PostTestNumber7.StartTimeMinute;
            let EndMinuteP8 = doc.data().PostTestNumber8.StartTimeMinute;
            let FinalMinuteP8 = Math.abs(EndMinuteP8-StartMinuteP8)*60;

            let StartSecondP8 = doc.data().PostTestNumber7.StartTimeSecond;
            let EndSecondP8 = doc.data().PostTestNumber8.StartTimeSecond;
            let FinalSecondP8 = Math.abs(EndSecondP8-StartSecondP8);

            let P8AllCalculatedSecond = Math.abs((FinalHourP8-FinalMinuteP8)+FinalSecondP8);
            ////////////////////////////////////////////////////////////
            let StartHourP9 = doc.data().PostTestNumber8.StartTimeHour;
            let EndHourP9 = doc.data().PostTestNumber9.StartTimeHour;
            let FinalHourP9 = Math.abs(EndHourP9-StartHourP9)*3600;

            let StartMinuteP9 = doc.data().PostTestNumber8.StartTimeMinute;
            let EndMinuteP9 = doc.data().PostTestNumber9.StartTimeMinute;
            let FinalMinuteP9 = Math.abs(EndMinuteP9-StartMinuteP9)*60;

            let StartSecondP9 = doc.data().PostTestNumber8.StartTimeSecond;
            let EndSecondP9 = doc.data().PostTestNumber9.StartTimeSecond;
            let FinalSecondP9 = Math.abs(EndSecondP9-StartSecondP9);

            let P9AllCalculatedSecond = Math.abs((FinalHourP9-FinalMinuteP9)+FinalSecondP9);
            ////////////////////////////////////////////////////////////
            let StartHourP10 = doc.data().PostTestNumber9.StartTimeHour;
            let EndHourP10 = doc.data().PostTestNumber10.StartTimeHour;
            let FinalHourP10 = Math.abs(EndHourP10-StartHourP10)*3600;

            let StartMinuteP10 = doc.data().PostTestNumber9.StartTimeMinute;
            let EndMinuteP10 = doc.data().PostTestNumber10.StartTimeMinute;
            let FinalMinuteP10 = Math.abs(EndMinuteP10-StartMinuteP10)*60;

            let StartSecondP10 = doc.data().PostTestNumber9.StartTimeSecond;
            let EndSecondP10 = doc.data().PostTestNumber10.StartTimeSecond;
            let FinalSecondP10 = Math.abs(EndSecondP10-StartSecondP10);

            let P10AllCalculatedSecond = Math.abs((FinalHourP10-FinalMinuteP10)+FinalSecondP10);
            ////////////////////////////////////////////////////////////
            let StartHourP11 = doc.data().PostTestNumber10.StartTimeHour;
            let EndHourP11 = doc.data().PostTestNumber11.StartTimeHour;
            let FinalHourP11 = Math.abs(EndHourP11-StartHourP11)*3600;

            let StartMinuteP11 = doc.data().PostTestNumber10.StartTimeMinute;
            let EndMinuteP11 = doc.data().PostTestNumber11.StartTimeMinute;
            let FinalMinuteP11 = Math.abs(EndMinuteP11-StartMinuteP11)*60;

            let StartSecondP11 = doc.data().PostTestNumber10.StartTimeSecond;
            let EndSecondP11 = doc.data().PostTestNumber11.StartTimeSecond;
            let FinalSecondP11 = Math.abs(EndSecondP11-StartSecondP11);

            let P11AllCalculatedSecond = Math.abs((FinalHourP11-FinalMinuteP11)+FinalSecondP11);
            ////////////////////////////////////////////////////////////
            let StartHourP12 = doc.data().PostTestNumber11.StartTimeHour;
            let EndHourP12 = doc.data().PostTestNumber12.StartTimeHour;
            let FinalHourP12 = Math.abs(EndHourP12-StartHourP12)*3600;

            let StartMinuteP12 = doc.data().PostTestNumber11.StartTimeMinute;
            let EndMinuteP12 = doc.data().PostTestNumber12.StartTimeMinute;
            let FinalMinuteP12 = Math.abs(EndMinuteP12-StartMinuteP12)*60;

            let StartSecondP12 = doc.data().PostTestNumber11.StartTimeSecond;
            let EndSecondP12 = doc.data().PostTestNumber12.StartTimeSecond;
            let FinalSecondP12 = Math.abs(EndSecondP12-StartSecondP12);

            let P12AllCalculatedSecond = Math.abs((FinalHourP12-FinalMinuteP12)+FinalSecondP12);

            const item={
              PostTest1Time: P1AllCalculatedSecond,
              PostTest2Time: P2AllCalculatedSecond,
              PostTest3Time: P3AllCalculatedSecond,
              PostTest4Time: P4AllCalculatedSecond,
              PostTest5Time: P5AllCalculatedSecond,
              PostTest6Time: P6AllCalculatedSecond,
              PostTest7Time: P7AllCalculatedSecond,
              PostTest8Time: P8AllCalculatedSecond,
              PostTest9Time: P9AllCalculatedSecond,
              PostTest10Time: P10AllCalculatedSecond,
              PostTest11Time: P11AllCalculatedSecond,
              PostTest12Time: P12AllCalculatedSecond,
            }

            db.collection('UserData').doc('PostTest').collection('PostTestScore').doc(self.userTable).update(item)
        })
      },

      HomeRoute:function(){
          this.$router.push({name:'UnitHome'})
      },


    }
}
</script>

<style>

span.flow-text{
  line-height: 25px;
  font-family: 'Prompt', sans-serif;
}

</style>
