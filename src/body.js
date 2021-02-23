import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import image1 from './img-4.jpeg';
import image2 from './img-1.jpeg';
import image3 from './img-2.jpeg';
import image4 from './img-3.jpeg';
import image5 from './img-5.jpeg';
import image6 from './preview.jpeg';
import certi from './cert.png';
import ship from './ship.png';
import support from './support.png';
import guaran from './guaran.png';

import Example from './carousel';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    paper1: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    custImage: {

        height: '64px',
    },
    images: {
        backgroundImage: image1,

    },
    custDetail: {
        fontWeight: '600'
    },
    buyBtn: {
        background: 'black',
        color: 'white',
        border: 'none',
        outline: 'none',
        height: '40px',
        fontFamily: 'poppins',
        fontWeight: '600',
        cursor: 'pointer'
    },
    cartBtn: {
        background: '#FFFF64',
        color: 'black',
        border: 'none',
        outline: 'none',
        height: '40px',
        fontFamily: 'poppins',
        fontWeight: '700',
        cursor: 'pointer',
        MarginRight: '10px'
    }

}));

export default function AutoGrid() {
    const classes = useStyles();
    const [images, setImage] = useState(image1)
    const handleImage = (value) => {
        setImage(value)
    }
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={5}>
                    <Grid container style={{ textAlign: 'center', marginTop: '20px' }}>
                        <Grid container>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={10}>
                                <Paper className={classes.paper} variant="outlined" square><img src={images} /></Paper>
                            </Grid>
                            {/* <Grid item xs={2}></Grid> */}
                        </Grid>
                        <Grid container spacing={2} style={{ marginTop: '20px' }}>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={2}><Paper className={classes.paper} variant="outlined" square onClick={() => handleImage(image3)}><img style={{ height: '64px' }} src={image3} /></Paper></Grid>

                            <Grid item xs={2}><Paper className={classes.paper} variant="outlined" square onClick={() => handleImage(image2)} ><img style={{ height: '64px' }} src={image2} /></Paper></Grid>
                            <Grid item xs={2}><Paper className={classes.paper} variant="outlined" square onClick={() => handleImage(image5)}><img className={classes.custImage} src={image5} /></Paper></Grid>
                            <Grid item xs={2}><Paper className={classes.paper} variant="outlined" square onClick={() => handleImage(image1)}><img className={classes.custImage} src={image6} /></Paper></Grid>
                            <Grid item xs={2}><Paper className={classes.paper} variant="outlined" square onClick={() => handleImage(image4)}><img style={{ height: '63px' }} src={image4} /></Paper></Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={3} style={{ marginTop: '20px' }}>
                        <Grid item xs={12} style={{ marginLeft: '30px' }}>
                            <img src={certi} />
                        </Grid>
                        <Grid item xs={12} style={{ marginLeft: '30px' }}>
                            <div className={classes.custDetail}>
                                Apple iPhone 11, 64 GB(Includes Earpods,Power Adapter)
                                <br /> <span style={{ fontWeight: '500', fontSize: '12px' }}>Minimally used. Negligible Scratches. Fully Functional</span>
                            </div>
                        </Grid>
                        <Grid item xs={12} style={{ marginLeft: '30px' }}>
                            <div style={{ fontWeight: '700' }}>AED 8349&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: '500', fontSize: '14px' }}>AED 9000</span></div>
                        </Grid>

                        <Grid item xs={12} style={{ marginLeft: '30px' }}>
                            <div>
                                <input type='submit' value='BUY NOW' className={classes.buyBtn}></input><span>&nbsp;&nbsp;&nbsp;</span>
                                <input type='submit' value='ADD TO CART' className={classes.cartBtn}></input>
                            </div>
                        </Grid>

                        <Grid item xs={12} style={{ marginLeft: '30px' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper} variant='outlined' square>
                                        <img src={guaran} />
                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'black' }}>Guaranteed Quality</div>
                                        <div style={{ fontSize: '11px', fontWeight: '500' }}>
                                            100% Original and functional Products
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper} variant='outlined' square><img style={{ position: 'relative', top: '10px' }} src={ship} />

                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'black', marginTop: '13px' }}>Replace Easily</div>
                                        <div style={{ fontSize: '11px', fontWeight: '500' }}>
                                            Get hassle-free 10 days replacement
                                        </div>
                                    </Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper} variant='outlined' square><img src={support} />

                                        <div style={{ fontSize: '12px', fontWeight: '600', color: 'black',marginTop: '13px' }}>Excellent Support</div>
                                        <div style={{ fontSize: '11px', fontWeight: '500' }}>
                                            Get support from our agents
                                        </div></Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ marginLeft: '30px' }}>
                            <div style={{ fontWeight: '700' }}>In The Box</div>
                            <Grid container spacing={2} style={{ marginTop: '10px' }}>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper1} variant='outlined' square><div style={{ fontSize: '12px' }}>Charging Cable</div></Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper1} variant='outlined' square><div style={{ fontSize: '12px' }}>Power Plug</div></Paper>
                                </Grid>
                                <Grid item xs={4}>
                                    <Paper className={classes.paper1} variant='outlined' square><div style={{ fontSize: '12px' }}>Earphones</div></Paper>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} style={{ marginLeft: '30px' }}>
                            <div style={{ fontWeight: '700' }}>Specifications</div>
                            <Grid container spacing={2} style={{ marginTop: '10px' }}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2} style={{ fontSize: '12px', fontWeight: '600' }}>
                                        <Grid item xs={4}>in The Box</Grid>
                                        <Grid item xs={8}>Handset, Earpods with Lighting Connector, Lighting to USB Cable</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '12px', fontWeight: '600' }}>
                                        <Grid item xs={4}>Model Number</Grid>
                                        <Grid item xs={8}>MWLLHUYA/A</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '12px', fontWeight: '600' }}>
                                        <Grid item xs={4}>Model Name</Grid>
                                        <Grid item xs={8}>iPhone 11</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '12px', fontWeight: '600' }}>
                                        <Grid item xs={4}>Color</Grid>
                                        <Grid item xs={8}>White</Grid>
                                    </Grid>

                                    <Grid container spacing={2} style={{ fontSize: '12px', fontWeight: '600' }}>
                                        <Grid item xs={4}>Browse Type</Grid>
                                        <Grid item xs={8}>Smartphones</Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Grid container>
                    <Grid item xs={12}><div style={{marginTop: '30px'}}><input type='submit' value='SHOP WITH AN EXPERT' className={classes.cartBtn}></input></div></Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/* <Grid container>
                <Paper >
                    <Grid item xs={8}>
                        <Grid container>
                            <Grid item xs={2}></Grid>
                            <Grid item xs={3}><img src={phone1} style={{ width: '100%' }} /></Grid>
                            <Grid item xs={7}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid item xs={4}></Grid>
            </Grid> */}

            <Grid container>

                <Grid item xs={10} style={{ marginTop: '30px' }}>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={11}>
                           <Example/>
                        </Grid>
                    </Grid>
                </Grid>


            </Grid><Grid container>

                <Grid item xs={10} style={{ marginTop: '30px' }}>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={11}><Paper variant='outlined' square><div style={{ fontWeight: '600' }}>&nbsp;You might also like<span style={{ float: 'right' }}>View All&nbsp;</span></div></Paper></Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={11}>
                            <Paper variant='outlined' square>
                                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={2}>
                                        <div>
                                            <img src={image1} style={{ width: '80%' }} />
                                            <div style={{ fontWeight: '700' }}>Apple iphone 11</div>
                                            <div style={{ fontWeight: '600', fontSize: '12px', color: 'gray' }}>Certified, Good Condition</div>
                                            <div style={{ fontWeight: '700' }}>AED 8349 <span style={{ fontSize: '14px', fontWeight: '500' }}>AED 9000</span></div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div>
                                            <img src={image1} style={{ width: '80%' }} />
                                            <div style={{ fontWeight: '700' }}>Apple iphone 11</div>
                                            <div style={{ fontWeight: '600', fontSize: '12px', color: 'gray' }}>Certified, Good Condition</div>
                                            <div style={{ fontWeight: '700' }}>AED 8349 <span style={{ fontSize: '14px', fontWeight: '500' }}>AED 9000</span></div>
                                            <br />
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div>
                                            <img src={image1} style={{ width: '80%' }} />
                                            <div style={{ fontWeight: '700' }}>Apple iphone 11</div>
                                            <div style={{ fontWeight: '600', fontSize: '12px', color: 'gray' }}>Certified, Good Condition</div>
                                            <div style={{ fontWeight: '700' }}>AED 8349 <span style={{ fontSize: '14px', fontWeight: '500' }}>AED 9000</span></div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div>
                                            <img src={image1} style={{ width: '80%' }} />
                                            <div style={{ fontWeight: '700' }}>Apple iphone 11</div>
                                            <div style={{ fontWeight: '600', fontSize: '12px', color: 'gray' }}>Certified, Good Condition</div>
                                            <div style={{ fontWeight: '700' }}>AED 8349 <span style={{ fontSize: '14px', fontWeight: '500' }}>AED 9000</span></div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <div>
                                            <img src={image1} style={{ width: '80%' }} />
                                            <div style={{ fontWeight: '700' }}>Apple iphone 11</div>
                                            <div style={{ fontWeight: '600', fontSize: '12px', color: 'gray' }}>Certified, Good Condition</div>
                                            <div style={{ fontWeight: '700' }}>AED 8349 <span style={{ fontSize: '14px', fontWeight: '500' }}>AED 9000</span></div>
                                        </div>
                                    </Grid>

                                    <Grid item xs={1}></Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid container style={{background: 'black',color: 'white', marginTop: '20px'}}>
            <Grid item xs={1}></Grid>
                <Grid item xs={2} style={{marginTop: '20px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} style={{fontWeight:'600'}}>Our Guide</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} style={{marginTop: '20px'}}>
                <Grid container spacing={2}>
                        <Grid item xs={12} style={{fontWeight:'600'}}>Our Guide</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                    </Grid>   
                </Grid>
                <Grid item xs={2} style={{marginTop: '20px'}}>
                <Grid container spacing={2}>
                        <Grid item xs={12} style={{fontWeight:'600'}}>Our Guide</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} style={{marginTop: '20px'}}>
                <Grid container spacing={2}>
                        <Grid item xs={12} style={{fontWeight:'600'}}>Our Guide</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2} style={{marginTop: '20px'}}>
                <Grid container spacing={2}>
                        <Grid item xs={12} style={{fontWeight:'600'}}>Our Guide</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                        <Grid item xs={12}>Link</Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </div>
    );
}
