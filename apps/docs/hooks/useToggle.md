# useToggle

A simple abstraction to play with a boolean, don't repeat yourself.

Related hooks:

- [useBoolean](/hooks/useBoolean)

## Usage

```tsx
import { useToggle } from "usehooks-solid";

export default function Component() {
  const { value, setValue, toggle } = useToggle(true);

  const customToggle = () => setValue((prev) => !prev);

  return (
    <div>
      <div>Value: {value.toString()}</div>
      <button onClick={customToggle}>Custom Toggle</button>
    </div>
  );
}
```
