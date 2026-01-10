export default function Price ({oldPrice, newPrice}) {
    let styles = {
        textDecorationLine: 'line-through',
    }
    let newStyles = {
        fontWeight: 'bold',
    }
    return (

        <div>
            <span style={styles}>{oldPrice}</span>
            &nbsp;&nbsp;
            <span style={newStyles}>{newPrice}</span>
        </div>
    )
}