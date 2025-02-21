import { OrderRequest } from '@/types/type';
import { createContext, useContext } from 'react';


type FormContextType = {
  formData: OrderRequest;
  setFormData: React.Dispatch<React.SetStateAction<OrderRequest>>;
  errors: { [key: string]: string };
  validateField: (fieldPath: string, value: string) => void;
};

export const FormContext = createContext<FormContextType>({} as FormContextType);

export const useForm = () => useContext(FormContext);