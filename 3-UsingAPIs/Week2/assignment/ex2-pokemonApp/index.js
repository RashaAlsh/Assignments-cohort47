'use strict';

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! ${response.status}`);
    }

    const fetchedData = await response.json()
    return fetchedData;

  } catch (err) {
    console.error(`ERROR`, err);
    throw err;
  }
}

function fetchAndPopulatePokemons() {
  //create elements
  const button = document.createElement('button');
  button.textContent = `Get Pokemon`;
  button.type = 'button';
  document.body.appendChild(button);

  const selectMenu = document.createElement('select');
  selectMenu.id = 'selectPok';
  document.body.appendChild(selectMenu);


  button.addEventListener('click', async () => {
    try {
      const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

      selectMenu.value = '';

      data.results.forEach(el => {
        const option = document.createElement('option');
        option.value = el.name;
        option.textContent = el.name;
        selectMenu.appendChild(option);
      });

    } catch (err) {
      console.error('ERROR:', err);
    }
  });
}

async function fetchImage(pokemonName) {
  try {
    const pokIdUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const pokData = await fetchData(pokIdUrl);

    const pokImg = document.createElement('img');
    pokImg.id = 'PokemonImg';
    pokImg.src = pokData.sprites.front_default;
    pokImg.alt = pokemonName;

    document.body.appendChild(pokImg);

  } catch (err) {
    console.log('Failure: Fetching Image')
  }
}

function main() {
  fetchAndPopulatePokemons();

  const selectPok = document.getElementById('selectPok');
  selectPok.addEventListener('change', async (e) => {
    const selectedElement = e.target.value;

    const currentImg = document.getElementById('PokemonImg');
    if (currentImg) {
      currentImg.remove();
    }

    await fetchImage(selectedElement);
  });
}

window.addEventListener('load', main);
