import * as yup from 'yup';



const validations = yup.object().shape({
   
    email: yup.string().email("lütfen kurallara uy").required("bu alan boş bırakılamaz"),
    password:yup.string().min(5,"5 karalterden az olamaz").max(10,"10 karakterden az olamaz").required("boş bırakılamaz"),
    passwordConfirm:yup.string().oneOf([yup.ref("password")],"parolalar uyuşmuyor")
   
   
  });

  export default validations;