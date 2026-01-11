// import { useState } from "react"
// import { ranTicketGen, sum } from "./helper";
// import Ticket from "./Ticket";

// export default function Lottery({n=3, winningSum=15}) {
//     let [ticket, setTicket] = useState(ranTicketGen(n));
//     let isWinning = sum(ticket) === winningSum;

//     let buyTicket = () => {
//         setTicket(ranTicketGen(n));
//     }
//     return (
//         <div>
//             <h3>Lottery game!</h3>
//             <Ticket ticket={ticket}/>
//             <button onClick={buyTicket}>Buy new Ticket</button>
//             <h3>{isWinning && "Congraluations, you won!"}</h3>
//         </div>
//     )
// }

import { useState } from "react";
import { ranTicketGen, sum } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css";

export default function Lottery({ n = 3, winningSum = 15 }) {
  let [ticket, setTicket] = useState(ranTicketGen(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(ranTicketGen(n));
  };

  return (
    <div className={`lottery-container ${isWinning ? "win" : ""}`}>
      <h3 className="heading">🎰 Lottery Game</h3>

      <Ticket ticket={ticket} />

      <button className="btn" onClick={buyTicket}>Buy New Ticket</button>

      {isWinning && (
        <h3 className="win-text">🎉 Congratulations, you won!</h3>
      )}
    </div>
  );
}
