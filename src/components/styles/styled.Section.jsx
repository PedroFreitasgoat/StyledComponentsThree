import styled from 'styled-components'


export const Container = styled.div`
    padding: 10px 20px;
    margin-top: 4%;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row; 
    margin: 0px 190px 0px 190px;
`

export const Header = styled.div`
    font-weight: bold;
    font-size: 30px;
    color: ${(props) => props.theme.colors.primary};
`

export const Title = styled.div`
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    margin-bottom: 10px;
`

export const Description = styled.p`
    color: ${(props) => props.theme.colors.textDark};
`

export const Right = styled.div`
    width: 40%;
`

export const Image = styled.img`
    width: 100%;
`
export const Left = styled.div`
    width: 60%;
`

export const List = styled.div`
    list-style: none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const ListItem = styled.li`
    color: ${(props) => props.theme.colors.primary};
    border: 2px solid #fff;
    border-radius: 5px solid ${(props) => props.theme.colors.primary};
    min-width: 200px;
    text-align: left;
    margin: 5px;
    padding: 20px 20px;
    -webkit-box-shadow:  0px -1px 15px -5px #dad0d0;
    box-shadow: 0px -1px 15px -5px #a8a4a4;
`