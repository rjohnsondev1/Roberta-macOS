import React, { Component } from 'react'
import { bookfront } from '../../assets';
import './About.scss'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { showBookFront: false };
    }
   /* aboutListener = () => {
        this.setState(prevState => ({ showBookFront:!prevState.showBookFront }));
    } */

    render() {
        return (
            <div style={{display: "none"}}>
                <img src={bookfront} alt="bookfront" id='bookfront' className='bookfront1' onClick={this.aboutListener} />
                {this.state.showBookFront && (
                    <img src={bookfront} alt="bookfront" id='bookfront' className='bookfront-display'  />
                )}
            </div>
        )
    }
}

export default About