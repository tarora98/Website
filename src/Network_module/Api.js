
import "../index.css";
import axios from "axios";
import { Smsalert, networkerror } from "../Main_Page/AlertDialog/Alert";
import React, { useState } from "react";
import * as Sentry from '@sentry/browser';
export const submitform = (data) => {
    console.log(data);
    axios
        .post("", {
            params: data
        }
        )
        .then(function (response) {
            if (response.status == 200) {
                { Smsalert() }
            }
        }
        )
        .catch(function (error) {

            { networkerror() }
            Sentry.captureException(error);
        })
}
//https://enterprise.smsgupshup.com/GatewayAPI/rest 
