/* eslint-disable no-console */

/* instanbul ignore next */
export const debugTheme = ({ theme }: any) => console.log(theme);

/* instanbul ignore next */
export const debugVariant = (variantFn: Function) => (props: any) =>
  console.log(variantFn(props)(props));
