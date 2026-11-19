const amountDue = document.getElementById("amount-due");
const amountReceived = document.getElementById("amount-received");
const calculateButton = document.getElementById("calculate-change");

calculateButton.addEventListener("click", function() {
    const due = Number(amountDue.value);
    const received = Number(amountReceived.value);

    const change = received - due;

    console.log(change);

    let remainingCents = Math.round(change * 100);

const dollars = Math.floor(remainingCents / 100);
    remainingCents = remainingCents % 100;
    document.getElementById("dollars-output").textContent = dollars;

const quarters = Math.floor(remainingCents / 25);
    remainingCents = remainingCents % 25;
    document.getElementById("quarters-output").textContent = quarters;

const dimes = Math.floor(remainingCents / 10);
    remainingCents = remainingCents % 10;
    document.getElementById("dimes-output").textContent = dimes;

const nickels = Math.floor(remainingCents / 5);
    remainingCents = remainingCents % 5;
    document.getElementById("nickels-output").textContent = nickels;

const pennies = remainingCents;
    document.getElementById("pennies-output").textContent = pennies;
});

const serpentsQuantity = document.getElementById("serpents-quantity");
const crawlersQuantity = document.getElementById("crawlers-quantity");
const venomQuantity = document.getElementById("venom-quantity");

const cartTotal = document.getElementById("cart-total");

function calculateCartTotal() {
    const serpents = Number(serpentsQuantity.value) || 0;
    const crawlers = Number(crawlersQuantity.value) || 0;
    const venom = Number(venomQuantity.value) || 0;

    const total =
        serpents * 3.50 +
        crawlers * 2.75 +
        venom * 4.25;

    cartTotal.textContent = total.toFixed(2);
    document.getElementById("amount-due").value = total.toFixed(2);
}
serpentsQuantity.addEventListener("input", calculateCartTotal);
crawlersQuantity.addEventListener("input", calculateCartTotal);
venomQuantity.addEventListener("input", calculateCartTotal);
calculateCartTotal();