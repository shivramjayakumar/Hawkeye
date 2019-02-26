import React, { Component } from 'react';
import './Header.css'

class Header extends Component
{
    render() {
        return (
            
     <header className="headerblock mui-fixed">
            <div className="sidebardisplay">

            {/* Side bar button  */}
                 
                    <button
                            className="headerbuttons sidebarbutton  buttonborder"
                            tabindex="0"
                            type="button">
                            <span className="headericons">
                                  {/* Side bar icon  */}
                                <svg
                                    className="svgicon sidebarbutton1"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    role="presentation">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                </svg>
                            </span>
                            <span className="endbutton"></span>
                        </button>
            
                    </div>
                    

            {/* Dashboard link */}
            <div className="headerbarlabel"> Dashboard  </div>

   {/* 
             <div className="jss69">
                    <div className="">
                        <div className="jss299 jss278 jss272 jss295">
                            <div className="jss316 jss303 jss307 jss289 jss317 jss304">
                                <input
                                    aria-invalid="false"
                                    className="jss326 jss311 jss297 jss273"
                                    placeholder="Search"
                                    type="text"
                                    aria-label="Search"
                                    value="">    
                                </input>
                            </div>
                        </div>
                    </div>
                </div>


                        <button
                            className="headerbuttons sidebarbutton buttonborder jss217 jss278 jss277 "
                            tabindex="0"
                            type="button"
                            aria-label="edit">
                            <span className="headericons">
                                <svg
                                    className="svgicon jss287 jss279"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    role="presentation">
                                    <path
                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                </svg>

                            </span>

                            <span className="endbutton"></span>
                        </button>
                   
                        <button
                            className="headerbuttons jss210 jss209 jss217 jss276"
                            tabindex="0"
                            type="button"
                            aria-label="Dashboard">
                            <span className="headericons">
                                <svg
                                    className="svgicon jss287 jss280"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    role="presentation">
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>
                                </svg>
                                <div className="jss71">
                                    <span className="jss275">Dashboard</span>
                                </div>
                            </span>
                            <span className="endbutton"></span>
                        </button>
     */}                        
                        <div className="jss286">
                            <button
                                className="headerbuttons jss210 jss217 jss276"
                                tabindex="0"
                                type="button"
                                aria-label="Notifications"
                                aria-haspopup="true">
                                <span className="headericons">
                                    <svg
                                        className="svgicon jss287 jss280"
                                        focusable="false"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                        role="presentation">
                                        <path
                                            d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path>
                                    </svg>
                                    <span className="jss281">5</span>
                                    <div className="jss71">
                                        <span className="jss275">Notification</span>
                                    </div>
                                </span>
                                <span className="endbutton"></span>
                            </button>
                        </div>
                      
                        
                        <button
                            className="headerbuttons jss210 jss217 jss276"
                            tabindex="0"
                            type="button"
                            aria-label="Person">
                            <span className="headericons">
                                <svg
                                    className="svgicon jss287 jss280"
                                    focusable="false"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                    role="presentation">
                                    <path
                                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                </svg>
                                <div className="jss71">
                                    <span className="jss275">Profile</span>
                                </div>
                            </span>
                            <span className="endbutton"></span>
                        </button>
  {/*   
                    </div>
                </div>

                <div className="jss71">
  
                <button
                        className="headerbuttons jss210 jss217"
                        tabindex="0"
                        type="button"
                        aria-label="open drawer">
                        <span className="headericons">
                            <svg
                                className="svgicon"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                role="presentation">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                            </svg>
                        </span>
                        <span className="endbutton"></span>
                    </button>
 



                </div>

            </div> */}
    </header>
    );
}

}

export default Header;