import styled from 'styled-components'

export const Container = styled.div`
  background-color: #0F1D40;
  color: white;
  font-size: 14px;
  padding: 16px;
  max-width: max-content;
`

export const SearchContainer = styled.div`
  background-color: #2D4071;
  padding: 8px;
  display: flex;
  align-items: center;
  width: 190px;
  border-radius: 4px;
  margin-bottom: 20px;
  
  & input {
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    margin-right: 4px;
    font-size: 14px;
    width: 100%;

    &::placeholder {
      color:#8C939F;
    }
  }
`

export const Workspace = styled.div`
  margin: 0 -16px;
  padding: 6px 16px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  background-color: #2D4071;
  cursor: pointer;

  & img {
    height: 22px;
    width: 22px;
    margin-right: 8px;
  }
`
export const Dropdown = styled.details`
  & > summary {
    display: flex;
    align-items: center;
    margin: 0 -16px;
    padding: 9px 16px;
    &:hover {
      cursor: pointer;
      background-color: rgba(45, 64, 113, 0.396);
    } 
  }

  & > summary::marker {
    content: '';
  }

  & > summary::before {
    content: '';
    display: inline-block;
    height: 24px;
    width: 24px;
    background-image: url('/chevron.svg');
    transform: rotate(-90deg);
    margin-right: 8px;
  }

  &[open] > summary::before {
    transform: rotate(0);
  }
`;

export const DropdownItem = styled.div`
  color: #8C939F;
  cursor: pointer;
  padding: 9px 0;

  &:hover {
    color: white;
  }
`

export const LogoLink = styled.a`
  margin-bottom: 26px;
  margin-top: 10px;
  display: block;
`