document.addEventListener("DOMContentLoaded", function () {
  const sendButton = document.getElementById("wa-send");
  const messageInput = document.getElementById("wa-message");
  
  sendButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const phoneLink = sendButton.getAttribute("href");
    const userMessage = encodeURIComponent(messageInput.value.trim());

    // Append message to the link
    if (userMessage) {
      const whatsappUrl = `${phoneLink}?text=${userMessage}`;
      window.open(whatsappUrl, "_blank");
    } else {
      alert("Please enter a message before sending.");
    }
  });
});
