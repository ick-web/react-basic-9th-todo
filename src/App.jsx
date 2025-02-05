import { RootLayout } from "./components/todo/layout/RootLayout";
import TodoContainer from "./components/todo/TodoContainer";
import { TodoDashboard } from "./components/todo/TodoDashboard";



export const App = () => {
  return (
    <RootLayout>
      
      <TodoContainer />
    </RootLayout>
  );
};

export default App;