var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];

function openModal() {
	modal.className = "modal modal-on";
}

function closeModal() {
	modal.className = "modal";
}

closeButton.addEventListener("click", closeModal);



window.setTimeout(openModal, 3000);
// Change this to three seconds!!!!!!!