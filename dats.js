let goods = [];
function loadXML(url) {
    return fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            goods = Array.from(data.querySelectorAll('book')).map(goods => {
                return {
                    name: goods.querySelector('name').textContent,
                    image: goods.querySelector('image').textContent,
                    price: goods.querySelector('price').textContent,
                    author: goods.querySelector('author').textContent,
                };
            });
            return goods;
        });
}
function addItemsToDOM(goods) {
    const goodsList = document.querySelector('.catalog');
    goods.forEach(good => {
        const goodDiv = document.createElement('div');
        goodDiv.className = 'book-div';
        goodDiv.innerHTML = `
            <p>${good.name}</p>
            <img src="${good.image}">
            <p> ${good.price}</p>
            <p>${good.author}</p>
            <button>Добавить в корзину</button>
        `;
        goodsList.appendChild(goodDiv);
    });
}

document.addEventListener('DOMContentLoaded', function () {

    loadXML("data.xml").then(() => {
        addItemsToDOM(goods);
    })
        .catch(error => console.error('Error fetching XML:', error));
})
