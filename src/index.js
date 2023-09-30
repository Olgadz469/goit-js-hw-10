
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import SlimSelect from 'slim-select';
import './styles.css';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';


const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');


let arrBreedsId = [];
fetchBreeds()
.then(data => {
  data.forEach(element => {
      arrBreedsId.push({text: element.name, value: element.id});
      });
      new SlimSelect({
        select: '.breed-select',
        data: arrBreedsId,
      });
    })

.catch(error => Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!!'));


breedSelect.addEventListener('change', onSelectBreed);
    loader.classList.add('is-hidden');
    error.classList.add('is-hidden');

function onSelectBreed(event) {
    loader.classList.remove('is-hidden');
    catInfo.classList.add('is-hidden');

const breedId = event.currentTarget.value;
fetchCatByBreed(breedId)
.then(data => {
    loader.classList.add('is-hidden');
    catInfo.classList.remove('is-hidden');

    catInfo.innerHTML = createMarkup(data)

})
.catch(error => Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!!!'));
};


function createMarkup(arr) {
  return arr
    .map((item) =>
  `<div class="box-img">
  <img src="${item.url}" alt="" width = 300>
  </div>
  <div class="box">
    <h1>${item.breeds[0].name}</h1>
    <p>${item.breeds[0].description}</p>
    <p><b>Temperament: </b>${item.breeds[0].temperament}</p>
  </div>`)
  .join("");
};

