document.getElementById('openlibrary-Search').addEventListener('click', () => {

    // console.log('hi');

    const openlibraryValue = document.getElementById('openlibrary-value');
    const openlibraryValueText = openlibraryValue.value;


    const url = `http://openlibrary.org/search.json?q=${openlibraryValueText}`
    fetch(url)
        .then(res => res.json())
        .then(data => loadItem(data.docs))
        // console.log(url);

})


const loadItem = (data) => {
    const tolatItem = document.getElementById("demo");
    tolatItem.innerHTML = `
    <h3 class="text-center text-capitalize">About <span class="text-muted fs-3">${data.length}</span> results</h3>
   `;

    // console.log(data);

    const displayItem = document.getElementById('displayItem')
    displayItem.textContent = '';

    const error = document.getElementById('demo2');

    if (!data) {


        error.innerHTML = `<p class="text-danger">NO Result Found</p>`;
    } else {
        error.innerHTML = "";
    }










    data.forEach(showItem => {
        // console.log(showItem);

        const div = document.createElement('div');
        div.classList.add('col-lg-3')

        div.innerHTML = `
        
        <div class="card my-3" style="width: 18rem;">
        <img src=" https://covers.openlibrary.org/b/id/${showItem.cover_i ? showItem.cover_i:''}-M.jpg" class="card-img-top"style="height: 240px;" alt="...">
        <div class="card-body">
            <h4 class="card-title">${showItem?.title?.slice(0,100) ? showItem?.title:''}</h4>
            <h5 class="card-title">${showItem?.author_name?.[0] ? showItem?.author_name?.[0]:''}</h5>
            <p class="card-text">${showItem?.publish_date?.slice(0,100) ?showItem?.publish_date:''}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
        
        
        `;

        displayItem.appendChild(div)



    });





}