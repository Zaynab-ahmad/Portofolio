interface FormFieldProp {
  label: string;
  placeholder: string;
  labelname: string;
  textarea?: boolean;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function FormField({
  label,
  placeholder,
  labelname,
  textarea = false,
  onChange,
}: FormFieldProp) {
  return (
    <div className="flex flex-col space-y-5">
      <label htmlFor={labelname} className="text-gray-800">
        {label}
      </label>
      {!textarea && (
        <input
          id={labelname}
          type="text"
          name={labelname}
          placeholder={placeholder}
          onChange={onChange}
          className="bg-gray-200 text-black p-3 rounded-lg w-full"
        />
      )}
      {textarea && (
        <textarea
          id={labelname}
          name={labelname}
          placeholder={placeholder}
          onChange={onChange}
          className="bg-gray-200 text-black p-3 rounded-lg w-full"
        />
      )}
    </div>
  );
}

export default FormField;
