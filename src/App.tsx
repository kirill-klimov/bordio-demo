import React from 'react'
import styled from 'styled-components'
import MainView from './components/MainView';
import SideBar from './components/SideBar/index'
import ToolsBar from './components/ToolsBar/index';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: stretch;
`;

function App() {
  return (
    <Container>

      <SideBar />
      <ToolsBar />
      <MainView />

    </Container>
  )
}

export default App
