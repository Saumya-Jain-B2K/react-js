import { useState } from "react"
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comments(){
    let [comments, setComments] = useState([{
        username: "@yello",
        remarks: "Good Job",
        ratings: 4
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        // console.log("new comment added");
    }
    return(
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                <span>{comment.remarks}</span>
                &nbsp;
                <span>(rating = {comment.ratings})</span>
                <p>--{comment.username}</p>
            </div>
            ))}
            
        </div>
        <hr /><hr />
        <CommentsForm addNewComment={addNewComment}/>
        </>
    )
}