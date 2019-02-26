import React, { Component } from 'react';
import './Widget.css';
// import Example from '../WidgetModal/WidgetModal';

class Widget extends Component {
    render() {
        return (
            <div className="Widgets">
          <div ClassName ="wd_shadow">
                        <div className="WidgetInner wd_shadow">
                     
                            <div className="wid1_1 wid1_2 wid1_3 wid1_4">
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
                                            <a href="#beacon"> {this.props.widgetlowertext}</a>
                
                                </div>
                
                            </div>
                        </div>
                    </div>
                    </div>
        );
    }
}
export default Widget;