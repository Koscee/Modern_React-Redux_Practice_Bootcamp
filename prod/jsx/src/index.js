// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
    
    const labelText = 'Enter name:';
    const button = { text: 'CLick me' };

    return (
        <div>
            {/* Fix invalid DOM property `for` */}
            <label className='label' htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {button.text}
            </button>
        </div>
    );
}


// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));