import React from 'react'

const Review = (props) => {

    let nRating
    if (props.reviewData.rating > 9000) {
      nRating = <iframe src="https://giphy.com/embed/tPKoWQJk3cEbC" width="480" height="359" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
    } else {
      nRating = props.reviewData.rating
    }
  

  return(
    <div className="row mbl">
      <div className="small-1 columns"><strong>Name</strong></div>
      <div className="small-11 columns">{props.reviewData.name}</div>

      <div className="small-1 columns"><strong>Score</strong></div>
      <div className="small-11 columns">{nRating} stars!</div>

      <div className="small-1 columns"><strong>Review</strong></div>
      <div className="small-11 columns">{props.reviewData.content}</div>
    </div>
  )
}


export default Review
