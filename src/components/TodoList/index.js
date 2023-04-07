import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Todo from '../Todo';
import { todoAdded } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux'



export default function TodoList() {

  const [todoName, setTodoname] = useState();
  const [priority, setPriority] = useState('Medium');
  const dispatch = useDispatch();

  const { status, search, priorities } = useSelector(state => state.filters);

  const todos = useSelector(state => state.todos);

  const todosRemaining = todos.filter(todo => {
    if (status === 'All') {
      return (
        priorities.length ? (todo.text.toLowerCase().includes(search.toLowerCase()) && priorities.includes(todo.priority)) :

          (todo.text.toLowerCase().includes(search.toLowerCase()))
      )
    }
    else {
      if (status == 'Todo') {
        return (
          priorities.length ? todo.text.toLowerCase().includes(search.toLowerCase()) && !todo.completed && priorities.includes(todo.priority) :
            todo.text.toLowerCase().includes(search.toLowerCase()) && !todo.completed
        )
      }
      else {
        return priorities.length ? todo.text.toLowerCase().includes(search.toLowerCase()) && todo.completed && priorities.includes(todo.priority) :
          todo.text.toLowerCase().includes(search.toLowerCase()) && todo.completed
      }
    }
  }
  );



  const handleAddTodo = () => {
    dispatch(todoAdded(
      {
        id: uuidv4(),
        text: todoName,
        complete: false,
        priority: priority
      }
    ))
  }




  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todosRemaining.map((todo) => (
          <Todo name={todo.text} prioriry={todo.priority} key={todo.id} id={todo.id} completed={todo.completed} />
        ))}
      </Col>

      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input onChange={(e) => setTodoname(e.target.value)} />
          <Select defaultValue="Medium" onChange={(value) => setPriority(value)}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
