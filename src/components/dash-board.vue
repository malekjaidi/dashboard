<template>
    <div class="dashboard">
    <div class="row header">
        <div class="col-md-9 mt-2 menuItem">
            <h5>Dashboard</h5>
        </div>

        <div class="col-md-2 mt-1 d-flex justify-content-end mr-2">
            <img class="profile" src="../assets/profile.png">
        </div>
    </div>
    <!-- <div class="row header"></div> -->

    <div class="row body" >
    <div class="chart">
        <apex-chart
            :type="type"
            width="325"
            :options="chartOptions"
            :series="series"
            >
        </apex-chart>
    </div>


    <div class="chart">
        <apex-chart
            :type="type1"
            width="325"
            :options="chartOptions"
            :series="series"
            >
        </apex-chart>
    </div>


    <div class="chart">
        <apex-chart 
              type="donut" 
              width="325"
              :options="chartOptions_1" 
              :series="series_1">
        </apex-chart>

    </div>
    
    <div class="row">
        <div class="chart">
            <apex-chart type="line" 
              height="350" 
              width="550"
              :options="chartOptions_2" 
              :series="series_2">
          </apex-chart>
        </div>
    </div>

 



    </div>
    
        
    </div>
</template>
<script>

export default {


data(){
    return{
    type: "bar",
    type1: "line",
    chartOptions: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
    series: [
        {
          name: "series-1",
          data: [30, 80, 45, 50, 49, 60, 70, 100],
        },
      ],
 //// chart 3
          
          series_2: [{
            name: 'Income',
            type: 'column',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
          }, 
          {
            name: 'Cashflow',
            type: 'column',
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
          }, 
          {
            name: 'Revenue',
            type: 'line',
            data: [20, 29, 37, 36, 44, 45, 50, 58]
          }],

          
          chartOptions_2: {
            chart: {
              height: 350,
              type: 'line',
              stacked: false
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: [1, 1, 4]
            },
            title: {
              text: 'XYZ - Stock Analysis (2009 - 2016)',
              align: 'left',
              offsetX: 110
            },
            xaxis: {
              categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
            },
            yaxis: [
              {
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#008FFB'
                },
                labels: {
                  style: {
                    colors: '#008FFB',
                  }
                },
                title: {
                  text: "Income (thousand crores)",
                  style: {
                    color: '#008FFB',
                  }
                },
                tooltip: {
                  enabled: true
                }
              },
              {
                seriesName: 'Income',
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#00E396'
                },
                labels: {
                  style: {
                    colors: '#00E396',
                  }
                },
                title: {
                  text: "Operating Cashflow (thousand crores)",
                  style: {
                    color: '#00E396',
                  }
                },
              },
              {
                seriesName: 'Revenue',
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#FEB019'
                },
                labels: {
                  style: {
                    colors: '#FEB019',
                  },
                },
                title: {
                  text: "Revenue (thousand crores)",
                  style: {
                    color: '#FEB019',
                  }
                }
              },
            ],
            tooltip: {
              fixed: {
                enabled: true,
                position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
              },
            },
            legend: {
              horizontalAlign: 'left',
              offsetX: 40
            }
          },
          
          

/// end cart 3

      series_1: [44, 55, 41, 17, 15],
      chartOptions_1: {
            chart: {
              type: 'donut',
            },
            
            responsive: [{
              breakpoint: 200,
              options: {
                chart: {
                  width: 450,
                  height:300  
                },
                legend: {
                  position: 'bottom',
                }
              }
            }]
          }
    }
}
    
}
</script>
<style scoped>
.dashboard{
    background-color: rgb(239, 249, 249);
    height: 100%;
 
}
.header{
    display: flex;
    justify-content: space-between;
    background-color: rgb(225, 226, 226);
    height: 50px;
    margin-left: 20px !important;
    margin-right: 20px !important;
    border-radius: 1rem;
    align-content: center;
    position: fixed;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 80%;
    z-index: 99;
    
    

}
.menuItem{
    margin-left:20px;
    align-content: center;
}
.body{
    /* margin-top: 20px; */
    /* margin :5px; */
    padding-top: 50px;
    border-radius: 1rem;
    border-bottom-width: 1px;
    margin-left: 20px;

}
.chart{
    background-color:rgb(235, 235, 235); 
    border-radius: 1rem;
    width:fit-content;
    padding: 10px;
    margin:12px;
    margin-left:20px;

}
.profile{
    width: 30px;
    height: 30px;
    margin-right: 15px;
}

</style>