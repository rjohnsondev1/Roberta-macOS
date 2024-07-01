import React, { Component } from "react";
import emailjs from "@emailjs/browser";
import "./Email.scss";
import {  github, linkedin } from '../../assets/index.js'

class Email extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            messageSent: false,
            errorOccurred: false,
            isEmailOpen: true
        };
        this.ref = React.createRef();
    }

   
  
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
  
    handleClickOutside = (event) => {
        if (this.ref.current && !this.ref.current.contains(event.target)) {
            this.setState({ isEmailOpen: false });
        }
    }

    closeListener = () => {
        this.setState({isEmailOpen: false});
        console.log('email closed');
    }
    linkedinListener = () => {
       console.log('linkedin clicked');
    }

    componentDidMount() {
        emailjs.init("y2_GL3NZVwikJ-hvw");
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { name, email, message } = this.state;

        emailjs.send("Roberta's Portfolio", "template_65zce25", {
            from_name: name,
            from_email: email,
            message: message,
        })
        .then((response) => {
            console.log("Mail sent successfully", response);
            this.setState({ messageSent: true, errorOccurred: false });
        }, (error) => {
            console.log("Error occurred", error);
            this.setState({ messageSent: false, errorOccurred: true });
        });

        // Reset the form fields
        this.setState({ name: '', email: '', message: '' });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { isEmailOpen } = this.state;
        const { messageSent, errorOccurred } = this.state;
        return (
            <>
            {isEmailOpen && (
            <section className="email-container" ref={this.ref}>
            <div id="email" className="email-container">
                <div className="title-bar" id="titleBar" style={{ backgroundColor: "#0078d7" }}>
                    
                                 <div className='windowControls'>
                                        <div className='window-button close' onClick={this.closeListener} />
                                        <div className='minimize' />
                                        <div className='zoom' />
                                  </div>
                    
                </div>
                <div id="contact-content" className="content-light">
                    <p className="title">Get in touch</p>
                    <form id="form-contact" onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="form-name" name="name" required placeholder="Your name" onChange={this.handleChange} />

                        <label htmlFor="email">Your mail</label>
                        <input type="email" id="form-email" name="email" required placeholder="example@mail.com" onChange={this.handleChange} />

                        <label htmlFor="message">Message</label>
                        <textarea id="form-message" name="message" rows="4" required placeholder="Your message" onChange={this.handleChange}></textarea>
                        <div>
                            <input type="submit" value="Send Message" />
                        </div>
                    </form>
                    <p className='all'>All messages are sent directly to my personal email account: <a href= "mailto:rjohnsondev1@gmail.com"> rjohnsondev1@gmail.com</a>
                    </p> 
                    {messageSent && <p>Your message has been sent successfully!</p>}
                    {errorOccurred && <p>Error. Please try to contact me through my personal email: rjohnsondev1@gmail.com</p>}
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                        <a href="www.linkedin.com/in/roberta-johnson" target="_blank">
                            <img src={linkedin} id="icon" style={{margin:"0 10px", width: "30px", height: "30px"}} alt="linkedin" onClick={() => window.open('https://www.linkedin.com/in/roberta-johnson/', "_blank")}/>
                        </a>
                        <a href="www.github.com/robertajohnson1" target="_blank">
                            <img src={github} id="icon" style={{margin:"0 10px", width: "30px", height: "30px"}} alt="github" onClick={() => window.open('https://github.com/rjohnsondev1', "_blank")}/>
                        </a>
                        <a>
                            
                        </a>
                        <a></a>
                    </div>
                </div>
            </div>
            </section>
            )}
            </>
        );
    }
}

export default Email;