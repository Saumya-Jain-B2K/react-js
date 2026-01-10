import './Product.css';
import Price from './Price.jsx';
function Product({title, idx}) {
    let oldPrices = ["$99.99", "$199.99", "$299.99", "$399.99"];
    let newPrices = ["$79.99", "$149.99", "$249.99", "$349.99"];
    let descArray = ["Speaker Description", "Headphones Description", "Microphone Description", "Camera Description"];
    let imgs = [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1676717962720-d9a812c8f8c9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "http://images.unsplash.com/photo-1640890959827-6307611b34a1?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
    let imgStyles = {
        width: '150px',
        height: '150px',
        objectFit: 'cover'
    }
    return (
        <div className="Product">
            <h4>{title}</h4>
            <img src={imgs[idx]} alt={title} style={imgStyles}/>
            <p>{descArray[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    )
}

export default Product;