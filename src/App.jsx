import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { TodoDetailPage } from "./pages/TodoDetailPage";
import { RootLayout } from "./components/todo/layout/RootLayout";
import TodoProvider from "./components/todo/provider/TodoProvider";

export const App = () => {
  return (
    <TodoProvider>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage/>} />
        <Route path="todos/:id" element={<TodoDetailPage/>}/>
      </Route>
    </Routes>
      </BrowserRouter>
    </TodoProvider>
    
    
    
  );
};

export default App;