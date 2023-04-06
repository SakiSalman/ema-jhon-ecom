import { getShoppingCart } from "../assets/utilities/fakedb"


export const cartProducts = async  () => {
    // load all products
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json()
  
    const catProduct = getShoppingCart()

    const savedProduct = []
    // find the product info with id from objects
    for (const id in catProduct) {
        const addedProduct = products.find( pd => pd.id === id)
        if (addedProduct) {
            const quantity = catProduct[id]
            addedProduct.quantity = quantity
            savedProduct.push(addedProduct)
        }
        
    }
    return savedProduct


}