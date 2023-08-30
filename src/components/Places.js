import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const Div=styled.div
`
padding:40px;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;

`

export default function Places() {
  return (

    <>
    
        <div id='places'>
            <h1 style={{fontSize:40, color:'white', fontFamily:"'Exo 2', sans-serif", marginLeft:50}}>Trending Places in India</h1>
            <Div>
                <Card imageSrc='image1.jpg' description='Hampi was once the capital of the Vijayanagara Empire and boasts impressive temple complexes, royal structures, and intricate sculptures. '/>
                <Card imageSrc='image2.jpg' description='With palm-fringed beaches along the Arabian Sea, tranquil backwater canals, and verdant hills of the Western Ghats, Kerala offers a unique blend of natural beauty and vibrant traditions. '/>
                <Card imageSrc='image3.jpg' description='The Cenotaph on Gadsisar Lake in Jaisalmer, Rajasthan, India, is a captivating monument known for its intricate architecture.'/>
                <Card imageSrc='image4.jpg' description='The Taj Mahal, an iconic white marble mausoleum in Agra, India, is a UNESCO World Heritage site and a symbol of eternal love. '/>
            </Div>
        
        </div>


        <div>
            <h1 style={{fontSize:40, color:'white', fontFamily:"'Exo 2', sans-serif", marginLeft:50}}>International Places</h1>
            <Div>
                <Card imageSrc='image5.jpg'  description='The Taj Mahal, an iconic white marble mausoleum in Agra, India, is a UNESCO World Heritage site and a symbol of eternal love.' />
                <Card imageSrc='image6.jpg'  description='The Taj Mahal, an iconic white marble mausoleum in Agra, India, is a UNESCO World Heritage site and a symbol of eternal love.' />
                <Card imageSrc='image7.jpg'  description='The Taj Mahal, an iconic white marble mausoleum in Agra, India, is a UNESCO World Heritage site and a symbol of eternal love.' />
                <Card imageSrc='aboutimg2.jpg'  description='The Taj Mahal, an iconic white marble mausoleum in Agra, India, is a UNESCO World Heritage site and a symbol of eternal love.' />
            </Div>
        
        </div>
    
    
    
    </>
  );
}
