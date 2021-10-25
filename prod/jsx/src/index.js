// Import the React and ReactDOM libraries

/**
 * ----------------- Note ---------------
 * ES2015 Modules -:   ES2015 Import Statement uses the keyword "import"
 * CommonJS Modules -: CommonJS Import Statement uses the keyword "require" 
 */
import React from 'react';
import ReactDOM from 'react-dom';


// Create a react component
const App = () => {
    return <div>
        <h1>🧠Let's ⚛ React!!!😎</h1>
    </div>
}


// Take the react component and show it on the screen
ReactDOM.render(<App />, document.getElementById('root'));