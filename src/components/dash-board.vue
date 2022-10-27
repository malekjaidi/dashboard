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

    <div class="row body" >
    <div class="chart">
        <apex-chart
            :type="type"
            width="550"
            :options="chartOptions"
            :series="series"
            >
        </apex-chart>
    </div>

    <div class="chart">
        <apex-chart
            :type="type1"
            width="550"
            :options="chartOptions"
            :series="series"
            >
        </apex-chart>
    </div>


    <div class="chart">
        <apexchart 
              type="donut" 
              :options="chartOptions1" 
              :series="series1">
        </apexchart>

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


      series1: [44, 55, 41, 17, 15],
      chartOptions1: {
            chart: {
              type: 'donut',
            },
            
            responsive: [{
              breakpoint: 200,
              options: {
                chart: {
                  width: 200,
                  height:200
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
    height: 100vh;
 
}
.header{
    display: flex;
    justify-content: space-between;
    background-color: rgb(225, 226, 226);
    height: 50px;
    margin-left: 20px !important;
    margin-right: 20px !important;
    margin :5px;
    border-radius: 1rem;
    align-content: center;

}
.menuItem{
    margin-left:20px;
    align-content: center;
}
.body{
    margin-top: 20px;
    margin :5px;
    border-radius: 1rem;
    border-bottom-width: 1px;
}
.chart{
    background-color:rgb(235, 235, 235); 
    border-radius: 1rem;
    width: 36%;
    padding: 10px;
    margin:20px;
    margin-left:20px;

}
.profile{
    width: 30px;
    height: 30px;
    margin-right: 15px;
}

</style>