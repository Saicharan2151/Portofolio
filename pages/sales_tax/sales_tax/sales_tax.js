window.onload = function () {
    $("subtotal").focus(); // Move cursor to Subtotal field on page load
    $("calculate").onclick = processEntries; // Attach processEntries() to Calculate button click event
    $("clear").onclick = clearFields; // Attach clearFields() to Clear button click event
    $("subtotal").onclick = clearField; // Attach clearField() to Subtotal text box click event
    $("tax_rate").onclick = clearField; // Attach clearField() to Tax Rate text box click event
};

function processEntries() {
    var subtotal = parseFloat($("subtotal").value);
    var taxRate = parseFloat($("tax_rate").value);

    if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
        alert("Subtotal must be > 0 and < 10000");
        return;
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
        alert("Tax Rate must be > 0 and < 12");
        return;
    }

    var salesTax = (subtotal * taxRate) / 100;
    var total = subtotal + salesTax;

    $("sales_tax").value = salesTax.toFixed(2);
    $("total").value = total.toFixed(2);
}

function clearFields() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
    $("subtotal").focus(); // Move cursor to Subtotal field
}
var $ = function (id) {
    return document.getElementById(id); 
};


function clearField() {
    this.value = "";
}