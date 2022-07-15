// const fetch = require('node-fetch');

// const fetchCoins = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());

//   return coins;
// }

// const coins = async () => {
//   const coin = await fetchCoins();
  
//   const list = document.getElementById('list');

//   coins.forEach((coin) => {
//     const li = document.createElement('li');
//     const usd = Number(coin.priceUsd);
//     li.innerHTML = `${coin.name} - (${coin.symbol}): ${usd.toFixed(2)}`;
//     list.appendChild(li);
//   });
// }
// window.onload = () => Coin();

const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

  return coins;
}

const setCoins = async () => {
  const coins = await fetchCoins();

  const coinsList = document.getElementById('list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');

      newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

      coinsList.appendChild(newLi);
    });
}

window.onload = () => setCoins();
