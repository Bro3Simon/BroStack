import { ChangeEvent, HTMLInputTypeAttribute } from "react";

// eslint-disable-next-line import/named
import { TextField, TextFieldProps } from "@mui/material";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type FormTextFieldOwnProps = {
  isDisabled?: boolean;
  isRequired?: boolean;
  onChange?: () => void;
} & (
  | {
      /**
       * If true, you expect decimals smaller than .1
       * so that the leading 0 isn't removed e.g. (0.08 or .08).
       * @default false
       */
      isSmallDecimal?: boolean;
      type: "number";
    }
  | {
      isSmallDecimal?: never;
      type?:
        | Extract<
            HTMLInputTypeAttribute,
            "email" | "password" | "search" | "tel" | "text"
          >
        | "memo";
    }
);
type FormTextFieldProps<T extends FieldValues> = Omit<
  TextFieldProps,
  | "disabled"
  | "error"
  | "fullWidth"
  | "onBlur"
  | "onChange"
  | "required"
  | "type"
  | "value"
> &
  Omit<UseControllerProps<T>, "disabled"> &
  FormTextFieldOwnProps;

export function FormTextField<T extends FieldValues>({
  control,
  // https://mui.com/material-ui/react-text-field/#helper-text
  helperText = " ",
  isDisabled = false,
  isRequired = false,
  isSmallDecimal = false,
  name,
  onChange = undefined,
  rules,
  type = "text",
  ...rest
}: FormTextFieldProps<T>) {
  const {
    field: { onChange: reactHookFormOnChange, ref, value, ...field },
    fieldState: { error },
    formState: { isSubmitting },
  } = useController({
    control,
    name,
    rules,
  });

  function computeHtmlValue() {
    if (type !== "number" || (type === "number" && value !== 0)) return value;
    else if (type === "number" && value === 0) return "";
    else if (type === "number" && !isSmallDecimal) return value.toString();
  }

  function handleOnChange({ target }: ChangeEvent<HTMLInputElement>) {
    reactHookFormOnChange(
      type === "number"
        ? isNaN(target.valueAsNumber)
          ? 0
          : target.valueAsNumber
        : target.value,
    );

    if (onChange) onChange();
  }

  return (
    <TextField
      disabled={isDisabled || isSubmitting}
      error={!!error}
      fullWidth
      helperText={error?.message ?? helperText}
      inputRef={ref}
      multiline={type === "memo"}
      onChange={handleOnChange}
      required={isRequired || !!rules?.required}
      type={type}
      value={computeHtmlValue()}
      {...(type === "memo" && { rows: 5 })}
      {...field}
      {...rest}
    />
  );
}
