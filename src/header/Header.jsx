import React from 'react';
import "./style.less";
class Header extends React.Component {
    render() {
        return (<div class="header">
            <div class="header__title">
                <div>Demo App</div>
            </div>
            <div class="header__settings">Settings</div>
        </div>);
    }
}

export default Header;