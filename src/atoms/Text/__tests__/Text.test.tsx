import React from 'react';
import { render } from 'utils/test-utils';
import { Text } from 'atoms/Text';

export function runTextTests(Component: React.ComponentType<any>) {
  describe('Text Atom tests', () => {
    test('renders correct string when provided id', () => {
      const { queryByText } = render(<Component id="appname" />);
      expect(queryByText(/Farm Grub/i)).toBeInTheDocument();
    });
    test('renders children when no id given', () => {
      const { queryByText } = render(<Component>Test</Component>);
      expect(queryByText(/Test/i)).toBeInTheDocument();
    });
    test('renders correct tag when as property is given', () => {
      const { container } = render(<Component as="h1">Test</Component>);
      const heading = container.querySelector('h1') as HTMLHeadingElement;
      expect(heading.textContent).toBe('Test');
    });
  });
}

describe('atoms', () => {
  describe('Text', () => {
    runTextTests(Text);
  });
});
