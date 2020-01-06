import React from  'react';
import './App.less';
import Header from './header/header.jsx'
class App extends React.Component {
    click(){
        alert('Hi My World!!!');
    }
    render(){
        return (<div>
            <Header></Header>
            <button onClick={() => this.click()}>Click me!</button>
            Hello World!</div>);
    }
}

export default App;