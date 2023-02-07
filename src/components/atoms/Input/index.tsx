import { InputHTMLAttributes } from "react";

import "./styles.scss";

const Input = ({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>): JSX.Element => {
  return (
    <div className="form__group field">
      <input {...rest} type="input" className="form__field" />
      <label htmlFor={rest.name} className="form__label">
        {rest.placeholder}
      </label>
    </div>
  );
};

export default Input;
