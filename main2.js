const data2=[{
    
    id:1,
    image:'https://imagescdn.thecollective.in/img/app/product/8/880023-10558917.JPG?w=900&auto=format',
    Name:"Michael Kor's",
    Price:2000
},
{
    
    id:2,
    image:'https://justintime.in/cdn/shop/products/25200094.jpg?v=1682000877&width=823',
    Name:"Calvin Klein",
    Price:2000
},
{
    
    id:3,
    image:'https://www.gonoise.com/cdn/shop/files/1.0-min_d91a41c6-5006-4b63-a467-b8955a12b987.png?v=1703582364',
    Name:"Noise ",
    Price:2000
},
{
    
    id:4,
    image:'https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/b/v/bvlgari-serpenti-103791-large.jpg',
    Name:"Ethos bvglari",
    Price:2000
},]

const search=document.getElementById('input');
const style=document.getElementById('itemsList');
const collection=[...new Set(data2.map((item)=>item)
)];
input.addEventListener("keyup",((e)=>{
   const values= e.target.value.toLowerCase();
   const filterdata=collection.filter((item)=>{
    return item.Name.toLowerCase().includes(values);
   })
   displayItem(filterdata);
}))
const displayItem = (items) => {
    document.getElementById('itemsList').innerHTML = items.map((item) => {
        const { image, Name, Price } = item;
        return (
            `<div class="Product">
                <div class="watchShow">
                    <img src="${image}" alt="">
                </div>
                <div class="Details">
                    <ul>
                        <li>Name: ${Name}</li>
                        <li>Price: ${Price}</li>
                    </ul>
                </div>
            </div>`
        )
    }).join('')
}

displayItem(collection);
