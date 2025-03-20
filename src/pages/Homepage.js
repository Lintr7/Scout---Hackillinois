import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import  '../css sheets/global2.css';
import TinyLineChart from '../components/lines';
import TinyLineChart2 from '../components/lines2';
import TinyLineChart3 from '../components/lines3';
import Slideshow from '../components/carousel';
import { Link } from 'react-router-dom';


function Homepage() {
  
  return (
    <div className='wrapper'>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Card className="fadeLeft" sx={{ position: 'relative', zIndex: '100', animation: 'fadeLeft 1s', background: 'rgb(51, 65, 94)', marginTop: '-7em', marginLeft: '49em', height: '15em', width: '28em', padding: '20px', display: 'inline-block', borderRadius: '20px' }}>
          <CardContent>
            <Link to="/stocks">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'rgb(47, 199, 148)',
                  color: 'white',
                  padding: '1em 3em',
                  fontSize: '0.80rem',
                  marginLeft: '-21em', 
                  marginTop: '13em',  
                  '&:hover': {
                    backgroundColor: '#white',
                  }
                }}
              >
                Search
              </Button>
            </Link>
            <h1 style={{position: 'relative', fontSize:'2.9rem', color:'rgb(252, 252, 211)', marginTop:'-4.7em', textAlign:'left', marginLeft:'0.1em', lineHeight:'1.1em', fontFamily: "'Times New Roman', serif"}}>Instant updates <br /> on your favorite <br /> S&P 500 Companies</h1>
          </CardContent>
        </Card>
        <button className='btnLoginPopup'>Login</button>
        <h2 className='logo'>Scout</h2>
        <h1 className="fadeUpText" style={{ animation: 'fadeUpText 1s forwards', position: 'relative', color: 'rgb(151, 239, 210)', fontSize: '5.7em', marginLeft: '-6em', marginTop: '-5.5em' }}>Market Insights <br /> Powered by AI</h1>

          <div style={{position: 'absolute', marginTop: '-29em', marginLeft: '-54.3em', transform: 'scale(0.5)'}}>
            <TinyLineChart/>
          </div>
          <div style={{position: 'absolute', marginTop: '-31.5em', marginLeft: '-54.3em', transform: 'scale(0.5)'}}>
            <TinyLineChart2/>
          </div>
          <div style={{position: 'absolute', marginTop: '-31.2em', marginLeft: '-54.3em', transform: 'scale(0.5)'}}>
            <TinyLineChart3/>
          </div>
          <div style={{position: 'absolute',  marginTop:'48.7em', marginLeft:'-7em'}}>
            <Slideshow/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
