import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  height:330px;
  border-radius: 10px;
  box-shadow: 0 1px 2px 2px orange;
  overflow: hidden;
  border:2px solid white;
  cursor:pointer;
  transition:all 0.2s;
  &:hover{
    transform:scale(1.05);
    filter:blur(0);
  }
  margin: 0 10px;
  
`;

const CardDiv = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.imageSrc});
  background-size:cover;
  filter:blur(1px);
  transition:all 0.2s;
  
  &:hover{
    filter:blur(0);
  }
  
`;

const CardDescription = styled.p`
  padding: 10px;
  font-size: 15px;
  color: #FFF;
  font-family:'Comic Neue';
`;
export default function Card({imageSrc, description}) {
  return (
    <CardContainer>
      <CardDiv imageSrc={imageSrc}>
        <img src="discount.jpg" alt="discount" width={100} height={100}/>
      </CardDiv>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
}
