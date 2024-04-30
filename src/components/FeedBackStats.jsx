import React from 'react'
import PropTypes from 'prop-types'

function FeedBackStats({feedBack}) {

    let average = feedBack.reduce( (acc, cur) => {
        return acc + cur.rating
    }, 0)

    average = (average/feedBack.length).toFixed(1).replace(/\.0+$/, "")
  return (
    <div className='feedback-stats'>
      <h4>{feedBack.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? "No Feedback Yet" : average}</h4>
    </div>
  )
}

FeedBackStats.propTypes = {

}

export default FeedBackStats

