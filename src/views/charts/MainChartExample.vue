<template>
  <CChartLine
    :datasets="defaultDatasets"
    :options="defaultOptions"
    :labels="lables"
   
  />
</template>

<script>
import { CChartLine } from '@coreui/vue-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils/src'

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  name: 'MainChartExample',
  data(){
    return {
      host:"http://localhost:8080",
      data:[],
      sensorDataValue:[],
      lables:[],

    }
  },
  components: {
    CChartLine
  },

  methods:{
    getSensorData(){
      //api="test"
      // Vue.axios.get(api).then((response) => {
      // console.log(response.data)
      // console.log("Test")
      // })
       let uri=this.host+"/sensor-data/10/2"
       //let uri="http://localhost:8080/test"
       this.$axios.get(uri).then((response) => {
          this.data=[]
          this.lables=[]
          this.sensorDataValue=[]
        //this.userData = response.data;
        this.data=response.data
        
          for(var i=0;i<this.data.length;i++){
            this.lables.push(this.data[i].date)
            this.sensorDataValue.push(this.data[i].dataValue)
          }
        //console.log(this.data1);
        //return this.vehicleData;
      });
    }

  },
  computed: {

    defaultDatasets () {
      const brandSuccess = getStyle('success2') || '#4dbd74'
      const brandInfo = getStyle('info') || '#20a8d8'
      const brandDanger = getStyle('danger') || '#f86c6b'

      let elements = 27
      // const data1 = []
      // const data2 = []
      // const data3 = []

      // for (let i = 0; i <= elements; i++) {
      //   this.data1.push(random(50, 200))
      //   //data2.push(random(80, 100))
      //   //data3.push(65)
      // }
     
      return [
        {
          label: 'My First dataset',
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: this.sensorDataValue
        },
        // {
        //   label: 'My Second dataset',
        //   backgroundColor: 'transparent',
        //   borderColor: brandSuccess,
        //   pointHoverBackgroundColor: brandSuccess,
        //   borderWidth: 2,
        //   data: data2
        // },
        // {
        //   label: 'My Third dataset',
        //   backgroundColor: 'transparent',
        //   borderColor: brandDanger,
        //   pointHoverBackgroundColor: brandDanger,
        //   borderWidth: 1,
        //   borderDash: [8, 5],
        //   data: data3
        // }
      ]
    },
    defaultOptions () {
      return {

        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  },
  created(){
      //this.getSensorData()
      this.obj = setInterval(() => this.getSensorData(), 3000);
     
  },

}
</script>
