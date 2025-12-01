document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("#customContactForm");
    const output = document.querySelector("#formOutput");

    if (!form) return; // apsauga jei nesate contact.html

    // ------------------------------
    // SLIDERIŲ REALAUS LAIKO RODMENYS
    // ------------------------------
    function setupSlider(sliderId, valueId) {
        const slider = document.getElementById(sliderId);
        const value = document.getElementById(valueId);

        if (slider && value) {
            value.textContent = slider.value;

            slider.addEventListener("input", () => {
                value.textContent = slider.value;
            });
        }
    }

    setupSlider("k1", "k1Value");
    setupSlider("k2", "k2Value");
    setupSlider("k3", "k3Value");
    // ------------------------------


    form.addEventListener("submit", function (e) {
        e.preventDefault(); // sustabdome puslapio persikrovimą

        const formData = {
            vardas: form.vardas.value,
            pavarde: form.pavarde.value,
            email: form.email.value,
            tel: form.tel.value,
            adresas: form.adresas.value,
            k1: parseInt(form.k1.value),
            k2: parseInt(form.k2.value),
            k3: parseInt(form.k3.value)
        };

        console.log("Formos duomenys:", formData);

        // Apskaičiuojame vidurkį
        const vidurkis = ((formData.k1 + formData.k2 + formData.k3) / 3).toFixed(1);

        // Atvaizduojame duomenis apačioje
        output.innerHTML = `
            <h4>Įvesti duomenys:</h4>
            <p><strong>Vardas:</strong> ${formData.vardas}</p>
            <p><strong>Pavardė:</strong> ${formData.pavarde}</p>
            <p><strong>El. paštas:</strong> ${formData.email}</p>
            <p><strong>Tel. numeris:</strong> ${formData.tel}</p>
            <p><strong>Adresas:</strong> ${formData.adresas}</p>
            <p><strong>Klausimas 1:</strong> ${formData.k1}</p>
            <p><strong>Klausimas 2:</strong> ${formData.k2}</p>
            <p><strong>Klausimas 3:</strong> ${formData.k3}</p>
            <h5><strong>${formData.vardas} ${formData.pavarde}: ${vidurkis}</strong></h5>
        `;

        showSuccessPopup();
    });

    // pop-up pranešimas
    function showSuccessPopup() {
        const popup = document.createElement("div");
        popup.classList.add("popup-success");
        popup.textContent = "Duomenys pateikti sėkmingai!";

        document.body.appendChild(popup);

        setTimeout(() => popup.classList.add("show"), 50);

        setTimeout(() => {
            popup.classList.remove("show");
            setTimeout(() => popup.remove(), 300);
        }, 2000);
    }

});
