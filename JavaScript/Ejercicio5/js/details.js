import { getCatDetails } from './api.js';
import { showCatDetails } from './ui.js';

const breedId = new URLSearchParams(window.location.search).get('id');

async function loadCatDetails() {
  if (!breedId) {
    document.getElementById('catDetails').innerHTML = '<p>ID de gato no especificado.</p>';
    return;
  }

  const data = await getCatDetails(breedId);
  showCatDetails(data);
}

window.addEventListener('DOMContentLoaded', loadCatDetails);
