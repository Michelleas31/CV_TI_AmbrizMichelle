document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".cert-btn").forEach(button => {
        button.addEventListener("click", function() {
            modal.style.display = "block";
            modalImg.src = this.getAttribute("data-img");
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

});