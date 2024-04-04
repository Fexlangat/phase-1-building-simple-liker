

document.addEventListener("DOMContentLoaded", () => {
  // Step 1: Add the .hidden class to the error modal

  const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");

  // Step 2: Add event listeners to handle clicks on the like buttons
  const likeButtons = document.querySelectorAll(".like-glyph");
  likeButtons.forEach((button) => {
    button.addEventListener("click", handleLike);
  });

  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


  function handleLike(event) {
    const heart = event.target;
    mimicServerCall()
      .then(() => {
        // Step 4: Handle the response for successful request
        if (heart.innerText === EMPTY_HEART) {
          heart.innerText = FULL_HEART;
          heart.classList.add("activated-heart");
        } else {
          heart.innerText = EMPTY_HEART;
          heart.classList.remove("activated-heart");
        }
      })
      .catch((error) => {
        // Step 4: Handle the response for failed request
        const modalMessage = document.getElementById("modal-message");
        modalMessage.innerText = error;
        errorModal.classList.remove("hidden");
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  }
});







