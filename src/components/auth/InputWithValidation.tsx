import { SetStateAction, useEffect, useRef, useState } from 'react';

type Props = {
  name: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
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
  const [isValid, setIsValid] = useState(true);
  const [focus, setFocus] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) setIsValid(focus || validation.exp.test(value));
    if (isFirstRender.current) isFirstRender.current = false;
  }, [value, focus]);

  return (
    <>
      <label className='grid grid-cols-3 grid-row-2'>
        {name}
        <input
          name={name}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          data-testid={`${name}-input`}
          className={`col-span-2 ${!isValid ? 'bolder-danger-red' : null}`}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <span
          className={`col-start-2 col-span-2 text-danger-red ${
            !isValid ? null : 'invisible'
          }`}
        >
          {validation.invalidMessage}
        </span>
      </label>
    </>
  );
};

export default InputWithValidation;
