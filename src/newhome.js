import React from 'react'
import './home.css';
import Nav from './navbar';
import NavMob from './NavMobile';
import Footer from './footer';
import Itemheader from './itemHeader';
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom';
import bgHome from './bghome.jpg';
import Iphone from './iphone.jpeg';
import HomeContent from './homeContent';
import HeaderBg from './headerbg';
import ItemsMob from './itemsMob';
import ProductList from './productListMob';
import student from './student.jpeg';
import ProductList2 from './productList2Mob';
import care from './care.png';
import dot from './dot.png';
import shadow from './shadow.png';
import gift from './gift.png';
import galaxy from './galaxy.png';
import applelogo from './applelogo.png'
import preview from './preview.jpeg';
import cert from './cert.png';
import FooterMob from './footerMob';
export default function NewHome() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const history = useHistory();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    return (
        <div>
            { isDesktopOrLaptop &&
                <div>
                    <Nav />
                    <Itemheader />
                    <HomeContent />
                    <Footer />
                </div>
            }

            { isBigScreen && <p>You  have a huge screen</p>}
            { isTabletOrMobile &&
                <div >
                    <NavMob />
                    <HeaderBg />
                    <ItemsMob />
                    <ProductList />
                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px' }}>

                            <div style={{ width: '40%', margin: '20px' }}>

                                <img src={student} style={{ width: '100%' }} />
                            </div>
                            <div style={{ width: '60%', marginTop: '40px' }}>
                                <div style={{ fontWeight: '600', fontSize: '24px' }}>For Students</div>
                                <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px' }}>

                            <div style={{ width: '40%', margin: '20px' }}>

                                <img src={student} style={{ width: '100%' }} />
                            </div>
                            <div style={{ width: '60%', marginTop: '40px' }}>
                                <div style={{ fontWeight: '600', fontSize: '24px' }}>For Students</div>
                                <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px' }}>

                            <div style={{ width: '40%', margin: '20px' }}>

                                <img src={student} style={{ width: '100%' }} />
                            </div>
                            <div style={{ width: '60%', marginTop: '40px' }}>
                                <div style={{ fontWeight: '600', fontSize: '24px' }}>For Students</div>
                                <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                            </div>
                        </div>
                    </div>

                    <ProductList2 />


                    <div style={{ height: '100%', width: '100%', marginTop: '10px' }}>
                        <div style={{ background: '#3554F6', height: '120px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ color: 'white', fontWeight: '600', paddingTop: '30px', fontSize: '18px' }}>Safe Convenient shopping from home</div>
                            </div>

                            <div style={{ display: 'flex', width: '100%' }}>
                                <div style={{ margin: 'auto' }}>
                                    <div style={{ display: 'flex' }}>
                                        <div style={{ fontWeight: '600', marginTop: '22px', marginLeft: '10px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '12px', fontWeight: '600' }}>Shop with an Expert</button></div>
                                        <div style={{ color: 'white', marginTop: '30px', fontWeight: '600', fontSize: '14px' }}>&nbsp;or Call 7012157764</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div style={{}}>
                            <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                    <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                </div>
                                <div style={{ width: '40%', margin: '20px', zIndex: '1' }}>
                                    <img src={gift} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '60%', marginTop: '45px' }}>
                                    <div style={{ fontWeight: '600', fontSize: '24px' }}>Gift Gallery</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '150px' }}>View All</button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div style={{}}>
                            <div style={{ position: 'relative', display: 'flex', background: 'lightgreen', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                    <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                </div>
                                <div style={{ width: '40%', margin: '20px', zIndex: '1' }}>
                                    <img src={gift} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '60%', marginTop: '45px' }}>
                                    <div style={{ fontWeight: '600', fontSize: '24px' }}>Gift Gallery</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '150px' }}>View All</button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div style={{}}>
                            <div style={{ position: 'relative', display: 'flex', background: 'lightyellow', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                    <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                </div>
                                <div style={{ width: '40%', margin: '20px', zIndex: '1' }}>
                                    <img src={gift} style={{ width: '100%' }} />
                                </div>
                                <div style={{ width: '60%', marginTop: '45px' }}>
                                    <div style={{ fontWeight: '600', fontSize: '24px' }}>Gift Gallery</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '150px' }}>View All</button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProductList2 />

                    <div style={{ height: '100%', width: '100%', marginTop: '8px', border: '8px solid white' }}>
                        <div style={{ paddingTop: '10px', paddingBottom: '10px', width: '100%', backgroundColor: '#FFBA05', height: '142' }}>
                            <div style={{ margin: 'auto' }}>
                                <div style={{ display: 'flex' }}>

                                    <div style={{ height: '90px', width: '40%' }}>
                                        <img style={{ width: '100%', height: '100%', objectFit: 'contain' }} src={preview} alt="Card image cap" />

                                    </div>

                                    <div style={{ marginTop: '10px' }}>
                                        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Phone everyone wants</div>
                                        <div style={{ fontSize: '10px' }}>Apple samsung oneplus</div>
                                        <img src={cert} style={{ marginTop: '10px', width: '80%' }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <ProductList2 />
                    <ProductList2 />

                    <div style={{ width: '100%', height: '200px' }}>
                        <div style={{ width: '100%', height: '190px', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", borderRadius: '4px' }} >
                            <img src={galaxy} style={{ height: '100%', width: '100%' }} />
                        </div>

                    </div>
                    <div style={{ width: '100%', height: '200px' }}>
                        <div style={{ width: '100%', height: '190px', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", borderRadius: '4px' }} >
                            <img src={galaxy} style={{ height: '100%', width: '100%' }} />
                        </div>

                    </div>
                    <div style={{ width: '100%', height: '200px' }}>
                        <div style={{ width: '100%', height: '190px', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", borderRadius: '4px' }} >
                            <img src={galaxy} style={{ height: '100%', width: '100%' }} />
                        </div>

                    </div>

                    <section className='company'>
                        <div>
                            <div style={{ width:'100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width:'100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div style={{ width:'100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div style={{ width:'100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div style={{ width:'100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <div style={{ width:'100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                        
                        
                    </section>
                    <FooterMob/>
                </div>
            }

            {/* <p>Your are in {  isPortrait ? 'portrait' : 'landscape'} orientation</p>
            { isRetina && <p>You are retina</p>} */}
        </div >
    )
}
