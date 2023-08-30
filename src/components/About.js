import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';


const Div=styled.div`
display:flex;
color:white;
justify-content:space-around;
align-items: center;
font-size:35px;
font-family:Lexend Deca;
height:550px;
`

const Image=styled.img`
height:inherit;
`
const P=styled.p`
font-size:31px;
margin: 0 50px;
font-family: 'Comic Neue', cursive;
word-spacing:3px;
`
export default function About() {
  return (
    <div>
        <Navbar />
        <Div>
            <P>
                <h1 style={{ color:'#FFB84C', fontFamily:'Lexend Deca', fontSize:55}}>Welcome to Ascend</h1>
                
                At Ascend, we believe that every journey is an opportunity to create lasting memories and embark on life-changing experiences. Our passion for travel and exploration drives us to curate exceptional travel packages that cater to the adventurer in you.
                
                
            </P>

            <Image src="aboutimg.jpg" alt="travel img" style={{borderRadius:' 25px 0 0 25px'}}/>
        </Div>
        <Div style={{textAlign:'justify'}}>
            <Image src="aboutimg2.jpg" alt="travel img"  style={{borderRadius:'0 25px 25px 0'}}/>
            <P>
                <h1 style={{color:'#FFB84C', fontFamily:'Lexend Deca', fontSize:55, textAlign:'end'}}>Our Story</h1>
                Founded by avid travelers who have roamed the globe in search of hidden gems and cultural treasures, Ascend was born out of a desire to share the magic of travel with others. With years of combined experience, our team is dedicated to crafting seamless and unforgettable journeys that cater to a variety of tastes and preferences.
            </P>

        </Div>

        <Div>
            <P>
                <h1 style={{ color:'#FFB84C', fontFamily:'Lexend Deca', fontSize:55}}>What We Offer</h1>
                
                From breathtaking natural landscapes to vibrant urban escapes, our range of meticulously designed travel itineraries ensures that there's something for everyone. Whether you're a thrill-seeker seeking adrenaline-pumping adventures, a culture enthusiast eager to immerse yourself in local traditions, or a leisure traveler looking for relaxation and luxury, we've got you covered.
                
                
            </P>

            <Image src="aboutimg3.jpg" alt="travel img" width={480} style={{borderRadius:' 25px 0 0 0'}}/>
        </Div>

        <Div>
            <h1 style={{ color:'#FFB84C', fontFamily:'Lexend Deca', fontSize:55}}>Travel to Himalayas</h1>
            
            <iframe width="800" height="450" src="https://www.youtube.com/embed/nZmO8B9rRik?si=UNaFwCf_wT7FLTzk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Div>
        
      
    </div>
  );
}
