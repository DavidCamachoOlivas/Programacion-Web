const options = {
    headers: {
        'x-api-key': 'live_jEWBGLx40lDIveDCm0ROTMvQyElPqaVM0LfC0UgtnyIoPvkm6Ixp4BbrzYBegaaZ'
    }
}

function getPageCount(response) {
    const total = parseInt(response.headers.get('Pagination-Count'));
    const limit = parseInt(response.headers.get('Pagination-Limit'));
    return Math.ceil(total / limit);
}

export async function getBreeds(page, limit){
    const apiUrl = "https://api.thecatapi.com/v1/breeds";
    try {
        const response = await fetch(`${apiUrl}?limit=${limit}&page=${page - 1}`, options); 
        if(!response.ok){
            throw new Error("Error " + response.status)
        }
        
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        };
    }catch (error) {
        console.error(error);
    }
}

export async function getCatDetails(id) {
  const apiUrl = `https://api.thecatapi.com/v1/images/${id}`;
  try {
    const response = await fetch(apiUrl, options);
    if (!response.ok) throw new Error("Error " + response.status);
    return await response.json();
  } catch (error) {
    console.error("Error obteniendo detalles del gato:", error);
  }
}