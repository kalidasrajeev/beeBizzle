import React from 'react'

export default function Itemheader() {
    return (
        <div className='itemHeader'>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '20%' }}></div>
                <div className='itemLinks'>Mac</div>
                <div className='itemLinks'>iPhone</div>
                <div className='itemLinks'>Mobile phones</div>
                <div className='itemLinks'>iPad</div>
                <div className='itemLinks'>Laptops</div>
                <div className='itemLinks'>Smartwatchs</div>
                <div className='itemLinks'>Camera</div>
                <div style={{ width: '20%' }}></div>
            </div>
        </div>
    )
}
