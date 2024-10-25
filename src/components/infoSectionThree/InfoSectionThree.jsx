import React from 'react'
import { Container, Description, Header, Image, Left, List, ListItem, Right, Title, Wrapper } from '../styles/styled.Section'
import sectionThreeImage from '../../img/section3.png'
const InfoSectionThree = () => {
  return (
    <Container>
        <Wrapper direction={"row-reverse"}>
        <Right>
            <Image src={sectionThreeImage} />
        </Right>
            <Left>
            <Title>O Pedro é o Milior</Title>
            <Header>SIIIIUUUUU</Header>
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
export default InfoSectionThree
