import styled from 'styled-components'
import LogoSvg from '../../assets/logo.svg'
import SearchSvg from '../../assets/search.svg'
import Avatar from '../../assets/avatar.png'

import {
  Container,
  Dropdown,
  DropdownItem,
  LogoLink,
  SearchContainer,
  Workspace,
} from './sidebar.styles'

const menuData = [
  {
    name: 'Favorites',
    items: [
      'Marketing',
      'Mobile App',
    ]
  },
  {
    name: 'My Projects',
    items: [
      'Marketing',
      'Landing Pages',
      'Wedding',
      'Mobile App',
      'House Construction',
    ]
  },
]

export default function SideBar() {
    return (
        <Container>
            <LogoLink href="/">
            <img src={LogoSvg} alt="logo" />
            </LogoLink>
            
            <SearchContainer>
            <input type="text" placeholder='Search...' />
            <img src={SearchSvg} alt="search" />
            </SearchContainer>

            <Workspace>
            <img src={Avatar} alt="pfp" />
            <span>My workspace</span>
            </Workspace>

            {
            menuData.map((item, i) => {
                return (
                <Dropdown key={item.name + i} open>
                    <summary>{item.name}</summary>
                    {
                    item.items.map((menuItem, i) => {
                        return <DropdownItem key={menuItem + i}>{menuItem}</DropdownItem>
                    })
                    }
                </Dropdown>
                )
            })
            }
        </Container>
    )
}