var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];

function openModal() {
	modal.className = "modal modal-on";
}

function closeModal() {
	modal.className = "modal";
}

// Open the modal
window.setTimeout(openModal, 3000);

// Closing the modal

closeButton.addEventListener("click", closeModal);

document.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
		closeModal();
	}
});