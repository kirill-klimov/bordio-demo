import styled from "styled-components"
import { ReactComponent as PlusSvg } from '../assets/plus.svg'
import { ReactComponent as SearchSvg } from '../assets/search.svg'
import { ReactComponent as BellSvg } from '../assets/bell.svg'
import avatar from '../assets/avatar.png'
import Dropdown from "./Dropdown";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-width: max-content;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px #F0F1F2;
`; 

const AddButton = styled.button`
    background-color: rgb(0, 148, 255);
    border-radius: 80px;
    outline: none;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    padding: 4px 16px;
    transition: all .15s;
    cursor: pointer;
    font-size: 14px;

    &:hover {
        background-color: rgb(0, 129, 221);
    }
`;

const SearchContainer = styled.div`
    background-color: rgba(245, 248, 250, 1);
    padding: 12px 16px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    
    & > input {
        font-size: 14px;
        border: none;
        background-color: transparent;
        outline: none;
    }

    & > input::placeholder {
        color: #8C939F;
    }
`;

const Bell = styled.div`
    position: relative;
    max-width: fit-content;
    margin: 0 23px;

    & > span {
        background-color: rgba(242, 18, 71, 1);
        color: white;
        font-size: 10px;
        padding: 4px 5px;
        border-radius: 4px;
        position: absolute;
        left: 60%;
        bottom: 60%;
    }
`;

const DropdownMargin = styled.div`
    margin: 0 16px;
`;

export default function BoardHeader() {
    return (
        <Container>
            <div className="flex items-center mr-4">
                <AddButton>
                    <PlusSvg fill="white" />
                    <span>Add new</span>
                </AddButton>
                <DropdownMargin>
                    <Dropdown defaultValue="Kanban" values={['Board view', 'Table view', 'Kanban']} />
                </DropdownMargin>
                <Dropdown defaultValue="Filter" values={['Filter']} />
            </div>
            <div className="flex items-center">
                <SearchContainer>
                    <input type="text" placeholder="Search..." />
                    <SearchSvg />
                </SearchContainer>
                <Bell>
                    <BellSvg />
                    <span>99+</span>
                </Bell>
                <img src={avatar} alt="avatar" />
            </div>
        </Container>
    )
}