import React from "react";
import Grid from "@material-ui/core/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slider.css";
import "../../index.css";
import "../Main/Main.css";

import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import { Link } from "react-router-dom";


const scrollToTop =  () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 1);
  }
};


function social() {



  function privacy() {
    return (
      <React.Fragment>

        <Grid container style={{ textAlign: "center" }}>
          <Grid item xs={12} sm={4} md={3}>
            <Link to="/privacy" onClick={scrollToTop} style={{ color: 'transparent' }}>
              <h2
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "1em",
                  color: "white"
                }}
              >
                {" "}
                PRIVACY POLICY{" "}
              </h2>
            </Link>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <a href="https://www.youtube.com/channel/UCzjeYdI145S8VzGFsODpXoA" target="_blank" style={{ color: 'transparent' }} >
              <h2
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "1em",
                  color: "white"
                }}
              >
                {" "}
                HOW TO PLAY ?{" "}

              </h2>
            </a>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <a href="https://d1z38n2ru3n165.cloudfront.net/ver.203/WinZO.apk" id="footer-download-btn" target="_blank" style={{ color: 'transparent' }}>
              <h2
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "1em",
                  color: "white"
                }}
              >
                {" "}
                DOWNLOAD APP{" "}
              </h2>{" "}
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Link to="/terms-conditions" onClick={scrollToTop} style={{ color: 'transparent' }}>
              <h2 Link to={"/terms-conditions"}
                style={{
                  fontFamily: "Montserrat,sans-serif",
                  fontSize: "1em",
                  color: "white"
                }}
              >
                {" "}
                TERMS & CONDITION{" "}
              </h2>
            </Link>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className="socialimage">
      <Grid container direction="column">
        <Grid item xs={12}>
          <h2
            style={{
              fontSize: "1.2em",
              textAlign: "center",
              fontWeight: "600",
              color: "white",
              margin: "20px auto",
              display: "block",
              fontFamily: "Montserrat,sans-serif"

            }}
          >
            {" "}
            <FormattedMessage id="social" />{" "}
          </h2>

        </Grid>

        <div className="contain">
          <div className="box1">
            <a href="https://www.youtube.com/channel/UCzjeYdI145S8VzGFsODpXoA" id="youtube" target="_blank">
              <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/social-youtube.png" alt="youtube" style={{ height: "50px" }} />
            </a>
          </div>

          <div className="box1">
            <a href="https://www.instagram.com/winzo_games/" target="_blank">
              <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/social-instagram.png" alt="instagram" style={{ height: "50px" }} />
            </a>
          </div>


          <div className="box1">
            <a href="https://www.facebook.com/WinZOGames/" target="_blank">
              <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/social-facebook.png" alt="facebook" style={{ height: "50px" }} />
            </a>
          </div>

          <div className="box1">
            <a href="https://twitter.com/winzogames?lang=en" target="_blank">
              <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/social-twitter.png" alt="twitter" style={{ height: "50px" }} />

            </a>
          </div>
        </div>

        <Grid
          container
          item
          xs={10}
          style={{ margin: "3% 12% 0 12%", width: 'auto' }}
          spacing={0}
        >
          {" "}
          {privacy()}
        </Grid>


        <Grid container style={{ textAlign: "center" }}>
          <Grid item xs={2} sm={2} md={2} />
          <Grid item xs={8} sm={8} md={8}>
            <hr
              style={{ border: "0.3px solid white" }} />
          </Grid>
          <Grid item xs={2} sm={8} md={8} />
        </Grid>

        <Grid item xs={12}>
          <h2
            style={{
              fontSize: "1em",
              textAlign: "center",
              fontWeight: 600,
              color: "white",
              margin: "55px 0 10px 0",
              display: "block",
              textTransform: 'uppercase',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >

            <FormattedMessage id="withdraw" />
          </h2>
          <br />
        </Grid>
        <div>
          <Grid container style={{ textAlign: "center" }}>
            <Grid item sm={3} md={3} />
            <Grid item xs={4} sm={2} md={2}>
              <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/partner-paytm-logo.png" alt="img17" style={{ width: "108px", height: "50px" }} />
            </Grid>

            <Grid item xs={4} sm={2} md={2}>
              <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/partner-upi-logo.png" alt="img18" style={{ width: "95px", height: "50px" }} />
            </Grid>

            <Grid item xs={4} sm={2} md={2}>
              <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/partner-bank-logo.png" alt="img18" style={{ width: "108px", height: "50px" }} />
            </Grid>
            <Grid item sm={3} md={3} />
          </Grid>
        </div>
        <br />
        <Grid container style={{ textAlign: "center" }}>
          <Grid item xs={2} sm={3} md={3} />
          <Grid item xs={8} sm={6} md={6}>
            <hr
              style={{ border: "0.5px solid white" }}
            />
          </Grid>
          <Grid item xs={2} sm={3} md={3} />
        </Grid>

        <Grid item xs={12}>
          <h2
            style={{
              fontSize: "0.8em",
              textAlign: "center",
              fontWeight: "600",
              color: "white",
              margin: "55px 0 10px 0",
              display: "block",
              fontFamily: "Montserrat,sans-serif"
            }}
          >

            <span style={{ color: "white", fontFamily: "Montserrat,sans-serif" }}>© {(new Date().getUTCFullYear())} , WinZO All Right Reserved </span>
            <Link to="/contact-us" onClick={scrollToTop} style={{ color: 'transparent' }} >
              <span className='hov' style={{ color: "white" }}>Contact Us </span>
            </Link>
                -
               <Link to="/refundpolicy" onClick={scrollToTop} style={{ color: 'transparent' }}>
              <span className='hov' style={{ color: "white" }}> Refund / Cancellation Policy </span>
            </Link>

          </h2>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}

function showCurrentYear() {
  return (
    new Date().getFullYear()
  );
}
export default social;