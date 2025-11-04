import { getBreeds } from './api.js';
import { showBreeds, updateButtons } from './ui.js';

let currentPage = 1;
let limit = 5;
let totalPages = 1;

async function loadBreeds(page) {
  const breedsData = await getBreeds(page, limit);
  showBreeds(breedsData.breeds);

  totalPages = breedsData.pageCount;
  updateButtons(currentPage, totalPages);

  document.getElementById('pageInfo').textContent = `Página ${currentPage} de ${totalPages}`;
}

document.getElementById('prevPage').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    loadBreeds(currentPage);
  }
});

document.getElementById('nextPage').addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    loadBreeds(currentPage);
  }
});

document.getElementById('limitSelect').addEventListener('change', (e) => {
  limit = parseInt(e.target.value);
  currentPage = 1; 
  loadBreeds(currentPage);
});

window.addEventListener('DOMContentLoaded', () => loadBreeds(currentPage, limit));
