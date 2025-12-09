// ------------------------------
// Step Switching Function
// ------------------------------
function nextStep(stepNumber) {
    document.querySelectorAll(".step").forEach(step => {
        step.classList.remove("active");
    });

    document.getElementById("step" + stepNumber).classList.add("active");

    // Trigger typing message when entering Step 4
    if (stepNumber === 4) {
        startTypingMessage();
    }
}

// ------------------------------
// Typing Message Effect
// ------------------------------
let messageText = "You are truly special to me, Vaiduu. Thank you for making my life brighter and happier. ❤️";
let index = 0;

function startTypingMessage() {
    const element = document.getElementById("typedMessage");
    element.innerHTML = "";
    index = 0;
    typeWriter();
}

function typeWriter() {
    const element = document.getElementById("typedMessage");

    if (index < messageText.length) {
        element.innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// ------------------------------
// Floating Hearts Animation
// ------------------------------
function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.textContent = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createFloatingHeart, 700);

// ------------------------------
// Fireworks on Final Step
// ------------------------------
function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("firework");

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    firework.style.left = x + "px";
    firework.style.top = y + "px";

    firework.style.setProperty("--x-end", (Math.random() * 200 - 100) + "px");
    firework.style.setProperty("--y-end", (Math.random() * 200 - 100) + "px");

    document.body.appendChild(firework);

    setTimeout(() => {
        firework.remove();
    }, 2000);
}

setInterval(() => {
    if (document.getElementById("step5").classList.contains("active")) {
        createFirework();
    }
}, 500);
