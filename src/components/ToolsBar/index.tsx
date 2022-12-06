import styled from 'styled-components'
import icon1 from './assets/1.svg' 
import icon2 from './assets/2.svg' 
import icon3 from './assets/3.svg' 
import icon4 from './assets/4.svg' 
import icon5 from './assets/5.svg' 

const data = [
    { name: 'Roadmap', icon: icon1 },
    { name: 'Schedule', icon: icon2, active: true },
    { name: 'Tasks', icon: icon3 },
    { name: 'Notes', icon: icon4 },
    { name: 'Files', icon: icon5 },
]

const Container = styled.div`
    /* padding: 16px; */
    background-color: #F5F8FA;
    padding-right: 16px;
`;

const Title = styled.span`
    font-size: 18px;
    display: block;
    padding: 24px 16px;
`;

interface ItemProps {
    active?: boolean
}

const ItemContainer = styled.div<ItemProps>`
    display: flex;
    align-items: center;
    padding: 16px 14px;
    padding-right: 20px;
    font-size: 14px;
    color: #222222;
    cursor: pointer;
    border-radius: 0px 8px 8px 0px;
    position: relative;

    & > img {
        margin-right: 15px;
    }
    ${props => props.active && `
        color: #0094FF;
        background-color: white;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            height: 100%;
            background-color: #0094FF;
            width: 4px;
            border-radius: 0px 10px 10px 0px;
        }  
    `}
`;

export default function ToolsBar() {
    return (
        <Container>
            <Title>Tools</Title>
            {
                data.map((item, i) => {
                    return (
                        <ItemContainer key={item.name + i} active={item.active}>
                            <img src={item.icon} alt="icon" />
                            <span>{item.name}</span>
                        </ItemContainer>
                    )
                })
            }
        </Container>
    )
}