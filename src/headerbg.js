import React from 'react'
import bgHome from './bghome.jpg';
import cert from './cert.png';
import phone from './phone.png';

export default function Headerbg() {
    return (
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
                                    <div style={{ fontSize: '24px', fontWeight: '600', padding: '1%' }}>iPhone 11</div>
                                    <div style={{ fontSize: '12px', padding: '1%' }}>The right amount to everything</div>
                                    <div style={{ padding: '1%',width:'100%'}}>
                                        <img src={cert} style={{width:'150px'}}/>
                                    </div>
                                    <div style={{ fontSize: '20px', padding: '1%' }}>AED 507 <span style={{ textDecoration: 'line-through', fontSize: '14px' }}>AED 599</span></div>

                                </div>



                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
