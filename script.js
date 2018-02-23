console.log("script loaded")




window.addEventListener( 'load', function() {
  //run this, when the window has loaded
  console.log("window loaded");
  let attachButton= document.getElementById('attach-button');
  // attachButton.value = "type text here..."
  let notAttached = false
    attachButton.addEventListener('click', function() {
      if ( attachButton.value != null) {
        attachButton.style.border = '2px solid red';
        notAttached = false
      } else {
        notAttached = true
        console.log("not attached")
      }
      console.dir(arguments);
    })



  let sendButton= document.getElementById('send')
  sendButton.addEventListener('click', function(event) {
  event.preventDefault();
  while (notAttached === true) {
  alert("nothing attached to email");
  }
});
});
