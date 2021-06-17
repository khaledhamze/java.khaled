const inputField = document.getElementById("search");

inputField.addEventListener("keyup", async function (event) {
    const searchText = event.target.value;
    await searchmovies(searchText);
});

function createResultElement(title, description) {
    const element = document.createElement("div");
    element.innerText = `${title} ${description}`;

    return element;
}

const resultsArea = document.getElementById("search-results");

async function searchmovies(searchtext) {
    const response = await fetch("min.json")
    const movies = await response.json();

    let matches = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchtext.toLowerCase()) ||
            movie.description.toLowerCase().includes(searchtext.toLowerCase());
    })
    if (search.value === "") {
        matches = ""
    }
    theHtml(matches)
}
function theHtml(matches) {
    if (matches) {
        console.log(matches);
        matches.forEach(result => resultsArea.appendChild(createResultElement(
            result.title,
            result.description
        )));
    } else {
        console.log("No results.");
    }
};