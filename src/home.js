import React from 'react'
import './home.css';
import Nav from './navbar';
import NavMob from './NavMobile';
import Footer from './footer';
import Itemheader from './itemHeader';
import Filterbar from './FilterBar';
import SearchContent from './searchContent';
import SearchContentMob from './searchContentMob';
import { useMediaQuery } from 'react-responsive'
import { useHistory } from 'react-router-dom';
import airpod from './airpod.jpg';

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
                <div className='container'>
                    <Nav />
                    <Itemheader />

                    <div className='contentContainer'>

                        <Filterbar />
                        <SearchContent />

                    </div>

                    <Footer />

                </div>
            }

            { isBigScreen && <p>You  have a huge screen</p>}
            { isTabletOrMobile &&
                <div className='container'>
                    <NavMob />
                    <div style={{backgroundColor:'white',height:'60px',width:'100%',display:'flex'}}>
                        <div style={{width:'50%',textAlign:'center',fontWeight:'600',display:'inline-flex'}}> 
                              <div style={{margin:'auto'}}>
                                  <div><span style={{position:'relative',top:'4px'}} class="material-icons-round">swap_vert</span>Sort</div>
                               </div>   
                        </div>
                        <div style={{width:'50%',textAlign:'center',fontWeight:'600',display:'inline-flex'}} onClick={handleFilter}> 
                              <div style={{margin:'auto'}}>
                                  <div><span style={{position:'relative',top:'4px'}} class="material-icons-round">filter_alt</span>Filter</div>
                               </div>   
                        </div>
                    </div>
                    <div className='FeaturedMob'>
                            <div style={{ width: '60%' }}>
                                <div style={{ fontSize: '14px', color: '#d50000', padding: '3px' }}>Featured</div>
                                <div style={{ fontSize: '18px', color: 'black',fontWeight:'600', padding: '3px' }}>Top sellers for refurbished Air pods</div>
                                <div style={{ fontSize: '16px', color: 'grey',fontFamily:'poppins', textDecoration: 'underline', padding: '3px' }}>Grab yours</div>
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
