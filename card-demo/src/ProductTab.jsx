import Product from "./Product";

function ProductTab() {
    let styles = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
    return (
        <div style={styles}>
        <Product title="Speaker" idx={0}/>
        <Product title="Headphones" idx={1}/>
        <Product title="Microphone" idx={2}/>
        <Product title="Camera" idx={3}/>
        </div>
    )
}

export default ProductTab;