import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentPage from "./containers/ContentPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import LayoutComponent from "./components/LayoutComponent";
import ModulePage from "./containers/ModulePage";
import QuizPage from './containers/QuizPage'
import PrivateRoute from "./components/PrivateRoute";
import ContactUsPage from "./containers/ContactUsPage";
import Certificate from "./components/Certificate";
import MyLearningPage from "./containers/MyLearningPage";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<ContentPage />} />
          {/* <Route path="courses" element={<PrivateRoute  element={<ContentPage/>}/>} /> */}
          <Route path="module/:id" element={<PrivateRoute element={<ModulePage/>} />}/>
          <Route path="quiz/:id" element={<PrivateRoute element={<QuizPage/>} />}/>
          <Route path="contactus" element={<ContactUsPage/>}/>
          <Route path='certificate' element={<Certificate/>}/>
          <Route path='mylearning' element={<MyLearningPage/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
