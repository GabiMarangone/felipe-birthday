const terminal = document.getElementById("terminal");
const birthdayScreen = document.getElementById("birthdayScreen");
const enterButton = document.getElementById("enterButton");
const contentScreen = document.getElementById("contentScreen");
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function addLine(text, className = "") {
    const line = document.createElement("p");

    if (className) {
        line.className = className;
    }

    terminal.appendChild(line);

    for (const character of text) {
        line.textContent += character;
        await sleep(18);
    }

    await sleep(180);
}

async function startSystem() {

    await sleep(600);

    await addLine("> initializing felipe.js...");
    await sleep(500);

    await addLine("");
    await addLine("Loading dependencies...");
    await sleep(400);

    await addLine("");

    await addLine("developer.js .............. OK", "success");
    await addLine("husband.js ................ OK", "success");
    await addLine("father.js ................. OK", "success");
    await addLine("cat_dad.js ................ OK", "success");

    await sleep(500);

    await addLine("");
    await addLine("Checking PHP compatibility...");
    await sleep(900);

    await addLine("legacy detected.", "warning");
    await sleep(500);

    await addLine("proceeding anyway.");
    await sleep(700);

    await addLine("");
    await addLine("✓ System ready.", "success");

    await sleep(900);

    await addLine("");
    await addLine("> run birthday()");

    await sleep(900);

    await addLine("");
    await addLine("Executing birthday.js...", "success");

    await sleep(1000);

    showBirthdayScreen();
}

function showBirthdayScreen() {
    terminal.classList.add("fade-out");

    setTimeout(() => {
        terminal.style.display = "none";

        birthdayScreen.classList.add("show");
    }, 700);
}

enterButton.addEventListener("click", () => {

    birthdayScreen.classList.remove("show");
    birthdayScreen.style.display = "none";

    contentScreen.classList.add("show");

    document.body.style.overflow = "auto";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/*
 * Hey, Felipe.
 *
 * Se você chegou até aqui,
 * eu sabia que você ia olhar o código.
 *
 * Obrigada por insistir para que eu aprendesse.
 *
 * Funcionou.
 *
 * — Gabi
 */

startSystem();
/* =====================================================
   AULA 6 — REVEAL AO ROLAR
   ===================================================== */

const revealElements = document.querySelectorAll(
    ".section-label, .section h2, .lead, .timeline, .code-card, " +
    ".origin-image, .phd-photo, .partnership-image, .travel-memory, " +
    ".family-image, .father-support, .commits, .letter, .final-image"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    revealObserver.observe(element);
});