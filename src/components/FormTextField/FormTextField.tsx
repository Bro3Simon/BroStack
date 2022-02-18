import { ChangeEvent } from 'react';
import { FieldValues, Path, PathValue, useController, UseControllerProps } from 'react-hook-form';

import { TextField, TextFieldProps } from '@mui/material';

export function FormTextField<T extends FieldValues>({
  control,
  name,
  rules,
  type,
  ...rest
}: TextFieldProps & UseControllerProps<T>) {
  const {
    field: { onChange, ref, value, ...field },
    fieldState: { error },
  } = useController({
    control,
    name,
    rules,
  });

  function handleOnChange({ target }: ChangeEvent<HTMLInputElement>) {
    onChange(
      type === 'number'
        ? isNaN(target.valueAsNumber)
          ? (0 as PathValue<T, Path<T>>)
          : (target.valueAsNumber as PathValue<T, Path<T>>)
        : (target.value as PathValue<T, Path<T>>),
    );
  }

  return (
    <TextField
      error={!!error}
      fullWidth
      helperText={error?.message}
      inputRef={ref}
      onChange={handleOnChange}
      required={!!rules?.required}
      type={type}
      value={value.toString()}
      {...field}
      {...rest}
    />
  );
}
