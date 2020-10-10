import React from 'react';
import styled  from 'styled-components'
import Todos from './Todos'

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container>
        <Todos/>
      </Container>
    )
  }
}

export default Home