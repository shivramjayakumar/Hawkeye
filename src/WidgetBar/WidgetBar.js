import React,{Component} from 'react';
import './WidgetBar.css';

import Widget from '../Widgets/Widget';
import AttainmentIcon from '../Widgets/images/attainmenticon';
import Insights from '../Widgets/images/Insightsicon';

class WidgetBar extends Component {
    render() {
      return (
        <div className='jss3'>
        <div className='jss4'>
        ::before
           <div className="WidgetDisplay WidgetBox">          
                 <Widget label='Your Attainment' value='75.89' symbol='%' widgeticon ='bar_chart' widgetclass = ' WidgetIcon Widget1Icon' widgetlowertext='Insight into your current and previous performance' widgetlowericon={<Insights />}> </Widget>
                 <Widget  label='Team Attainment' value='75.8' symbol='%' widgeticon ='people' widgetclass = ' WidgetIcon Widget2Icon' widgetlowertext='View Team Performance Details' widgetlowericon={<AttainmentIcon />}> </Widget>
                 <Widget  label='Bookings' value='$750,000' symbol='' widgeticon ='attach_money' widgetclass = ' WidgetIcon Widget3Icon' widgetlowertext='Get Some Insights' widgetlowericon={<AttainmentIcon />}> </Widget>
                 <Widget  label='OKR' value='75.8' symbol='%' widgeticon ='content_copy' widgetclass = ' WidgetIcon Widget4Icon' widgetlowertext='Get Some Insights' widgetlowericon={<AttainmentIcon />}> </Widget>
            </div>
           </div>
        </div>
      );
    }
  }

export default WidgetBar;
