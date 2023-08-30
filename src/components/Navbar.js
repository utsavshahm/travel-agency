import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';


const ListItems=styled.li`
padding:10px 0;
margin: 0 6px;
cursor:pointer;
transition: all 0.3s;
&:hover{
    color:#FFB84C;
}
`


const UlList=styled.ul`
margin:0;
list-style:none;
color:white;
font-size:1.5rem;
display:flex;
gap:5px;
font-family:Lexend Deca;

`

const Div=styled.div`
display:flex;
position:fixed;
top:0;
justify-content:space-around;
align-items: center;
width:100vw;
background-image: linear-gradient(90deg,#362049,#000000,#0e366acc);
font-weight:bold;
z-index:1000;
`
const GoTo=styled(NavLink)
`
&:visited{
  color:white;
}
&:active{
  color:white;
}
&:unvisited{
  color:white;
}

text-decoration:none;

`
const place=document.getElementById('places');

export default function Navbar() {
  return (
    <Div>

        <h1 style={{fontFamily:"'Exo 2', sans-serif", color:'white', margin:0, cursor:'pointer'}}>Ascend</h1>
        <UlList>
        <GoTo to='/' ><ListItems>Home</ListItems></GoTo>
        <GoTo to='/'><ListItems>Places</ListItems></GoTo>
        <GoTo to='/about' ><ListItems>About</ListItems></GoTo>
        <GoTo to='/contact' ><ListItems>Contact</ListItems></GoTo>

        </UlList>

        
      
    </Div>
  );
}
