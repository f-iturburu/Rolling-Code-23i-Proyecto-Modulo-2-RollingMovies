
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
                <input class="form-check-input " type="checkbox"  id="publicado" checked>
            </td>
        `
    }else{

        row += `
            <td>
                <input class="form-check-input " type="checkbox" id="publicado" >
            </td>
        `
    }

    if(featured){
        row += `
            <td>
                <input class="form-check-input " type="checkbox" id="destacada" checked>
            </td>
        `
    }else{
        row += `
            <td>
                <input class="form-check-input " type="checkbox"  id="destacada">
            </td>
        `
    }

    row += `
            <td class="d-flex justify-content-around"> 
                <i data-bs-toggle="modal" data-bs-target="#modalDelete" id="delete" class="fa-solid fa-trash fa-2x "></i>
                <i data-bs-toggle="modal" data-bs-target="#editMovieModal" class="fa-solid fa-pen-to-square fa-2x" id="edit"></i>
            </td>
        </tr>
    `

    return row;
}
