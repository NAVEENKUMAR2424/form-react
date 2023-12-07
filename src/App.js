import './App.css';
import {useFormik} from formmik;


const App=()=> {
  const formik=useFormik
  return (
    <div className="App">
      

      <h1>Login Form</h1>
      <div class="textInputWrapper">
    <input placeholder="Username" type="text" class="textInput"/>
    </div>

    <div class="textInputWrapper">
    <input placeholder="Email" type="email" class="textInput"/>
    </div>

    <div class="textInputWrapper">
    <input placeholder="Password" type="Password" class="textInput"/>
    </div>

    <div class="textInputWrapper">
    <input placeholder="Confirm Password" type="password" class="textInput"/>
    </div>
    </div>
  );
  }

export default App;
