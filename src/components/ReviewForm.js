import React, { useState } from "react"
import _ from "lodash"

import ErrorList from "./ErrorList"

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    content: ""
  })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const validForSubmission = () => {
    let submitErrors = {}
    const requiredFields = ["name", "rating", "content"]
    requiredFields.forEach((field) => {
      if (newReview[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank"
        }
      }
    })

    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validForSubmission()) {
      props.addNewReview(newReview)

      setNewReview({
        name: "",
        rating: "",
        content: ""
      })
    }
  }

  return (
    <div>
      <ErrorList errors={errors} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            name="name"
            type="text"
            value={newReview.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="rating">
          Rating:
          <input
            id="rating"
            name="rating"
            type="number"
            value={newReview.rating}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="content">
          Content:
          <input
            id="content"
            name="content"
            type="text"
            value={newReview.content}
            onChange={handleChange}
          />
        </label>

        <input type="submit" />
      </form>
    </div>
  )
}

export default ReviewForm
