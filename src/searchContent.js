import React from 'react'
import preview from './preview.jpeg';
import airpod from './airpod.jpg';

export default function SearchContent() {
    return (
        <div className='searchContainer'>
            <div className='searchContent'>
                <div className='Featured'>
                    <div style={{ width: '40%' }}>
                        <div style={{ fontSize: '12px', color: '#d50000', padding: '3px' }}>Featured</div>
                        <div style={{ fontSize: '16px', color: 'black', fontFamily: 'poppins', padding: '3px' }}>Top sellers for refurbished Air pods</div>
                        <div style={{ fontSize: '12px', color: 'black', textDecoration: 'underline', padding: '3px' }}>Grab yours</div>
                    </div>
                    <div style={{ width: '40%', display: 'flex' }}>
                        <div style={{ width: '33.3%' }}><img src={airpod} style={{ width: '80%' }} /></div>
                        <div style={{ width: '33.3%' }}><img src={airpod} style={{ width: '80%' }} /></div>
                        <div style={{ width: '33.3%' }}><img src={airpod} style={{ width: '80%' }} /></div>
                    </div>
                </div>
                <div className='Resultsort'>
                    <div style={{ float: 'right' }}>
                        <select className="select">
                            <option>Best</option>
                            <option>One</option>
                            <option>Two</option>
                            <option>Three</option>
                        </select>
                        <div style={{ color: 'black', fontSize: '14px', fontWeight: '600', marginTop: '5px', paddingBottom: '10px' }}>Shipping to: <span style={{ color: '#d50000', marginLeft: '10px' }}>29615</span></div>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ fontSize: '14px', color: 'black', fontWeight: '600', padding: '3px' }}>110,486 Results</div>
                        <div style={{ fontSize: '14px', color: 'black', fontWeight: '600', padding: '3px', paddingLeft: '15px' }}>iphone</div>
                    </div>
                    <div style={{ display: 'flex', width: '50%', marginTop: '10px' }}>
                        <div style={{ padding: '3px', fontSize: '14px', width: '25%', background: '#d50000', color: 'white', border: '1px solid #e0e0e0', textAlign: 'center' }}><div style={{ margin: 'auto' }}>All Listing</div></div>
                        <div style={{ padding: '3px', fontSize: '14px', width: '25%', background: 'white', color: 'black', border: '1px solid #e0e0e0', textAlign: 'center' }}><div style={{ margin: 'auto' }}>Certified</div></div>
                        <div style={{ padding: '3px', fontSize: '14px', width: '25%', background: 'white', color: 'black', border: '1px solid #e0e0e0', textAlign: 'center' }}><div style={{ margin: 'auto' }}>Auctio</div></div>
                        <div style={{ padding: '3px', fontSize: '14px', width: '25%', background: 'white', color: 'black', border: '1px solid #e0e0e0', textAlign: 'center' }}><div style={{ margin: 'auto' }}>
                            <select className="conditioselect">
                                <option>Conditio</option>
                                <option>One</option>
                                <option>Two</option>
                                <option>Three</option>
                            </select>
                        </div></div>
                    </div>
                </div>

                <div className='results'>
                    <div style={{ width: "25%" }}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div style={{borderBottom:'1px solid #e0e0e0'}}>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "25%" }}>
                        <div>
                            <div style={{ padding: '10px',paddingTop:'25px', paddingBottom: '25px' }}>
                                <div style={{ background: 'red', color: 'white', padding: '2px', fontSize: '10px', display: 'inline', borderRadius: '4px', padding: '4px' }}>20% OFF</div>
                                <div style={{ textAlign: 'center' }}><img src={preview} style={{ width: '40%', marginTop: '10px' }} /></div>
                                <div style={{ color: 'black', fontWeight: '600', marginTop: '10px', fontSize: '14px', padding: '3px' }}>Apple iPhone 11</div>
                                <div style={{ fontSize: '12px', fontWeight: '600', color: 'grey', padding: '3px' }}>Certified, Good Condition</div>
                                <div style={{ fontSize: '14px', fontWeight: '700', color: 'black', marginTop: '10px', padding: '3px' }}>AED 8349<span style={{ fontWeight: '600', fontSize: '11px', marginLeft: '10px', textDecoration: 'line-through' }}>AED 9000</span></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='pagination'>
                    <div style={{ width: '25%', padding: '10px' }}>
                        <div style={{ margin: 'auto', fontSize: '14px', fontWeight: '600' }}>
                            Page 1 of 6,133
                                  </div>
                    </div>
                    <div style={{ padding: '10px', display: 'flex' }}>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', backgroundColor: '#d50000', color: 'white', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            1
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            2
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            3
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            4
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            5
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            6
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            7
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            8
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            9
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: 'black', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            10
                                  </div>
                        <div style={{ margin: '4px', fontSize: '14px', fontWeight: '600', color: '#d50000', padding: '4px', paddingRight: '8px', paddingLeft: '8px', borderRadius: '4px' }}>
                            NEXT
                                  </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
