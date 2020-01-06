import React from 'react';
import "./header.less";
class Header extends React.Component {
    render() {
        return (<div className="header">
            <div className="header__title">
                <div>Demo App</div>
            </div>
            <div className="header__settings">Settings</div>
        </div>);
    }
}

export default Header;