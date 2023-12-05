import React from 'react';
import './App.css';
import { useFormik } from 'formik';
import { Schema } from './schema';


function App() {
  const {formik} = useFormik({
    initialValues: {
      username:'',
      email: '',
      password:'',
      cpass:''
    },
    validationSchema: Schema
  });



  return (
    <div className="App">
      <h1>Login Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form__group field">
          <input
            type="text"
            className="form__field"
            placeholder="UserName"
            required=""
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="name" className="form__label">
            UserName
          </label>
        </div>

        <div className="form__group field">
          <input
            type="email"
            className="form__field"
            placeholder="Email"
            required=""
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>

        <div className="form__group field">
          <input
            type="password"
            className="form__field"
            placeholder="Password"
            required=""
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="password" className="form__label">
            Password
          </label>
        </div>

        <div className="form__group field">
          <input
            type="password"
            className="form__field"
            placeholder="Confirm Password"
            required=""
            name="cpass"
            value={formik.values.cpass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="confirmPassword" className="form__label">
            Confirm Password
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
