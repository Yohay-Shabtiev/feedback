import React from 'react'
// import PropTypes from 'prop-types'
import FeedBackItem from './FeedBackItem'

function FeedBackList({feedBack, handleDelete}) {
  return (
    <div className='feedback-list'>
        
        {
        feedBack.map( (item, index) => (
            <FeedBackItem key={index} item={item} handleDelete={handleDelete}/>
          
        ))}
    </div>
  )
}

FeedBackList.propTypes = {

}

export default FeedBackList

