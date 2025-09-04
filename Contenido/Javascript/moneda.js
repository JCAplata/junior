document.addEventListener("DOMContentLoaded", () => {
    const currencySelectors = document.querySelectorAll(".currency");

    currencySelectors.forEach(select => {
        select.addEventListener("change", () => {
            const card = select.closest(".card"); // tarjeta actual
            const priceElement = card.querySelector(".price p"); // precio dentro de .price
            const basePrice = parseFloat(card.getAttribute("data-price")); // precio en USD
            const selectedCurrency = select.value;

            let convertedPrice;

            switch (selectedCurrency) {
                case "COP":
                    convertedPrice = basePrice * 4000; // ejemplo tasa
                    priceElement.textContent = `$${convertedPrice.toLocaleString()} COP`;
                    break;
                case "MXN":
                    convertedPrice = basePrice * 17; // ejemplo tasa
                    priceElement.textContent = `$${convertedPrice.toFixed(2)} MXN`;
                    break;
                default:
                    priceElement.textContent = `$${basePrice} USD`;
            }
        });
    });
});
