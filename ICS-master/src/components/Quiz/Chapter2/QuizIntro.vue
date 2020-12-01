<template>
    <div class="container">
        <div style="margin-top:50px;">
            <h1 class="center" style="color:#039be5;">Quiz</h1>
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
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'
export default {
    name: 'unit1Mp1',
    data(){
        return{
            
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
            var date = new Date();
            var getDate = date.getDate();
            var getMonth = date.getMonth()+1;
            var getYear = date.getFullYear();
            var getHour = date.getHours();
            var getMinute = date.getMinutes();
            var getSec = date.getSeconds();
            var Fulldate = "Date: "+getDate+"/"+getMonth+"/"+ getYear+" Time: "+getHour+"."+getMinute+"."+getSec;
             const item={
                QuizIntro:{
                            StartDate: parseInt(getDate),
                            StartMonth: parseInt(getMonth),
                            StartYear: parseInt(getYear),
                            StartTimeHour: parseInt(getHour),
                            StartTimeMinute: parseInt(getMinute),
                            StartTimeSecond: parseInt(getSec),
                            StartFullDate: Fulldate,
                              },
                        };
                db.collection('UserData').doc('Quiz').collection('QuizChapter2').doc(self.userTable).set(item)
            this.$router.push({name:'Chapter2Quiz1'});
        }

       
    }
}
</script>

<style>

</style>
