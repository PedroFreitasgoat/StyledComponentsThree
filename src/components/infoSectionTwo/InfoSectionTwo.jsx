import React from 'react'
import styled from 'styled-components'
import sectionImage from '../../img/laptopDark.jpg'


const Container = styled.div`
    margin-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-image: url(${sectionImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const Title = styled.div`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    padding: 2%;
`

const Description = styled.p`
    color: #fff;
    width: 40%;
    font-weight: lighter;
    font-size: 25px;
`

const InfoSectionTwo = () => {
  return (
    <Container>
        <TextWrapper>
      <Title>Veja a historia</Title>
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae suscipit voluptates dignissimos nesciunt, fugit voluptatibus laboriosam commodi assumenda facilis itaque labore ex .
      </Description>
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo vitae suscipit voluptates dignissimos nesciunt, fugit voluptatibus laboriosam commodi assumenda facilis itaque labore ex .
      </Description>
      </TextWrapper>
    </Container>
  )
}

export default InfoSectionTwo
