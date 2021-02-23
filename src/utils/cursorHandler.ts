import { get } from 'lodash';
import { InputEvent } from 'typings/syntheticEvents';

export const handleCursor = (e: InputEvent) => {
  const start = e.currentTarget.selectionStart;
  const moveCursor = start !== e.currentTarget.value.length;
  if (moveCursor) {
    window.setTimeout(() => {
      if (e.currentTarget && e.currentTarget.setSelectionRange) {
        e.currentTarget.setSelectionRange(Number(start), Number(start));
      } else if (get(e, 'currentTarget.createTextRange')) {
        const range = e.currentTarget.createTextRange();
        range.collapse(true);
        range.moveEnd('character', start);
        range.moveStart('character', start);
        range.select();
      }
    }, 0);
  }
};
