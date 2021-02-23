/* eslint-disable no-shadow */
/* eslint-disable react/state-in-constructor */
import React from 'react';

import { render } from '@testing-library/react';
import { composeComponents, Composed } from '../component';

const ShowMyColorAndChildren = ({ color, children, ...props }: any) => (
  <div {...props}>
    Color: {color || 'transparent'}
    <div>{children}</div>
  </div>
);

class ShowMyColorAndChildrenClass extends React.Component<any> {
  state = {};

  render() {
    const { color, children, ...props } = this.props;
    return (
      <div {...props}>
        Color: {color || 'transparent'}
        <div>{children}</div>
      </div>
    );
  }
}

describe('Utils', () => {
  describe('component', () => {
    describe('composeComponents', () => {
      test('should compose React elements', () => {
        const Composed = composeComponents(
          <ShowMyColorAndChildren color="blue" data-testid="blue" />,
          <ShowMyColorAndChildren color="red" data-testid="red" />,
          <ShowMyColorAndChildren color="green" data-testid="green" />,
        );

        const { getByTestId } = render(<Composed>Hello There</Composed>);

        expect(getByTestId('blue')).toHaveTextContent('blue');
        expect(getByTestId('red')).toHaveTextContent('red');
        expect(getByTestId('green')).toHaveTextContent('green');
        expect(getByTestId('green')).toHaveTextContent('Hello There');
      });

      test('should compose Function components', () => {
        const Composed = composeComponents(
          ShowMyColorAndChildren,
          ShowMyColorAndChildren,
          ShowMyColorAndChildren,
        );

        const { queryAllByText } = render(<Composed>Hello There</Composed>);

        expect(queryAllByText('Color: transparent')).toHaveLength(3);
        expect(queryAllByText('Hello There')).toHaveLength(1);
      });

      test('should compose Class components', () => {
        const Composed = composeComponents(
          ShowMyColorAndChildrenClass,
          ShowMyColorAndChildrenClass,
          ShowMyColorAndChildrenClass,
        );

        const { queryAllByText } = render(<Composed>Hello There</Composed>);

        expect(queryAllByText('Color: transparent')).toHaveLength(3);
        expect(queryAllByText('Hello There')).toHaveLength(1);
      });

      test('should compose React internal components', () => {
        const Composed = composeComponents(React.Fragment, React.Fragment, React.Fragment);

        const { container } = render(
          <Composed>
            <div>Hello There</div>
          </Composed>,
        );

        expect(container.firstChild).toMatchSnapshot();
      });

      test('should compose mix of React elements and components', () => {
        const Composed = composeComponents(
          <ShowMyColorAndChildren color="blue" data-testid="blue" />,
          ShowMyColorAndChildrenClass,
          ShowMyColorAndChildren,
          React.Fragment,
        );

        const { getByTestId, queryAllByText } = render(<Composed>Hello There</Composed>);

        expect(getByTestId('blue')).toHaveTextContent('blue');
        expect(queryAllByText('Color: transparent')).toHaveLength(2);
        expect(queryAllByText('Hello There')).toHaveLength(1);
      });

      test('should pass props from composed component to all elements/components in composition', () => {
        const Composed = composeComponents(
          <ShowMyColorAndChildren color="blue" />,
          <ShowMyColorAndChildren color="red" />,
          <ShowMyColorAndChildren color="yellow" />,
          ShowMyColorAndChildrenClass,
          ShowMyColorAndChildren,
          React.Fragment,
        );

        const { queryAllByText } = render(<Composed color="orange">Hello There</Composed>);

        expect(queryAllByText('Color: orange')).toHaveLength(5);
      });

      test('should not pass props from React elements and the composed component to children', () => {
        const Composed = composeComponents(<ShowMyColorAndChildren color="blue" />);

        const { getByTestId } = render(
          <Composed color="orange">
            <ShowMyColorAndChildren color="red" data-testid="child" />
          </Composed>,
        );

        expect(getByTestId('child')).toHaveTextContent('red');
      });
    });

    describe('Composed', () => {
      test('should render composed React elements and components', () => {
        const { getByTestId, queryAllByText } = render(
          <Composed
            components={[
              <ShowMyColorAndChildren color="blue" data-testid="blue" />,
              ShowMyColorAndChildrenClass,
              ShowMyColorAndChildren,
              React.Fragment,
            ]}
          >
            Hello There
          </Composed>,
        );

        expect(getByTestId('blue')).toHaveTextContent('blue');
        expect(queryAllByText('Color: transparent')).toHaveLength(2);
        expect(queryAllByText('Hello There')).toHaveLength(1);
      });

      test('should pass extra props from Composed to all elements/components in composition', () => {
        const { queryAllByText } = render(
          <Composed
            components={[
              <ShowMyColorAndChildren color="blue" />,
              <ShowMyColorAndChildren color="red" />,
              <ShowMyColorAndChildren color="yellow" />,
              ShowMyColorAndChildrenClass,
              ShowMyColorAndChildren,
              React.Fragment,
            ]}
            color="orange"
          >
            Hello There
          </Composed>,
        );

        expect(queryAllByText('Color: orange')).toHaveLength(5);
      });
    });
  });
});
