import React, { Component} from 'react'
import './Dock.scss'
//import About from '../About/About'
import Finder from '../Finder/Finder'
import Email from '../Email/email'
import Launchpad1 from '../Launchpad1/Launchpad1'
import Projects from '../Projects/Projects'
import { finder1, launch, email, folder, safari, settings, Trashfull, bookfront } from '../../assets'



class Dock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEmail: false,
            showBookFront: false,
            showFinder: false,
            showLaunchpad1: false,
            showProjects: false

            
        };
        this.bookfrontRef = React.createRef();

        this.finderListener = () => {
            this.setState( prevState => ({showFinder: !prevState.showFinder}) );
            console.log('finder clicked')
        }


          

        this.emailListener  = () => {
            this.setState( prevState => ({showEmail: !prevState.showEmail}) );
            console.log('email clicked')
        }

        this.ProjectsListener = () => {
            this.setState( prevState => ({showProjects: !prevState.showProjects}) );
            console.log('projects clicked')
        }

        this.safariListener = () => {
            this.setState( prevState => ({showBookFront: !prevState.showBookFront}) );
            console.log('safari clicked')
        } 

        this.launchpad1Listener = () => {
            this.setState( prevState => ({showLaunchpad1: !prevState.showLaunchpad1}) );
            console.log('launchpad clicked')
        }
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
  
      closeListener = () => {
          this.setState({isFinderOpen: false});
          this.setState({isProjectsOpen: false});
          this.setState({isLaunchpad1Open: false});
          console.log('finder closed')
      }

render() {

   
  return (
   
    <section className='dock-container'>
    <div className='dock-item'>
        <div className='tool-tip'> 
            <p>Skills</p>
        </div>
        <img src={finder1} onClick={this.finderListener} alt="finder" id='finder' className='image-wrapper'  />
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
        <img src={folder} onClick={this.projectsListener} alt="folder" id='folder' className='image-wrapper' />
    </div>
    <div className='dock-item' ref={this.ref}>
        <div className='tool-tip'>
            <p>About</p>
        </div>
        <img src={safari} onClick={this.safariListener } alt="safari" id='safari' className='image-wrapper' ref={this.ref} />
        
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

    {this.state.showFinder && <Finder/>}
    {this.state.showLaunchpad1 && <Launchpad1/>}
    {this.state.showBookFront && (
            <img className="bookfront-display" alt="Bookfront displayed" src={bookfront} ref={this.bookfrontRef} />
          )}
    {this.state.showEmail && <Email/>}

       
    </section >
   
    
  )
  
}
}

export default Dock