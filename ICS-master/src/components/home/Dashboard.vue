<template>
<div class="container row">
  <div id="chart">
      <h4 class="center" style="font-weight:bold;">Result</h4>
        
          <p class="flow-text">Overall Progress</p>
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
              :show-percent="true"
              @vue-circle-progress="progress"
              @vue-circle-end="progress_end">
                <p class="black-text" style="font-weight:normal;font-size:20px;">{{UserName}}</p>
            </vue-circle>
          </div>
        <p class="flow-text">Pretest-Posttest Bar Chart</p>
        <apexchart class="white" type=bar height=350 :options="chartOptions" :series="series" />
        <p class="flow-text">Overall Time</p>
        <div class="col l6 offset-l3">
          <apexchart type=pie width=450 :options="chartOptions2" :series="series2" />
        </div>
    </div>

</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import firebase from 'firebase'
import db from '@/firebase/init'
import VueCircle from 'vue2-circle-progress'
import Vue from 'vue';
     

var colors = ['#008FFB', '#FFB300', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#26a69a', '#D10CE8'];
export default {
  name: 'Chart',
  components: {
        apexchart: VueApexCharts,
        VueCircle,
      },
  data: function() {
    return {

      fill : { gradient: ["#ffd54f", "#ffc107", "#ff8f00"] },
      progressP: 0,




      series: [{
          name: 'คะแนน',
          data: []
        }],
        chartOptions: {
          chart: {
            height: 340,
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








        series2: [],
        chartOptions2: {
          labels: ['Chapter1', 'Chapter2', 'Chapter3', 'Chapter4', 'Chapter5','Chapter6'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 360
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
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
      progress(event,progress,stepValue){
        console.log(stepValue);
      },
      progress_end(event){
        console.log("Circle progress end");
      },

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
            this.PrePostDataFetch(userTable);
            this.ProgressionDataFetch(userTable);
            this.PieChartDataFetch(userTable);
        },

        ProgressionDataFetch:function(userTable){
            let self = this;
            var GetOptions = { source: 'server'};
            let UserChapterStatus = db.collection('UserData').doc('PreTest').collection('PretestScore').doc(userTable)
            let ProgressRefChap1 = db.collection('UserData').doc('Progress').collection('Chapter1').doc(userTable)
            let ProgressRefChap2 = db.collection('UserData').doc('Progress').collection('Chapter2').doc(userTable)
            let ProgressRefChap3 = db.collection('UserData').doc('Progress').collection('Chapter3').doc(userTable)
            let ProgressRefChap4 = db.collection('UserData').doc('Progress').collection('Chapter4').doc(userTable)
            let ProgressRefChap5 = db.collection('UserData').doc('Progress').collection('Chapter5').doc(userTable)
            let ProgressRefChap6 = db.collection('UserData').doc('Progress').collection('Chapter6').doc(userTable)

            var C1s,C2s,C3s,C4s,C5s,C6s;

            var PretestS, PosttestS;

            var C1U1s,C1U2s,C1U3s;

            var C2U1s,C2U2s,C2U3s;

            var C3U1s,C3U2s,C3U3s;

            var C4U1s,C4U2s,C4U3s;

            var C5U1s,C5U2s,C5U3s;

            var C6U1s,C6U2s,C6U3s;

            var ProgressPoint = 0;

            UserChapterStatus.get(GetOptions).then(function(doc){
              C1s = doc.data().PretestChapter1Level;
              C2s = doc.data().PretestChapter2Level;
              C3s = doc.data().PretestChapter3Level;
              C4s = doc.data().PretestChapter4Level;
              C5s = doc.data().PretestChapter5Level;
              C6s = doc.data().PretestChapter6Level;

              let UserRef = db.collection('users').doc(userTable)
              UserRef.get(GetOptions).then(function(doc){
                PretestS = doc.data().pretest
                PosttestS = doc.data().posttest

                ProgressRefChap1.get(GetOptions).then(function(doc){
                  C1U1s = doc.data().Unit1Status;
                  C1U2s = doc.data().Unit2Status;
                  C1U3s = doc.data().Unit3Status;

                  ProgressRefChap2.get(GetOptions).then(function(doc){
                    C2U1s = doc.data().Unit1Status;
                    C2U2s = doc.data().Unit2Status;
                    C2U3s = doc.data().Unit3Status;

                    ProgressRefChap3.get(GetOptions).then(function(doc){
                      C3U1s = doc.data().Unit1Status;
                      C3U2s = doc.data().Unit2Status;
                      C3U3s = doc.data().Unit3Status;

                      ProgressRefChap4.get(GetOptions).then(function(doc){
                        C4U1s = doc.data().Unit1Status;
                        C4U2s = doc.data().Unit2Status;
                        C4U3s = doc.data().Unit3Status;

                        ProgressRefChap5.get(GetOptions).then(function(doc){
                          C5U1s = doc.data().Unit1Status;
                          C5U2s = doc.data().Unit2Status;
                          C5U3s = doc.data().Unit3Status;

                          ProgressRefChap6.get(GetOptions).then(function(doc){
                            C6U1s = doc.data().Unit1Status;
                            C6U2s = doc.data().Unit2Status;
                            C6U3s = doc.data().Unit3Status;

                            let AllProgress = 0;

                            if(PretestS){ProgressPoint += 1; AllProgress +=1}else{ProgressPoint += 0;}  
                            if(PosttestS){ProgressPoint += 1; AllProgress +=1}else{ProgressPoint += 0;}

                            if(C1s!='Good'){
                              AllProgress +=3
                              if(C1U1s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C1U2s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C1U3s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                            }
                            if(C2s!='Good'){
                              AllProgress +=3
                              if(C2U1s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C2U2s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C2U3s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                            }
                            if(C3s!='Good'){
                              AllProgress +=3
                              if(C3U1s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C3U2s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C3U3s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                            }
                            if(C4s!='Good'){
                              AllProgress +=3
                              if(C4U1s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C4U2s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C4U3s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                            }
                            if(C5s!='Good'){
                              AllProgress +=3
                              if(C5U1s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C5U2s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C5U3s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                            }
                            if(C6s!='Good'){
                              AllProgress +=3
                              if(C6U1s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C6U2s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                              if(C6U3s){ProgressPoint += 1;}else{ProgressPoint += 0;}
                            }
                              let ProgressValue = (ProgressPoint/AllProgress)*100
                              self.$refs.myUniqueID.updateProgress(ProgressValue);

                          })


                        })


                      })


                    })


                  })

                })


              })

            })

            

            
            

            

            

            

            

            

            // let UserRef = db.collection('users').doc(userTable)
            // UserRef.get(GetOptions).then(function(doc){
            //   var progressPoint = 0;
            //   self.UserName = doc.data().firstname;
            //   if(doc.data().posttest==true){
            //       progressPoint = progressPoint+5;
            //   }
            //   if(doc.data().pretest==true){
            //     progressPoint = progressPoint+5;
            //   }
            //   ProgressRefChap1.get(GetOptions).then(function(doc){
            //     if(C1s!='Good'&&C1s!=undefined){
            //         if(doc.data().Unit1Status==true){
            //           progressPoint = progressPoint+5;
            //         }if(doc.data().Unit2Status==true){
            //           progressPoint = progressPoint+5;
            //         }if(doc.data().Unit3Status==true){
            //           progressPoint = progressPoint+5;
            //         }
            //       }else{
            //         progressPoint = progressPoint+15;
            //       }
            //             ProgressRefChap2.get(GetOptions).then(function(doc){
            //               if(C2s!='Good'&&C2s!=undefined){
            //                 if(doc.data().Unit1Status==true){
            //                   progressPoint = progressPoint+5;
            //                 }if(doc.data().Unit2Status==true){
            //                   progressPoint = progressPoint+5;
            //                 }if(doc.data().Unit3Status==true){
            //                   progressPoint = progressPoint+5;
            //                 }
            //               }
            //               else{
            //                 progressPoint = progressPoint+15;
            //               }

            //                 ProgressRefChap3.get(GetOptions).then(function(doc){
            //                   if(C3s!='Good'&&C3s!=undefined){
            //                     if(doc.data().Unit1Status==true){
            //                       progressPoint = progressPoint+5;
            //                     }if(doc.data().Unit2Status==true){
            //                       progressPoint = progressPoint+5;
            //                     }if(doc.data().Unit3Status==true){
            //                       progressPoint = progressPoint+5;
            //                     }
            //                     }
            //                   else{
            //                     progressPoint = progressPoint+15;
            //                   }

            //                       ProgressRefChap4.get(GetOptions).then(function(doc){
            //                       if(C4s!='Good'&&C4s!=undefined){
            //                           if(doc.data().Unit1Status==true){
            //                             progressPoint = progressPoint+5;
            //                           }if(doc.data().Unit2Status==true){
            //                             progressPoint = progressPoint+5;
            //                           }if(doc.data().Unit3Status==true){
            //                             progressPoint = progressPoint+5;
            //                           }
            //                           }
            //                       else{
            //                         progressPoint = progressPoint+15;
            //                       }

            //                             ProgressRefChap5.get(GetOptions).then(function(doc){
            //                               if(C5s!='Good'&&C5s!=undefined){
            //                                 if(doc.data().Unit1Status==true){
            //                                   progressPoint = progressPoint+5;
            //                                 }if(doc.data().Unit2Status==true){
            //                                   progressPoint = progressPoint+5;
            //                                 }if(doc.data().Unit3Status==true){
            //                                   progressPoint = progressPoint+5;
            //                                 }
            //                                     }
            //                               else{
            //                                 progressPoint = progressPoint+15;
            //                               }
                                        

            //                                   ProgressRefChap6.get(GetOptions).then(function(doc){
            //                                   if(C6s!='Good'&&C6s!=undefined){
            //                                     if(doc.data().Unit1Status==true){
            //                                       progressPoint = progressPoint+5;
            //                                     }if(doc.data().Unit2Status==true){
            //                                       progressPoint = progressPoint+5;
            //                                     }if(doc.data().Unit3Status==true){
            //                                       progressPoint = progressPoint+5;
            //                                     }
            //                                         }
            //                                   else{
            //                                     progressPoint = progressPoint+15;
            //                                   }
            //                                     self.progressP = progressPoint;
            //                                     self.$refs.myUniqueID.updateProgress(progressPoint);
            //                                     console.log("Chap6"+progressPoint)
            //                                 })

            //                             })
            //                     })

            //                 })
            //             })
            //       })
            // })
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

        PieChartDataFetch:function(userTable){
            let self = this;
            var GetOptions = {source:'server'};
            var Chap1AllTime = 0;
            var Chap2AllTime = 0;
            var Chap3AllTime = 0;
            var Chap4AllTime = 0;
            var Chap5AllTime = 0;
            var Chap6AllTime = 0;
            let C1TimeRef1 = db.collection('UserData').doc('Record').collection('Chapter1').doc(userTable).collection('Time').doc('1')
            let C1SequenceRef1 = db.collection('UserData').doc('Record').collection('Chapter1').doc(userTable).collection('Sequence').doc('1')
            let C1SequenceRef2 = db.collection('UserData').doc('Record').collection('Chapter1').doc(userTable).collection('Sequence').doc('2')
            let C1SequenceRef3 = db.collection('UserData').doc('Record').collection('Chapter1').doc(userTable).collection('Sequence').doc('3')
            let C2TimeRef1 = db.collection('UserData').doc('Record').collection('Chapter2').doc(userTable).collection('Time').doc('1')
            let C2SequenceRef1 = db.collection('UserData').doc('Record').collection('Chapter2').doc(userTable).collection('Sequence').doc('1')
            let C2SequenceRef2 = db.collection('UserData').doc('Record').collection('Chapter2').doc(userTable).collection('Sequence').doc('2')
            let C2SequenceRef3 = db.collection('UserData').doc('Record').collection('Chapter2').doc(userTable).collection('Sequence').doc('3')
            let C3TimeRef1 = db.collection('UserData').doc('Record').collection('Chapter3').doc(userTable).collection('Time').doc('1')
            let C3SequenceRef1 = db.collection('UserData').doc('Record').collection('Chapter3').doc(userTable).collection('Sequence').doc('1')
            let C3SequenceRef2 = db.collection('UserData').doc('Record').collection('Chapter3').doc(userTable).collection('Sequence').doc('2')
            let C3SequenceRef3 = db.collection('UserData').doc('Record').collection('Chapter3').doc(userTable).collection('Sequence').doc('3')
            let C4TimeRef1 = db.collection('UserData').doc('Record').collection('Chapter4').doc(userTable).collection('Time').doc('1')
            let C4SequenceRef1 = db.collection('UserData').doc('Record').collection('Chapter4').doc(userTable).collection('Sequence').doc('1')
            let C4SequenceRef2 = db.collection('UserData').doc('Record').collection('Chapter4').doc(userTable).collection('Sequence').doc('2')
            let C4SequenceRef3 = db.collection('UserData').doc('Record').collection('Chapter4').doc(userTable).collection('Sequence').doc('3')
            let C5TimeRef1 = db.collection('UserData').doc('Record').collection('Chapter5').doc(userTable).collection('Time').doc('1')
            let C5SequenceRef1 = db.collection('UserData').doc('Record').collection('Chapter5').doc(userTable).collection('Sequence').doc('1')
            let C5SequenceRef2 = db.collection('UserData').doc('Record').collection('Chapter5').doc(userTable).collection('Sequence').doc('2')
            let C5SequenceRef3 = db.collection('UserData').doc('Record').collection('Chapter5').doc(userTable).collection('Sequence').doc('3')
            let C6TimeRef1 = db.collection('UserData').doc('Record').collection('Chapter6').doc(userTable).collection('Time').doc('1')
            let C6SequenceRef1 = db.collection('UserData').doc('Record').collection('Chapter6').doc(userTable).collection('Sequence').doc('1')
            let C6SequenceRef2 = db.collection('UserData').doc('Record').collection('Chapter6').doc(userTable).collection('Sequence').doc('2')
            let C6SequenceRef3 = db.collection('UserData').doc('Record').collection('Chapter6').doc(userTable).collection('Sequence').doc('3')

            C1TimeRef1.get(GetOptions).then(function(doc){
              var Chap1FirstTimeLevel = doc.data().Unit1Status;
              if(doc.data().Unit1Status){
                  C1SequenceRef1.get(GetOptions).then(function(doc){
                    if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                      if(doc.data().Unit=='Unit1'){
                        Chap1AllTime = Chap1AllTime+ doc.data().AllSecond;
                      }
                      else if(doc.data().Unit=='Unit2'){
                        Chap1AllTime = Chap1AllTime+ doc.data().AllSecond;
                      }
                      else if(doc.data().Unit=='Unit3'){
                        Chap1AllTime = Chap1AllTime+ doc.data().AllSecond;
                      }
                    }else{
                      Chap1AllTime = 0;
                    } ////////////////// If

                          C1SequenceRef2.get(GetOptions).then(function(doc){
                            if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                            if(doc.data().Unit=='Unit1'){
                            Chap1AllTime = Chap1AllTime+ doc.data().AllSecond;
                          }
                          else if(doc.data().Unit=='Unit2'){
                            Chap1AllTime = Chap1AllTime+ doc.data().AllSecond;
                          }
                          else if(doc.data().Unit=='Unit3'){
                            Chap1AllTime = Chap1AllTime+ doc.data().AllSecond;
                          }
                            }
                              C1SequenceRef3.get(GetOptions).then(function(doc){
                              
                          if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                          if(doc.data().Unit=='Unit1'){
                            Chap1AllTime = Chap1AllTime+ doc.data().AllSecond;
                          }
                          else if(doc.data().Unit=='Unit2'){
                            Chap1AllTime = Chap1AllTime+ doc.data().AllSecond;
                          }
                          else if(doc.data().Unit=='Unit3'){
                            Chap1AllTime = Chap1AllTime+ doc.data().AllSecond;
                          }
                          }
                                    C2TimeRef1.get(GetOptions).then(function(doc){
              var Chap2FirstTimeLevel = doc.data().Unit1Status;
              if(doc.data().Unit1Status){
                console.log(doc.data().Unit1Status);
                  C2SequenceRef1.get(GetOptions).then(function(doc){
                    if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                    if(doc.data().Unit=='Unit1'){
                      Chap2AllTime = Chap2AllTime+ doc.data().AllSecond;
                    }
                    else if(doc.data().Unit=='Unit2'){
                      Chap2AllTime = Chap2AllTime+ doc.data().AllSecond;
                    }
                    else if(doc.data().Unit=='Unit3'){
                      Chap2AllTime = Chap2AllTime+ doc.data().AllSecond;
                    }
                    console.log(doc.data().AllSecond)
                          }

                          C2SequenceRef2.get(GetOptions).then(function(doc){
                            if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                              if(doc.data().Unit=='Unit1'){
                                Chap2AllTime = Chap2AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit2'){
                                Chap2AllTime = Chap2AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit3'){
                                Chap2AllTime = Chap2AllTime+ doc.data().AllSecond;
                              }
                              console.log(doc.data().AllSecond)
                          }
                              C2SequenceRef3.get(GetOptions).then(function(doc){
                              if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                              if(doc.data().Unit=='Unit1'){
                                Chap2AllTime = Chap2AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit2'){
                                Chap2AllTime = Chap2AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit3'){
                                Chap2AllTime = Chap2AllTime+ doc.data().AllSecond;
                              }
                              console.log(doc.data().AllSecond)
                          }
                                    C3TimeRef1.get(GetOptions).then(function(doc){
              var Chap3FirstTimeLevel = doc.data().Unit1Status;
              if(doc.data().Unit1Status){
                  C3SequenceRef1.get(GetOptions).then(function(doc){
                    if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                        if(doc.data().Unit=='Unit1'){
                          Chap3AllTime = Chap3AllTime+ doc.data().AllSecond;
                        }
                        else if(doc.data().Unit=='Unit2'){
                          Chap3AllTime = Chap3AllTime+ doc.data().AllSecond;
                        }
                        else if(doc.data().Unit=='Unit3'){
                          Chap3AllTime = Chap3AllTime+ doc.data().AllSecond;
                        }
                    }

                          C3SequenceRef2.get(GetOptions).then(function(doc){
                            if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                            if(doc.data().Unit=='Unit1'){
                            Chap3AllTime = Chap3AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit2'){
                                Chap3AllTime = Chap3AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit3'){
                                Chap3AllTime = Chap3AllTime+ doc.data().AllSecond;
                              }
                            }
                              C3SequenceRef3.get(GetOptions).then(function(doc){
                                if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                                  if(doc.data().Unit=='Unit1'){
                                  Chap3AllTime = Chap3AllTime+ doc.data().AllSecond;
                                  }
                                  else if(doc.data().Unit=='Unit2'){
                                    Chap3AllTime = Chap3AllTime+ doc.data().AllSecond;
                                  }
                                  else if(doc.data().Unit=='Unit3'){
                                    Chap3AllTime = Chap3AllTime+ doc.data().AllSecond;
                                  }
                                }
                                    C4TimeRef1.get(GetOptions).then(function(doc){
              var Chap4FirstTimeLevel = doc.data().Unit1Status;
              if(doc.data().Unit1Status){
                  C4SequenceRef1.get(GetOptions).then(function(doc){
                    if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                      if(doc.data().Unit=='Unit1'){
                        Chap4AllTime = Chap4AllTime+ doc.data().AllSecond;
                      }
                      else if(doc.data().Unit=='Unit2'){
                        Chap4AllTime = Chap4AllTime+ doc.data().AllSecond;
                      }
                      else if(doc.data().Unit=='Unit3'){
                        Chap4AllTime = Chap4AllTime+ doc.data().AllSecond;
                      }
                    }

                          C4SequenceRef2.get(GetOptions).then(function(doc){
                            if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                              if(doc.data().Unit=='Unit1'){
                              Chap4AllTime = Chap4AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit2'){
                                Chap4AllTime = Chap4AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit3'){
                                Chap4AllTime = Chap4AllTime+ doc.data().AllSecond;
                              }
                            }
                              C4SequenceRef3.get(GetOptions).then(function(doc){
                                if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                                  if(doc.data().Unit=='Unit1'){
                                  Chap4AllTime = Chap4AllTime+ doc.data().AllSecond;
                                  }
                                  else if(doc.data().Unit=='Unit2'){
                                    Chap4AllTime = Chap4AllTime+ doc.data().AllSecond;
                                  }
                                  else if(doc.data().Unit=='Unit3'){
                                    Chap4AllTime = Chap4AllTime+ doc.data().AllSecond;
                                  }
                                }
                                    C5TimeRef1.get(GetOptions).then(function(doc){
              var Chap5FirstTimeLevel = doc.data().Unit1Status;
              if(doc.data().Unit1Status){
                  C5SequenceRef1.get(GetOptions).then(function(doc){
                    if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                      if(doc.data().Unit=='Unit1'){
                        Chap5AllTime = Chap5AllTime+ doc.data().AllSecond;
                      }
                      else if(doc.data().Unit=='Unit2'){
                        Chap5AllTime = Chap5AllTime+ doc.data().AllSecond;
                      }
                      else if(doc.data().Unit=='Unit3'){
                        Chap5AllTime = Chap5AllTime+ doc.data().AllSecond;
                      }
                    }

                          C5SequenceRef2.get(GetOptions).then(function(doc){
                            if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                              if(doc.data().Unit=='Unit1'){
                                Chap5AllTime = Chap5AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit2'){
                                Chap5AllTime = Chap5AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit3'){
                                Chap5AllTime = Chap5AllTime+ doc.data().AllSecond;
                              }
                            }
                              C5SequenceRef3.get(GetOptions).then(function(doc){
                              if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                                if(doc.data().Unit=='Unit1'){
                                Chap5AllTime = Chap5AllTime+ doc.data().AllSecond;
                                }
                                else if(doc.data().Unit=='Unit2'){
                                  Chap5AllTime = Chap5AllTime+ doc.data().AllSecond;
                                }
                                else if(doc.data().Unit=='Unit3'){
                                  Chap5AllTime = Chap5AllTime+ doc.data().AllSecond;
                                }
                              }
                                    C6TimeRef1.get(GetOptions).then(function(doc){
              var Chap6FirstTimeLevel = doc.data().Unit1Status;
              if(doc.data().Unit1Status){
                  C6SequenceRef1.get(GetOptions).then(function(doc){
                    if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                      if(doc.data().Unit=='Unit1'){
                        Chap6AllTime = Chap6AllTime+ doc.data().AllSecond;
                      }
                      else if(doc.data().Unit=='Unit2'){
                        Chap6AllTime = Chap6AllTime+ doc.data().AllSecond;
                      }
                      else if(doc.data().Unit=='Unit3'){
                        Chap6AllTime = Chap6AllTime+ doc.data().AllSecond;
                      }
                    }

                          C6SequenceRef2.get(GetOptions).then(function(doc){
                            if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                              if(doc.data().Unit=='Unit1'){
                                Chap6AllTime = Chap6AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit2'){
                                Chap6AllTime = Chap6AllTime+ doc.data().AllSecond;
                              }
                              else if(doc.data().Unit=='Unit3'){
                                Chap6AllTime = Chap6AllTime+ doc.data().AllSecond;
                              }
                            }
                              C6SequenceRef3.get(GetOptions).then(function(doc){
                                if(doc.exists&&doc.data().Unit!=undefined&&doc.data().AllSecond!=undefined){
                                  if(doc.data().Unit=='Unit1'){
                                  Chap6AllTime = Chap6AllTime+ doc.data().AllSecond;
                                  }
                                  else if(doc.data().Unit=='Unit2'){
                                    Chap6AllTime = Chap6AllTime+ doc.data().AllSecond;
                                  }
                                  else if(doc.data().Unit=='Unit3'){
                                    Chap6AllTime = Chap6AllTime+ doc.data().AllSecond;
                                  }
                                }
                                    self.series2 = [Chap1AllTime,Chap2AllTime,Chap3AllTime,Chap4AllTime,Chap5AllTime,Chap6AllTime]
                                    console.log(self.series2);
                              })
                          })

                  })
              }
            })
                              })
                          })

                  })
              }
            })
                              })
                          })

                  })
              }
            })
                              })
                          })

                  })
              }
            })
                              })
                          })

                  })
              }
            })
                              })
                          })
                  
                  })
              }
            })
        },

  },
}
</script>
<style scoped>
div.circle{
  font-family: Impact;
  font-weight: bold;
  font-size: 30px;
  color: grey;
}
</style>
