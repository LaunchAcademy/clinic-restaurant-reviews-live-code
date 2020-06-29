import React, { useState } from 'react'

const ReviewForm = props => {
  const [reviewRecord, setReviewRecord] = useState({
    name: "",
    rating: "",
    content: ""
  })

  const onSubmitHandler = () => {
    event.preventDefault()
    props.addReview(reviewRecord)
    setReviewRecord({
      name: "",
      rating: "",
      content: ""
    })
    // debugger
  }

  const onChangeHandler = (event) => {
    // debugger
    setReviewRecord({
      ...reviewRecord,
      [event.currentTarget.name]: event.currentTarget.value
    })
    // console.log(event.currentTarget.value)
  }

  return(
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor= "name"> Name:
          <input
            type="text"
            name="name"
            onChange={onChangeHandler}
            value={reviewRecord.name}
            />
        </label>

        <label htmlFor= "rating">Rating:
          <input
            type="text"
            name="rating"
            onChange={onChangeHandler}
            value={reviewRecord.rating}
          />
        </label>

        <label htmlFor="content">How was your Experience?:
          <textarea
            name="content"
            onChange={onChangeHandler}
            value={reviewRecord.content}
          />
        </label>

        <input type="submit" className="button" value="submit"/>
      </form>
    </div>
  )
}

export default ReviewForm
