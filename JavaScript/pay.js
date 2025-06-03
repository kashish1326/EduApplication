document.addEventListener("DOMContentLoaded", function () {
  const expYearSelect = document.getElementById("exp-year");
  const currentYear = new Date().getFullYear();

  // Populate Exp Year Dropdown
  for (let i = 0; i < 10; i++) {
    const option = document.createElement("option");
    option.value = currentYear + i;
    option.textContent = currentYear + i;
    expYearSelect.appendChild(option);
  }

  // Button Click Event
  document.getElementById("checkout-btn").addEventListener("click", function () {
    alert("You Have Successfully Payed for Your Course");
  });
});
