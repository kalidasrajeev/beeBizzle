import React from 'react'
import drop from './drop.png';
import { useHistory } from 'react-router-dom';
import companylogo from './companylogo.png';
export default function Navbar() {
    const history = useHistory();
    const handleCart = () => {
        history.push('/cart')
    }

    const handleHome = () => {
        history.push('/home')
    }
    return (
        
        <div className='navMobile'>
                <div style={{display:'flex',width:'100%'}}>
                    
                    <div className='logoMob'>
                    <img onClick={handleHome} src={companylogo} style={{width:'100%',height:'100%',objectFit:'contain'}}/>
                    </div>
                    <div className='headerLinkMob'>
                        <div style={{ display: 'inline-flex', position: 'relative', marginTop: '16px' }} onClick={handleCart}>
                            <div style={{ position: 'absolute', right: '0px', color: '#d50000', zIndex: '1', background: 'white', border: '1px solid #d50000', borderRadius: '50%', width: '15px', height: '15px', fontSize: '10px' }}>1</div>
                            <span className="material-icons-round" style={{ zIndex: '0', fontSize: '22px', top: '5px', marginRight: '6px', position: 'relative', top: '3px' }}>shopping_cart</span>
                        </div>
                        <div style={{ display: 'inline-flex' }} onClick={handleCart}>Cart</div>

                    </div>
                </div>

                <div className='searchMob'>
                    <div className='searchdivMob'>
                        <input type='text' className='customizeSearchMob' placeholder='Search Products, Brands' />
                        <div><span className="material-icons-round iconMob">search</span></div>
                    </div>
                </div>   
            </div>
    )
}
