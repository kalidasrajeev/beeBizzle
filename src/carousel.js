import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core'
import phone1 from './phone1.jpg';
import phone2 from './phone2.jpg';
import Grid from '@material-ui/core/Grid';
export default function Example(props) {
    var items = [
        {
            image: phone1,
            name: "kalidas",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            desc: 'Youtube Influencer'
        },
        {
            image: phone2,
            name: "Arjun",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            desc: 'Youtube Influencer'
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper>
            {/* <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button> */}
            <Grid container>
                <Grid item xs={4}>
                    <div>
                        <img src={props.item.image} style={{ width: '100%', height: '270px' }} />
                    </div>
                </Grid>
                <Grid item xs={8}>
                    <Grid container spacing={3}>
                       <Grid item xs={12}>
                          <div style={{padding: '20px',fontWeight: '600'}}>{props.item.description}</div>      
                       </Grid>
                       <Grid item xs={12}>
                          <div style={{paddingLeft: '20px',fontWeight: '600',fontSize: '36px'}}>{props.item.name}</div>      
                       </Grid>
                       <Grid item xs={12}>
                          <div style={{paddingLeft: '20px',fontWeight: '600'}}>{props.item.desc}</div>      
                       </Grid>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Paper>
    )
}