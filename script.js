document.addEventListener('DOMContentLoaded', function() {
    // 1. Weight Loss Calculator Logic
    const weightInput = document.getElementById('weightEntry');
    const projectedLoss = document.getElementById('lp-pom-text-937');
    
    if (weightInput && projectedLoss) {
        weightInput.addEventListener('input', function() {
            const weight = parseFloat(weightInput.value);
            if (!isNaN(weight)) {
                // Formula observed: Loss = 20% of Current Weight
                const loss = weight * 0.2;
                projectedLoss.innerHTML = `${loss.toFixed(1)} <span>lbs.</span>`;
            } else {
                projectedLoss.innerHTML = `0 <span>lbs.</span>`;
            }
        });
    }

    // 2. Countdown Timer Logic (Observed in original source)
    function getNextMidnightEST() {
        const now = new Date();
        const estNow = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
        const midnightEST = new Date(estNow);
        midnightEST.setHours(24, 0, 0, 0); 
        return midnightEST;
    }

    function startCountdown() {
        const target = getNextMidnightEST();
        function updateCountdown() {
            const now = new Date();
            const estNow = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
            const distance = target - estNow;

            if (distance <= 0) return;

            const hrs = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const mins = Math.floor((distance / (1000 * 60)) % 60);
            const secs = Math.floor((distance / 1000) % 60);

            // Update countdown elements if they exist
            const hEl = document.querySelector('.countdown-hours');
            const mEl = document.querySelector('.countdown-minutes');
            const sEl = document.querySelector('.countdown-seconds');
            if (hEl) hEl.textContent = String(hrs).padStart(2, "0");
            if (mEl) mEl.textContent = String(mins).padStart(2, "0");
            if (sEl) sEl.textContent = String(secs).padStart(2, "0");
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();
    }
    startCountdown();

    // 3. Form Submission (Simulated)
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted (Logic would go here to redirect to signup)');
            window.location.href = "https://app.getzealthy.com/signup?care=Weight+loss";
        });
    }
});
