const input = document.getElementById('input');

const data = [
    {
        id: 1,
        name: "Rolex",
        price: "$1,333",
        image: "https://banner2.cleanpng.com/20180330/orq/kisspng-rolex-datejust-rolex-submariner-watch-jewellery-watches-5abe7a094fe6b2.3395428715224325213273.jpg"
    },
    {
        id: 2,
        name: "Titan",
        price: "$1,553",
        image: "https://w7.pngwing.com/pngs/653/1022/png-transparent-analog-watch-titan-company-watch-strap-watch-watch-accessory-accessories-diamond-thumbnail.png"
    },
    {
        id: 3,
        name: "Seiko Presage",
        price: "$2,630",
        image: "https://watchbox-cdn.imgix.net/posted-product-images/638267678764337812_SEIK303490_4407151_68577_41_2.jpg?w=814&h=814&auto=compress,format"
    },
    {
        id: 4,
        name: "Omega",
        price: "$2,930",
        image: "https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/o/m/omega-seamaster-220-12-43-22-03-001-multiple-1.jpg"
    },
    {
        id: 5,
        name: "Timez",
        price: "$2,630",
        image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0814ec34/images/Titan/Catalog/1805QM04_1.jpg?sw=800&sh=800"
    },
    {
        id: 6,
        name: "Quartz",
        price: "$2,630",
        image: "https://www.leafstudios.in/cdn/shop/products/Main_a66bce90-71a9-4c4f-9469-078ec70933e0_800x.jpg?v=1673960414"
    }
];

const categories = [...new Set(data.map((item) => item))];

input.addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return item.name.toLowerCase().includes(searchData)
    })
    displayItem(filterData)
});



const displayItem = (items) => {
    document.getElementById('itemsList').innerHTML = items.map((item) => {
        const { image, name, price } = item;
        return (
            `<div class="Product">
                <div class="watchShow">
                    <img src="${image}" alt="">
                </div>
                <div class="Details">
                    <ul>
                        <li>Name: ${name}</li>
                        <li>Price: ${price}</li>
                    </ul>
                </div>
            </div>`
        )
    }).join('')
}

displayItem(categories);
let slideIndex = 0;
showSlides();

