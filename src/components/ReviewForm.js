import React, { useState } from 'React'

const ReviewForm = props => {
  return(
    <div>
      <form>
        <label htmlFor= "name"> Name:
          <input type ="text" id="name"/>
        </label>

        <label htmlFor= "rating">Rating:
          <input type ="text" id="rating"/>
        </label>

        <label htmlFor="content">How was your Experience?:
          <textarea id="content"/>
        </label>

        <input type="submit" className="button" value="submit"/>
      </form>
    </div>
  )
}

export default ReviewForm
