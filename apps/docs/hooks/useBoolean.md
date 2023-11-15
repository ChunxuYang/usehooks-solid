# useBoolean

A simple abstraction to play with a boolean, don't repeat yourself.

## Usage

```tsx
import { useBoolean } from "usehooks-solid";

export default function Component() {
  const { value, setValue, toggle, setTrue, setFalse } = useBoolean(true);

  const customToggle = () => setValue((prev) => !prev);

  return (
    <div>
      <div>Value: {value.toString()}</div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Set True</button>
      <button onClick={setFalse}>Set False</button>
      <button onClick={customToggle}>Custom Toggle</button>
    </div>
  );
}
```
