import React, { Component } from 'react'
import './Launchpad1.scss'
import { abletonlive, blender_icon, electron, flstudio, github, magnifyingglass, rekord, unrealicon, VsCode, xcode, swift, spline} from '../../assets/Launchpad'

class launchpad extends Component {
    constructor(props) {
        super(props);
        this.state = { isLaunchpadOpen: true };
        this.ref = React.createRef();

    }
        componentDidMount() {
            document.addEventListener('mousedown', this.handleClickOutside);
        }
      
        componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleClickOutside);
        }
      
        handleClickOutside = (event) => {
            if (this.ref.current && !this.ref.current.contains(event.target)) {
                this.setState({ isLaunchpadOpen: false });
            }
        }

        handleClickInside = (event) => {
            if (this.ref.current && !this.ref.current.contains(event.target)) {
                this.setState({ isLaunchpadOpen: false });
            }
        }

        closeListener = () => {
            this.setState({isLaunchpadOpen: false});
            console.log('launchpad closed')
        }
    
  
  render() {

    const { isLaunchpadOpen } = this.state;
    return (
        <>
        {isLaunchpadOpen && (
            <div className='launchpad-container' ref={this.ref} onClick={this.handleClickInside}>
              <div className='fullscreenParent'>
                  <div className='' />
                  <div className='textFields'>
                      <div className='placeholder'>
                          <img className='magnifyingglassIcon' alt="" src={magnifyingglass.png} />
                          <div className='search'>Search</div>
                      </div>
                  </div>
                  <img className='electron1Icon' alt="" src={electron} />
                  <img className='blenderIcon1' alt="" src={blender_icon} />
                  <img className='rekordbox1Icon' alt="" src={rekord} />
                  <img className='vscode1Icon' alt="" src={VsCode} />
                  <div className='frame'>
                      
                      <img className='github2Icon' alt="" src={github} />
                  </div>
                  <img className='xcode1Icon' alt="" src={xcode} />
                  <img className='swift1Icon' alt="" src={swift} />
                  <img className='abletonlive1Icon' alt="" src={abletonlive} />
                  <img className='flstudio1Icon' alt="" src={flstudio}/>
                  <img className='spline1Icon' alt="" src={spline} />
                  <img className='unrealicon1' alt="" src={unrealicon} />
              </div>
            </div>
        )}
        </>
      
      
  )
}
}

export default launchpad