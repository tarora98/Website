import "../../slider.css";
import "../../index.css";
import "../Main/Main.css";
import 'antd/dist/antd.css';
import 'rc-notification/assets/index.css';
import Notification from 'rc-notification';
import React, { Children } from 'react';
let notification = null;
Notification.newInstance({}, (n) => notification = n);
export function Smsalert(props) {
  notification.notice({
    content: <div><span style={{ fontSize: '1.5em'}}>App Link Sent</span></div>,
    duration: null,
    closable: true,
    placement: "top",
    onClick() {
      console.log('clicked!!!');
    },
  });
}
export function networkerror(props) {
  notification.notice({
    content: <div className="notification"><span style={{ fontSize: '1.5em'}}>Network Error</span></div>,
    duration: null,
    closable: true,
    placement: "top",
    onClick() {
      console.log('clicked!!!');
    },
  });
}





//   1px solid rgba(219,211,233,0.8)
{/* <div class="rc-notification" style="top: -9px;left: 50%;"><span><div class="rc-notification-notice rc-notification-notice-closable" style="right: 50%;"><div class="rc-notification-notice-content"><div><span style="font-size: 1.5em; padding: 1px;">App Link Sent</span></div></div><a tabindex="0" class="rc-notification-notice-close"><span class="rc-notification-notice-close-x"></span></a></div></span></div> */ }












    //     <div className="alertdialog" style={{ zIndex: 999999 }}>
    //         <div className="alertdialog-message" role="alert">
    //             <FormattedMessage id="alert"/>
    //             &nbsp;&nbsp;
    //         <button type="button" className="close" data-dismiss="alert" aria-label="Close" >
    //                 <span aria-hidden="true">×</span>
    //             </button>
    //         </div>
    //     </div>
    // );
