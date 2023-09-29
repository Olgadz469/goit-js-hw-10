import axios from "axios";
const BASE_URL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-rapid-api-key'] = 'live_L1TH07Be6qZTtyTEzaE8r7JI8izNYbvHoRZsdak7ttQM0w6Ddvg9CPmNCWXTRdtX';

export function fetchBreeds() {
  return fetch (`${BASE_URL}/breeds?api_key=${x-rapid-api-key}`)

  .then (response => {
  if (!response.ok) {
     throw new Error (response.status)
    }
  return response.json()
});
};

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?api_key=${x-rapid-api-key}&breed_ids=${breedId}`)

      .then(response => {

          if (!response.ok) {
              throw new Error(response.status);
          }
          return response.json();
      });
};