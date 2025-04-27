// JavaScript für die Modals (Textfenster)
const homeLink = document.getElementById("homeLink");
const featuresLink = document.getElementById("featuresLink");
const contactLink = document.getElementById("contactLink");
const homeModal = document.getElementById("homeModal");
const featuresModal = document.getElementById("featuresModal");
const contactModal = document.getElementById("contactModal");
const closeBtns = document.getElementsByClassName("close-btn");

// Öffnet das Home Modal, wenn der Home-Link angeklickt wird
homeLink.onclick = function() {
    homeModal.style.display = "block";
}

// Öffnet das Features Modal, wenn der Features-Link angeklickt wird
featuresLink.onclick = function() {
    featuresModal.style.display = "block";
}

// Öffnet das Kontakt Modal, wenn der Kontakt-Link angeklickt wird
contactLink.onclick = function() {
    contactModal.style.display = "block";
}

// Schließt das Modal, wenn der Schließen-Button (X) angeklickt wird
for (let btn of closeBtns) {
    btn.onclick = function() {
        homeModal.style.display = "none";
        featuresModal.style.display = "none";
        contactModal.style.display = "none";
    }
}

// Schließt das Modal, wenn der Benutzer außerhalb des Fensters klickt
window.onclick = function(event) {
    if (event.target === homeModal) {
        homeModal.style.display = "none";
    }
    if (event.target === featuresModal) {
        featuresModal.style.display = "none";
    }
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }
}
