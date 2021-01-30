document.getElementById("fc-increment").addEventListener("click", function () {
    handleProductChange(true);
});
document.getElementById("fc-decrement").addEventListener("click", function () {
    handleProductChange(false);
});
function handleProductChange(isIncrement) {
    const caseInput = document.getElementById("fc-class");
    const caseCount = parseInt(caseInput.value);
    let caseNewCount = caseCount;
    if (isIncrement == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrement == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 150;
    calculateTotal();
};


document.getElementById("eco-increment").addEventListener("click", function () {
    handleProductChangeTop(true);
});
document.getElementById("eco-decrement").addEventListener("click", function () {
    handleProductChangeTop(false);
});
function handleProductChangeTop(isIncrease) {
    const caseInputTop = document.getElementById("eco-class");
    const caseCountTop = parseInt(caseInputTop.value);
    let caseNewCountTop = caseCountTop;
    if (isIncrease == true) {
        caseNewCountTop = caseCountTop + 1;
    }
    if (isIncrease == false && caseCountTop > 0) {
        caseNewCountTop = caseCountTop - 1;
    }
    caseInputTop.value = caseNewCountTop;
    const caseTotalTop = caseNewCountTop * 100;
    calculateTotal();
};

function calculateTotal() {
    const caseInputTop = document.getElementById("fc-class");
    const caseCountTop = parseInt(caseInputTop.value);

    const caseInput = document.getElementById("eco-class");
    const caseCount = parseInt(caseInput.value);

    const totalPrice = caseCountTop * 150 + caseCount * 100;
    document.getElementById("total-price").innerText = '$' + totalPrice;

    const tax = totalPrice * .1;
    document.getElementById("tax-amount").innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById("total-amount").innerText = '$' + grandTotal;
}