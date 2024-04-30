import React from 'react'
import {FaTimes} from "react-icons/fa"
// import PropsTypes from "prop-types"
import Card from './shared/Card'

function FeedBackItem({item , handleDelete}) {
  return (
    <Card reverse={false}>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='green'/>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
 
  )
}

FeedBackItem.propTypes = {

}

export default FeedBackItem


