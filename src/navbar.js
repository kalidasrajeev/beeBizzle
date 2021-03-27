import React from 'react'
import drop from './drop.png';
export default function Navbar() {
    return (
        <div className='nav'>
                <div className='logo'>LOGO</div>
                <div className='search'>
                    <div className='searchdiv'>
                        <input type='text' className='customizeSearch' placeholder='search' />
                        <div><span className="material-icons-round icon">search</span></div>
                    </div>
                </div>
                <div className='headerLinks'>
                    <div className='headerLink'><div style={{ marginTop: '18px' }}>
                        <select className="countries" style={{ background: `url(${drop}) no-repeat right` }}>
                            <option>UAE</option>
                            <option>INDIA</option>
                            <option>QATAR</option>
                        </select></div></div>
                    <div className='headerLink'><div style={{ marginTop: '18px' }}>Login</div></div>
                    <div className='headerLink'>
                        <div style={{ display: 'inline-flex', position: 'relative', marginTop: '16px' }}>
                            <div style={{ position: 'absolute', right: '0px', color: '#d50000', zIndex: '1', background: 'white', border: '1px solid #d50000', borderRadius: '50%', width: '14px', height: '14px', fontSize: '8px',fontWeight:'600'}}>2</div>
                            <span className="material-icons-round" style={{ zIndex: '0', fontSize: '20px', top: '5px', marginRight: '6px', position: 'relative', top: '3px' }}>shopping_cart</span>
                        </div>
                        <div style={{ display: 'inline-flex' }}>Cart</div>

                    </div>

                </div>
            </div>
    )
}
