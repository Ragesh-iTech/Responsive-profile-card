const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

const accessKey = "egL0bdaOWDySQIHtly2jk4bQ1BQTFCIzlqQ0OcNlwCI";

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value; // Corrected to 'value' (lowercase)
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results; // Corrected to 'results' (plural)

    if (page === 1) {
        searchResult.innerHTML = ""; // Clear previous results for new search
    }

    results.map((result) => {
        const img = document.createElement("img");
        img.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(img);
        searchResult.appendChild(imageLink);
    });

    if (results.length > 0) {
        showMoreBtn.style.display = "block";
    } else {
        showMoreBtn.style.display = "none";
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});






// const searchFrom = document.getElementById("search-form");
// const searchBox = document.getElementById("search-box");
// const searchResult = document.getElementById("search-result");
// const showMoreBtn = document.getElementById("show-more-btn");

// const accessKey = "egL0bdaOWDySQIHtly2jk4bQ1BQTFCIzlqQ0OcNlwCI";

// let keyword = "";
// let page = 1;

// async function searchImages(){
//     keyword = searchBox.Value;
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
//     &client_id=${accessKey}`;

//     const response = await fetch(url);
//     const data = await response.json();

//     const result  = data.result;

//     result.map((result) => {
//         const img = document.createElement("img");
//         img.src = result.urls.small;
//         const imageLink = document.createElement("a");
//         imageLink.href = result.links.html;
//         imageLink.target = "_blank";

//         imageLink.appendChild(img);
//         searchResult.appendChild(imageLink);
//     });
// }

// searchFrom.addEventListener("submit", (e) => {
//     e.preventDefault();
//     page = 1 ;
//     searchImages();
// });


