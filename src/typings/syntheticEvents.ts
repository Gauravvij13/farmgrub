export type TextRange = {
  createTextRange: () => {
    collapse: (arg0: boolean) => void;
    moveEnd: (arg0: string, arg1: number | null) => void;
    moveStart: (arg0: string, arg1: number | null) => void;
    select: () => void;
  };
};

export type InputEvent = React.ChangeEvent<HTMLInputElement & TextRange>;
