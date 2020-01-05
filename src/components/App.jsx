import React from  'react';
import './app.less';
class App extends React.Component {
    click(){
        alert('Hi My World!!!');
    }
    render(){
        return (<div><button onClick={() => this.click()}>Click me!</button>
            Hello World!</div>);
    }
}

export default App;