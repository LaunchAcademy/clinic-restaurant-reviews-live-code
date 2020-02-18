import React, { useState } from 'react'

const ReviewForm = props => {
  const [reviewRecord, setReviewRecord] = useState({
    name: "",
    rating: "",
    content: ""
  })

  const handleChange = event => {
    setReviewRecord({
      ...reviewRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })  
    //  console.log(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addReview(reviewRecord)
    clearForm()
  }

  const clearForm = () => {
    setReviewRecord({
      name: "",
      rating: "",
      content: ""
    })
  }

  return(
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
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
          type="text"
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
