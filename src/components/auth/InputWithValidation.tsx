import { useEffect, useRef, useState } from 'react';

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  validation: { exp: RegExp; invalidMessage: string };
};

const InputWithValidation = ({
  name,
  type,
  value,
  setValue,
  placeholder,
  validation,
}: Props) => {
  const [focus, setFocus] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) setIsValid(focus || validation.exp.test(value));
    if (isFirstRender.current) isFirstRender.current = false;
  }, [focus, value]);

  return (
    <>
      <label className='grid grid-cols-3 '>
        {name}
        <input
          name={name}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={`col-span-2 ${!isValid ? 'border-danger-red' : null}`}
          data-testid={`${name}-input `}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <span
          className={`col-start-2 col-span-2 text-danger-red ${
            isValid ? 'invisible' : null
          }`}
        >
          {validation.invalidMessage}
        </span>
      </label>
    </>
  );
};

export default InputWithValidation;
