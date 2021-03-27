import React from 'react'
import header from './header.jpeg';
import bgHome from './bghome.jpg';
import './newHome.css';
import preview from './preview.jpeg';
import cert from './cert.png';
import student from './student.jpeg';
import rectangle from './rectangle.png';
import phone from './phone.png';
import circle from './circle.png'
import biggerCircle from './biggercircle.png';
import care from './care.png';
import dot from './dot.png'
import shadow from './shadow.png'
import gift from './gift.png';
import bigsalelogo from './bigsale.jpg';
import delivery from './delivery.png';
import galaxy from './galaxy.png'
import applelogo from './applelogo.png'
import huawei from './huawei.png';
import samsung from './samsung1.png';
import macbook from './macbook.png';
export default function HomeContent() {
    return (
        <div>
            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div className="containerImage">
                            <img src={bgHome} alt="Avatar" class="image" style={{ height: '100%', objectFit: 'cover' }} />
                            <div className="overlay"></div>
                            <div className="text">
                                <div style={{ width: '20%' }}>

                                </div>
                                <div style={{ height: '100%', width: '60%', display: 'flex' }}>
                                    <div style={{ width: '40%', height: '100%', padding: '0%' }}>
                                        <div style={{ height: '100%', width: '100%' }}>
                                            <div style={{ height: '75%', width: '65%', margin: 'auto', marginTop: '15%' }}>
                                                <img className='phoneImage' src={phone} style={{ width: '100%', height: '100%' }} />
                                            </div>

                                        </div>
                                    </div>
                                    <div style={{ width: '60%', padding: '40px', paddingLeft: '0px' }}>
                                        <div style={{ width: '100%', color: 'white', display: 'block' }}>
                                            <div style={{ height: '20%' }}></div>
                                            <div style={{ height: '60%', padding: '6%' }}>
                                                <div style={{ fontSize: '36px', fontWeight: '600', padding: '1%' }}>iPhone 11</div>
                                                <div style={{ fontSize: '20px', padding: '1%' }}>The right amount to everything</div>
                                                <div style={{ padding: '1%' }}>
                                                    <img src={cert} />
                                                </div>
                                                <div style={{ fontSize: '20px', padding: '1%' }}>AED 507 <span style={{ textDecoration: 'line-through', fontSize: '14px' }}>AED 599</span></div>

                                            </div>
                                            <div style={{ height: '20%' }}></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '20%' }}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "100%", marginTop: '10px', height: '117px' }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ background: 'white', height: '100%', display: 'flex' }}>
                            <div style={{ width: '25%', height: '100%', display: 'flex' }}>
                                <div style={{ width: '30%' }}>
                                    <div style={{ width: '80px', height: '80px', margin: '20px' }}>
                                        <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                            <img src={delivery} style={{ marginTop: '25px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '70%' }}>
                                    <div style={{ marginLeft: '15px', marginTop: '40px' }}>
                                        <div style={{ fontWeight: '600', fontSize: '14px' }}>Satisfied or Refunded</div>
                                        <div style={{ fontSize: '10px', color: 'grey' }}>7 Days free returns</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '25%', height: '100%', display: 'flex' }}>
                                <div style={{ width: '30%' }}>
                                    <div style={{ width: '80px', height: '80px', margin: '20px' }}>
                                        <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                            <img src={delivery} style={{ marginTop: '25px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '70%' }}>
                                    <div style={{ marginLeft: '15px', marginTop: '40px' }}>
                                        <div style={{ fontWeight: '600', fontSize: '14px' }}>Excellent Support</div>
                                        <div style={{ fontSize: '10px', color: 'grey' }}>24/7 Customer Support</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '25%', height: '100%', display: 'flex' }}>
                                <div style={{ width: '30%' }}>
                                    <div style={{ width: '80px', height: '80px', margin: '20px' }}>
                                        <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                            <img src={delivery} style={{ marginTop: '25px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '70%' }}>
                                    <div style={{ marginLeft: '15px', marginTop: '40px' }}>
                                        <div style={{ fontWeight: '600', fontSize: '14px' }}>Secure Payment</div>
                                        <div style={{ fontSize: '10px', color: 'grey' }}>Several payment options</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '25%', height: '100%', display: 'flex' }}>
                                <div style={{ width: '30%' }}>
                                    <div style={{ width: '80px', height: '80px', margin: '20px' }}>
                                        <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                            <img src={delivery} style={{ marginTop: '25px' }} />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '70%' }}>
                                    <div style={{ marginLeft: '15px', marginTop: '40px' }}>
                                        <div style={{ fontWeight: '600', fontSize: '14px' }}>Free Delivery in UAE</div>
                                        <div style={{ fontSize: '10px', color: 'grey' }}>Delivered to your doorstep</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ height: '181px', width: "100%", marginTop: '10px' }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ backgroundColor: 'white', height: '100%', width: '100%', display: 'flex' }}>
                            <div style={{ width: '8%' }}></div>
                            <div style={{ width: '12%' }}>
                                <div style={{ width: '100px', height: '100px', margin: '20px' }}>
                                    <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                        <img src={macbook} style={{ marginTop: '15px' }} />
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', fontWeight: '500' }}>Macbooks</div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ width: '100px', height: '100px', margin: '20px' }}>
                                    <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                        <img src={macbook} style={{ marginTop: '15px' }} />
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', fontWeight: '500' }}>Android Phones</div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ width: '100px', height: '100px', margin: '20px' }}>
                                    <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                        <img src={macbook} style={{ marginTop: '15px' }} />
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', fontWeight: '500' }}>iPhones</div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ width: '100px', height: '100px', margin: '20px' }}>
                                    <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                        <img src={macbook} style={{ marginTop: '15px' }} />
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', fontWeight: '500' }}>iPads & Tablets</div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ width: '100px', height: '100px', margin: '20px' }}>
                                    <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                        <img src={macbook} style={{ marginTop: '15px' }} />
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', fontWeight: '500' }}>Laptops</div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ width: '100px', height: '100px', margin: '20px' }}>
                                    <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                        <img src={macbook} style={{ marginTop: '15px' }} />
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', fontWeight: '500' }}>Smartwatchs</div>
                                </div>
                            </div>
                            <div style={{ width: '12%' }}>
                                <div style={{ width: '100px', height: '100px', margin: '20px' }}>
                                    <div style={{ textAlign: 'center', height: '100%', width: '100%', background: '#e0e0e0', borderRadius: '50%' }}>
                                        <img src={macbook} style={{ marginTop: '15px' }} />
                                    </div>
                                    <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '14px', fontWeight: '500' }}>Camera</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ background: 'white', padding: '15px' }}>
                            <div style={{ fontWeight: '500' }}>Deals of the Day<span style={{ float: 'right' }}>View All</span></div>
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
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
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
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
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
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
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
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
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
                                        <div class="progress" style={{ height: "7px", width: '90%' }}>
                                            <div style={{ background: 'green' }} class="progress-bar w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                        <div style={{ fontSize: '12px', padding: '3px', marginTop: '5px' }}>7 hours left</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <div style={{ width: '33.3%', margin: '10px', marginLeft: '0px' }}>
                                <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px' }}>

                                    <div style={{ width: '40%', margin: '30px' }}>

                                        <img src={student} style={{ width: '100%' }} />
                                    </div>
                                    <div style={{ width: '60%', marginTop: '40px' }}>
                                        <div style={{ fontWeight: '600', fontSize: '24px' }}>For Students</div>
                                        <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                        <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ width: '33.3%', margin: '10px' }}>
                                <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px' }}>
                                    <div style={{ width: '40%', margin: '30px' }}>
                                        <img src={student} style={{ width: '100%' }} />
                                    </div>
                                    <div style={{ width: '60%', marginTop: '40px' }}>
                                        <div style={{ fontWeight: '600', fontSize: '24px' }}>For Students</div>
                                        <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                        <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ width: '33.3%', margin: '10px', marginRight: '0px' }}>
                                <div style={{ display: 'flex', background: 'white', padding: '10px', borderRadius: '4px' }}>
                                    <div style={{ width: '40%', margin: '30px' }}>
                                        <img src={student} style={{ width: '100%' }} />
                                    </div>
                                    <div style={{ width: '60%', marginTop: '40px' }}>
                                        <div style={{ fontWeight: '600', fontSize: '24px' }}>For Students</div>
                                        <div style={{ fontSize: '13px', marginTop: '2px' }}>1400+ products</div>
                                        <div style={{ fontWeight: '600', marginTop: '8px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop Now</button></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>



            <div style={{ marginTop: '20px', width: "100%" }}>
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

            <div style={{ marginTop: '20px', width: "100%", height: '77px' }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', width: '100%', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ background: '#3554F6', backgroundImage: `url(${rectangle})`, height: '77px' }}>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '4%' }}></div>
                                <div style={{ width: '30%' }}>
                                    <div style={{ marginTop: '30px', color: 'white', fontWeight: '600' }}>Safe Convenient shopping from home</div>
                                </div>
                                <div style={{ width: '30%' }}>

                                </div>
                                <div style={{ width: '30%' }}>
                                    <div style={{ display: 'flex' }}>
                                        <img src={care} style={{ marginTop: '15px' }} />
                                        <div style={{ fontWeight: '600', marginTop: '22px', marginLeft: '10px' }}><button type="button" class="btn btn-warning" style={{ fontSize: '14px', fontWeight: '600' }}>Shop with an Expert</button></div>
                                        <div style={{ marginLeft: '12px', marginTop: '30px', color: 'white', fontWeight: '600' }}> or Call 7012157764</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '10px', marginLeft: '0px' }}>
                                    <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                        <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                            <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                        </div>
                                        <div style={{ width: '40%', margin: '30px', zIndex: '1' }}>
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

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '10px' }}>
                                    <div style={{ position: 'relative', display: 'flex', background: 'lightgreen', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                        <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                            <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                        </div>
                                        <div style={{ width: '40%', margin: '30px', zIndex: '1' }}>
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
                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '10px', marginRight: '0px' }}>
                                    <div style={{ position: 'relative', display: 'flex', background: 'lightyellow', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                        <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                            <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                        </div>
                                        <div style={{ width: '40%', margin: '30px', zIndex: '1' }}>
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

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '10px', marginLeft: '0px' }}>
                                    <div style={{ position: 'relative', display: 'flex', background: 'lightpink', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                        <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                            <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                        </div>
                                        <div style={{ width: '40%', margin: '30px', zIndex: '1' }}>
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

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '10px' }}>
                                    <div style={{ position: 'relative', display: 'flex', background: 'lightyellow', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                        <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                            <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                        </div>
                                        <div style={{ width: '40%', margin: '30px', zIndex: '1' }}>
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
                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '10px', marginRight: '0px' }}>
                                    <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                        <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                            <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                        </div>
                                        <div style={{ width: '40%', margin: '30px', zIndex: '1' }}>
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

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '10px', marginLeft: '0px' }}>
                                    <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                        <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                            <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                        </div>
                                        <div style={{ width: '40%', margin: '30px', zIndex: '1' }}>
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

                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '10px' }}>
                                    <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                        <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                            <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                        </div>
                                        <div style={{ width: '40%', margin: '30px', zIndex: '1' }}>
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
                            <div style={{ width: '33.3%' }}>
                                <div style={{ margin: '10px', marginRight: '0px' }}>
                                    <div style={{ position: 'relative', display: 'flex', background: 'lightblue', padding: '10px', borderRadius: '4px', backgroundImage: `url(${dot})` }}>
                                        <div style={{ position: 'absolute', right: '0px', left: '0px', top: '0px', bottom: '0px', height: '100%' }}>
                                            <img src={shadow} style={{ height: '100%', zIndex: '0' }} />
                                        </div>
                                        <div style={{ width: '40%', margin: '30px', zIndex: '1' }}>
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

                        </div>
                    </div>
                </div>

            </div>

            <div style={{ marginTop: '20px', width: "100%" }}>
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


            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', width: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ display: 'flex', paddingTop: '10px', paddingBottom: '10px', width: '100%', backgroundColor: '#FFBA05', height: 'auto' }}>
                            <div style={{ width: '25%', height: '120px', marginRight: '0', marginTop: '10px' }}>
                                <img style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'right' }} src={preview} alt="Card image cap" />

                            </div>

                            <div style={{ width: '40%', textAlign: 'left', paddingLeft: '5%', marginTop: '10px' }}>
                                <div style={{ fontSize: '28px', fontWeight: 'bold' }}>Phone everyone wants</div>
                                <div style={{ fontSize: '18px' }}>Apple samsung oneplus</div>
                                <img src={cert} style={{ marginTop: '10px' }} />

                            </div>
                            <div style={{ marginLeft: '0', width: '35%' }}>
                                <img style={{ height: '100%', width: '40%', objectFit: 'contain', objectPosition: 'left', float: 'left' }} src={bigsalelogo} alt="Card image cap" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: '20px', width: "100%" }}>
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

            <div style={{ marginTop: '20px', width: "100%" }}>
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



            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: "100%", borderRadius: '4px', }}>
                            <div style={{ width: '33.3%', height: '253px', border: 'none', padding: '10px', paddingLeft: '0px' }}>
                                <div style={{ width: '100%', height: '233px', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", borderRadius: '4px' }} >
                                    <img src={galaxy} style={{ height: '100%', width: '100%' }} />
                                </div>

                            </div>
                            <div style={{ width: '33.3%', height: '253px', border: 'none', padding: '10px' }}>
                                <div style={{ width: '100%', height: '233px', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", borderRadius: '4px' }} >
                                    <img src={galaxy} style={{ height: '100%', width: '100%' }} />
                                </div>

                            </div> <div style={{ width: '33.3%', height: '253px', border: 'none', padding: '10px', paddingRight: '0' }}>
                                <div style={{ width: '100%', height: '233px', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", borderRadius: '4px' }} >
                                    <img src={galaxy} style={{ height: '100%', width: '100%' }} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: '20px', width: "100%" }}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', height: "100%", backgroundColor: "#FFFFFF", }}>
                            <div style={{ width: '16.6%', height: '119px', border: 'none' }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={samsung} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={huawei} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                            <div style={{ width: '16.6%', height: '119px', border: 'none', }}>
                                <div style={{ width: '100%', height: '100%', border: 'none', position: 'relative', backgroundColor: "#FFFFFF", paddingTop: '20px' }} >
                                    <img src={applelogo} style={{ height: '70%', width: '100%', objectFit: 'contain' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>





    )
}
