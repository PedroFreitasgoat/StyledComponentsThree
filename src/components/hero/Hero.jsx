import React from 'react' /* links de importação */
import styled from 'styled-components'
import heroImage from '../../img/hero.png'

const Container = styled.div`  /* PAI DE TODOS, CONTAINER PAI */
  display: flex;
  height: 90%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  @media only screen and (max-width: 600px) {
    height: 60%;
  }
  @media only screen and (min-width: 600px) {
    height: 50%;
  }
  @media only screen and (min-width: 992px) {
    height: 80%;
  }
`;

const Left = styled.div` /*CONTAINER A ESQUERDA DA IMAGEM */
  width: 60%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div` /* TITULO  IT-MANAGEMENT*/
  width: 60%;
  font-size: 40px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

const Description = styled.p` /*TEXTO */
  width: 70%;
  font-size: 20px;
  margin-bottom: 2%;
  color: ${(props) => props.theme.colors.textDark};
`;

const Right = styled.div` /*CONTAINER PARA SEGURAR A IMAGEM */
  width: 40%;
  background-color: ${(props) => props.theme.colors.bgDefault};
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Image = styled.img` /* IMAGEM */
  width: 500px;
  background-color: ${(props) => props.theme.colors.bgDefault};
  @media only screen and (min-width: 600px) {
    width: 400px;
  }
  @media only screen and (min-width: 992px) {
    width: 500px;
  }
`;

const ButtonsContainer = styled.div` /*CONTAINER PARA OS BOTOES FICAREM ALINHADOS */
  display: flex;
`;
const Button = styled.button` /* BOTAO */
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  background-color: ${(props) => props.theme.colors.text};
  margin-left: 5px;
  padding: 15px 30px;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.bgLight} 50%,
    ${(props) => props.theme.colors.bgSecondary} 50%
  );
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: ${(props) => props.theme.colors.bgPrimary};
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-position: left bottom;
    cursor: pointer;
  }
`;

const Hero = () => {  /* TODO O HTML E COMPONENTES */
  return (
    <Container>
      <Left><Title>IT-Management - IT <br /> Support and IT-Services <br /> for everyone!</Title>
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui delectus recusandae excepturi sed veritatis quis alias. Quasi error, magni hic quisquam nulla consectetur provident ipsam commodi vero?</Description>
      <ButtonsContainer>
        <Button>About us</Button>
        <Button>Contact us</Button>
      </ButtonsContainer>
      </Left>
      <Right><Image src={heroImage}/></Right>
    </Container>
  )
}

export default Hero
