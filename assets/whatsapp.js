  (function(){
    var waMessage = document.getElementById('wa-message');
    var waSend = document.getElementById('wa-send');
    waMessage.addEventListener('input', function(){
      var encodedMessage = encodeURIComponent(waMessage.value);
      // Using JSON filter to output the link as a valid string
      var baseLink = {{ settings.whatsapplink }};
      waSend.href = baseLink + "?text=" + encodedMessage;
    });
  })();