import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import '../css sheets/global.css';
import TinyLineChart from '../components/lines';
import TinyLineChart2 from '../components/lines2';
import TinyLineChart3 from '../components/lines3';
import Slideshow from '../components/carousel';


function Homepage() {
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Card className="fadeLeft" sx={{ position: 'relative', zIndex: '100', animation: 'fadeLeft 1s', background: 'rgb(51, 65, 94)', marginTop: '-120px', marginLeft: '1500px', height: '530px', width: '900px', padding: '20px', display: 'inline-block', borderRadius: '20px' }}>
      
        <CardContent>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgb(47, 199, 148)',
              color: 'white',
              padding: '27px 90px',
              fontSize: '1.4rem',
              marginLeft: '-470px', 
              marginTop: '360px',  
              '&:hover': {
                backgroundColor: '#white',
              }
            }}
          >
            Search
          </Button>
          <h1 style={{position: 'relative', fontSize:'5.4rem', color:'rgb(252, 252, 211)', marginTop:'-415px', textAlign:'left', marginLeft:'55px', lineHeight:'100px', fontFamily: "'Times New Roman', serif"}}>Instant updates on your favorite S&P 500 Companies</h1>
        </CardContent>
      </Card>
      <button className='btnLogin-popup'>Login</button>
      <h2 className='logo'>Scout</h2>
      <h1 className="fadeUpText" style={{ animation: 'fadeUpText 1s forwards', position: 'relative', color: 'rgb(151, 239, 210)', fontSize: '10em', marginLeft: '-1350px', marginTop: '-900px' }}>Market Insights <br /> Powered by AI</h1>
      <div style={{ top: '60em', position: 'fixed' }}>
      <div style={{position: 'relative', marginTop:'-40em', marginLeft:'-16em', zIndex:'-1'}}>
        <TinyLineChart/>
      </div>
      <div style={{position: 'relative', marginTop:'-54em', marginLeft:'-16em', zIndex:'-1'}}>
        <TinyLineChart2/>
      </div>
      <div style={{position: 'relative', marginTop:'-55em', marginLeft:'-16em', zIndex:'-1'}}>
        <TinyLineChart3/>
      </div>
      <div style={{position: 'absolute',  marginTop:'40px', transform:'scale(1.9)', marginLeft:'0px'}}>
        <Slideshow/>
      </div>
      </div>
    </div>
    
  );
}

export default Homepage;
