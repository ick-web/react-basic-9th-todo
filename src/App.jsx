import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/HomePage";
import { TodoDetailPage } from "./pages/TodoDetailPage";
import { RootLayout } from "./components/todo/layout/RootLayout";
import QueryProvider from "./components/todo/provider/QueryProvider";

export const App = () => {
  return (
    <BrowserRouter>
    <QueryProvider>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage/>} />
        <Route path="todos/:id" element={<TodoDetailPage/>}/>
      </Route>
    </Routes>
    </QueryProvider>
      </BrowserRouter>
    
    
    
  );
};

export default App;