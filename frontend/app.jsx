import React from 'react';
import {render} from 'react-dom';
import './styles/app.css';


class App extends React.Component {
render() {
    return (
      <div>
        'Hello world!'
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));