import { useForm } from './FormContext';

export const FormInput = ({
  fieldPath,
  placeholder,
  className = '',
  ...props
}) => {
  const { formData, setFormData, errors, validateField } = useForm();
  const path = fieldPath.split('.');
  const handleChange = (value: string) => {
    
    console.log({path})
    setFormData(prev => ({
      ...prev,
      [path[0]]: {
        ...prev[path[0]],
        [path[1]]: value
      }
    }));
    validateField(fieldPath, value);
  };
  console.log({path})

  return (
    <input
      {...props}
      value={formData[path[0]][path[1]]}
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
      className={`${className} ${
        errors[fieldPath] ? 'border-red-500' : 'border-slate-300'
      }`}
    />
  );
};