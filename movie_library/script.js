const movies = [
    { title: "The Shawshank Redemption", genre: "Drama" },
    { title: "The Godfather", genre: "Crime" },
    { title: "The Godfather: Part II", genre: "Crime" },
    { title: "The Dark Knight", genre: "Action" },
    { title: "12 Angry Men", genre: "Drama" },
    { title: "Schindler's List", genre: "Drama" },
    { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
    { title: "Pulp Fiction", genre: "Crime" },
    { title: "The Good, the Bad and the Ugly", genre: "Western" },
    { title: "Fight Club", genre: "Drama" },
    { title: "Forrest Gump", genre: "Drama" },
    { title: "Inception", genre: "Action" },
    { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
    { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
    { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
    { title: "The Matrix", genre: "Action" },
    { title: "Goodfellas", genre: "Crime" },
    { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
    { title: "Seven Samurai", genre: "Adventure" },
    { title: "Se7en", genre: "Crime" },
    { title: "City of God", genre: "Crime" },
    { title: "The Silence of the Lambs", genre: "Thriller" },
    { title: "It's a Wonderful Life", genre: "Drama" },
    { title: "Life is Beautiful", genre: "Comedy" },
    { title: "The Usual Suspects", genre: "Crime" },
    { title: "Léon: The Professional", genre: "Action" },
    { title: "Spirited Away", genre: "Animation" },
    { title: "Saving Private Ryan", genre: "Drama" },
    { title: "Interstellar", genre: "Adventure" },
    { title: "The Green Mile", genre: "Drama" },
    { title: "The Prestige", genre: "Drama" },
    { title: "The Intouchables", genre: "Comedy" },
    { title: "The Lion King", genre: "Animation" },
    { title: "The Pianist", genre: "Drama" },
    { title: "The Departed", genre: "Crime" },
    { title: "Whiplash", genre: "Drama" },
    { title: "Gladiator", genre: "Action" }
]
// const btn = document.getElementById("search")
const searchTitle = document.getElementById("title")
const searchgenre = document.getElementById("genre")
const result = document.getElementById("results");
let searchResults = []
const counttag=document.getElementById("count")

document.getElementById('search').addEventListener('click', function(event){
    // console.log("button clicked");

    if(searchTitle.value) {
        searchResults = getByTitle(searchTitle.value);
        // console.log(searchResults);
    } else if(searchgenre.value) {
        searchResults = getBygenre(searchgenre.value);
    }
    else if(searchTitle.value && searchgenre.value){
        searchResults=searchBoth(searchTitle.value,searchgenre.value);
    }
    
    displayResults(searchResults);
  });

    // console.log(searchResults);

function getByTitle(searchTitle) {
    // console.log("searchbytitle");
   return movies.filter(movie =>  movie.title.toLowerCase().includes(searchTitle.toLowerCase().trim()) )
}

function getBygenre(searchgenre) {
  return  movies.filter(movie => movie.genre.toLowerCase().includes(searchgenre.toLowerCase().trim()))
}
// function displayResults(lists) {
//     result.innerHTML = "";
//     lists.map(ele => {
//         const child = `<li>${ele.title}(${ele.genre})</li>`
//         result.innerHTML += child
//     })
// }
function displayResults(list) {
    result.innerHTML = ''; // clearing the previous results
    list.map(ele => {
        let childTag = `<li>${ele.title}(${ele.genre})</li>`;
        // console.log(childTag);
        result.innerHTML+= childTag;
    })
    countByGenre(list);
  }

  function sortByTitle(){
    const sortbytitle=searchResults.sort((a,b)=>a.title.localeCompare(b.title));
    displayResults(sortbytitle)
  }

  function sortByGenre(){
    // console.log("sorting places");
    const sortbygenre=searchResults.sort((a,b)=>a.genre.localeCompare(b.genre));
    displayResults(sortbygenre)
  }

  function countByGenre(list){
    let count={}
    list.map(ele =>{
        if(count[ele.genre]){
            count[ele.genre]++
        }else{
            count[ele.genre]=1
        }
    })
    console.log(count);
    counttag.innerHTML=""
    for(key in count){
        counttag.innerHTML +=`<li>${key}:${count[key]}</li>`
    }
  }
  function searchBoth(title,genre){
    return movies.filter(movie=>(movie.title.toLowerCase().includes(searchResults.title.toLowerCase().trim())&&(movie.genre.toLowerCase().includes(searchResults.genre.toLowerCase().trim()))))
  }

