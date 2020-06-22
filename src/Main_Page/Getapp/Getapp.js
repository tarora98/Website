import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { FormattedMessage } from 'react-intl';
import Button from '@material-ui/core/Button';
import star from './star.JPG';
//import './pages.css';
import './temp.css';

//import { Link } from '@material-ui/core';



const mid = () => {
    return (
        <div className="middle">
            <h3 className='h3'>
                <FormattedMessage id='getapp.how' />
            </h3>
            <Grid container>
                <Grid item sm={6} md={6} lg={6} >
                    <Grid container alignItems='center'>
                        <Grid item sm={6} md={6} lg={6}>
                            <div className="step1">
                                <h4><FormattedMessage id='getapp.step.1' /></h4>
                                <p><FormattedMessage id='getapp.content.1' /></p>
                                
                            </div>
                        </Grid>
                        <Grid item sm={6} md={6} lg={6}>
                            <img alt='winzo' src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fdownload-step-1.png?alt=media" style={{ height: '450px', width: '100%', marginBottom:'50px' }} />
                        </Grid>
                    </Grid>
                

                    <Grid container alignItems='center'>
                        <Grid item sm={6} md={6} lg={6}>
                            <div className="step1">
                                <h4><FormattedMessage id='getapp.step.3' /></h4>
                                <p><FormattedMessage id='getapp.content.3' /></p>
                                
                                
                            </div>
                        </Grid>
                        <Grid item sm={6} md={6} lg={6}>
                            <img alt='winzo' src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fdownload-step-3.png?alt=media" style={{ height: '450px', width: '100%', marginBottom:'50px' }} />
                        </Grid>
                    </Grid>
    
                    <Grid container alignItems='center'>
                        <Grid item sm={6} md={6} lg={6}>
                            <div className="step1">
                            <h4><FormattedMessage id='getapp.step.5' /></h4>
                                <p><FormattedMessage id='getapp.content.5' /></p>
                                
                            </div>
                        </Grid>
                        <Grid item sm={6} md={6} lg={6}>
                            <img alt='winzo' src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fdownload-step-5.png?alt=media" style={{ height: '450px', width: '100%', marginBottom:'50px' }} />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={6} md={6} lg={6}>
                    <Grid container alignItems='center' style={{marginTop:'50%'}}>
                        <Grid item sm={6} md={6} lg={6}>
                            <img alt='winzo' src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fdownload-step-2.png?alt=media" style={{ height: '450px', width: '100%',marginBottom:'50px'  }} />
                        </Grid>

                        <Grid item sm={6} md={6} lg={6}>
                            <div className="step">
                            <h4><FormattedMessage id='getapp.step.2' /></h4>
                            <p><FormattedMessage id='getapp.content.2' /></p>
                            
                                
                                
                            </div>
                        </Grid>
                        
                    </Grid>
                
                    <Grid container alignItems='center'>
                        <Grid item sm={6} md={6} lg={6}>
                            <img alt='winzo' src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fdownload-step-4.png?alt=media" style={{ height: '450px', width: '100%', marginBottom:'50px' }} />
                        </Grid>

                        <Grid item sm={6} md={6} lg={6}>
                            <div className="step">
                            <h4><FormattedMessage id='getapp.step.4' /></h4>
                                <p><FormattedMessage id='getapp.content.4' /></p>
                                
                                
                            </div>
                        </Grid>
                    </Grid>
                
                    <Grid container alignItems='center'>
                        <Grid item sm={6} md={6} lg={6}>
                            <img alt='winzo' src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fdownload-step-6.png?alt=media" style={{ height: '450px', width: '100%',marginBottom:'50px' }} />
                        </Grid>

                        <Grid item sm={6} md={6} lg={6}>
                            <div className="step">
                            <h4><FormattedMessage id='getapp.step.6' /></h4>
                                <p><FormattedMessage id='getapp.content.6' /></p>
                                
                                
                            </div>
                        </Grid>
                        
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}





const Buton = (props) => {

    
    function handlebutton(lang){
        
        

        window.history.replaceState(null, null, "?lan=" + lang);


        props.handle(lang)
        console.log(props.button)
    }


    return (
        <div className='marg'>
           
            <Button
                style={{ display: 'inline-flex', width: '80px', margin: '0 10px'  }}
                type="submit"
                className={(props.button==='en')?'active1':'inactive1'}
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {handlebutton('en') }}
            >
                english
        </Button>
        <Button
                width='auto'
                style={{ display: 'inline-flex', width: '80px'}}
                className={(props.button==='hi')?'active1':'inactive1'}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => {handlebutton('hi') }}>
                हिन्दी
        </Button>
        </div>
    )
}


const GetApp = (props) => {
    
    return (
        <div className='gp'>
            <div className='background center'>
                <Grid container>
                    <Grid container>
                        <Grid item xs={12} md={6} sm={12}>
                            <img alt='winzo' style={{ maxWidth: '190px'}} className='marg' src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Flogo-gold.png?alt=media" height="73.93px" width="190px" />
                        </Grid>

                        <Grid item xs={12} md={6} sm={12} style={{ textAlign: 'center' }} >
                            {Buton(props)}
                        </Grid>

                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={6} sm={12}>
                            <Grid item>
                                <div style={{ color: 'white', fontSize: '2.2em',fontWeight:'700',fontFamily: 'inherit' }}><FormattedMessage id="getapp.head" /></div>
                            </Grid>

                            <Hidden smDown>
                                <Grid item>
                                    <div style={{display:'inline-flex',flexWrap:'nowrap',width:'92%',marginTop:'25px'}}>
                                        <span className='phone' style={{minWidth:'30px'}}> +91 </span>
                                        <input className='phone1' type="text" name="firstname" placeholder="Mobile Number" style={{width:'92%',minWidth:'175px'}} />
                                        <button className='getapplink1' style={{width:'92%',marginLeft:'10px', float: 'right!important'}}><FormattedMessage id='getapp.link' /></button>
                                    </div>
                                </Grid>
                            </Hidden>

                            <Grid item>
                                <img alt='winzo' className='verify' src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fverified2.png?alt=media" />
                            </Grid>

                        </Grid>
                        <Grid item xs={12} md={6} sm={12}>
                            <div className='backtext'>
                                <div className="mobile">
                                    <img alt='winzo' style={{ height: '576px', width: '100%', maxWidth: '288px' }} src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fdownload-mobile-image-eng.png?alt=media" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <div className="rating">
                <Grid container>
                    <Grid item md={2} xs>
                        <h2 className="h2">1.2</h2>
                        <h4 className="h4"><FormattedMessage id='getapp.crore' /></h4>
                        <small><FormattedMessage id='getapp.play' /></small>
                    </Grid>

                    <Grid item md={2} xs>
                        <h2 className="h2">4.4</h2>
                        <img alt='winzo' className='center' src={star} height='21px' width='110px' style={{ paddingTop: '12px' }} />
                        <small><FormattedMessage id='getapp.ar' /></small>
                    </Grid>

                    <Grid item md={2} xs>
                        <h2 className="h2">200</h2>
                        <h4 className="h4"><FormattedMessage id='getapp.crores' /></h4>
                        <small><FormattedMessage id='getapp.pd' /></small>
                    </Grid>

                </Grid>
            </div>

            <div>
                <Hidden smDown>
                    {mid()}
                </Hidden>
            </div>


            <div className="margbottom">
                <div className='center2 wc'>
                    <h3 color='black'><FormattedMessage id='getapp.social' /></h3>
                </div>

                <div className="social center2">
                    <a href="https://www.youtube.com/channel/UCzjeYdI145S8VzGFsODpXoA" >
                        <img alt='winzo' data-lazysrc="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fsocial-youtube.png?alt=media" data-aspect="1" src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fsocial-youtube.png?alt=media" />

                    </a>

                    <a href="https://www.instagram.com/winzo_games/" ><img alt='winzo' data-lazysrc="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fsocial-instagram.png?alt=media" data-aspect="1" src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fsocial-instagram.png?alt=media" /></a>


                    <a href="https://www.facebook.com/WinZOGames/" ><img alt='winzo' data-lazysrc="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fsocial-facebook.png?alt=media" data-aspect="1" src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fsocial-facebook.png?alt=media" /></a>

                    <a href="https://twitter.com/winzogames?lang=en" ><img alt='winzo' data-lazysrc="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fsocial-twitter.png?alt=media" data-aspect="1" src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fsocial-twitter.png?alt=media" /></a>

                </div>
            </div>

            <Hidden mdUp>
                <div className='mobilelink'>
                    <a href="https://d1z38n2ru3n165.cloudfront.net/ver.208/WinZO.apk">
                        <div className="mobilelink1">
                        <p>Install WinZO Gold App Get Upto ₹100 Real Cash</p>
                            <div className="mobilelink2">
                           
                                <img src="https://firebasestorage.googleapis.com/v0/b/tictokgames-69dd1.appspot.com/o/website%2Fimages%2Fdownload-symbol-white.png?alt=media" alt="wi" style={{width:'20px',height:'33px', margin:'10px 0',verticalAlign:'middle'}} />
                                Download WinzoGold APP
                            </div>
                        </div>
                    </a>


                </div>
            </Hidden>

        </div>

    )
}


export default GetApp;