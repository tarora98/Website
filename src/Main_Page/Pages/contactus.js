import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slider.css";
import "../../index.css";
import "../Main/Main.css";
function contactus() {
  return (
    <div>
      <div className="privacylogo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Flogo-gold.png?alt=media"
          alt="privacylogo"
          style={{ width: "183px" }}
        />
        </div>
        <div className="contact" id="contact-us">
        <h1 style={{fontSize:'2.5rem',fontFamily:'Montserrat,sans-serif'}}>Contact Us</h1>
        <nav aria-label="breadcrumb">
				<ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="https://www.winzogames.com/">Home</a></li> 
					<li class="breadcrumb-item active" aria-current="page">Contact Us</li>
				</ol>
			</nav>
      <div className="row"  >
      <div  >
      <p>For any kind of queries, please contact us on the below mention details</p>
					<h4 >OFFICE:</h4>
          <ul>
						<li>
							<p><span class="oi oi-map-marker"></span> <abbr>A-20, Naraina&nbsp;Industrial Area, Phase 1 New Delhi 110028 Delhi India</abbr></p>
						</li>
						<li>
							<p><a href="https://www.winzogames.com/" style={{color:'black'}}><span class="oi oi-globe"></span> <abbr>www.winzogames.com</abbr></a></p>
						</li>
						<li>
							<p><a href="mailto:support@winzogames.com" style={{color:'black'}}><span class="oi oi-envelope-closed"></span> <abbr>support@winzogames.com</abbr></a></p>
						</li>
					</ul>
          <br/>
					
					<p>To submit your game write to us:</p>
					<p class="decoration-none"><a href="mailto:support@winzogames.com"><span class="oi oi-envelope-closed"></span> <abbr>partnerships@winzogames.com</abbr></a></p>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </div>
        <div className="map" >
           <iframe 
           width="90%"
           height="100%"
           frameBorder="0"
           
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1750.8886652028614!2d77.13804030050977!3d28.63643499844583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM4JzExLjIiTiA3N8KwMDgnMTkuMyJF!5e0!3m2!1sen!2sin!4v1503402429633"  allowfullscreen=""></iframe>

          </div>
        </div>
        </div>

          
				
    </div>
       
  );
}
export default contactus;