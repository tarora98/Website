import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slider.css";
import "../../index.css";
import "./Main.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import React, { useState, useEffect } from "react";
// import {useState} from "react";
import Button from "@material-ui/core/Button";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { FormattedMessage } from "react-intl";
import small_slider from './small_slider';
import Bottom from './Bottom';
import Sms from '../SMS/Sms';
import * as Sentry from '@sentry/browser';
const classes = {
  root: {
    flexGrow: 1
  }
}

Sentry.init({
  dsn: "https://2cd8364a25d047868da15003e41a35a5@sentry.io/5184552",
  logger: 'javascript',
  release: 'website-721e41770371db95eee98ca2707686226b993eda',
  environment: 'production',
  autoBreadcrumbs: {
    'xhr': true,      // XMLHttpRequest
    'console': true,  // console logging
    'dom': true,       // DOM interactions, i.e. clicks/typing
    'location': true, // url changes, including pushState/popState
    'sentry': true     // sentry events
  },
});


function Main_function({ handle, langg }) {
  return (
    <div style={classes.root}>
      <Grid container direction="rows">
        <div className="backg">

          <div>
            <Container maxWidth="md" maxWidth="lg">
              <Hidden smUp>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Flogo-gold.png?alt=media"
                    alt="img5"
                    style={{
                      width: "110px",
                      height: "46px",
                      marginTop: "62px"
                    }}
                  />
                </div>
              </Hidden>
              <Hidden xsDown>
                <div>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Flogo-gold.png?alt=media"
                    alt="img5"
                    style={{ marginTop: "70px" }}
                  />
                </div>
              </Hidden>
              <div className="XY">
                <h2 className="XY-head">
                  <FormattedMessage id="home_string_1" />
                  <br />
                  <FormattedMessage id="home_string_2" />
                </h2>
              </div>
              <div>
                <label className="lang">
                  {" "}
                  <FormattedMessage id="home_string_3" />
                </label>
                {" "}
                <br />
                <br />
              </div>
              <div></div>
              <div className="switch">
                <input
                  type="radio"
                  name="lang"
                  id="eng_lang"
                  value="en"
                  to="/en"
                  style={{ display: "none" }}
                  onClick={() => {
                    handle("en");
                    window.history.replaceState(null, null, "?lan=" + "en");
                  }}
                />
                <label
                  for="eng_lang"
                  className={langg?.locale == "en" && "selected"}
                  style={{
                    border: "0.5px solid white",
                    padding: "4px 25px",
                    fontSize: "14px",
                    textTransform: "none",
                    borderRadius: "4px 0 0 4px",
                    fontFamily: "Montserrat,sans-serif"
                  }}
                >
                  English
                </label>
                <input
                  type="radio"
                  name="lang"
                  id="hin_lang"
                  value="hi"
                  to="hi"
                  style={{ display: "none" }}
                  onClick={() => {
                    handle("hi");
                    window.history.replaceState(null, null, "?lan=" + "hi");
                  }}
                ></input>
                <label
                  for="hin_lang"
                  className={langg?.locale == "hi" && "selected"}
                  style={{
                    border: "0.5px solid white",
                    padding: "4px 25px",
                    fontSize: "14px",
                    borderRadius: "0 4px 4px 0",
                    fontFamily: "Montserrat,sans-serif"
                  }}
                >
                  {" "}
                  हिन्दी
                </label>{" "}

              </div>

              <Hidden xsDown mdUp>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="+91"
                  disabled
                  style={{
                    padding: "0.8em 0.3em",
                    border: "0.1px",
                    width: "7%",
                    borderRight: "1.5px solid rgba(74,74,74,.55)",
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                    borderTopLeftRadius: "10%",
                    borderBottomLeftRadius: "10%",
                    background: "white",
                    fontFamily: "Montserrat,sans-serif"
                  }}
                />
                <input
                  type="text"
                  id="mobile"
                  name={langg.sms}
                  placeholder={langg.mobnumber}
                  maxLength="10"
                  style={{
                    padding: "0.8em 5em",
                    border: "0.1px",
                    marginTop: "40px",
                    borderTop: "5px solid transparent",
                    borderBottom: "5px solid transparent",
                    borderTopRightRadius: "4%",
                    borderBottomRightRadius: "4%",
                    textAlign: "center",
                    color: "#4a4a4a",
                    fontFamily: "Montserrat,sans-serif"
                  }}

                />{" "}
                  &nbsp;&nbsp;
                   <button type="submit" id="button" className="getapplinkbig" onClick={() => Sms(langg?.locale)}>
                  <FormattedMessage id="linkbutton" />
                </button>
                <p style={{ color: "red" }} id="demo"></p>
              </Hidden>
              <Hidden smDown>
                <div>
                  <input
                    type="number"
                    id="fname1"
                    name="firstname1"
                    placeholder="+91"
                    disabled
                    style={{
                      padding: "0.8rem 0.3rem",
                      border: "0.1px",
                      width: "5%",
                      borderRight: "1.5px solid rgba(74,74,74,.55)",
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderTopLeftRadius: "10%",
                      borderBottomLeftRadius: "10%",
                      background: "white",
                      textAlign: "center",
                      color: "#4a4a4a",
                      fontFamily: "Montserrat,sans-serif"
                    }}
                  ></input>

                  <input
                    type="text"
                    id="mobile"
                    name={langg.sms}
                    maxLength="10"
                    placeholder={langg.mobnumber}
                    style={{
                      padding: ".8rem 1.5rem",
                      marginTop: "40px",
                      border: "0.1px",
                      borderTop: "5px solid transparent",
                      borderBottom: "5px solid transparent",
                      borderTopRightRadius: "4%",
                      borderBottomRightRadius: "4%",
                      fontFamily: "Montserrat,sans-serif"
                    }}
                    autofocus

                  ></input>
                  &nbsp;&nbsp;
                  <button type="submit" id="button" className="getapplink" onClick={() => Sms(langg?.locale)}>
                    <FormattedMessage id="linkbutton" />
                  </button>
                  <p style={{ color: "red" }} id="demo"></p>
                </div>
              </Hidden>
              <div>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fverified2.png?alt=media"
                  alt="security"
                  className="securitybutton"
                />
              </div>
              <br />
              <Hidden smUp>
                <div>
                  <div>
                    <div className="downloadcontain">
                      <a
                        href="https://d1z38n2ru3n165.cloudfront.net/ver.202/WinZO.apk"
                        id="home-download-btn"
                        style={{ textDecoration: "none" }}
                      >
                        <Button className="downbutton">
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fandroid-logo.png?alt=media"
                            alt="download"
                            className="buttonlogo"
                          />
                          <p className="dowbutton"><FormattedMessage id="mobileapp" /></p>
                          <img
                            src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fdownload-icon.png?alt=media"
                            alt="download"
                            className="buttonlogo"
                          />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="bar">
                    <div className="bar-cashBonus">
                      <p >
                        <FormattedMessage id="cashbonusresult" /> <b><FormattedMessage id="cashbonus10" /></b> <FormattedMessage id="cashbonusticket" /><b><FormattedMessage id="cashbonus40" /></b>

                      </p>
                    </div>
                  </div>


                </div>
              </Hidden>
            </Container>
          </div>
        </div>

      </Grid>
      {small_slider()}
      {Bottom()}

    </div>
  );
}

export default Main_function;