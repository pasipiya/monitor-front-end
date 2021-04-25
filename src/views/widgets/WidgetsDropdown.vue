<template>
  <CRow>
    <CCol sm="6" lg="3">
       <CButton class="float-right"><CWidgetDropdown class="head" color="primary" header="3" text="Number of Sensors">
        
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="primary"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
      </CButton>
    </CCol>
    <CCol sm="6" lg="3">
     <CButton class="float-right"> <CWidgetDropdown class="head" color="info" header=" " text="Temperature Sensor Data"> 
      
         <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="info"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
      </CButton>
    </CCol>
    <CCol sm="6" lg="3">
       <CButton class="float-right"><CWidgetDropdown class="head" color="warning" header="" text="Humidity Sensor Data">
       
          <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
      </CButton>
    </CCol>
    <CCol sm="6" lg="3">
      <CButton class="float-right"> <CWidgetDropdown class="head" color="danger" header="" text="Pressure Sensor Data">
        
          <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="danger"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
      </CButton>
    </CCol>
  </CRow>
</template>

<script>
import { CChartLineSimple } from '../charts/index.js'

export default {
  name: 'WidgetsDropdown',
  components: { CChartLineSimple}
}
</script>

<style scoped>

.head{
  font-size: 20px;
  
}
</style>
