<template>
    <div class="unit container center col s12 m12 l12">
        <div class="container center col s12 m12 l12" style="margin-top:1%;">  
            <ul class="pagination">
            <p class="flow-text" style="display:inline;">หน่วยที่: </p>
            <li class="waves-effect"><a href="#!">1</a></li>
            <li class="waves-effect"><a href="#!">2</a></li>
            <li class="waves-effect"><a href="#!">3</a></li>
            <li class="active"><a href="#!">4</a></li>
        </ul>

            <div class="row card-panel light-green accent-1 s12 m12 l12 valign-wrapper black-text" style="margin-top:10px;">
                    <div class="container col s6 m6 l6 right right-align" style="margin-top:0%;padding:0%;">
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Icon%20-%20Unit/Chapter4/unit4.1.png" alt="" class="circle responsive-img col s10 m4 l4 right right-align offset-l4">
                    </div>
                    <div class="left-align flow-text col s8 m8 l8 left"><h5 style="font-weight:bold;"> ข่าวลวง </h5></div> 
            </div>

                    <div class="card light-green darken-1 col s12 m12 l12 white-text" style="padding:30px;margin-bottom:30px;">
                <h4>มาเริ่มกันเลย</h4>
                <p class="flow-text">บางครั้งข่าวสาร หรือข้อมูลที่น้องๆได้อ่านมาอาจจะไม่ใช่เรื่องจริงทั้งหมด ดังนั้น หมั่นหาความรู้เพิ่มเติม รับข้อมูลจากหลาย ๆ แหล่ง เพื่อให้เราไม่ตกเป็นเหยื่อของข่าวปลอมได้</p>
            </div>



            <div class="col s12 m12 l12 valign-wrapper row">
                    <div class="box sb1 col s12 m12 l12 flow-text left" style="padding:8px;margin-bottom:1%;font-weight:bold;">
                        แล้วน้องๆรู้ไหมครับว่า เราสามารถตรวจสอบข่าว ปลอมได้ด้วยตนเอง ตามพี่ โมโม่มาเลยครับ
                    </div>
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="col s6 m3 l3">
            </div>


                    <div class="left col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C4Unit1HardRound3P1'}"><a class="waves-effect light-green darken-1 waves-light flow-text btn-large align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="left col s12 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C4Unit1HardRound3P1'}"><a class="waves-effect light-green darken-1 waves-light flow-text btn-small align-center left"> ย้อนกลับ </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-small-only">
                                <router-link :to="{name:'C4Unit1HardRound4P2'}"><a @click="submit" class="waves-effect light-green darken-1 waves-light flow-text btn-large align-center right"> ต่อไป </a></router-link>
                    </div>
                    <div class="right col s12 m12 l6 hide-on-med-and-up">
                                <router-link :to="{name:'C4Unit1HardRound4P2'}"><a @click="submit" class="waves-effect light-green darken-1 waves-light flow-text btn-small align-center right"> ต่อไป </a></router-link>
                    </div> 

        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'Unit1Mp1',
    data(){
        return{
            userTable: null,
        }
    },
    created(){
        let self = this
        var getOptions = {
                source: 'server'
              };
    
        this.checkUser()
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
            console.log("Cached document data:", self.ArrayQ);
            const item={
                Round4Page1End:{
                            EndDate: parseInt(getDate),
                            EndMonth: parseInt(getMonth),
                            EndYear: parseInt(getYear),
                            EndTimeHour: parseInt(getHour),
                            EndTimeMinute: parseInt(getMinute),
                            EndTimeSecond: parseInt(getSec),
                            EndFullDate: Fulldate,
                },
                Round4Page2Start:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                       },
               
            };
           db.collection('UserData').doc('Content').collection('Chapter4').doc('Unit1').collection('Level').doc('Hard').collection('Content').doc(self.userTable).update(item).then(res=>{
                      self.Round4Page1End="";
                      self.Round4Page2Start="";
                      
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
        }
    }
}
</script>

<style>
div.feedback{
    margin-bottom: 230 px;
}
p{
    font-family: 'Prompt', sans-serif;
    font-size: 16px;
}
p.flow-text {
    font-size: 12px;
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
  text-align: left;
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
