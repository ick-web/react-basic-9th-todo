import { RootLayout } from "./components/todo/layout/RootLayout";
import TodoProvider from "./components/todo/provider/TodoProvider";
import TodoContainer from "./components/todo/TodoContainer";




export const App = () => {
  return (
    <TodoProvider>
      <RootLayout>
      <TodoContainer />
    </RootLayout>
    </TodoProvider>
    
  );
};

export default App;