import React, { Component } from 'react';
import './Dock.scss';
import Finder from '../Finder/Finder';
import Email from '../Email/email';
import Launchpad1 from '../Launchpad1/Launchpad1';
import Projects from '../Projects/Projects';
import { finder1, launch, email, projects, safari, settings, Trashfull, bookfront } from '../../assets';

class Dock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEmail: false,
            showBookFront: false,
            showFinder: false,
            showLaunchpad1: false,
            showProjects: false,
        };
        this.bookfrontRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.bookfrontRef.current && !this.bookfrontRef.current.contains(event.target)) {
            this.setState({ showBookFront: false });
        }
    }

    finderListener = () => {
        this.setState(prevState => ({ showFinder: !prevState.showFinder }));
        console.log('finder clicked');
    }

    emailListener = () => {
        this.setState(prevState => ({ showEmail: !prevState.showEmail }));
        console.log('email clicked');
    }

    projectsListener = () => {
        this.setState(prevState => ({ showProjects: !prevState.showProjects }));
        console.log('projects clicked');
    }

    safariListener = () => {
        this.setState(prevState => ({ showBookFront: !prevState.showBookFront }));
        console.log('safari clicked');
    }

    launchpad1Listener = () => {
        this.setState(prevState => ({ showLaunchpad1: !prevState.showLaunchpad1 }));
        console.log('launchpad clicked');
    }

    render() {
        const { showFinder, showLaunchpad1, showProjects, showBookFront, showEmail } = this.state;

        return (
            <section className='dock-container'>
                <div className='dock-item'>
                    <div className='tool-tip'>
                        <p>Skills</p>
                    </div>
                    <img src={finder1} onClick={this.finderListener} alt="finder" id='finder' className='image-wrapper' />
                </div>
                <div className='dock-item'>
                    <div className='tool-tip'>
                        <p>Tech</p>
                    </div>
                    <img src={launch} onClick={this.launchpad1Listener} alt="launch" id='launch' className='image-wrapper' />
                </div>
                <div className='dock-item'>
                    <div className='tool-tip'>
                        <p>Email</p>
                    </div>
                    <img src={email} onClick={this.emailListener} alt="email" id='email' className='image-wrapper' />
                </div>
                <div className='dock-item'>
                    <div className='tool-tip'>
                        <p>Projects</p>
                    </div>
                    <img src={projects} onClick={this.projectsListener} alt="projects" id='projects' className='image-wrapper' />
                </div>
                <div className='dock-item' ref={this.bookfrontRef}>
                    <div className='tool-tip'>
                        <p>About</p>
                    </div>
                    <img src={safari} onClick={this.safariListener} alt="safari" id='safari' className='image-wrapper' />
                </div>
                <div className='dock-item'>
                    <div className='tool-tip'>
                        <p>Settings</p>
                    </div>
                    <img src={settings} alt="settings" id='settings' className='image-wrapper' />
                </div>
                <div className='dock-item'>
                    <div className='tool-tip'>
                        <p>Trash</p>
                    </div>
                    <img src={Trashfull} alt="trash" />
                </div>

                {showFinder && <Finder />}
                {showLaunchpad1 && <Launchpad1 />}
                {showProjects && <Projects />}
                {showBookFront && (
                    <img className="bookfront-display" alt="Bookfront displayed" src={bookfront} ref={this.bookfrontRef} />
                )}
                {showEmail && <Email />}
            </section>
        );
    }
}

export default Dock;
