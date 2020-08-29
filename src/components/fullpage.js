import React, { Component } from 'react';



class FullPage extends Component {

    render() {
        return(
            <div className={`fullPage ${this.props.className || ''}`}>
            {children}
        </div>
        )
   
    }
}

export default FullPage;