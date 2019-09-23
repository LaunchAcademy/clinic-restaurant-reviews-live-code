import React, { useState } from 'react'

const ReviewForm = props => {
   const [reviewRecord, setReviewRecord] = useState({
     id:props.id,
     name:"",
     rating:"",
     content:""
   })

   const handleChange = (event) =>{
     setReviewRecord({...reviewRecord, [event.target.name]:event.target.value})
   }

   const clearForm = () => {
     setReviewRecord({
       id:props.id,
       name:"",
       rating:"",
       content:""
     })
   }

   const handleSubmit = (event) => {
     event.preventDefault()
     props.addReview(reviewRecord)
     clearForm()
   }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name={props.id} value={props.id}/>

        <label htmlFor= "name"> Name:
          <input
            type ="text"
            name="name"
            value={reviewRecord.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor= "rating">Rating:
          <input
            type ="text"
            name="rating"
            value={reviewRecord.rating}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="content">How was your Experience?:
          <textarea
            name="content"
            value={reviewRecord.content}
            onChange={handleChange}
          />
        </label>

        <input type="submit" className="button" value="submit"/>
      </form>
    </div>
  )
}

export default ReviewForm
