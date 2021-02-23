import React from 'react';

import { Simulate } from 'react-dom/test-utils';
import { act, render } from '@testing-library/react';

import { createContainer } from '..';

describe('createContainer', () => {
  function useCounter({ initialCount = 0 } = {}) {
    const [count, setCount] = React.useState(initialCount);
    const increment = () => setCount(count + 1);

    return { count, increment };
  }

  it('should create a React context from a hook', () => {
    const Container = createContainer(useCounter);

    const Increment = () => {
      const { increment } = React.useContext(Container.Context);

      return (
        <button type="button" onClick={increment} data-testid="increment">
          Increment
        </button>
      );
    };

    const Count = () => {
      const { count } = React.useContext(Container.Context);

      return <div data-testid="count">{count}</div>;
    };

    const App = () => (
      <Container.Provider>
        <Increment />
        <Count />
      </Container.Provider>
    );

    const { getByTestId } = render(<App />);

    expect(getByTestId('count')).toHaveTextContent('0');

    act(() => {
      Simulate.click(getByTestId('increment'));
    });

    expect(getByTestId('count')).toHaveTextContent('1');
  });

  it('should re-render when a specified memoized value updates', () => {
    const Container = createContainer(useCounter, value => [value.count]);

    const Increment = () => {
      const { increment } = React.useContext(Container.Context);

      return (
        <button type="button" onClick={increment} data-testid="increment">
          Increment
        </button>
      );
    };

    const Count = () => {
      const { count } = React.useContext(Container.Context);

      return <div data-testid="count">{count}</div>;
    };

    const App = () => (
      <Container.Provider>
        <Increment />
        <Count />
      </Container.Provider>
    );

    const { getByTestId, getByText } = render(<App />);

    expect(getByText('0')).toBeDefined();

    act(() => {
      Simulate.click(getByTestId('increment'));
    });

    expect(getByText('1')).toBeDefined();
  });

  it('should not re-render when given an empty array for memoized values', () => {
    const Container = createContainer(useCounter, () => []);

    const Increment = () => {
      const { increment } = React.useContext(Container.Context);

      return (
        <button type="button" onClick={increment} data-testid="increment">
          Increment
        </button>
      );
    };

    const Count = () => {
      const { count } = React.useContext(Container.Context);

      return <div data-testid="count">{count}</div>;
    };

    const App = () => (
      <Container.Provider>
        <Increment />
        <Count />
      </Container.Provider>
    );

    const { getByTestId } = render(<App />);

    expect(getByTestId('count')).toHaveTextContent('0');

    act(() => {
      Simulate.click(getByTestId('increment'));
    });

    expect(getByTestId('count')).toHaveTextContent('0');
  });

  it('should set context initial values when passed to provider', () => {
    const Container = createContainer(useCounter);

    const Increment = () => {
      const { increment } = React.useContext(Container.Context);

      return (
        <button type="button" onClick={increment} data-testid="increment">
          Increment
        </button>
      );
    };

    const Count = () => {
      const { count } = React.useContext(Container.Context);

      return <div data-testid="count">{count}</div>;
    };

    const App = () => (
      <Container.Provider initialCount={10}>
        <Increment />
        <Count />
      </Container.Provider>
    );

    const { getByTestId } = render(<App />);

    expect(getByTestId('count')).toHaveTextContent('10');

    act(() => {
      Simulate.click(getByTestId('increment'));
    });

    expect(getByTestId('count')).toHaveTextContent('11');
  });
});
