import React, { useState } from 'react'

const ReviewForm = props => {
  return(
    <div>
      <form>
        <label htmlFor="name"> Name:
          <input type="text" name="name"/>
        </label>

        <label htmlFor="rating">Rating (out of 100):
          <input type="text" name="rating"/>
        </label>

        <label htmlFor="content">How was your Experience?:
          <textarea name="content"/>
        </label>

        <input type="submit" className="button" value="submit"/>
      </form>
    </div>
  )
}

export default ReviewForm
