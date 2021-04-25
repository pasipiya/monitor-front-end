<template>
  <CRow>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/>
          <strong> Bootstrap Alert</strong>
          <div class="card-header-actions">
            <a 
              href="https://coreui.io/vue/docs/components/alert" 
              class="card-header-action" 
              rel="noreferrer noopener" 
              target="_blank"
            >
              <small class="text-muted">docs</small>
            </a>
          </div>
        </CCardHeader>
        <CCardBody>
         
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Alert
          <small> use <code>.alert-link</code> to provide links</small>
        </CCardHeader>
        <CCardBody>
         
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Alerts <small>with additional content</small>
        </CCardHeader>
        <CCardBody>
          <CAlert show color="success">
           
          </CAlert>
        </CCardBody>
      </CCard>
    </CCol>
    <CCol col="12" md="6">
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Alerts
          <small>dismissible</small>
        </CCardHeader>
        <CCardBody>
          <CAlert
            color="secondary"
            closeButton
            :show.sync="alert1"
          >
            Dismissible Alert!
          </CAlert>

          <CAlert
            color="secondary"
            :show.sync="alert2"
            class="alert-dismissible"
          >
            Dismissible Alert with custom button!
            <CButton
              class="position-absolute"
              color="secondary"
              style="right:10px;top: 50%;transform: translateY(-50%);"
              @click="alert2 = false"
            >
              Close
            </CButton>
          </CAlert>
          <CButton
            @click="showDismissibleAlerts"
            color="info"
            class="m-1"
          >
            Show dismissible alerts
          </CButton>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> Alerts
          <small>auto dismissible</small>
        </CCardHeader>
        <CCardBody>
          <div>
            <CAlert
              :show.sync="dismissCountDown"
              closeButton
              color="warning"
              fade
            >
              Alert will dismiss after
              <strong>{{dismissCountDown}}</strong> seconds...
            </CAlert>

            <CAlert
              :show.sync="dismissCountDown"
              closeButton
              color="info"
            >
              Alert will dismiss after {{dismissCountDown}} seconds...
              <CProgress
                color="info"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
              />
            </CAlert>
            <CButton @click="showAlert" color="info" class="m-1">
              Show alert with timer
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: 'Alerts',
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 10,
      alert1: true,
      alert2: true
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    },
    showDismissibleAlerts () {
      ['alert1', 'alert2'].forEach(alert => this[alert] = true)
    }
  }
}
</script>
