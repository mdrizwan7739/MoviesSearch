//apikey=d108f7ee908f04ca6fb4fd319eb6ac21

const BaseUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d108f7ee908f04ca6fb4fd319eb6ac21"
async function getApi(BaseUrl) {
    const response = await fetch(BaseUrl);
    const data = await response.json();
    console.log(data.results);
    movieDisplay(data.results);

}
getApi(BaseUrl);
function movieDisplay(data) {
    const a = document.getElementById("main");
    a.innerHTML = "";
    data.map(datas => {

        const b = document.createElement("div");
        a.innerHTML += `<div class="card m-4" style="width: 18rem;">
          <img src=${"https://image.tmdb.org/t/p/w500" + datas.poster_path} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title text-primary">${datas.original_title}</h5>
            <h7 class="card-title text-primary">${"Released Year :" + " " + datas.release_date.slice(0, 4)}</h7>
            <p class="card-text">${datas.overview.slice(0, 250) + "..."}</p>
          
          </div>
          </div>`

    }
    )
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const c = document.getElementById("input").value;
    if (c) {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=d108f7ee908f04ca6fb4fd319eb6ac21&query=${c}`;
        getApi(url);
    }
    else {
        getApi(BaseUrl);
    }


})