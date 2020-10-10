import React from 'react';
import styled  from 'styled-components'

const Container = styled.div`
  width: 300px;
  margin: 0 auto;
`

class Todos extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Container>
        <h1>Todos</h1>
        <input type="text"/>
        <button>追加</button>
      </Container>
    )
  }
}

export default Todos