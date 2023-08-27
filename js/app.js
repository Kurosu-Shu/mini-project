const wrapper = document.querySelector(".wrapper");

async function getImages(count = 8) {
    const id = "";
    const URL = `https://api.unsplash.com/photos/random/?client_id=${id}&count=${count}`;
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    const imgUrls = data.map((d) => {
        return d?.urls?.full;
    });

    let i = 0;
    while (i < imgUrls.length) {
        const image = document.createElement('img');
        image.src = imgUrls[i];
        const divElement = document.createElement('div');
        divElement.classList = "img-container";
        divElement.appendChild(image);
        wrapper.append(divElement);
        i++;
    }

}

getImages();

window.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        getImages(4);
    }
})