import React from 'react'
import phone2 from './phone2.jpg';

export default function Reviewcard() {
    return (

        <div style={{ width: "100%", marginTop: '10px' }}>
            <div style={{ width: '100%', height: '100%' }}>
                <div style={{ height: '100%', margin: 'auto', paddingLeft: '50px', paddingRight: '50px' }}>
                    <section className='reviews'>
                        <div style={{paddingRight:'10px'}}>
                            <div style={{ padding: '20px', display: 'flex', width: '1000px', backgroundColor: 'white' }}>

                                <img src={phone2} style={{ width: '370px' }} />
                                <div>
                                    <blockquote>
                                        It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming;
                                        <footer>
                                            Teddy Roosevelt
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>

                        <div style={{paddingRight:'10px'}}>
                            <div style={{ padding: '20px', display: 'flex', width: '1000px', backgroundColor: 'white' }}>

                                <img src={phone2} style={{ width: '370px' }} />
                                <div>
                                    <blockquote>
                                        It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming;
                                        <footer>
                                            Teddy Roosevelt
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
