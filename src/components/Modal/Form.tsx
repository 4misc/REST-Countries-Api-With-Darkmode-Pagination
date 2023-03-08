import { useState } from "react";

export function Form() {
  const [value, setValue] = useState("");

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          placeholder="Type here..."
          value={value}
          onChange={changeHandler}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
