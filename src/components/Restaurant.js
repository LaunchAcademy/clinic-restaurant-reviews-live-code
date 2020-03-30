import React from 'react'

const Restaurant = (props) => {
  let rowData;
  if (props.isSelected === true) {
    rowData = "grid-x grid-margin-x grid-padding-y selected"
  } else {
    rowData = "grid-x grid-margin-x grid-padding-y"
  }

  return(
    <div className={rowData}>
      <div className="cell small-4">
        <img src={props.data.image} alt={props.data.name} />
      </div>
      <div className="cell small-8">
        <p>
          <a href="#" onClick={props.handleClick} id={props.data.id}>
            {props.data.name}
          </a>
        </p>
        <p>{props.data.location}</p>
      </div>
    </div>
  )
}
export default Restaurant
