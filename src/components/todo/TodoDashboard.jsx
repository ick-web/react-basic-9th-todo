import { ClipboardCheck, LaptopMinimal, Video } from "lucide-react";
import { useContext } from "react";
import { Link, useSearchParams } from "react-router";
import styled from "styled-components";
import { TodoContext } from "../../context/TodoContext";

export const TodoDashboard = () => {
  const { getFilteredTodos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();
  const selectedFilter = searchParams.get('filter');

  // const all = todos.length;
  // const completed = todos.filter((todo) => todo.completed).length;
  // const pending = all - completed;

  const all = getFilteredTodos().length;
  const completed = getFilteredTodos("completed").length;
  const pending = all - completed;

  return (
    <TodoDashBoardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>

      <TodoDashboardCardList>
        <TodoDashboardCardWrapper $flex={2}>
          <TodoDashboardCard to='/' $selected ={!selectedFilter}>
            <div>
            <ClipboardCheck />
            </div>
            <TodoDashboardCardContent>
              {all} <br /> <span>All Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper $flex={1}>
          <TodoDashboardCard 
          to='?filter=completed'
           $bgColor="#582be6" 
           $selected ={selectedFilter === "completed"}>
            <div>
              <LaptopMinimal />
            </div>
            <TodoDashboardCardContent >
              {completed}
              <br /> <span> Completed Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
        <TodoDashboardCardWrapper $flex={1}>
          <TodoDashboardCard 
          to='?filter=pending'
           $bgColor="#242424" 
           $selected ={selectedFilter === "pending"}>
            <div>
              <Video />
            </div>
            <TodoDashboardCardContent>
              {pending} <br /> <span> Pending Tasks</span>
            </TodoDashboardCardContent>
          </TodoDashboardCard>
        </TodoDashboardCardWrapper>
      </TodoDashboardCardList>
    </TodoDashBoardSection>
  );
};

const TodoDashBoardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoDashboardHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoDashboardCardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoDashboardCardWrapper = styled.li`
  flex: ${({ $flex = 1 }) => $flex};
`;

const TodoDashboardCard = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 184px;
  background-color: ${({ $bgColor = "#e6582b" }) => $bgColor};
  justify-content: space-between;
  color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  cursor: pointer;
  text-decoration: ${({ $selected }) => ($selected ? "underline" : "none") }
`;

const TodoDashboardCardContent = styled.p`
  font-size: 1.25rem;
  font-weight: 600;

  span {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export default TodoDashboard;
