import React, { forwardRef, ReactElement } from 'react';
import styled from 'styled-components';
import { Text, TextProps } from 'atoms/Text';

export interface LabelBaseProps extends TextProps {
  labelPosition?: Record<string, string>;
}
const LabelBase = styled(Text)<LabelBaseProps>`
  color: 'steelgrey.500';
  pointer-events: none;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;

export const Label = forwardRef<ReactElement | HTMLElement, LabelBaseProps>(
  ({ children, as, labelPosition, ...props }, ref) => {
    return (
      <LabelBase
        variant="field"
        color="steelgrey.500"
        forwardedAs={as}
        {...props}
        ref={ref}
        fontSize="field"
        position="absolute"
        textAlign="center"
        left={labelPosition?.left}
        right={labelPosition?.right}
        top={2}
      >
        {children || null}
      </LabelBase>
    );
  },
);
Label.defaultProps = {
  as: 'p',
  labelPosition: { left: '1.2rem', right: 'none' },
};
