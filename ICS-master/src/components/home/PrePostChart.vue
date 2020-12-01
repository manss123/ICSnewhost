<template>
    <apexchart type=bar height=350 :options="chartOptions" :series="series" />
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import firebase from 'firebase'
import db from '@/firebase/init'
import Vue from 'vue';


var colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
export default {
    components:{
        apexchart: VueApexCharts,
    },
    data:function(){
        return {
                  series: [{
                    name: 'คะแนน',
                    data: []
                    }],
                    chartOptions: {
                    chart: {
                        height: 350,
                        type: 'bar',
                        events: {
                        click: function (chart, w, e) {
                            console.log(chart, w, e)
                        }
                        },
                    },
                    colors: colors,
                    plotOptions: {
                        bar: {
                        columnWidth: '30%',
                        distributed: true
                        }
                    },
                    dataLabels: {
                        enabled: false,
                    },

                    xaxis: {
                        categories: ['Pretest', 'Posttest'],
                        labels: {
                        style: {
                            colors: colors,
                            fontSize: '20px'
                        }
                        }
                    },
                    yaxis: {
                    max: 12
                    }
                },


        Email: null,
        userTable: null,
        UserName: null,




        }
    },

    created(){
        this.checkUser();
    },
    methods:{
        checkUser:function(){
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
                  self.userTable = doc.id
                  self.GetEmail(self.userTable);
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
            let self = this;
            this.Email = userTable;
            self.PrePostDataFetch(userTable);
        },

        PrePostDataFetch:function(userTable){
            let self = this;
            let PretestRef = db.collection('UserData').doc('PreTest').collection('Score').doc(userTable)
            let PosttestRef = db.collection('UserData').doc('PostTest').collection('Score').doc(userTable)
            var GetOptions = {source:'server'};
            
            PretestRef.get(GetOptions).then(function(doc){
              var PreTestScore = 0;
              PreTestScore = doc.data().ToTalScore;

              PosttestRef.get(GetOptions).then(function(doc){
              var PostTestScore = 0;
              if(doc.exists){
                PostTestScore = doc.data().ToTalScore;
              }
              self.series = [{
                    data: [PreTestScore,PostTestScore]
              }]
            })
            })
        },
    }
}
</script>

<style>

</style>
