
import { useState } from 'react'
import React from 'react'

import Card from './shared/Card' // THE CARD COMPONENT
import Button from './shared/Button' // THE BUTTON COMPONENT
import RatingSelect from './RatingSelect'; //

// the param handleAdd is a function which add the new feedback to the existing feedback list
function FeedbackForm({handleAdd}) {

    // this state is listening to the text val - we expect a string of at least 10 chars
    const [text, setText] = useState('')
    // this state is listening to the rating selected
    const [rating, setRating] = useState(10)
    // this state is listening if the feedback have sent
    const [btnDisable, setBtnDisable] = useState(true) 
    // this state is listening to the size of the feedback length
    const [message, setMessage] = useState('')

    // the param e is the event accured
    const handleTextChange = (e) => {
        if (text === '')
        {
            setBtnDisable(true)
            setMessage(null)
        }
        else if (text !== '' && text.trim().length < 10)
        {
            setBtnDisable(true)
            setMessage("Too short")
        }
        else
        {
            setBtnDisable(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length >= 10)
        {
            const newFeedback = { //creating a new feedback
                text,
                rating
            }
            handleAdd(newFeedback)
            setText('')
            // text = ''
        }
    }
    
    return (
    <Card>
        <form onSubmit={handleSubmit}>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder='Write a feedback'/> 
                {/* /onChange={handleTextChange} */}
                <Button type='submit' version='secondary' isDisable={btnDisable}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>} {/* if message == null no need to present anything */}
        </form>
    </Card>
    
  )
}



export default FeedbackForm