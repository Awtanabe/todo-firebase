import React from 'react';
import styled  from 'styled-components'
import Todo from './Todo'
import firebase, { db } from '../Firebase'

const TodoWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
`

const TodoListsFormField = styled.div`
`

const TodoListsFormFieldTitle = styled.h1`
`
const TodoListsFormFieldInput = styled.input`
`
const TodoListsFormFieldButton = styled.button`
`

const TodoListsWrapper = styled.div`
`
const TodoLists = styled.ul`
`
const TodoListItem = styled.li`
`

class Todos extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [{id:1, title:"todo1", body: "散歩する"}]
    }
  }

  handleSubmit() {

    debugger
    const item = {
      name: "name",
      price: 100
  };
  
    db.collection('items').add(item);

  }

  render(){
    const { todos } = this.state
    return(
      <TodoWrapper>
        <TodoListsFormField>
          <TodoListsFormFieldTitle>
            Todos
          </TodoListsFormFieldTitle>
        </TodoListsFormField>
        <TodoListsFormFieldInput 
          type="text"
        />
        <TodoListsFormFieldButton onClick={() => this.handleSubmit()}>
          追加
        </TodoListsFormFieldButton>
        <TodoListsWrapper>
          <TodoLists>
            {todos.map((todo) => <Todo {...todo}/>)}
          </TodoLists>
        </TodoListsWrapper>
      </TodoWrapper>
    )
  }
}

export default Todos