import * as yup from 'yup';

  const ValidFormSchema = yup.object().shape({
  username: 
  yup.string()
  .required('Please fill in a field'),
  email: yup.string().email('Please enter a valid email address').required('Please fill in an email field'),
  password: yup.string().min(8, 'Minimum 8 characters needed').required('Please fill in a Password field'),
  cpass: yup.string().oneOf([yup.ref('password', null)], 'Password is mismatch').required('Please fill in a Cpass field'),
});

export default ValidFormSchema