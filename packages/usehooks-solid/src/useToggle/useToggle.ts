import { Accessor, createSignal, Setter } from "solid-js";

interface UseBooleanOutput {
  value: Accessor<boolean>;
  setValue: Setter<boolean>;
  toggle: () => void;
}

export function useToggle(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = createSignal(!!defaultValue);

  const toggle = () => setValue(!value());

  return {
    value,
    setValue,
    toggle,
  };
}
