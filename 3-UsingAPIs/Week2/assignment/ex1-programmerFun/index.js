'use strict';

function requestData(url) {
  return fetch(url)
  .then((result)=>{
    if(!result.ok){
      throw new Error("something went wrong")
    }
    return result.json();
  })
}

function renderImage(data) {
  const myImg = document.createElement("img");
  myImg.src = data.img;
  myImg.alt = "img"

  document.body.appendChild(myImg);
}

function renderError(error) {
  const myHeader = document.createElement("h1");
  const myHeaderText = document.createTextNode(`${error}`);

  myHeader.appendChild(myHeaderText);
  document.body.appendChild(myHeader);
}


async function main() {
  try{
    const response = await requestData('https://xkcd.now.sh/?comic=latest');
    renderImage(response);
  }catch(error){
    renderError(error);
  }
}

window.addEventListener('load', main);
