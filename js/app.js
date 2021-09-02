document.getElementById('openlibrary-Search').addEventListener('click', () => {

    const openlibraryValue = document.getElementById('openlibrary-value');
    const openlibraryValueText = openlibraryValue.value;

    const url = `HTTPs://openlibrary.org/search.json?q=${openlibraryValueText}`
    fetch(url)
        .then(res => res.json())
        .then(data => loadItem(data.docs))

})


const loadItem = (data) => {


    //Start Results Item
    const tolatItem = document.getElementById("demo");
    tolatItem.innerHTML = `
    <h3 class="text-center text-capitalize">About <span class="text-muted fs-3">${data.length}</span> results</h3>
   `;
    //End Results Item


    const displayItem = document.getElementById('displayItem')
    displayItem.textContent = '';
    //Start Error Handle
    const error = document.getElementById('error');

    if (data.length == 0) {
        error.innerHTML = `
        <h3 class="text-center text-muted text-capitalize">NO Result Found</h3>`;
    } else {
        error.innerHTML = "";
    }

    //End Error Handle

    data.slice(0, 20).forEach(showItem => {
        // console.log(showItem);

        const div = document.createElement('div');
        div.classList.add('col')

        div.innerHTML = `
        
        <div class="card my-3" style="width: 18rem;">
        <img src=" https://covers.openlibrary.org/b/id/${showItem.cover_i ? showItem.cover_i:''}-M.jpg" class="card-img-top"style="height: 240px;" alt="...">
        <div class="card-body">
            <h4 class="card-title">${showItem?.title?.slice(0,70) ? showItem?.title:''}</h4>
            <h5 class="card-title">${showItem?.author_name?.[0] ? showItem?.author_name?.[0]:''}</h5>
            <p class="card-text">Publisher: ${showItem?.publisher?.slice(0,70) ?showItem?.publisher:''}</p>
            <p class="card-text">First Published: ${showItem?.first_publish_year ?showItem?.first_publish_year:''}</p>
           
        </div>
    </div>
       
        `;

        displayItem.appendChild(div)

    });


}