
export const movieRow = (movieJSON) => {

    let id = movieJSON.code;
    let name = movieJSON.name;
    let category = movieJSON.category;
    let featured = movieJSON.featured;
    let published = movieJSON.published;

    let row = `<tr>
                <th scope="row">${id}</th>
                <td>${name}</td>
                <td>${category}</td>
                `

    if( published ){

        row += `
            <td>
                <input class="form-check-input " alt="${id}"type="checkbox"  id="publicado" checked>
            </td>
        `
    }else{

        row += `
            <td>
                <input class="form-check-input " alt="${id}" type="checkbox" id="publicado" >
            </td>
        `
    }

    if(featured){
        row += `
            <td>
                <input class="form-check-input " alt="${id}" type="checkbox" id="destacada" checked>
            </td>
        `
    }else{
        row += `
            <td>
                <input class="form-check-input " alt="${id}" type="checkbox"  id="destacada">
            </td>
        `
    }

    row += `
            <td> 
                <i data-bs-toggle="modal" data-bs-target="#modalDelete" alt="${id}" id="delete" class="fa-solid fa-trash fa-2x me-2 "></i>
                <i data-bs-toggle="modal" data-bs-target="#editMovieModal"  alt="${id}" id="edit" class="fa-solid fa-pen-to-square fa-2x" ></i>
            </td>
        </tr>
    `

    return row;
}
