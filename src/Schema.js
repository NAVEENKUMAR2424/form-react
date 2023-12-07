import * as yup from 'yup';

export const Schema=yup.object().shape({
    username: yup.string().required("Please fill a field"),
    email: yup.string().email("Please enter the valid email address").required("Please a email Field"),
    password: yup.string.min(8,"Minimum 8 character needed").required("Please fill a Password Field"),
    cpass: yup.string().oneOf([yup.ref("password",null),"Password is Mismatch"]).required("Please fill a Cpass field")
})