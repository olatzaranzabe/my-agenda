import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { LoginPage } from './login-page';

describe('LoginPage', () => {
  it('should be empty by default', () => {
    const { getByLabelText } = setup();

    const input = getByLabelText('Email');

    expect(input).toHaveValue('');
  });

  // it('should have an initial value', () => {
  //   const { getByLabelText } = setup({ getItemReturnValue: 'foo' })

  //   const input = getByLabelText('Email')

  //   expect(input).toHaveValue('foo@mail.com')
  // })

  // it('should store value when writing', () => {
  //   const { getByLabelText, storageMock } = setup()
  //   const input = getByLabelText('Input')

  //   fireEvent.change(input, { target: { value: 'foo' } })

  //   expect(storageMock.setItem).toHaveBeenCalledWith('input', 'foo')
  // })
});

export function setup({
  getItemReturnValue
}: { getItemReturnValue?: string } = {}) {
  const storageMock: Storage = {
    getItem: jest.fn().mockReturnValue(getItemReturnValue),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
    key: jest.fn(),
    length: 10
  };
  const component = render(<LoginPage storage={storageMock} />);

  return {
    ...component,
    storageMock
  };
}
