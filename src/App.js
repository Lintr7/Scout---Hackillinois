import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './global.css';
import CandleWrapper from './stocks';


function App() {
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <CandleWrapper/>
      <Card className="fadeLeft" sx={{ animation: 'fadeLeft 1s', background: 'rgb(51, 65, 94)', marginTop: '-90px', marginLeft: '1500px', height: '480px', width: '900px', padding: '20px', display: 'inline-block', borderRadius: '20px' }}>
      
        <CardContent>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'rgb(47, 199, 148)',
              color: 'white',
              padding: '27px 90px',
              fontSize: '1.4rem',
              marginLeft: '-470px', 
              marginTop: '340px',  
              '&:hover': {
                backgroundColor: '#17AD7B',
              }
            }}
          >
            Search
          </Button>
          <h1 style={{position: 'relative', fontSize:'5.4rem', color:'rgb(252, 252, 211)', marginTop:'-440px', textAlign:'left', marginLeft:'55px', lineHeight:'100px', fontFamily: "'Times New Roman', serif"}}>Instant updates on your favorite S&P 500 Companies</h1>
        </CardContent>
      </Card>
      <button className='btnLogin-popup'>Login</button>
      <h2 className='logo'>Scout</h2>
      <h1 className="fadeUpText" style={{ animation: 'fadeUpText 1s forwards', position: 'relative', color: 'rgb(151, 239, 210)', fontSize: '10em', marginLeft: '-1350px', marginTop: '-750px' }}>Market Insights <br /> Powered by AI</h1>
    </div>
    
  );
}

export default App;
