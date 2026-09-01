const boxes = document.querySelectorAll(".animate-box");

boxes.forEach((box, index) => {

    setTimeout(() => {
        box.classList.add("show");
    }, index * 300);

});