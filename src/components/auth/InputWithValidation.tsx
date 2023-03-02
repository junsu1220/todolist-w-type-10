import { useState, useEffect, useRef, SetStateAction } from 'react';

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
}: Props): JSX.Element => {
  const [isValid, setIsValid] = useState(true);
  const [focus, setFocus] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) setIsValid(focus || validation.exp.test(value));
    if (isFirstRender.current) isFirstRender.current = false;
  }, [focus, value]);

  return (
    <>
      <label className='grid grid-cols-3 grid-row-2'>
        {name}
        <input
          type={type}
          data-testid={`${name}-input`}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={`col-span-2 ${!isValid ? 'border-danger-red' : null}`}
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
