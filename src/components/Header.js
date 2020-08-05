import React from 'react';

function Header() {
  return (
    <div className="header">
      <header>
        <div className="row music-header">
            <div className="col-md-4 music-logo align-center">
                <div className=" col-md-2 redundancy"></div>
                <div className="col-md-12 col-xs-6  col-md-10  align-center" id="logo-sm">
                    <a className="navbar-brand align-center" href="/" id="a-logo">
                    <img src="https://rikkei.vn/asset_music/images/logo-rikkei.png" alt="" />
                    </a>
                </div>
                <div className="col-xs-6 align-right" id="menu-sm">
                    <span type="button" data-toggle="collapse" data-target="#myNavbar" id="hamburger">
                    <i className="fa fa-bars" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-8">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <span className="arrow-down"></span>
                </div>
            </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
