import React, { useState } from "react"

import Restaurant from "./Restaurant"
import ReviewList from "./ReviewList"
import ReviewForm from "./ReviewForm"

import defaultRestaurants from "../constants/restaurants"
import defaultReviews from "../constants/reviews"

const App = (props) => {
  const [restaurants, setRestaurants] = useState(defaultRestaurants)
  const [reviews, setReviews] = useState(defaultReviews)
  const [selectedId, setSelectedId] = useState(defaultRestaurants[0].id)

  const restaurantClick = (event) => {
    event.preventDefault()
    setSelectedId(event.target.id)
  }

  const restaurantComponents = restaurants.map((restaurant) => {
    let isSelected = false
    if (selectedId === restaurant.id) {
      isSelected = true
    }
    return (
      <Restaurant
        key={restaurant.id}
        data={restaurant}
        isSelected={isSelected}
        handleClick={restaurantClick}
      />
    )
  })

  // of all of the reviews for all restaurants, returns only those reviews for the currently selected restaurant
  const relevantReviews = reviews.filter((review) => {
    return selectedId === review.restaurant_id
  })

  // returns the restaurant object corresponding to the restaurant that was last selected by the user
  const selectedRestaurant = restaurants.find((restaurant) => {
    return restaurant.id === selectedId
  })

  const addNewReview = (newReviewObject) => {
    // const newReviewId = reviews[reviews.length - 1].id + 1
    const newReviewId = reviews.at(-1).id + 1

    const updatedReview = {
      ...newReviewObject,
      restaurant_id: selectedId,
      id: newReviewId
    }

    setReviews([...reviews, updatedReview])
  }

  return (
    <div className="grid-container">
      <div className="grid-x">
        <div className="restaurants cell small-3">
          <h3>Restaurant</h3>
          {restaurantComponents}
        </div>
        <div className="reviews cell auto">
          <h3>Reviews for {selectedRestaurant.name}</h3>
          <ReviewList reviews={relevantReviews} />

          <h3>Leave a Review for {selectedRestaurant.name}</h3>
          <ReviewForm addNewReview={addNewReview} />
        </div>
      </div>
    </div>
  )
}

export default App
