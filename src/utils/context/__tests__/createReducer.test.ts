import { CaseReducer, createReducer, PayloadAction } from '..';

describe('createReducer', () => {
  interface Todo {
    text: string;
    completed: boolean;
  }

  type TodoState = Todo[];
  type TodosCaseReducer = CaseReducer<TodoState, PayloadAction>;

  const addTodo: TodosCaseReducer = (state, action) => {
    const { newTodo } = action.payload;

    return [...state, { ...newTodo, completed: false }];
  };

  const toggleTodo: TodosCaseReducer = (state, action) => {
    const { index } = action.payload;

    return state.map((todo, i) => {
      if (i !== index) {
        return todo;
      }
      return { ...todo, completed: !todo.completed };
    });
  };

  const todosReducer = createReducer({
    ADD_TODO: addTodo,
    TOGGLE_TODO: toggleTodo,
  });

  it('should return the current state when given an unknown action', () => {
    const todos = [{ text: 'test', completed: true }];

    expect(
      todosReducer(todos, {
        type: 'UNKNOWN',
        payload: 'STUFF',
      }),
    ).toEqual(todos);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todosReducer([], {
        type: 'ADD_TODO',
        payload: { newTodo: { text: 'Run the tests' } },
      }),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
      },
    ]);

    expect(
      todosReducer(
        [
          {
            text: 'Run the tests',
            completed: false,
          },
        ],
        {
          type: 'ADD_TODO',
          payload: { newTodo: { text: 'Use Context' } },
        },
      ),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
      },
      {
        text: 'Use Context',
        completed: false,
      },
    ]);

    expect(
      todosReducer(
        [
          {
            text: 'Run the tests',
            completed: false,
          },
          {
            text: 'Use Context',
            completed: false,
          },
        ],
        {
          type: 'ADD_TODO',
          payload: { newTodo: { text: 'Fix the tests' } },
        },
      ),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
      },
      {
        text: 'Use Context',
        completed: false,
      },
      {
        text: 'Fix the tests',
        completed: false,
      },
    ]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(
      todosReducer(
        [
          {
            text: 'Run the tests',
            completed: false,
          },
          {
            text: 'Use Context',
            completed: false,
          },
        ],
        {
          type: 'TOGGLE_TODO',
          payload: { index: 0 },
        },
      ),
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
      },
      {
        text: 'Use Context',
        completed: false,
      },
    ]);
  });
});
