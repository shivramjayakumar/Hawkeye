import React,{Component} from 'react';
import './Widget.css';

class Widget extends Component{
    render(){
        return (
            <div>
                <div className="WidgetDisplay WidgetBox">
                <div className="Widgets WidgetFlexGlow undefined">
                    <div className="WidgetInner">
                        <div className="wd1 wd2 wd3 wd4">
                            <div className={this.props.widgetclass}>
                                <span className="material-icons" aria-hidden="true">{this.props.widgeticon}</span>
                            </div>
                            <p className="WidgetLabel"> {this.props.label} </p>
                            <h3 className="Widgetvalue">{this.props.value}{this.props.symbol}</h3>
                        </div>
                        <div className="Widgetline">
                            <div className="WidgetIconPushDown">
                                <div className="widgetlowerIcon">
                                
                               {this.props.widgetlowericon}
                                 
                                </div>
                                <a href="#beacon">{this.props.widgetlowertext}</a>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="jss350 jss389 jss397 jss411 WidgetFlexGlow Widgets undefined"><div class="WidgetInner"><div class="jss464 jss473 jss469 jss470"><div class="WidgetIcon WidgetRevenueIcon"><svg class="jss146" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></svg></div><p class="jss340">Revenue</p><h3 class="jss337">$34,245</h3></div><div class="jss485 jss490"><div class="jss342"><svg class="jss146" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path><path fill="none" d="M0 0h24v24H0z"></path></svg>Last 24 Hours</div></div></div></div>
                <div class="jss350 jss389 jss397 jss411 WidgetFlexGlow Widgets undefined"><div class="WidgetInner"><div class="jss464 jss474 jss469 jss470"><div class="WidgetIcon jss481"><span class="material-icons jss155" aria-hidden="true">info_outline</span></div><p class="jss340">Fixed Issues</p><h3 class="jss337">75</h3></div><div class="jss485 jss490"><div class="jss342"><svg class="jss146" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path></svg>Tracked from Github</div></div></div></div>
                <div class="jss350 jss389 jss397 jss411 WidgetFlexGlow Widgets undefined"><div class="WidgetInner"><div class="jss464 jss475 jss469 jss470"><div class="WidgetIcon jss482"><i class="fab fa-twitter"></i></div><p class="jss340">Followers</p><h3 class="jss337">+245</h3></div><div class="jss485 jss490"><div class="jss342"><svg class="jss146" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><defs><path id="a" d="M0 0h24v24H0V0z"></path></defs><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1a6.875 6.875 0 0 0 0 9.79c2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></svg>Just Updated</div></div></div></div></div>
                 
             </div>
        );
    }
}

export default Widget;