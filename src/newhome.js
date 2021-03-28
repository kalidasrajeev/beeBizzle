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
import HomeContenttab from "./homeContenttab";
import dot from './dot.png';
import shadow from './shadow.png';
import gift from './gift.png';
import galaxy from './galaxy.png';
import applelogo from './applelogo.png'
import preview from './preview.jpeg';
import cert from './cert.png';
import FooterMob from './footerMob';
import phone from './phone.png';

export default function NewHome() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    const history = useHistory();
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' }
    )

    const isSmallMobilemin = useMediaQuery({ query: '(min-width: 240px)' })
    const isSmallMobilemax = useMediaQuery({ query: '(max-width: 319px)' })



    const isMobilemin = useMediaQuery({ query: '(min-width: 320px)' })
    const isMobilemax = useMediaQuery({ query: '(max-width: 767px)' })

    const isTabmin = useMediaQuery({ query: '(min-width: 768px)' })
    const isTabmax = useMediaQuery({ query: '(max-width: 1023px)' })

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

            { isTabmin && isTabmax &&
                <div>
                    <Nav />
                    <Itemheader />
                    <HomeContenttab />
                    <Footer />
                </div>
            }

            { isMobilemin && isMobilemax &&
                <div >
                    <NavMob />
                    <HeaderBg />
                    <ItemsMob />
                    <ProductList />

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={student} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>For Students</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={student} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>For Students</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={student} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>For Students</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <ProductList2 />


                    <div style={{ height: '100%', width: '100%', marginTop: '10px' }}>
                        <div style={{ background: '#3554F6', paddingBottom: '20px' }}>
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

                        <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', height: '200px', width: '100', backgroundImage: `url(${dot})` }}>

                            <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                            </div>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={gift} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Gift Gallery</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '90%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', height: '200px', width: '100', backgroundImage: `url(${dot})` }}>

                            <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                            </div>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={gift} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Gift Gallery</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '90%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', height: '200px', width: '100', backgroundImage: `url(${dot})` }}>

                            <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                            </div>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={gift} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Gift Gallery</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '90%' }}>Shop Now</button></div>
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

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div>
                            <div style={{ borderRadius: '4px', width: '100%' }}>
                                <img src={galaxy} style={{ width: "100%", height: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div>
                            <div style={{ borderRadius: '4px', width: '100%' }}>
                                <img src={galaxy} style={{ width: "100%", height: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div>
                            <div style={{ borderRadius: '4px', width: '100%' }}>
                                <img src={galaxy} style={{ width: "100%", height: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>

                    <section className='company' style={{ marginTop: '8px' }}>
                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>


                    </section>
                    <FooterMob />
                </div>
            }


            { isSmallMobilemin && isSmallMobilemax &&
                <div >
                    <NavMob />
                    <div>
                        <div style={{ height: '199px', marginTop: '8px' }}>
                            <div className="containerImage">
                                <img src={bgHome} alt="Avatar" class="image" style={{ height: '100%', objectFit: 'cover' }} />
                                <div className="overlay"></div>
                                <div className="text">
                                    <div style={{ width: '10%' }}>

                                    </div>

                                    <div style={{ height: '100%', width: '90%', display: 'flex' }}>
                                        <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                                            <img className='phoneImage' src={phone} style={{ width: '100%', height: '100%', alignSelf: "center", padding: '10px', objectFit: 'contain' }} />
                                        </div>

                                        <div style={{ width: '60%', display: 'flex', justifyContent: 'flex-start' }}>
                                            <div style={{ alignSelf: 'center', width: '100%' }}>
                                                <div style={{ fontSize: '18px', fontWeight: '600', padding: '1%' }}>iPhone 11</div>
                                                <div style={{ fontSize: '10px', padding: '1%' }}>The right amount to everything</div>
                                                <div style={{ padding: '1%', width: '100%' }}>
                                                    <img src={cert} style={{ width: '80px' }} />
                                                </div>
                                                <div style={{ fontSize: '10px', padding: '1%' }}>AED 507 <span style={{ textDecoration: 'line-through', fontSize: '14px' }}>AED 599</span></div>

                                            </div>



                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <ItemsMob />
                    <ProductList />

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={student} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>For Students</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={student} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>For Students</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px', height: '200px', width: '100%' }}>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={student} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>For Students</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <ProductList2 />


                    <div style={{ height: '100%', width: '100%', marginTop: '10px' }}>
                        <div style={{ background: '#3554F6', paddingBottom: '20px' }}>
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

                        <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', height: '200px', width: '100', backgroundImage: `url(${dot})` }}>

                            <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                            </div>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={gift} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Gift Gallery</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '90%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', height: '200px', width: '100', backgroundImage: `url(${dot})` }}>

                            <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                            </div>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={gift} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Gift Gallery</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '90%' }}>Shop Now</button></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>

                        <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', height: '200px', width: '100', backgroundImage: `url(${dot})` }}>

                            <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                            </div>

                            <div style={{ width: '40%', height: '100%', display: 'flex', justifyContent: 'center' }}>

                                <img src={gift} style={{ alignSelf: 'center', width: '80%', height: '80%', objectFit: 'contain' }} />

                            </div>
                            <div style={{ width: '60%', height: '100%', display: 'flex', justifyContent: 'center' }}>
                                <div style={{ alignSelf: 'center', width: '80%', objectFit: 'contain' }}>
                                    <div style={{ fontWeight: '600', fontSize: '20px' }}>Gift Gallery</div>
                                    <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                    <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600', width: '90%' }}>Shop Now</button></div>
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

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div>
                            <div style={{ borderRadius: '4px', width: '100%' }}>
                                <img src={galaxy} style={{ width: "100%", height: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div>
                            <div style={{ borderRadius: '4px', width: '100%' }}>
                                <img src={galaxy} style={{ width: "100%", height: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', marginTop: '8px' }}>
                        <div>
                            <div style={{ borderRadius: '4px', width: '100%' }}>
                                <img src={galaxy} style={{ width: "100%", height: '100%', objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>

                    <section className='company' style={{ marginTop: '8px' }}>
                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ width: '100px' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>


                    </section>
                    <FooterMob />
                </div>
            }

            {/* <p>Your are in {  isPortrait ? 'portrait' : 'landscape'} orientation</p>
            { isRetina && <p>You are retina</p>} */}
        </div >
    )
}
