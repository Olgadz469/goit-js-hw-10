import axios from "axios";
const BASE_URL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] = 'live_L1TH07Be6qZTtyTEzaE8r7JI8izNYbvHoRZsdak7ttQM0w6Ddvg9CPmNCWXTRdtX';
// const API_KEY = 'live_L1TH07Be6qZTtyTEzaE8r7JI8izNYbvHoRZsdak7ttQM0w6Ddvg9CPmNCWXTRdtX';

export function fetchBreeds() {
//  return fetch (`${BASE_URL}/breeds?api_key=${API_KEY}`)
 return fetch (`${BASE_URL}/breeds`)

  .then (response => {
  if (!response.ok) {
     throw new Error (response.status)
    }
  return response.json()
});
};

export function fetchCatByBreed(breedId) {
  // return fetch(`${BASE_URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`)
  return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`)

      .then(response => {

          if (!response.ok) {
              throw new Error(response.status);
          }
          return response.json();
      });
};