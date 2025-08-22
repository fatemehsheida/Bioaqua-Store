import { useForm } from './FormContext';

interface FormInputProps {
  fieldPath: string;
  placeholder: string;
  className?: string;
  [key: string]: any;
}

export const FormInput = ({
  fieldPath,
  placeholder,
  className = '',
  ...props
}: FormInputProps) => {
  const { formData, setFormData, errors, validateField } = useForm();
  const path = fieldPath.split('.');
  
  const handleChange = (value: string) => {
    if (path.length >= 2) {
      setFormData(prev => ({
        ...prev,
        [path[0]]: {
          ...prev[path[0]],
          [path[1]]: value
        }
      }));
      validateField(fieldPath, value);
    }
  };

  const getValue = () => {
    if (path.length >= 2 && formData[path[0]] && formData[path[0]][path[1]] !== undefined) {
      return formData[path[0]][path[1]];
    }
    return '';
  };

  return (
    <input
      {...props}
      value={getValue()}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      className={`${className} ${
        errors[fieldPath] ? 'border-red-500' : 'border-slate-300'
      }`}
    />
  );
};