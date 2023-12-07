import React from 'react';
import './App.css';
import { useFormik } from 'formik';
import * as yup from 'yup';

const ValidFormSchema = yup.object().shape({
  username: 
  yup.string()
  .required('Please fill in a field'),
  email: yup.string().email('Please enter a valid email address').required('Please fill in an email field'),
  password: yup.string().min(8, 'Minimum 8 characters needed').required('Please fill in a Password field'),
  cpass: yup.string().oneOf([yup.ref('password')], 'Password is mismatch').required('Please fill in a Cpass field'),
});

const onSubmit=async(values,actions)=>{
  console.log("Thanks for Submitting",values);
  await new Promise((resolve)=>setTimeout(resolve,1000));
  actions.resetForm();
  alert("Thanks for Submitting")
}
function App() {
  const {values,handleBlur,handleChange,errors,handleSubmit,touched,isSubmitting} = useFormik({
    initialValues: {
      username:'',
      email: '',
      password:'',
      cpass:''
    },
    validationSchema: ValidFormSchema,
    onSubmit
  });

  console.log(errors);

  return (
    <div className="App">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form__group field">
          <input
            type="text"
            className={errors.username && touched.username ? "error" :"form__field"}
            placeholder="UserName"
            required=""
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           {errors.username && touched.username && <p className='errors'>{errors.username}</p>}
        </div>

        <div className="form__group field">
          <input
            type="email"
            className={errors.email && touched.email ? "error" :"form__field"}
            placeholder="Email"
            required=""
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           {errors.email && touched.email && <p className='errors'>{errors.email}</p>}
        </div>

        <div className="form__group field">
          <input
            type="password"
            className={errors.password && touched.password ? "error" :"form__field"}
            placeholder="Password"
            required=""
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
           {errors.password && touched.password && <p className='errors'>{errors.password}</p>}
        </div>

        <div className="form__group field">
          <input
            type="password"
            className={errors.cpass && touched.cpass ? "error" :"form__field"}
            placeholder="Confirm Password"
            required=""
            name="cpass"
            value={values.cpass}
            onChange={handleChange}
            onBlur={handleBlur}
            id='confirmPassword'
          />
          {errors.cpass && touched.cpass && <p className='errors'>{errors.cpass}</p>}
        </div>

        <button disabled={isSubmitting}>Submit</button>

       
      </form>
    </div>
  );
}

export default App;