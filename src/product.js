import React from 'react'
import './home.css';
import Nav from './navbar';
import NavMob from './NavMobile';
import Footer from './footer';
import Itemheader from './itemHeader';
import Productbody from './productBody';
import SearchContentMob from './searchContentMob';
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom';
import airpod from './airpod.jpg';
import ReviewCard from './reviewcard.js';
import preview from './preview.jpeg';

export default function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const history = useHistory();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const handleFilter = () => {
        history.push('/filter')
    }
    return (
        <div>
            { isDesktopOrLaptop &&
                <div>
                    <Nav />
                    <Itemheader />

                    <div>
                        <Productbody />
                        <ReviewCard />

                        <div style={{ marginTop: '0px', width: "100%" }}>
                            <div style={{ width: '100%', height: '100%' }}>
                                <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                                    <div style={{ background: 'white', padding: '15px' }}>
                                        <div style={{ fontWeight: '500' }}>For iPhone Lovers<span style={{ float: 'right' }}>View All</span></div>
                                    </div>

                                    <div style={{ height: '1px', background: '#e0e0e0' }}>

                                    </div>

                                    <div style={{ background: 'white', padding: '15px', display: 'flex' }}>
                                        <div style={{ width: "20%" }}>
                                            <div>
                                                <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                                    <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                                    <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                                    <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                                    <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ width: "20%" }}>
                                            <div>
                                                <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                                    <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                                    <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                                    <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                                    <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ width: "20%" }}>
                                            <div>
                                                <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                                    <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                                    <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                                    <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                                    <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ width: "20%" }}>
                                            <div>
                                                <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                                    <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                                    <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                                    <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                                    <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ width: "20%" }}>
                                            <div>
                                                <div style={{ padding: '10px', paddingTop: '10px', paddingBottom: '10px' }}>
                                                    <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                                    <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                                    <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                                    <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </div>

                    <Footer />

                </div>
            }

            {isBigScreen && <p>You  have a huge screen</p>}
            {isTabletOrMobile &&
                <div className='container'>
                    <NavMob />
                    <div style={{ backgroundColor: 'white', height: '60px', width: '100%', display: 'flex' }}>
                        <div style={{ width: '50%', textAlign: 'center', fontWeight: '600', display: 'inline-flex' }}>
                            <div style={{ margin: 'auto' }}>
                                <div><span style={{ position: 'relative', top: '4px' }} class="material-icons-round">swap_vert</span>Sort</div>
                            </div>
                        </div>
                        <div style={{ width: '50%', textAlign: 'center', fontWeight: '600', display: 'inline-flex' }} onClick={handleFilter}>
                            <div style={{ margin: 'auto' }}>
                                <div><span style={{ position: 'relative', top: '4px' }} class="material-icons-round">filter_alt</span>Filter</div>
                            </div>
                        </div>
                    </div>
                    <div className='FeaturedMob'>
                        <div style={{ width: '60%' }}>
                            <div style={{ fontSize: '14px', color: '#d50000', padding: '3px' }}>Featured</div>
                            <div style={{ fontSize: '18px', color: 'black', fontWeight: '600', padding: '3px' }}>Top sellers for refurbished Air pods</div>
                            <div style={{ fontSize: '16px', color: 'grey', fontFamily: 'poppins', textDecoration: 'underline', padding: '3px' }}>Grab yours</div>
                        </div>
                        <div style={{ width: '40%', display: 'flex' }}>
                            <div style={{ width: '95%' }}><img src={airpod} style={{ width: '80%' }} /></div>
                        </div>
                    </div>
                    <SearchContentMob />

                </div>


            }
            {/* <p>Your are in {  isPortrait ? 'portrait' : 'landscape'} orientation</p>
            { isRetina && <p>You are retina</p>} */}
        </div >
    )
}
