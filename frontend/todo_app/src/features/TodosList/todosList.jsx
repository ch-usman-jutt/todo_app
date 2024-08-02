import { useEffect, useState } from "react";

import CircularProgress from '@mui/material/CircularProgress';

import TodoCard from "@/components/TodoCard";
import { getTodos } from "@/api";

import { TodosListContainer } from "./styled";

export default function TodosList() {
  const [isLoading, setIsLoading] = useState(true);
  const [todosData, setTodosData] = useState([]);
  
  const getTodosList = async() => {
    const data = await getTodos()
    setTodosData(data);
    setIsLoading(false);
  }

  useEffect(()=> {
    getTodosList();
  }, [])

  if (isLoading) {
    return (
      <CircularProgress />
    )
  }

  return (
    <TodosListContainer>
      {todosData.map((todoData) => (
        <TodoCard key={todoData.id} data={todoData} />
      ))}
    </TodosListContainer>
)
}
