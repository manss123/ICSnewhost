<template>
    <div class="container">
        <div style="margin-top:50px;">
            <h1 class="center" style="color:#039be5;">แบบทดสอบก่อนเรียน</h1>
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
        </div>
        <div class="col s12 m12 l12 valign-wrapper row">
                    <div class="box sb1 col s12 m6 l6 left-align" style="padding:8px;margin-bottom:1%;font-weight:bold;">
                      <p class="flow-text">
                        ก่อนที่จะเข้าบทเรียน พี่โมโม่อยากให้
                        น้อง ๆมาทำแบบทดสอบก่อนเรียนกันครับ 
                      </p>
                    </div>
                    <img src="https://dlabi.com/project/interactive-computing-science/Materials/Momo/momofinal.gif" alt="" class="col s6 m3 l3">
            </div> 
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'unit1Mp1',
    data(){
        return{
            userTable: null,
        }
    },
    created(){
        let self = this
        var DelayInMilliSeconds = 3000;
        setTimeout(function(){
            self.Quiz1();
        },DelayInMilliSeconds)
        
    },
    methods:{

        Quiz1:function(){
            this.$router.push({name:'PreTest'});

            firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              self.userTable = user.email
            }else{
                this.user = null
                console.log(this.user)
            }
            })
            var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
             const item={
                PreTestIntro:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                              },
                        };
                db.collection('UserData').doc('PreTest').collection('PretestScore').doc(self.userTable).set(item)
        }

       
    }
}
</script>

<style>

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
</style>
