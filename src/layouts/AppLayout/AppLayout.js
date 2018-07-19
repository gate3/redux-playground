//@flow

import React from 'react';
import SideNav from './components/SideNav';
import Footer from './components/Footer';

type Props = {
  children:any,
  showFooter:boolean
}

const AppLayout = (props:Props)=>(
  <React.Fragment>
    <div id="site__bg"></div>
    <div className="main">
      <SideNav />
        {props.children}
    </div>
    {
      props.showFooter ? <Footer /> : null
    }
  </React.Fragment>
);

export default AppLayout;
