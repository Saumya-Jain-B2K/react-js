import './App.css'
import Lottery from './Lottery'
import ProductTab from './ProductTab'
import Ticket from './Ticket'
import TicketNum from './TicketNum'
import TodoList from './TodoList'

function App() {
  let styles = {
    textAlign: 'center',
    marginTop: '20px'
  }
  
  return (
    // <div style={styles}>
    // <h3>Blockbuster deals! Shop Now</h3>
    // <ProductTab />
    // </div>
    <>
    <Lottery n={3} winningSum={17}/>
    </>
  )
}

export default App
