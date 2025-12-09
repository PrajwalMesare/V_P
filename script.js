let currentStep = 1;
let totalSteps = 3;

// Show the step
function showStep(step) {
    document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
    document.getElementById("step" + step).classList.add("active");
}

// Next Step
function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        activateHeartPulse();
    }
}

// Activate big heart animation only on step 2
function activateHeartPulse() {
    const heart = document.getElementById("interactiveHeart");

    if (!heart) return;

    if (currentStep === 2) {
        heart.classList.add("pulse");
    } else {
        heart.classList.remove("pulse");
    }
}

// Auto check on load
window.onload = () => {
    activateHeartPulse();
};
