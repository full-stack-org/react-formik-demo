import "./App.css";
import ReactForm from "./Components/ReactForm";
import "bootstrap/dist/css/bootstrap.min.css";
import FormikYup from "./Components/FormikYup";
import FormikRefactor from "./Components/FormikRefactor";
import ReactDivComponent from "./Components/ReactDivComponent";
import LoginForm from "./Components/LoginForm";
import FormikContainer from "./ReusableComponents/FormikContainer";
function App() {
  return (
    <div className="App">
      {/*<ReactForm/>
   <FormikYup/>
    <FormikRefactor/>
      <ReactDivComponent/>
           <LoginForm/>
      <FormikContainer/>*/}
  <FormikContainer/>
    </div>
  );
}

export default App;
