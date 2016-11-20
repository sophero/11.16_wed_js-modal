var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];

function openModal() {
	modal.className = "modal modal-on";
}

function closeModal() {
	modal.className = "modal";
}

closeButton.addEventListener("click", closeModal);
document.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
		closeModal();
	}
});

// signUpButton = document.querySelector(".signup-button");
// signUpButton.addEventListener("mouseenter", function () {
// 	signUpButton.innerText = "Sign Up!";
// });


window.setTimeout(openModal, 3000);
// Change this to three seconds!!!!!!!