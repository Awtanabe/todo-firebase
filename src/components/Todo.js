import React from 'react';
import styled  from 'styled-components'

const TodoWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`

const TodoListItem = styled.li`
`

class Todo extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <TodoWrapper>
        <TodoListItem>{this.props.title}</TodoListItem>
      </TodoWrapper>
    )
  }
}

export default Todo