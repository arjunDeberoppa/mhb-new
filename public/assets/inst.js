 $(document).ready(function () {
        //@ts-ignore
        iframeEl = document.getElementById('iframe')
        //@ts-ignore
        initLoginLinks()
        //@ts-ignore
        setEnrolButtonClick()
        //@ts-ignore
        setEnrolButtonClickFree()
        //@ts-ignore
      })
      //@ts-ignore
      $(window).on('load', function () {
        //@ts-ignore
        checkGoogleAuthCode()
        //@ts-ignore
        checkFacebookAuthCode()
        //@ts-ignore
        setParentUrl()
      })
$(window).on('load', function () {
  console.log('loadInstBundleDetails')
  loadInstBundleDetails()

})

// if(typeof loadInstBundleDetails === 'function') {
//   console.log('exists')
  loadInstBundleDetails()
// }
