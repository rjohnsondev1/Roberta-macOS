import React from "react";
import "./Menubar.scss";


import {AppleLogo } from '../../assets/'

const Menubar = () => {
  return (
    <div className="menu-bar">
      <div className="group-leading">
        <div className="apple-logo">
          <img alt="Apple logo" src={AppleLogo} />
        </div>
        <div className="app-name">
          <div className="app-name1">Finder</div>
        </div>
        <div className="app-name">
          <div className="menu-label">File</div>
        </div>
        <div className="app-name">
          <div className="menu-label">Edit</div>
        </div>
        <div className="app-name">
          <div className="menu-label">View</div>
        </div>
        <div className="app-name">
          <div className="menu-label">Go</div>
        </div>
        <div className="app-name">
          <div className="menu-label">Window</div>
        </div>
        <div className="app-name">
          <div className="menu-label">Help</div>
        </div>
      </div>
      <div className="frame-trailing">
        <div className="menu-item-trailing">
          <div className="menu-label">􀙇</div>
        </div>
        <div className="app-name">
          <div className="menu-label">􀊫</div>
        </div>
        <div className="app-name">
          <div className="menu-label">􀉭</div>
        </div>
        <div className="app-name">
          <div className="menu-label">􀜊</div>
        </div>
        <div className="menu-label-wrapper">
          <div className="menu-label10">Mon Jun 5&nbsp;&nbsp;9:41 AM</div>
        </div>
      </div>
    </div>
  );
};

export default Menubar; 