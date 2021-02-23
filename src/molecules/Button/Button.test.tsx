import React from 'react';
import { render, fireEvent } from 'utils/test-utils';
import { Button } from 'molecules/Button';

export function runTextTests(Component: React.ComponentType<any>) {
  describe('Button molecule tests', () => {
    test('render correctly when title is given', () => {
      const { queryByText } = render(<Component title="appname" />);
      expect(queryByText(/Farm Grub/i)).toBeInTheDocument();
    });
    test('shows loader when loading is true', () => {
      const { getByTestId } = render(<Component loading title="appname" />);
      expect(getByTestId('button-loader')).toBeInTheDocument();
    });
    test('should not run onClick when loading', () => {
      const fn = jest.fn();

      const { getByTestId } = render(
        <Component onClick={fn} data-testid="button" loading title="appname" />,
      );
      fireEvent.click(getByTestId('button'));
      expect(fn).not.toHaveBeenCalled();
    });
    test('should disable when disable is true', () => {
      const fn = jest.fn();

      const { getByTestId } = render(
        <Component disabled onClick={fn} data-testid="button" title="appname" />,
      );
      fireEvent.click(getByTestId('button'));
      expect(fn).not.toHaveBeenCalled();
    });
  });
}

describe('molecules', () => {
  describe('Button', () => {
    runTextTests(Button);
  });
});
