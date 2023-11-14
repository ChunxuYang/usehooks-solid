import { Accessor, createSignal, Setter } from "solid-js";

interface UseBooleanOutput {
  value: Accessor<boolean>;
  setValue: Setter<boolean>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export function useBoolean(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = createSignal(!!defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue(!value());

  return {
    value,
    setValue,
    setTrue,
    setFalse,
    toggle,
  };
}
