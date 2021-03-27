import React from 'react'
import bgHome from './bghome.jpg';
import cert from './cert.png';
import phone from './phone.png';

export default function Headerbg() {
    return (
        <div>
            <div style={{ height: '199px',marginTop:'8px'}}>
                        <div className="containerImage">
                            <img src={bgHome} alt="Avatar" class="image" style={{ height: '100%', objectFit: 'cover' }} />
                            <div className="overlay"></div>
                            <div className="text">
                                <div style={{ width: '10%' }}>

                                </div>

                                <div style={{ height: '100%', width: '90%', display: 'flex' }}>
                                    <div style={{ width: '40%', height: '100%', padding: '0%' }}>
                                        <div style={{ height: '100%', width: '100%' }}>
                                            <div style={{ height: '123px', width: '92px', margin: 'auto', marginTop: '45px' }}>
                                                <img className='phoneImage' src={phone} style={{ width: '100%', height: '100%' }} />
                                            </div>

                                        </div>
                                    </div>
                                    <div style={{ width: '60%', padding: '40px', paddingLeft: '0px' }}>
                                        <div style={{ width: '100%', color: 'white', display: 'block' }}>
                                            <div style={{ height: '20%' }}></div>
                                            <div style={{ height: '60%',width:'100%'}}>
                                                <div style={{ fontSize: '28px', fontWeight: '600', padding: '1%' }}>iPhone 11</div>
                                                <div style={{ fontSize: '10px', padding: '1%' }}>The right amount to everything</div>
                                                <div style={{ padding: '1%',width:'100%'}}>
                                                    <img src={cert} style={{width:'140px'}}/>
                                                </div>
                                                <div style={{ fontSize: '15px', padding: '1%' }}>AED 507 <span style={{ textDecoration: 'line-through', fontSize: '14px' }}>AED 599</span></div>
                                            </div>
                                            <div style={{ height: '20%' }}></div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
        </div>
    )
}
