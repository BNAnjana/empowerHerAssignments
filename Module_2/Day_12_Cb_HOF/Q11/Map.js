// Transforming and Filtering with map() and forEach()

function processProducts(products){
    
    const product_Names = products.map(product => product.name);

    products.forEach(product => 
    {
        if(product.price > 50){
            console.log(`${product.name} is above $50`);
        }else{
            console.log(`${product.name} is below $50`);
        }
    }
    );
}
 const products = [
        {name: "Laptop", price: 1000},
        {name: "Mouse", price: 20},
        {name: "Keyboard",price: 100},
        {name: "CPU", price: 800},
        {name: "Pendrive", price: 40}
    ];
processProducts(products);