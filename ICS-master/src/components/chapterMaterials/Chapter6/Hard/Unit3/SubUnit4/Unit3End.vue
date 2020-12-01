<template>
    <div class="unit container col s12 m12 l12">
        <div class="container col s12 m12 l12" style="margin-top:1%;">    

            <div class="row card-panel yellow accent-1 s12 m12 l12 valign-wrapper black-text" style="margin-top:10px;">
                    <div class="left-align flow-text col s12 m12 l12 center"><h5 style="font-weight:bold;"> ก่อนจากกัน </h5></div> 
            </div>

            <div class="col s12 m12 l12 row">
                    <div class="box box-bg sb12 col s12 m12 l12 flow-text left" style="padding:8px;margin-bottom:1%;font-weight:bold;">
                        ว้า...น่าเสียดายจัง กําลังสนุกๆเลย แต่ไม่เป็นไร พบกันใหม่ในบทเรียนหน้านะครับ
                    </div>
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="col s6 m4 l4 offset-s3 offset-m4 offset-l4">
            </div>

                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'Chapter6'}"><a class="waves-effect yellow darken-2 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'Chapter6'}"><a class="waves-effect yellow darken-2 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 

        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    data(){
        return{
            userTable: null,
            email: null,
            AllTime: null,
            AllScore: null,
            nextLevel: null,
            RecordTime: null,
            checkTime: null,
            UnitTime: null,
        }
    },
    created(){
        this.checkUser();
    },
    methods:{
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

        GetEmail:function(userTable){
            var getOptions={source:'server'};
            let self = this;
            this.email = userTable
            let StatusRef = db.collection('UserData').doc('Sequence').collection('SequenceCount').doc(self.userTable)
            StatusRef.get(getOptions).then(function(doc){
                self.checkTime = doc.data().Time;
                var ScheckTime = self.checkTime.toString();
                let SequenceRef = db.collection('UserData').doc('Sequence').collection('SequenceRecord').doc(userTable)
                SequenceRef.get(getOptions).then(function(doc){
                let SequenceRef = db.collection('UserData').doc('Sequence').collection('Chapter6Count').doc(userTable)
                SequenceRef.get().then(function(doc){
                    self.UnitTime = doc.data().Time.toString();
                    if(doc.data()[self.checkTime]!=undefined){
                        self.RecordTime = self.checkTime;
                        let SequenceData = doc.data();
                        self.UpdateStatus(self.userTable,self.RecordTime,SequenceData,self.UnitTime);
                    }else{
                        self.RecordTime = self.checkTime;
                        let SequenceData = doc.data();
                        self.UpdateStatus(self.userTable,self.RecordTime,SequenceData,self.UnitTime);
                    }
                })
                })
            })
        },

         UpdateStatus:function(userTable,RecordTime,SequenceData,UnitTime){
            let self = this;
            var getOptions={ source: 'server'};
            let LoggingRef = db.collection('UserData').doc('Loging').collection('Chapter6').doc('Unit1').collection('Level').doc('Hard').collection('Chapter6Unit3HardLoging').doc(userTable).collection('Chapter6Unit3HardSequence').doc(UnitTime)
            
            LoggingRef.get(getOptions).then(function(doc){
                
                let Unit3Time = doc.data().Round1Page1Time.AllSecond + doc.data().Round1Page2Time.AllSecond + doc.data().Round2Page1Time.AllSecond + doc.data().Round2Page2Time.AllSecond
                            + doc.data().Round3Page1Time.AllSecond + doc.data().Round3Page2Time.AllSecond + doc.data().Round4Page1Time.AllSecond + doc.data().Round4Page2Time.AllSecond;
                let Unit3Score = doc.data().Round1Log.Correct+ doc.data().Round2Log.Correct + doc.data().Round3Log.Correct;
                
                let Total = (Unit3Time/8)
                console.log("Time "+Unit3Time);
                console.log("Score "+Unit3Score);
                console.log("Total "+Total);


                const SequenceAllSec = {
                    Chapter: SequenceData[self.checkTime].Chapter,
                    Unit: SequenceData[self.checkTime].Unit,
                    Level: SequenceData[self.checkTime].Level,
                    AllSecond: Unit3Time}


                var RecordTimeOrigin = (self.checkTime).toString();
                if(Total<25){
                    if(Unit3Score<2){
                        self.nextLevel = "Low";
                    }
                    else if(Unit3Score==2){
                        self.nextLevel = "Medium";
                    }
                    else if(Unit3Score>=3){
                        self.nextLevel = "Good";
                    }
                    const NextStatus={
                        Unit1Status: self.nextLevel,
                        Unit2Status: self.nextLevel,
                        Unit3Status: self.nextLevel,
                        Time: self.RecordTime,
                    }
                    const RecordTime={
                        Unit1Status: self.nextLevel,
                        Unit2Status: self.nextLevel,
                        Unit3Status: self.nextLevel,
                    }
                    var RecordTimeString = self.RecordTime.toString();
                    db.collection('UserData').doc('Status').collection('Chapter6').doc(userTable).update(NextStatus)
                    db.collection('UserData').doc('Record').collection('Chapter6').doc(userTable).collection('Time').doc(RecordTimeString).set(RecordTime)
                    db.collection('UserData').doc('Sequence').collection('SequenceRecord').doc(userTable).update({[RecordTimeOrigin]:SequenceAllSec})

                }else if(Total>=25&&Total<=35){
                    if(Unit3Score<2){
                        self.nextLevel = "Low";
                    }
                    else if(Unit3Score==2){
                        self.nextLevel = "Medium";
                    }
                    else if(Unit3Score>=3){
                        self.nextLevel = "Medium";
                    }
                    const NextStatus={
                        Unit1Status: self.nextLevel,
                        Unit2Status: self.nextLevel,
                        Unit3Status: self.nextLevel,
                        Time: self.RecordTime,
                    }
                    const RecordTime={
                        Unit1Status: self.nextLevel,
                        Unit2Status: self.nextLevel,
                        Unit3Status: self.nextLevel,
                    }
                    var RecordTimeString = self.RecordTime.toString();
                    db.collection('UserData').doc('Status').collection('Chapter6').doc(userTable).update(NextStatus)
                    db.collection('UserData').doc('Record').collection('Chapter6').doc(userTable).collection('Time').doc(RecordTimeString).set(RecordTime)
                    db.collection('UserData').doc('Sequence').collection('SequenceRecord').doc(userTable).update({[RecordTimeOrigin]:SequenceAllSec})
                }else if(Total>35){
                    if(Unit3Score<2){
                        self.nextLevel = "Low";
                    }
                    else if(Unit3Score==2){
                        self.nextLevel = "Low";
                    }
                    else if(Unit3Score>=3){
                        self.nextLevel = "Medium";
                    }
                    const NextStatus={
                        Unit1Status: self.nextLevel,
                        Unit2Status: self.nextLevel,
                        Unit3Status: self.nextLevel,
                        Time: self.RecordTime,
                    }
                    const RecordTime={
                        Unit1Status: self.nextLevel,
                        Unit2Status: self.nextLevel,
                        Unit3Status: self.nextLevel,
                    }
                    var RecordTimeString = self.RecordTime.toString();
                    db.collection('UserData').doc('Status').collection('Chapter6').doc(userTable).update(NextStatus)
                    db.collection('UserData').doc('Record').collection('Chapter6').doc(userTable).collection('Time').doc(RecordTimeString).set(RecordTime)
                    db.collection('UserData').doc('Sequence').collection('SequenceRecord').doc(userTable).update({[RecordTimeOrigin]:SequenceAllSec})
                }


               db.collection('UserData').doc('Sequence').collection('SequenceCount').doc(userTable).update({Time: self.checkTime+1})
               db.collection('UserData').doc('Sequence').collection('Chapter6Count').doc(userTable).update({Time: self.UnitTime+1})
                


                const ProgressUpdate={
                        Unit3Status: true,
                    }
                    db.collection('UserData').doc('Progress').collection('Chapter6').doc(self.userTable).update(ProgressUpdate)
            })
        },


    },
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
