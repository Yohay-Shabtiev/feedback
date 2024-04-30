import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import './App.css';
import FeedBackData from './components/data/FeedBackData'
import Header from './components/Header'
import FeedBackList from './components/FeedBackList'
import FeedBackStats from './components/FeedBackStats';
import FeedbackForm from './components/FeedbackForm'



function App() {


  const [feedBack, setFeedBack] = useState(FeedBackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedBack([newFeedback, ...feedBack])
  }

  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want delete the feedback ?"))
    setFeedBack(feedBack.filter( (item) => item.id !== id ))
  }
  return (
    <>
     {/* <Router> */}
       {/* <Header/> */}
       {/* <Rout> */}
         <div className='container'>
           <FeedbackForm handleAdd={addFeedback}/>
           <FeedBackStats feedBack={feedBack}/>
           <FeedBackList feedBack={feedBack} handleDelete={deleteFeedBack}/>
         </div>
       {/* </Rout> */}
   {/* </Router>  */}
    
    </>
  );
}

export default App;





// <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>

