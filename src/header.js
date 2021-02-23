import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import SimpleSelect from './select';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Poppins'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  customizeToolbar: {
      height: '40px'
  },
  customizeAppbar: {
    background: '#FFFF64',
    color: 'black'
  },
  customizeSearch: {
    width: '100%',
    height: '100%',  
    background: 'white',
    border: '2px solid #fff',
    boxSizing: 'border-box',
    outline: 'none',
    color: 'black',
    fontSize: '16px',
    fontFamily: 'poppins',
    fontWeight: '500',
    textIndent: '20px'
  },
  cSearch: {
      positon: 'absolute',
  },
  search: {

  } 
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.customizeAppbar}>
        <Toolbar className={classes.customizeToolbar}>
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
            <div style={{textAlign:'center'}}><span>Logo</span></div> 
        </Grid>
        <Grid item xs={6}>
            <div className='search'>
            <input type='text' className={classes.customizeSearch} placeholder='search'/>
            <div><span className="material-icons-round icon">search</span></div>
           </div>
        </Grid>
        <Grid item xs={4}>
            <Grid container>
               <Grid item xs={4}><div style={{textAlign:'center',fontWeight: '600',fontSize: '15px'}}><SimpleSelect/></div></Grid>
               <Grid item xs={4}><div style={{textAlign:'center',display: 'inline-flex',fontWeight: '600',fontSize: '15px'}}><PersonOutlineOutlinedIcon/>Login</div></Grid>
               <Grid item xs={4}><div style={{display: 'inline-flex',textAlign: 'center',fontWeight: '600',fontSize: '15px'}}><ShoppingCartOutlinedIcon/>Cart</div></Grid>
            </Grid> 
        </Grid>
      </Grid>
    </div>
        </Toolbar>
      </AppBar>
      <div style={{height:'20px'}}>
          <Grid container style={{backgroundColor: 'black',color:'white',fontSize: '14px'}}>
              <Grid item xs={3}>

              </Grid>
              <Grid item xs={6}>
                  <Grid container spacing={2}>
                     <Grid item>Mac&nbsp;&nbsp;&nbsp;|</Grid>
                     <Grid item>iPhone&nbsp;&nbsp;&nbsp;|</Grid>
                     <Grid item>Mobile phones&nbsp;&nbsp;&nbsp;|</Grid>
                     <Grid item>iPad&nbsp;&nbsp;&nbsp;|</Grid>
                     <Grid item>Laptops&nbsp;&nbsp;&nbsp;|</Grid>
                     <Grid item>Smartwatches&nbsp;&nbsp;&nbsp;|</Grid>
                     <Grid item>Camera&nbsp;&nbsp;&nbsp;|</Grid>
                  </Grid>
              </Grid>
              <Grid item xs={3}>

              </Grid>
          </Grid>
      </div>
    </div>
  );
}
