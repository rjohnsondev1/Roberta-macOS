import React, { Component } from 'react'
import './Finder.scss'
import { java, javascript, nodejs, react, threed, skills, Recent, vite1, threejs, html, css, aws, mysql, nextjs, postgresql, sass  } from '../../assets/Finder';


class Finder extends Component {
    constructor(props) {
        super(props);
        this.state = {isFinderOpen: true };
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
          this.setState({ isFinderOpen: false });
      }
  }

    closeListener = () => {
        this.setState({isFinderOpen: false});
        console.log('finder closed')
    }
 

render () {

const {isFinderOpen} = this.state;

  return (
     <>
     {isFinderOpen && (
        <div className='finder-container' ref={this.ref}>
                <div className='sidebarAndContentAreaWith'>
                      <div className='sidebar'>
                            <div className='toolbar'>
                                  <div className='windowControls'>
                                        <div className='window-button close' onClick={this.closeListener}></div> 
                                        <div className='winddow-button minimize' />
                                        <div className='zoom' />
                                  </div>
                            </div>
                            <div className='sidebarList'>
                                  <div className='sidebarGroup'>
                                        <div className='sectionHeader'>
                                              <b className='section'>Favorites</b>
                                              <div className='symbol'>􀆈</div>
                                        </div>
                                        <div className='component1'>
                                              <div className='sidebarItemWrapper'>
                                                    <div className='sidebarItem1'>
                                                          <div className='leading'>
                                                                <div className='symbol1' />
                                                                <img className='skillsIcon' alt="" src={skills} />
                                                                <div className='label'>Skills</div>
                                                          </div>
                                                          <div className='trailing' />
                                                    </div>
                                              </div>
                                             
                                        </div>
                                        <div className='sidebarItem1'>
                                              <div className='leading'>
                                                    <div className='symbol1'>􀣰</div>
                                                    <div className='label'>Desktop</div>
                                              </div>
                                              <div className='trailing' />
                                        </div>
                                        <div className='sidebarItem1'>
                                              <div className='leading'>
                                                   
                                                    <div className='symbol1'>
                                                        <img alt='Recent'  src={Recent} />
                                                    </div>
                                                    <div className='label'>
                                                          <span className='labelTxt'>
                                                                <p className='recent'>Recent</p>
                                                          </span>
                                                    </div>
                                              </div>
                                              <div className='trailing' />
                                        </div>
                                  </div>
                                  <div className='sidebarItem1'>
                                        <div className='leading'>
                                              <div className='symbol1'>􀁸</div>
                                              <div className='label'>Downloads</div>
                                        </div>
                                        <div className='trailing' />
                                  </div>
                                  <div className='sidebarGroup1'>
                                        <div className='sectionHeader'>
                                              <b className='section'>Locations</b>
                                              <div className='symbol'>􀆈</div>
                                        </div>
                                        <div className='sidebarItem4'>
                                              <div className='leading'>
                                                    <div className='symbol1'>􀤂</div>
                                                    <div className='label'>Roberta’s Portfolio</div>
                                              </div>
                                              <div className='trailing' />
                                        </div>
                                        <div className='sidebarItem5' />
                                  </div>
                            </div>
                      </div>
                      <div className='separator' />
                      <div className='contentAreaAndToolbar'>
                            <div className='contentArea'>
                                  <div className='listItemPrimary'>
                                        <div className='documentIconLabel'>
                                              <div className='label5'> Vite</div>
                                        </div>
                                  </div>
                                  <div className='listItemPrimary1'>
                                        <div className='documentIconLabel'>
                                              <div className='label5'> React</div>
                                        </div>
                                  </div>
                                  <div className='listItemPrimary2'>
                                        <div className='documentIconLabel'>
                                              <div className='label5'> Sass</div>
                                        </div>
                                  </div>
                                  <div className='listItemPrimary3'>
                                        <div className='label5'> Node.js</div>
                                  </div>
                                  <div className='margins' />
                                  <img className='nodejs1Icon' alt="" src={nodejs} />
                                  <div className='listItemPrimary4'>
                                        <div className='label5'> Three.js</div>
                                  </div>
                                  <img className='vitejs1Icon' alt="" src={vite1} />
                                  <img className='brandThreejs1Icon' alt="" src={threejs} />
                                  <img className='reactIcon' alt="" src={react} />
                                  <div className='listItemPrimary5'>
                                        <div className='label5'> HTML</div>
                                  </div>
                                  <img className='html51Icon'alt="" src={html} />
                                  <div className='listItemPrimary6'>
                                        <div className='documentIconLabel'>
                                              <div className='label5'> CSS</div>
                                        </div>
                                  </div>
                                  <img className='fileTypeCss2Icon' alt="" src={css} />
                                  <div className='listItemPrimary7'>
                                        <div className='documentIconLabel'>
                                              <div className='label5'> 3D Modeling</div>
                                        </div>
                                  </div>
                                  <img className='dModel1Icon' alt="threed" src={threed} />
                                  <div className='listItemPrimary8'>
                                        <div className='label5'> Java</div>
                                  </div>
                                  <img className='javaOriginal1Icon' alt="" src={java} />
                                  <div className='listItemPrimary9'>
                                        <div className='documentIconLabel'>
                                              <div className='label5'> Next.js</div>
                                        </div>
                                  </div>
                                  <div className='listItemPrimary10'>
                                        <div className='label5'> Postgres</div>
                                  </div>
                                  <div className='listItemPrimary11'>
                                        <div className='documentIconLabel'>
                                              <div className='label5'> AWS</div>
                                        </div>
                                  </div>
                                  <div className='listItemPrimary12'>
                                        <div className='label5'> MySQL</div>
                                  </div>
                                  <img className='nextjs1Icon' alt="" src={nextjs} />
                                  <img className='postgresql1Icon' alt="" src={postgresql} />
                                  <img className='aws1Icon' alt="" src={aws} />
                                  <img className='mysqlOriginalWordmark1Icon' alt="" src={mysql} />
                                  <img className='fileTypeSass1Icon' alt="" src={sass} />
                                  <div className='header'>
                                        <div className='labelRightDetail'>
                                              <div className='label18'>Name</div>
                                              <div className='rightDetail' />
                                        </div>
                                        <div className='separator1'/>
                                  </div>
                                  <div className='listItemPrimary13'>
                                        <div className='documentIconLabel7'>
                                              <div className='label5'> Javascript</div>
                                        </div>
                                  </div>
                                  <img className='javascriptJs1Icon' alt="" src={javascript} />
                            </div>
                            <div className='toolbar1'>
                                  <div className='leading5'>
                                        <div className='titleSidebarAndNavigation'>
                                              <div className='sidebarButton'>
                                                    <div className='symbol7'>􀏚</div>
                                              </div>
                                              <div className='finder-title'>Skills</div>
                                        </div>
                                  </div>
                                  <div className='trailing5'>
                                        <div className='spacer'/>
                                        <div className='spacer' />
                                        <div className='spacer' />
                                        <div className='search'>
                                              <div className='symbol8'>􀊫</div>
                                              <div className='searchLabel'>Search</div>
                                        </div>
                                  </div>
                            </div>
                      </div>
                </div>
            </div>
    
    
  
         )}
        </>        
            
    
  );
}
}

export default Finder