import React from 'react'
import section0oneImage from '../../img/section1.png'
import { Container, Description, Header, Image, Left, List, ListItem, Right, Title, Wrapper } from '../styles/styled.Section'

const InfoSectionone = () => {
  return (
    <Container>
        <Wrapper direction={"row-reverse"}>
        <Right>
            <Image src={section0oneImage} />
        </Right>
            <Left>
            <Title>Pedro The Best</Title>
            <Header>Sou o melhor de todos</Header>
            <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem, ipsam. Cumque sit accusantium, velit libero explicabo a nihil voluptate animi.
            </Description>
            <List>
                <ListItem>Transparent advice</ListItem>
                <ListItem>Volume bundling</ListItem>
                <ListItem>Global IT sourcing</ListItem>
                <ListItem>International deliveries</ListItem>
                <ListItem>Software refuelling</ListItem>
                <ListItem>Nationwide service network</ListItem>
            </List>
            </Left>

        </Wrapper>
    </Container>
  ) 
}

export default InfoSectionone
