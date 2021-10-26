// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
    /* fix invalid DOM property `class` */
    return <div>
        <div>
	     <label className='label' for="name">Enter name:</label>
	     <input id="name" type="text" />
	     <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
	    </div>
    </div>
}


// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));