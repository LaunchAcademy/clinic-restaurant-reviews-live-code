import React, { useState } from React

const ReviewForm = props => {
  return(
    <div>
      <form>
        <label htmlFor= "name"> </label>
        <input type ="text">Name: </input>

        <label htmlFor= "rating">Rating: </label>
        <input type ="text"> </input>

        // <select name="rating">
        //   <option value="">Star Rating</option>
        //   <option value=""> </option>
        // </select>

        <label htmlFor="content">How was your Experience?: </label>
        <textarea name="content"> </textarea>

        <input type="submit" className="button" value="submit" />
      </form>
    </div>
  )
}

export default ReviewForm
