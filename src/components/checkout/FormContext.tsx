import { OrderRequest } from '@/types/type';
import { createContext, useContext } from 'react';

type FormContextType = {
  formData: OrderRequest;
  setFormData: React.Dispatch<React.SetStateAction<OrderRequest>>;
  errors: { [key: string]: string };
  validateField: (fieldPath: string, value: string) => void;
};

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const useForm = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormContext.Provider');
  }
  return context;
};