let totalAmount = 0;

function addExpense() {
    let name = document.getElementById("expenseName").value;
    let amount = parseFloat(document.getElementById("expenseAmount").value);
    let category = document.getElementById("expenseCategory").value;

    if (!name || isNaN(amount) || amount <= 0) {
        alert("Enter valid details!");
        return;
    }

    totalAmount += amount;
    document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);

    let li = document.createElement("li");
    li.innerHTML = `${name} - $${amount.toFixed(2)} (${category})`;

    // Add delete button for each expense
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.onclick = function () {
        totalAmount -= amount;
        document.getElementById("totalAmount").innerText = totalAmount.toFixed(2);
        li.remove();
    };

    li.appendChild(deleteBtn);
    document.getElementById("expenseList").appendChild(li);

    // Clear input fields after adding expense
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseCategory").value = "";
}
