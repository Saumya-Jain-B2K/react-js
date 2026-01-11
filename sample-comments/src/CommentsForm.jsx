import { useState } from "react";
import { useFormik} from "formik";

const validate = values => {
  const errors = {};
  if(!values.username) {
    errors.username = 'Required';
  }

  // if(!values.remarks) {
  //   errors.remarks = 'Required';
  // } else if (values.remarks.length < 10) {
  //   errors.remarks = 'Must be above characters or more';
  // }

  // if(!values.ratings) {
  //   errors.ratings = 'Required';
  // } else if (values.ratings.length > 5) {
  //   errors.ratings = 'Must be between 1 to 5';
  // }
}

export default function CommentsForm({addNewComment}) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   ratings: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      ratings: 5,
    }, 
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   // console.log(formData);
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  //   addNewComment(formData);
  //   setFormData({
  //   username: "",
  //   remarks: "",
  //   ratings: 5,
  // })
  // };

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username:</label>&nbsp;
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? <p>{formik.errors.username}</p> : null}
        <br /> <br />
        <label htmlFor="remarks">Remarks:</label>&nbsp;
        <textarea
          placeholder="add remarks"
          name="remarks"
          id="remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
        >
          Remarks
        </textarea>
        <br />
        <br />
        <label htmlFor="ratings">Ratings:</label>&nbsp;
        <input
          placeholder="ratings"
          type="number"
          min={1}
          max={5}
          value={formik.values.ratings}
          onChange={formik.handleChange}
          id="ratings"
          name="ratings"
        />
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
