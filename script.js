window.addEventListener( 'load', function() {

  let attachButton= document.getElementById('attach-input');
  let sendButton1= document.getElementById('send1');
  let sendButton2= document.getElementById('send2');
  var messageText = document.getElementById("message-text");

  let notAttached = true;
  let mentionAttach = false;

 function checkAttached(){
   if (attachButton.files.length>0) {
     notAttached = true;
   } else {
     notAttached = false;
   }
 }

    messageText.addEventListener("focusout", function() {
      if (messageText.value.search("attach")==0) {
        mentionAttach = true;
      }
    });

    sendButton1.addEventListener('click', function(event) {
      event.preventDefault();
      checkAttached();
    if (messageText.value.search("attach")==0) {
      mentionAttach = true;
    }
    if (notAttached === false && mentionAttach) {
      alert("there's nothing attached to email, but you said there is, don't be that guy");
    };
  });

    sendButton2.addEventListener('click', function(event) {
      event.preventDefault();
      checkAttached();
    if (messageText.value.search("attach")==0) {
      mentionAttach = true;
    }
    if (notAttached === false && mentionAttach) {
      alert("there's nothing attached to email, but you said there is, don't be that guy");
    };
  });
});
