const accessKey = "fqa2Jo7k827xbZmhpsYE_V7hBrGEQKtK-Fqzm_EvqBY";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMorebtn = document.getElementById("showMorebtn");

let keyword = "";
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResult.innerHTML = "";
    }

    // console.log(data);

    const result = data.results;

    result.map(function (result) {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    });
    showMorebtn.style.display = "block";


};

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    page = 1;
    searchImage();
});

showMorebtn.addEventListener("click", function () {
    page++;
    searchImage();

});

