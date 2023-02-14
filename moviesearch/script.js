
const search = document.getElementById("movieName");
const btn = document.getElementById("btn");
const view = document.getElementById("view");
btn.addEventListener("click", function () {
    let input=search.value
    let apikey = "b3c3f773";
    let url = `http://www.omdbapi.com/?apikey=${apikey}&t=${input}`;
    const image=` http://img.omdbapi.com/?apikey=${apikey}`;
    fetch(url).then((res) => res.json()).then((res) => {
        console.log(res);
        const posterurl = `${image}&i=${res.imdbID}`;

        const html = `
        <div>
            <img src="${posterurl}" alt="${res.Title}"}>
            <p> Released in ${res.Year}</p>
            <p> IMDB Rating:${res.imdbRating}</p>
            <p> Casting:${res.Actors}</p>
            <p> Director:${res.Director}</p>
        </div>
        `;
        view.innerHTML = html
    })
})