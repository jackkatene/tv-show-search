const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const newImg = document.createElement('IMG');
            newImg.src = result.show.image.medium;
            document.body.append(newImg);
        }
    }
}