(() => {
  function getKA(countFour = false, decimals = 2) {
    const items = document.querySelectorAll(".level2 td:nth-child(2)");
    let numbers = [];
    for (let item of items) {
      const number = parseInt(item.innerText);
      if (number) {
        if (!(!countFour && number === 4)) {
          numbers.push(number);
        }
      }
    }
    const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;

    return average.toFixed(decimals);
  }

  document.querySelector(
    "table.table tfoot.summary",
  ).innerHTML += `<tr class="total"><td>Keskiarvo</td><td align="center">${getKA()}</td></tr>`;
})();
