import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slider.css";
import "../../index.css";
import "./Main.css";
import Container from "@material-ui/core/Container";
import React from "react";
import OwlCarousel from "react-owl-carousel2";
import Card from "@material-ui/core/Card";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import { FormattedMessage } from "react-intl";
const classes = {
  root: {
    flexGrow: 1
  },
  cardmedia2: {
    display: "block",
    width: "100%",
    height: "48px",
    borderRadius: "50%"
  },
  sociallogo1: {
    width: "108px",
    height: "32px"
  },
  sociallogo2: {
    width: "108px",
    height: "40px"
  },
  sociallogo3: {
    width: "115px",
    height: "48px"
  },
  card1: {
    width: "50%",
    height: "20px",
    borderRadius: "10%"
  },
  cardmedia: {
    width: "80%",
    margin: "15% auto",
    height: "auto"
  },
  cardmedia1: {
    width: "50px",
    margin: "2% auto",
    height: "60px"
  },
  cardmedia12: {
    width: "35%",
    margin: "11% auto",
    height: "auto"
  },
  cardmedia3: {
    width: "35%",
    margin: "11% auto",
    height: "auto"
  },
  cardmedia4: {
    width: "28%",
    margin: "11% auto",
    height: "auto"
  },
  rupee: {
    display: "inline",
    margintop: "5px",
    verticalAlign: 'super',
    fontSize: "0.538em"
  },
};
function small_slider() {
  const options = {
    items: 6,
    rewind: true,
    mouseDrag: true,
    dots: false,
    responsive: {
      0: {
        items: 3,
        rewind: true,
        mouseDrag: true,
        dots: false
      },
      600: {
        items: 4,
        rewind: true,
        mouseDrag: true,
        dots: false
      },
      960: {
        items: 6,
        rewind: true,
        mouseDrag: true,
        dots: false
      }
    }
  };

  return (
    <Container>
      <OwlCarousel options={options}>
        <div>
          <Card className="cardslider" style={{ borderRadius: "16px" }}>
            <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/item-paytm.png" style={classes.cardmedia} alt="paytm" />
            <p className="cardslider-contentall">
              <FormattedMessage id="small_slider1" />
              <br />
              <FormattedMessage id="small_slider1.1" />
            </p>
          </Card>
        </div>

        <div>
          <Card className="cardslider" style={{ borderRadius: "16px" }}>
            <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/item-security.png" style={classes.cardmedia4} alt="security" />
            <p className="cardslider-contentall">
              <FormattedMessage id="small_slider2" />
              <br />
              <FormattedMessage id="small_slider2.1" />
            </p>
          </Card>
        </div>
        <div>
          <Card className="cardslider" style={{ borderRadius: "16px" }}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fitem-support.png?alt=media"
              alt="customer"
              style={classes.cardmedia12}
            />
            <p className="cardslider-contentall">
              <FormattedMessage id="Customer" />
              <br />
              <FormattedMessage id="Support" />
            </p>
          </Card>
        </div>

        <div>
          <Card className="cardslider" style={{ borderRadius: "16px" }}>
            <img src="https://d5d8d9fr8izry.cloudfront.net/website/images/item-wallet.png" style={classes.cardmedia3} alt="wallet" />
            <p className="cardslider-contentall">
              <FormattedMessage id="Cashback" /> <br />
              <FormattedMessage id="Offer" />
            </p>
          </Card>
        </div>

        <div>
          <Card className="cardslider" style={{ borderRadius: "16px" }}>
            <h2 className="cardslider-margintop">
              <span style={{
                display: "inline",
                marginTop: "5px",
                verticalAlign: "super", fontSize: '0.538em'
              }}>₹</span>
                200
              </h2>
            <p className="cardslider-contentall" >
              <FormattedMessage id="crore+" />
              <br />
              <FormattedMessage id="given" />
            </p>
          </Card>
        </div>
        <div>
          <Card className="cardslider" style={{ borderRadius: "16px" }}>
            <h2 className="cardslider-margintop"> 1.2 </h2>
            <p className="cardslider-contentall">
              <FormattedMessage id="Crore+" />
              <br />
              <FormattedMessage id="Player" />
            </p>
          </Card>
        </div>

        <div>
          <Card className="cardslider" style={{ borderRadius: "16px" }}>
            <h2 className="cardslider-margintop"> 4.4</h2>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fstar-rating.png?alt=media"
              style={{ width: '61%', margin: '0 auto' }}
            />
            <p className="cardslider-contentall"><FormattedMessage id="Rating" /></p>
          </Card>
        </div>
      </OwlCarousel>
    </Container>
  );
}
export default small_slider;