import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";
import "./Main.css";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import React from "react";
import ReactPlayer from "react-player";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { FormattedMessage } from "react-intl";

const mobileApp = [
  {
    Image:
      "https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fstep4.png?alt=media"
  },
  {
    Image:
      "https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fstep3.png?alt=media"
  },
  {
    Image:
      "https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fstep2.png?alt=media"
  },
  {
    Image:
      "https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fstep1.png?alt=media"
  }
];
const item = [
  {
    Image:
      "https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fitem-space-warrior.png?alt=media"
  },
  {
    Image:
      "https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fitem-carrom.png?alt=media"
  },
  {
    Image:
      "https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fitem-block-smash.png?alt=media"
  },
  {
    Image:
      "https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fitem-candy-match.png?alt=media"
  },
  {
    Image:
      "https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fitem-bubble-shooter.png?alt=media"
  },
  {
    Image:
      "https://d5d8d9fr8izry.cloudfront.net/website/images/item-knife-up.png"
  }
];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "red" }}
      onClick={onClick}
    >
      <img
        src="https://d5d8d9fr8izry.cloudfront.net/website/images/carousel-next-btn.png"
        alt="nextarrow"
        style={{
          width: "70px",
          position: "relative",
          top: "-32px",
          left: "-35px",
          zIndex: 1
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "green", zIndex: 1 }}
      onClick={onClick}
    >
      <img
        src="https://d5d8d9fr8izry.cloudfront.net/website/images/carousel-prev-btn.png"
        alt="prevarrow"
        style={{
          width: "70px",
          position: "relative",
          top: "-30px",
          left: "-35px"
        }}
      />
    </div>
  );
}

function SampleNextArrowmobile(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "transparent" }}
      onClick={onClick}
    >
      <img
        src="https://www.winzogames.com/images/carousel-next-small-btn.png"
        alt="nextarrow"
        style={{
          width: "30px",
          position: "relative",
          right: "inherit",
          padding: "0!important",
          zIndex: 1
        }}
      />
    </div>
  );
}

function SamplePrevArrowmobile(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "transparent", zIndex: 1 }}
      onClick={onClick}
    >
      <img
        src="https://www.winzogames.com/images/carousel-prev-small-btn.png"
        alt="prevarraow"
        style={{
          width: "30px",
          position: "relative",
          left: "inherit",
          padding: "0!important"
        }}
      />
    </div>
  );
}
function Bottom() {
  const setting = {
    autoplay: true,
    speed: 50,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "-10px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const mobilesetting = {
    autoplay: true,
    speed: 50,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "-10px",
    nextArrow: <SampleNextArrowmobile />,
    prevArrow: <SamplePrevArrowmobile />
  };
  return (
    <Grid container direction={"row"}>
      <Hidden smDown>
        <Grid item xs={12}>
          <h3
            style={{
              fontSize: "2.313em",
              textAlign: "center",
              fontWeight: "600",
              color: "#4a4a4a",
              marginBottom: "10px",
              display: "block",
              fontFamily: "Montserrat,sans-serif"
            }}
          >
            {" "}
            <FormattedMessage id="install" />{" "}
          </h3>
        </Grid>
      </Hidden>
      <Hidden xsDown mdUp>
        <Grid item xs={12}>
          <h3
            style={{
              fontSize: "2.313em",
              textAlign: "center",
              fontWeight: "600",
              color: "#4a4a4a",
              marginBottom: "10px",
              display: "block",
              fontFamily: "Montserrat,sans-serif"
            }}
          >
            {" "}
            <FormattedMessage id="install" />{" "}
          </h3>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12}>
          <h3
            style={{
              fontSize: "1.313em",
              textAlign: "center",
              fontWeight: "600",
              color: "#4a4a4a",
              marginBottom: "10px",
              display: "block",
              fontFamily: "Montserrat,sans-serif"
            }}
          >
            {" "}
            <FormattedMessage id="install" />{" "}
          </h3>
        </Grid>
      </Hidden>

      <Hidden smDown>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <ReactPlayer
            style={{ margin: "0 auto" }}
            width="80%"
            height="320%"
            url="https://youtu.be/BxDEBQqTx2U"
          />
        </Grid>
        <Grid item xs={2} />
      </Hidden>

      <Hidden smDown>
        <Grid item xs={12}>
          <h3
            style={{
              fontSize: "2.5em",
              textAlign: "center",
              fontWeight: "600",
              color: "#4a4a4a",
              marginBottom: "35px",
              marginTop: "340px",
              fontFamily: "Montserrat,sans-serif"
            }}
          >
            {" "}
            <FormattedMessage id="25+games" />{" "}
          </h3>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12}>
          <h3
            style={{
              fontSize: "1.313em",
              textAlign: "center",
              fontWeight: "600",
              color: "#4a4a4a",
              marginBottom: "35px",
              marginTop: "10px",
              fontFamily: "Montserrat,sans-serif"
            }}
          >
            {" "}
            <FormattedMessage id="25+games" />{" "}
          </h3>
        </Grid>
      </Hidden>

      <Hidden smDown>
        <Container maxWidth="lg">
          <div style={{ margin: "0 auto", width: "90%" }}>
            <Slider {...setting}>
              {" "}
              {item.map(items => {
                return (
                  <div>
                    <div style={{ width: "90%", overflow: "hidden" }}>
                      <img
                        src={items.Image}
                        alt="sliderimage"
                        style={{ height: "30%", width: "100%" }}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Container>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={10}>
          <div style={{ margin: "0 18% 0 18%", width: "80%" }}>
            <Slider {...mobilesetting}>
              {" "}
              {mobileApp.map(items => {
                return (
                  <div>
                    <div style={{ width: "90%", overflow: "hidden" }}>
                      <img
                        src={items.Image}
                        alt="mobileApp"
                        style={{ height: "50%", width: "100%" }}
                      />
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Grid>
      </Hidden>

      <Hidden xsDown>
        <Grid item xs={12}>
          <h2
            style={{
              fontSize: "2.5em",
              textAlign: "center",
              fontWeight: "600",
              color: "#4a4a4a",
              display: "block",
              fontFamily: "Montserrat,sans-serif"
            }}
          >
            {" "}
            <FormattedMessage id="download" />{" "}
          </h2>
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid item xs={12}>
          <h2
            style={{
              fontSize: "1.313em",
              textAlign: "center",
              fontWeight: "600",
              color: "#4a4a4a",
              display: "block",
              fontFamily: "Montserrat,sans-serif"
            }}
          >
            {" "}
            <FormattedMessage id="download" />{" "}
          </h2>
        </Grid>
      </Hidden>

      <div className="contain">
        <div className="box3">
          <a
            href="https://d1z38n2ru3n165.cloudfront.net/ver.203/WinZO.apk"
            target
          >
            <img
              src="https://d5d8d9fr8izry.cloudfront.net/website/images/home-download-btn.png"
              alt="downloadapp"
              style={{ width: "120px", height: "40px" }}
            />
          </a>
        </div>
      </div>
      <Grid item xs={12}>
        <h2
          style={{
            fontSize: "1em",
            textAlign: "center",
            fontWeight: "600",
            color: "#4a4a4a",
            display: "block",
            fontFamily: "Montserrat,sans-serif"
          }}
        >
          <FormattedMessage id="submitmail" />
        </h2>
        <h2
          style={{
            fontSize: "1em",
            textAlign: "center",
            fontWeight: "600",
            color: "blue",
            display: "block",
            fontFamily: "Montserrat,sans-serif"
          }}
        >
          partnerships @winzogames.com
          </h2>
      </Grid>
    </Grid>
  );
}
export default Bottom;