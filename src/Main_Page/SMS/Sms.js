import "../../slider.css";
import "../../index.css";
import "../Main/Main.css";
import React, { useState } from "react";
import { submitform } from "../../Network_module/Api";
import { Smsalert } from "../AlertDialog/Alert";
import { FormattedMessage } from "react-intl";
const classes = {
    alertdialog:{
        position: "absolute",
        paddingLeft:"0.5rem",
        top:"${props=> props.top}px",
        paddingRight:"0.5rem",
        justifyContent: "center",
        display:"flex"
    },
    alertdialogmessage:{
        display: "inline-block!important",
        color: "#856404",
        backgroundColor: "#fff3cd",
        borderColor: "#ffeeba",
        paddingRight:"4rem",
        position: "relative",
        padding: ".9rem 1.5rem",
        marginBottom: "1rem",
        border: "1px solid transparent",
        borderRadius: "0.25rem"
    }
}
function Sms (props) {
    var x, text;
    x = document.getElementById("mobile").value;
    const post = [
        {
            method: "SendMessage",
            userid:'',
            password: "",
            sender: "WINZOG",
            send_to: x,
            msg: "WinZO Gold par paiye Rs.50 Sign Up Bonus. Install- https://squv4.app.goo.gl/mE64 aur Phone Settings mei 'Unknown Source' ko 'OK' karein",
            response: "App Link Sent"
        },
        {
            method: "SendMessage",
            userid: 2000189844,
            password: "mrPFY7qL",
            sender: "WINZOG",
            send_to: x,
            msg: "WinZO Gold par paiye Rs.50 Sign Up Bonus. Install- https://squv4.app.goo.gl/mE64 aur Phone Settings mei 'Unknown Source' ko 'OK' karein",
            response: "ऐप लिंक भेज दिया"
        }
    ];

    if ((isNaN(x) || x < 1000000000) && (x != 0)) {
        text = "* Please enter a valid 10 digit mobile number";

    }
    else if (isNaN(x) || x == 0) {
        text = "* Please enter mobile number";

    }
    else {
        text = "";
        
        if (props.langg?.locale == "en") {
            { submitform(post[0]) }
        }
        else {
            { submitform(post[1]) }
        }
    }
    document.getElementById("demo").innerHTML = text;

};



export default Sms;