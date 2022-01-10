import React, { useState } from "react"

const ReviewForm = (props) => {
  const [reviewRecord, setReviewRecord] = useState({
    name: "",
    rating: "",
    content: "",
  })

  const handleChange = (event) => {
    setReviewRecord({
      ...reviewRecord,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.addNewReview(reviewRecord)

    setReviewRecord({
      name: "",
      rating: "",
      content: "",
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={reviewRecord.name}
        />
      </label>

      <label htmlFor="rating">
        Rating:
        <input
          type="number"
          id="rating"
          name="rating"
          onChange={handleChange}
          value={reviewRecord.rating}
        />
      </label>

      <label htmlFor="content">
        Content:
        <textarea
          id="content"
          name="content"
          onChange={handleChange}
          value={reviewRecord.content}
        />
      </label>

      <input type="submit" value="Submit Review" />
    </form>
  )
}

export default ReviewForm
