window.addEventListener( 'load', function() {
  console.log("window loaded");

  let attachButton= document.getElementById('attach-input');
  let sendButton1= document.getElementById('send1');
  let sendButton2= document.getElementById('send2');
  var messageText = document.getElementById("message-text");

  let notAttached = true;
  let mentionAttach = false;

 function checkAttached(){
   if (attachButton.files.length>0) {
     notAttached = true;
     console.log("it attached");
   } else {
     notAttached = false;
     console.log("not attached");
     console.dir(arguments);
   }
 }

    messageText.addEventListener("focusout", function() {
      console.log(messageText.value);
      if (messageText.value.search("attach")==0) {
        mentionAttach = true;
      }
    });

    sendButton1.addEventListener('click', function(event) {
      event.preventDefault();
      checkAttached();
    if (notAttached === false) {
      alert("nothing attached to email");
    };
  });

    sendButton2.addEventListener('click', function(event) {
      event.preventDefault();
      checkAttached();
    if (messageText.value.search("attach")==0) {
      mentionAttach = true;
    }
    if (notAttached === false && mentionAttach) {
      alert("nothing attached to email");
    };
  });
});
