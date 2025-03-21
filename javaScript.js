const selectElement = document.getElementById("porcentagem");

for (let i = 45; i <= 100; i++) {
    const option = document.createElement("option");
    option.textContent = `${i}%`;
    selectElement.appendChild(option);
}