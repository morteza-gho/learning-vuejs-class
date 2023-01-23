import * as yup from 'yup';
import {VALIDATIONS} from "../../../constants";

export const userSchema = yup.object({
   username: yup.string().required(VALIDATIONS.REQUIRED),
   full_name: yup.string().required(VALIDATIONS.REQUIRED),
   email: yup.string().required(VALIDATIONS.REQUIRED).email('Email Not Valid'),
   phone: yup.string().required(VALIDATIONS.REQUIRED).min(11, 'At Least 11 characters').max(11, 'At Most 11 characters'),
   website: yup.string()
      .matches(
         /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
         'Enter Valid URL'
      )
      .required(VALIDATIONS.REQUIRED)
});