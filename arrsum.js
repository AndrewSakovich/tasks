const peopleInLine = [25, 25, 25, 100];

function tickets(peopleInLine) {
  const price = 25;

  let res = true;
  let cashbox = {
    25: 0,
    50: 0,
    100: 0,
  };

  peopleInLine.forEach((money) => {
    if (money === 25) {
      cashbox[25]++;
      return;
    }

    if (cashbox[25] > 0 && money === 50) {
      cashbox[50]++;
      cashbox[25]--;
      return;
    }

    if (cashbox[25] > 0 && cashbox[50] > 0 && money === 100) {
      cashbox[100]++;
      cashbox[25]--;
      cashbox[50]--;
      return;
    }
    
    if (cashbox[25] > 2 && money === 100) {
      cashbox[100]++;
      cashbox[25] -= 3;
      return;
    }

    res = false;
  });

  return res ? "YES" : "NO";
}
console.log(tickets(peopleInLine));
