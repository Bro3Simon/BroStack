import { useForm } from 'react-hook-form';

import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormTextField } from 'src/components/FormTextField/FormTextField';

describe('test FormTextField', () => {
  function getUseFormResults() {
    return renderHook(() =>
      useForm({
        defaultValues: { myDefaultTextField: 'default text', myNumberField: 0, myTextField: '' },
        mode: 'onChange',
      }),
    ).result.current;
  }

  test('renders a textbox', () => {
    render(<FormTextField control={getUseFormResults().control} name="myTextField" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('renders a textbox with the correct name', () => {
    const textFieldName = 'myTextField';

    render(<FormTextField control={getUseFormResults().control} name={textFieldName} />);

    expect(screen.getByRole('textbox')).toHaveAttribute('name', textFieldName);
  });

  test('renders a textbox with the correct label', () => {
    const textFieldLabel = 'Search Criteria';

    render(
      <FormTextField
        control={getUseFormResults().control}
        label={textFieldLabel}
        name="myTextField"
      />,
    );

    expect(screen.getByLabelText(textFieldLabel)).toBeInTheDocument();
  });

  test('renders a textbox of type text by default', () => {
    render(<FormTextField control={getUseFormResults().control} name="myTextField" />);

    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  test('renders a spinbutton of type number', () => {
    const inputFieldType = 'number';

    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myNumberField"
        type={inputFieldType}
      />,
    );

    expect(screen.getByRole('spinbutton')).toHaveAttribute('type', inputFieldType);
  });

  test('renders a textbox that is not disabled', () => {
    render(<FormTextField control={getUseFormResults().control} name="myTextField" />);

    expect(screen.getByRole('textbox')).not.toBeDisabled();
  });

  test('renders a disabled textbox', () => {
    render(<FormTextField control={getUseFormResults().control} disabled name="myTextField" />);

    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  test('renders a textbox that is not required', () => {
    render(<FormTextField control={getUseFormResults().control} name="myTextField" />);

    expect(screen.getByRole('textbox')).not.toBeRequired();
  });

  test('renders a required textbox', () => {
    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myTextField"
        rules={{
          required: true,
        }}
      />,
    );

    expect(screen.getByRole('textbox')).toBeRequired();
  });

  test('renders the correct error message for a required field that is empty', async () => {
    const { control, trigger } = getUseFormResults();
    const errorMessage = 'Required';
    const textFieldName = 'myTextField';

    render(
      <FormTextField
        control={control}
        name={textFieldName}
        rules={{
          required: { message: errorMessage, value: true },
        }}
      />,
    );

    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    await act(() => trigger(textFieldName));
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('renders a textbox with the correct default value', async () => {
    render(<FormTextField control={getUseFormResults().control} name="myDefaultTextField" />);

    expect(screen.getByRole('textbox')).toHaveValue('default text');
  });

  test('the default value is reflected in RHF', async () => {
    const { control, getValues } = getUseFormResults();
    const textFieldName = 'myDefaultTextField';

    render(<FormTextField control={control} name={textFieldName} />);

    expect(getValues(textFieldName)).toEqual('default text');
  });

  test('changing the value of the textbox is reflected in RHF', async () => {
    const { control, getValues } = getUseFormResults();
    const user = userEvent.setup();
    const textFieldName = 'myTextField';
    const value = 'testing';

    render(<FormTextField control={control} name={textFieldName} />);

    await user.type(screen.getByRole('textbox'), value);
    expect(getValues(textFieldName)).toEqual(value);
  });

  test('changing the value of the spinbutton is reflected in RHF as a number', async () => {
    const { control, getValues } = getUseFormResults();
    const user = userEvent.setup();
    const numberFieldName = 'myNumberField';
    const value = 'tes3ti4ng';

    render(<FormTextField control={control} name={numberFieldName} type="number" />);

    await user.type(screen.getByRole('spinbutton'), value);
    expect(getValues(numberFieldName)).toEqual(34);
  });

  test('renders the correct error message when the value is greater than the max', async () => {
    const user = userEvent.setup();
    const errorMessage = 'Must be less than 11';

    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myNumberField"
        rules={{
          max: {
            message: errorMessage,
            value: 10,
          },
        }}
        type="number"
      />,
    );

    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    await user.type(screen.getByRole('spinbutton'), 'tes3ti4ng');
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('renders the correct error message when the value is less than the min', async () => {
    const user = userEvent.setup();
    const errorMessage = 'Must be greater than 0';

    render(
      <FormTextField
        control={getUseFormResults().control}
        name="myNumberField"
        rules={{
          min: {
            message: errorMessage,
            value: 1,
          },
        }}
        type="number"
      />,
    );

    const numberField = screen.getByRole('spinbutton');

    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
    await user.type(numberField, 'tes3ti4ng');
    await user.clear(numberField);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

  test('renders the correct error message when the validate rule is true', async () => {
    const user = userEvent.setup();
    const errorMessage = 'This number is not allowed.';

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
    await user.type(screen.getByRole('spinbutton'), 'tes3ti4ng');
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
