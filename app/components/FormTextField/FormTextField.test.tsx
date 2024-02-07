import { act, render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { useForm } from "react-hook-form";

import { FormTextField } from "app/components/FormTextField";
import {
  MAXIMUM_10_ERROR_MESSAGE,
  MAXIMUM_10_RULE,
  MINIMUM_0_ERROR_MESSAGE,
  MINIMUM_1_RULE,
} from "app/components/NumberGuesser/NumberGuesser";
import { REQUIRED_ERROR_MESSAGE, REQUIRED_RULE } from "app/utilities";

describe("test FormTextField", () => {
  function getUseFormResults() {
    return renderHook(() =>
      useForm({
        defaultValues: {
          myDefaultTextField: "default text",
          myNumberField: 0,
          myTextField: "",
        },
        mode: "onChange",
      }),
    ).result.current;
  }

  test("renders a textbox", () => {
    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myTextField"
      />,
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("renders a textbox with the correct name", () => {
    const textFieldName = "myTextField";

    render(
      <FormTextField
        control={getUseFormResults().control}
        name={textFieldName}
      />,
    );

    expect(screen.getByRole("textbox")).toHaveAttribute("name", textFieldName);
  });

  test("renders a textbox with the correct label", () => {
    const textFieldLabel = "Search Criteria";

    render(
      <FormTextField
        control={getUseFormResults().control}
        label={textFieldLabel}
        name="myTextField"
      />,
    );

    expect(screen.getByLabelText(textFieldLabel)).toBeInTheDocument();
  });

  test("renders a textbox of type text by default", () => {
    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myTextField"
      />,
    );

    expect(screen.getByRole("textbox")).toHaveAttribute("type", "text");
  });

  test("renders a spinbutton of type number", () => {
    const inputFieldType = "number";

    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myNumberField"
        type={inputFieldType}
      />,
    );

    expect(screen.getByRole("spinbutton")).toHaveAttribute(
      "type",
      inputFieldType,
    );
  });

  test("renders a textbox that is not disabled", () => {
    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myTextField"
      />,
    );

    expect(screen.getByRole("textbox")).not.toBeDisabled();
  });

  test("renders a disabled textbox", () => {
    render(
      <FormTextField
        control={getUseFormResults().control}
        isDisabled
        name="myTextField"
      />,
    );

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  test("renders a textbox that is not required", () => {
    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myTextField"
      />,
    );

    expect(screen.getByRole("textbox")).not.toBeRequired();
  });

  test("renders a required textbox", () => {
    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myTextField"
        rules={REQUIRED_RULE}
      />,
    );

    expect(screen.getByRole("textbox")).toBeRequired();
  });

  test("renders the correct error message for a required field that is empty", async () => {
    const { control, trigger } = getUseFormResults();
    const textFieldName = "myTextField";

    render(
      <FormTextField
        control={control}
        name={textFieldName}
        rules={REQUIRED_RULE}
      />,
    );

    expect(screen.queryByText(REQUIRED_ERROR_MESSAGE)).not.toBeInTheDocument();
    await act(() => trigger(textFieldName));
    expect(screen.getByText(REQUIRED_ERROR_MESSAGE)).toBeInTheDocument();
  });

  test("renders a textbox with the correct default value", async () => {
    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myDefaultTextField"
      />,
    );

    expect(screen.getByRole("textbox")).toHaveValue("default text");
  });

  test("the default value is reflected in RHF", async () => {
    const { control, getValues } = getUseFormResults();
    const textFieldName = "myDefaultTextField";

    render(<FormTextField control={control} name={textFieldName} />);

    expect(getValues(textFieldName)).toEqual("default text");
  });

  test("changing the value of the textbox is reflected in RHF", async () => {
    const { control, getValues } = getUseFormResults();
    const user = userEvent.setup();
    const textFieldName = "myTextField";
    const value = "testing";

    render(<FormTextField control={control} name={textFieldName} />);

    await user.type(screen.getByRole("textbox"), value);
    expect(getValues(textFieldName)).toEqual(value);
  });

  test("changing the value of the spinbutton is reflected in RHF as a number", async () => {
    const { control, getValues } = getUseFormResults();
    const user = userEvent.setup();
    const numberFieldName = "myNumberField";
    const value = "ts3ti4ng";

    render(
      <FormTextField control={control} name={numberFieldName} type="number" />,
    );

    await user.type(screen.getByRole("spinbutton"), value);
    expect(getValues(numberFieldName)).toEqual(34);
  });

  test("renders the correct error message when the value is greater than the max", async () => {
    const user = userEvent.setup();

    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myNumberField"
        rules={MAXIMUM_10_RULE}
        type="number"
      />,
    );

    expect(
      screen.queryByText(MAXIMUM_10_ERROR_MESSAGE),
    ).not.toBeInTheDocument();
    await user.type(screen.getByRole("spinbutton"), "ts3ti4ng");
    expect(screen.getByText(MAXIMUM_10_ERROR_MESSAGE)).toBeInTheDocument();
  });

  test("renders the correct error message when the value is less than the min", async () => {
    const user = userEvent.setup();

    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myNumberField"
        rules={MINIMUM_1_RULE}
        type="number"
      />,
    );

    const numberField = screen.getByRole("spinbutton");

    expect(screen.queryByText(MINIMUM_0_ERROR_MESSAGE)).not.toBeInTheDocument();
    await user.type(numberField, "ts3ti4ng");
    await user.clear(numberField);
    expect(screen.getByText(MINIMUM_0_ERROR_MESSAGE)).toBeInTheDocument();
  });

  test("renders the correct error message when the validate rule is true", async () => {
    const user = userEvent.setup();
    const errorMessage = "This number is not allowed.";

    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myNumberField"
        rules={{
          validate: (value) => value !== 34 || errorMessage,
        }}
        type="number"
      />,
    );

    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    await user.type(screen.getByRole("spinbutton"), "ts3ti4ng");
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
