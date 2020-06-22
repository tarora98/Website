import React  from "react";
import Grid from "@material-ui/core/Grid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slider.css";
import "../../index.css";
import "../Main/Main.css";
function Refund() {
  return (
    <div>
      <div className="privacylogo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Flogo-gold.png?alt=media"
          alt="privacylogo"
          style={{ width: "183px" }}
        />
      </div>
      <Grid container>
        <Grid item xs={1} sm={2} md={2} />
        <Grid item xs sm md>
          <div className="privacycontainer" style={{ textAlign: "justify" }}>
            <h1
              style={{
                fontSize: "2.5em",
                fontWeight: 500,
                fontFamily: "inherit",
                lineHeight: 1.2
              }}
            >
              Refund Policy
            </h1>


            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="https://www.winzogames.com/">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Refund Policy</li>
              </ol>
            </nav>

            <h4>Refund Policy</h4>
            <p>
              Thanks for being a patron with WinZO. If you are not entirely satisfied with your subscription, we are here to help.
      </p>


            <h4>Refund</h4>
            <p>Once we receive your Refund request, we will inspect it and notify you on the status of your refund.</p>
            <p>If your refund request is approved, we will initiate a refund to your credit card (or original method of payment) within 7 working days. You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
            <p>In case of unforeseen technical glitch, WinZO would refund subscription upon reviewing the complaint. Final decision lies with the company.</p>

          </div>
        </Grid>
        <Grid item xs={1} sm={2} md={2} />
      </Grid>
    </div>
  );
}
export default Refund;
