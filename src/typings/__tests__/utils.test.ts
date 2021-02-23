/* eslint-disable max-classes-per-file */
import {
  ClassToType,
  DynamicField,
  Merge,
  Mutable,
  Omit,
  OverrideReturn,
  DeepPartial,
} from '../utils';

describe('Utility Types', () => {
  describe('Omit', () => {
    it('should omit specified properties from structured type', () => {
      type Original = {
        a: 1;
        b: 2;
        c: 3;
      };

      type OnlyA = Omit<Original, 'b' | 'c'>;

      const testObject: OnlyA = { a: 1 };
      expect(testObject).toEqual({ a: 1 });
    });

    it('should omit specified properties from interface', () => {
      interface Original {
        a: 1;
        b: 2;
        c: 3;
      }

      type OnlyA = Omit<Original, 'b' | 'c'>;

      const testObject: OnlyA = { a: 1 };
      expect(testObject).toEqual({ a: 1 });
    });

    it('should omit specified properties from class', () => {
      class Original {
        a = 1;

        b = 2;

        c = 3;
      }

      type OnlyA = Omit<Original, 'b' | 'c'>;

      const testObject: OnlyA = { a: 1 };
      expect(testObject).toEqual({ a: 1 });
    });
  });

  describe('Merge', () => {
    it('should override keys the first type with keys from the second', () => {
      interface Foo {
        a: number;
        b: string;
      }

      interface Bar {
        b: number;
      }

      const ab: Merge<Foo, Bar> = { a: 1, b: 2 };
      expect(ab).toEqual({ a: 1, b: 2 });
    });
  });

  describe('Mutable', () => {
    it('should make readonly properties mutable', () => {
      type ReadOnlyError = {
        readonly status: number;
        readonly message: string;
      };

      type MutableError = Mutable<ReadOnlyError>;

      const mutableError: MutableError = {
        status: 403,
        message: 'Insufficient Privileges',
      };

      const newMessage = 'You need more power';
      mutableError.message = newMessage;

      expect(mutableError.message).toBe(newMessage);
    });
  });

  describe('ClassToType', () => {
    class Greeter {
      readonly greeting: string;

      constructor(message: string) {
        this.greeting = message;
      }

      greet() {
        return `Hello, ${this.greeting}`;
      }
    }

    const newGreeter = () => ({ greeting: 'Hello', greet: () => 'Hello' } as ClassToType<Greeter>);

    it('should convert Class to standard type', () => {
      const greeter = newGreeter();

      const newGreeting = 'Howdy';

      greeter.greeting = newGreeting;

      expect(greeter.greeting).toBe(newGreeting);
    });
  });

  describe('OverrideReturn', () => {
    it('should allow overriding the return type of a function type', () => {
      type Validator = (value: any, allValues?: Record<string, any>) => string | void;

      type Condition = OverrideReturn<Validator, boolean>;

      const condition: Condition = () => true;

      condition('something');
    });
  });

  describe('DynamicField', () => {
    it('should create dynamic type with specified field and value type', () => {
      type User = { id: number; name: string };
      type UserWithAge = Merge<User, DynamicField<'age', number>>;

      function addField<Document, FieldName extends string, FieldValue>(
        document: Document,
        field: FieldName,
        value: FieldValue,
      ): Merge<Document, DynamicField<FieldName, FieldValue>> {
        // Computed fields are not inferrable by TypeScript yet
        return { ...document, [field]: value } as any;
      }

      const user: User = { id: 1, name: 'Sam' };

      const userWithAge: UserWithAge = addField(user, 'age', 1); // Produces Merge<User, { age: number }>
      expect(userWithAge).toEqual({ ...user, age: 1 });

      const userWithAddress = addField(user, 'address', '123 Sesame St'); // Produces Merge<User, { address: string }>
      expect(userWithAddress).toEqual({ ...user, address: '123 Sesame St' });
    });
  });

  describe(`DeepPartial`, () => {
    it('should apply Partial many levels deep', () => {
      interface ITest {
        array: string[];
        deepArray: { id: string; cats: { name: string }[] }[];
        object: { deep: { deeper: { deepest: true } } };
      }

      const firstLevel: DeepPartial<ITest> = {};

      expect(firstLevel).toEqual({});

      const secondLevel: DeepPartial<ITest> = {
        array: [],
        deepArray: [{ id: 'id' }],
        object: { deep: {} },
      };

      expect(secondLevel).toEqual({
        array: [],
        deepArray: [{ id: 'id' }],
        object: { deep: {} },
      });

      const thirdLevel: DeepPartial<ITest> = {
        deepArray: [{ cats: [{}] }],
        object: { deep: { deeper: {} } },
      };

      expect(thirdLevel).toEqual({
        deepArray: [{ cats: [{}] }],
        object: { deep: { deeper: {} } },
      });
    });
  });
});
