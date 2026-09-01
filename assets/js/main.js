const boxes = document.querySelectorAll(".animate-box");

boxes.forEach((box, index) => {

    setTimeout(() => {
        box.classList.add("show");
    }, index * 300);

});

// stats js
const statsSection = document.querySelector(".stats-section");
const statNumbers = document.querySelectorAll(".stats-number");

let statsStarted = false;

function animateNumbers() {

    if (statsStarted) return;

    statsStarted = true;

    statNumbers.forEach((number) => {

        const target = Number(number.dataset.target);

        const duration = 2000;
        const startTime = performance.now();

        function updateNumber(currentTime) {

            const elapsed = currentTime - startTime;

            const progress = Math.min(elapsed / duration, 1);

            const current = Math.floor(progress * target);

            number.textContent = current + "+";

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target + "+";
            }
        }

        requestAnimationFrame(updateNumber);
    });
}


// START THE COUNTER
animateNumbers();