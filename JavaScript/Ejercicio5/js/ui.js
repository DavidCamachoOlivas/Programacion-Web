const catGrid = document.getElementById('catGrid');

export function showBreeds(breeds){
    catGrid.innerHTML = ''; // Limpiar cuadrícula
    breeds.forEach(breed => {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');
        catCard.innerHTML = `
            <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.temperament || 'Temperamento no disponible'}</p>
            <a class="see-details-button" href="details.html?id=${breed.reference_image_id}" target="_blank">Ver detalles 
        `;
        catGrid.appendChild(catCard);
    });
}

export function updateButtons(currentPage, pageCount) {
  document.getElementById('prevPage').disabled = currentPage === 1;
  document.getElementById('nextPage').disabled = pageCount <= currentPage;
}

export function showCatDetails(data) {
  const container = document.getElementById('catDetails');
  if (!container) return;

  if (!data || !data.breeds || data.breeds.length === 0) {
    container.innerHTML = '<p>No se encontró información sobre esta raza.</p>';
    return;
  }

  const breed = data.breeds[0];
  container.innerHTML = `
    <img src="${data.url}" alt="${breed.name}">
    <div>
      <h1>${breed.name}</h1>
      <p><strong>Temperamento:</strong> ${breed.temperament}</p>
      <p><strong>Años de vida:</strong> ${breed.life_span}</p>
      <p><strong>Descripción:</strong> ${breed.description}</p>
      <p><strong>Amigable con niños:</strong> ${breed.child_friendly}</p>
      <p><strong>Amigable con perros:</strong> ${breed.dog_friendly}</p>
      <p><strong>Origen:</strong> ${breed.origin}</p>
      <p><strong>Enlace a Wikipedia:</strong> 
        <a href="${breed.wikipedia_url}" target="_blank">Más información</a>
      </p>
    </div>
  `;
}
