import React, { Component } from 'react';
import './Projects.scss';
import { java, javascript, nodejs, react, threed, skills, Recent, vite1, threejs, html, css, aws, mysql, nextjs, postgresql, sass,  } from '../../assets/Finder';
import { jestelleweb1 } from '../../assets';
class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { isProjectsOpen: true };
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
            this.setState({ isProjectsOpen: false });
        }
    }

    closeListener = () => {
        this.setState({ isProjectsOpen: false });
        console.log('Projects closed');
    }

    render() {
        const { isProjectsOpen } = this.state;

        return (
            <>
                {isProjectsOpen && (
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
                                                        <div className='label'>Projects</div>
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
                                                    <img alt='Recent' src={Recent} />
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
                                    
                                    <div className='margins' />
                                    
                                    <div className='header'>
                                        <div className='labelRightDetail'>
                                            <div className='label18'>Name</div>
                                            <div className='rightDetail' />
                                        </div>
                                        <div className='separator1' />

                                        <div>
                                          <img  src={jestelleweb1}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='toolbar1'>
                                    <div className='leading5'>
                                        <div className='titleSidebarAndNavigation'>
                                            <div className='sidebarButton'>
                                                <div className='symbol7'>􀏚</div>
                                            </div>
                                            <div className='finder-title'>Projects</div>
                                        </div>
                                    </div>
                                    <div className='trailing5'>
                                        <div className='spacer' />
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

export default Projects;
