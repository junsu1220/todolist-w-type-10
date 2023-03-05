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
    if (isFirstRender) isFirstRender.current = false;
  }, [focus, setIsValid]);

  return (
    <>
      <label className='grid grid-cols-3'>
        {name}
        <input
          name={name}
          type={type}
          data-testid={`${name}-input`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={`col-span-2 ${isValid ? 'border-danger-red' : null}`}
        />
        <p
          className={`col-start-2 col-span-2 text-danger-red ${
            isValid ? 'invisible' : null
          } `}
        >
          {validation.invalidMessage}
        </p>
      </label>
    </>
  );
};

export default InputWithValidation;
