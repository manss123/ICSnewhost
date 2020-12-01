<template>
    <div class="container center">
      <div class="row" style='margin-top:20px;'>
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
      <h3 class="center">สรุปคะแนน Quiz Chapter 4</h3>
      <p class="left-align flow-text" style="font-weight:bold;">คะแนนรวมทั้งหมด</p><br>
      <div class="col s12 m12 l12 offset-s6 row center">
            <vue-circle
              ref="myUniqueID"
              :progress="progressP"
              :size="240"
              :reverse="false"
              line-cap="round"
              :fill="fill"
              empty-fill="rgba(117, 117, 117, .5)"
              :animation-start-value="0.0"
              :start-angle="4.8"
              insert-mode="append"
              :thickness="28"
              :show-percent="false"
              @vue-circle-progress="progress"
              @vue-circle-end="progress_end">
                <p class="black-text center" style="font-weight:bold;font-size:60px;margin-bottom:10px;">{{Score}}/5</p>
                <p class="black-text center" style="font-weight:normal;font-size:20px;">คะแนน</p>
            </vue-circle>
          </div>
        <div class="col s12 m12 l12 valign-wrapper row">
                    <div class="box sb1 col s12 m6 l6 left-align" style="padding:8px;margin-bottom:1%;font-weight:bold;">
                      <p class="flow-text">
                        สุดยอดครับน้อง ๆ พี่โมโม่เชื่อว่าน้อง ๆ
                        จะได้รับความรู้จากเนื้อหาที่พี่โมโม่
                        มอบให้น้อง ๆไม่มากก็น้อย พี่หวังว่า
                        จะเป็นประโยชน์กับน้อง ๆนะครับ
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
            var CalTotalScore = (TotalScore/5)*100
            self.Score = TotalScore;
            self.$refs.myUniqueID.updateProgress(CalTotalScore);
        },

      createData(){
          let self = this
         var getOptions = {
              source: 'server'
          };
          let UserScoreRef = db.collection('UserData').doc('Quiz').collection('QuizChapter4').doc(self.userTable);

                  UserScoreRef.get(getOptions).then(function(doc) {
                    self.TotalScore = doc.data().QuizNumber1.Score+
                    doc.data().QuizNumber2.Score+
                    doc.data().QuizNumber3.Score+
                    doc.data().QuizNumber4.Score+
                    doc.data().QuizNumber5.Score;
                    // console.log(self.TotalScore)
                    self.ProgressionDataFetch(self.TotalScore)
                    UserScoreRef.update({ToTalScore: self.TotalScore});
                    var delayInMilliseconds = 11000;
                    setTimeout(function(){
                        self.HomeRoute();
                    },delayInMilliseconds)
                    
                })
                self.calculateTime();
      },

      calculateTime:function(){
        let self = this
        let ref = db.collection('UserData').doc('Quiz').collection('QuizChapter1').doc(self.userTable)
        ref.get().then(function(doc){
          /////////////////////////////////////////////////////////////
            let StartHourP1 = doc.data().QuizIntro.StartTimeHour;
            let EndHourP1 = doc.data().QuizNumber1.StartTimeHour;
            let FinalHourP1 = Math.abs(EndHourP1-StartHourP1)*3600;

            let StartMinuteP1 = doc.data().QuizIntro.StartTimeMinute;
            let EndMinuteP1 = doc.data().QuizNumber1.StartTimeMinute;
            let FinalMinuteP1 = Math.abs(EndMinuteP1-StartMinuteP1)*60;

            let StartSecondP1 = doc.data().QuizIntro.StartTimeSecond;
            let EndSecondP1 = doc.data().QuizNumber1.StartTimeSecond;
            let FinalSecondP1 = Math.abs(EndSecondP1-StartSecondP1);

            let P1AllCalculatedSecond = Math.abs((FinalHourP1-FinalMinuteP1)+FinalSecondP1);
            ////////////////////////////////////////////////////////////
            let StartHourP2 = doc.data().QuizNumber1.StartTimeHour;
            let EndHourP2 = doc.data().QuizNumber2.StartTimeHour;
            let FinalHourP2 = Math.abs(EndHourP2-StartHourP2)*3600;

            let StartMinuteP2 = doc.data().QuizNumber1.StartTimeMinute;
            let EndMinuteP2 = doc.data().QuizNumber2.StartTimeMinute;
            let FinalMinuteP2 = Math.abs(EndMinuteP2-StartMinuteP2)*60;

            let StartSecondP2 = doc.data().QuizNumber1.StartTimeSecond;
            let EndSecondP2 = doc.data().QuizNumber2.StartTimeSecond;
            let FinalSecondP2 = Math.abs(EndSecondP2-StartSecondP2);

            let P2AllCalculatedSecond = Math.abs((FinalHourP2-FinalMinuteP2)+FinalSecondP2);
            ////////////////////////////////////////////////////////////
            let StartHourP3 = doc.data().QuizNumber2.StartTimeHour;
            let EndHourP3 = doc.data().QuizNumber3.StartTimeHour;
            let FinalHourP3 = Math.abs(EndHourP3-StartHourP3)*3600;

            let StartMinuteP3 = doc.data().QuizNumber2.StartTimeMinute;
            let EndMinuteP3 = doc.data().QuizNumber3.StartTimeMinute;
            let FinalMinuteP3 = Math.abs(EndMinuteP3-StartMinuteP3)*60;

            let StartSecondP3 = doc.data().QuizNumber2.StartTimeSecond;
            let EndSecondP3 = doc.data().QuizNumber3.StartTimeSecond;
            let FinalSecondP3 = Math.abs(EndSecondP3-StartSecondP3);

            let P3AllCalculatedSecond = Math.abs((FinalHourP3-FinalMinuteP3)+FinalSecondP3);
            ////////////////////////////////////////////////////////////
            let StartHourP4 = doc.data().QuizNumber3.StartTimeHour;
            let EndHourP4 = doc.data().QuizNumber4.StartTimeHour;
            let FinalHourP4 = Math.abs(EndHourP4-StartHourP4)*3600;

            let StartMinuteP4 = doc.data().QuizNumber3.StartTimeMinute;
            let EndMinuteP4 = doc.data().QuizNumber4.StartTimeMinute;
            let FinalMinuteP4 = Math.abs(EndMinuteP4-StartMinuteP4)*60;

            let StartSecondP4 = doc.data().QuizNumber3.StartTimeSecond;
            let EndSecondP4 = doc.data().QuizNumber4.StartTimeSecond;
            let FinalSecondP4 = Math.abs(EndSecondP4-StartSecondP4);

            let P4AllCalculatedSecond = Math.abs((FinalHourP4-FinalMinuteP4)+FinalSecondP4);
            ////////////////////////////////////////////////////////////
            let StartHourP5 = doc.data().QuizNumber4.StartTimeHour;
            let EndHourP5 = doc.data().QuizNumber5.StartTimeHour;
            let FinalHourP5 = Math.abs(EndHourP5-StartHourP5)*3600;

            let StartMinuteP5 = doc.data().QuizNumber4.StartTimeMinute;
            let EndMinuteP5 = doc.data().QuizNumber5.StartTimeMinute;
            let FinalMinuteP5 = Math.abs(EndMinuteP5-StartMinuteP5)*60;

            let StartSecondP5 = doc.data().QuizNumber4.StartTimeSecond;
            let EndSecondP5 = doc.data().QuizNumber5.StartTimeSecond;
            let FinalSecondP5 = Math.abs(EndSecondP5-StartSecondP5);

            let P5AllCalculatedSecond = Math.abs((FinalHourP5-FinalMinuteP5)+FinalSecondP5);

            const item={
              Quiz1Time: P1AllCalculatedSecond,
              Quiz2Time: P2AllCalculatedSecond,
              Quiz3Time: P3AllCalculatedSecond,
              Quiz4Time: P4AllCalculatedSecond,
              Quiz5Time: P5AllCalculatedSecond,
            }

            db.collection('UserData').doc('Quiz').collection('QuizChapter4').doc(self.userTable).update(item)
        })
      },

      HomeRoute:function(){
          this.$router.push({name:'UnitHome'})
      },


    }
}
</script>

<style>
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
  font-size: 40px;
  color: black;
}
</style>
