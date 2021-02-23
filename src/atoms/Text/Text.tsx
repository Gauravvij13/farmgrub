import React, { forwardRef, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { variant, system } from 'styled-system';
import { FormattedMessage } from 'react-intl';
import { Box, BoxProps } from 'atoms/Box';
import { LocaleString } from 'locales';

type Variant =
  | 'heading'
  | 'title'
  | 'field'
  | 'body'
  | 'small'
  | 'headingBold'
  | 'titleBold'
  | 'bigBodyBold'
  | 'bodyBold'
  | 'smallBold';

const whiteSpace = system({
  whiteSpace: {
    property: 'whiteSpace',
  },
  wordBreak: {
    property: 'wordBreak',
  },
});

export interface TextBaseProps extends BoxProps {
  variant?: Variant;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit';
  textDecoration?: string;
  lineHeight?: any;
  fontWeight?: any;
  cursor?: string;
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap' | 'initial' | 'inherit';
  wordBreak?: 'normal' | 'break-all' | 'keep-all' | 'break-word' | 'initial' | 'inherit';
}
export const TextBase = styled(Box)<TextBaseProps>`
  ${variant({
    variants: {
      heading: {
        fontSize: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontFamily: 'heading',
      },
      title: {
        fontSize: 'title',
        lineHeight: 'title',
        fontWeight: 'title',
        fontFamily: 'title',
      },
      field: {
        fontSize: 'field',
        lineHeight: 'field',
        fontWeight: 'field',
        fontFamily: 'field',
      },
      body: {
        fontSize: 'body',
        lineHeight: 'body',
        fontWeight: 'body',
        fontFamily: 'body',
      },
      small: {
        fontSize: 'small',
        lineHeight: 'small',
        fontWeight: 'small',
        fontFamily: 'small',
      },
      headingBold: {
        fontSize: 'headingBold',
        lineHeight: 'headingBold',
        fontWeight: 'headingBold',
        fontFamily: 'headingBold',
      },
      titleBold: {
        fontSize: 'titleBold',
        lineHeight: 'titleBold',
        fontWeight: 'titleBold',
        fontFamily: 'titleBold',
      },
      bigBodyBold: {
        fontSize: 'bigBodyBold',
        lineHeight: 'bigBodyBold',
        fontWeight: 'bigBodyBold',
        fontFamily: 'bigBodyBold',
      },
      bodyBold: {
        fontSize: 'bodyBold',
        lineHeight: 'bodyBold',
        fontWeight: 'bodyBold',
        fontFamily: 'bodyBold',
      },
      smallBold: {
        fontSize: 'smallBold',
        lineHeight: 'smallBold',
        fontWeight: 'smallBold',
        fontFamily: 'smallBold',
      },
    },
  })}
  ${system({
    lineHeight: {
      property: 'lineHeight',
      scale: 'lineHeights',
    },
    fontWeight: {
      property: 'fontWeight',
      scale: 'fontWeights',
    },
    fontSize: {
      property: 'fontSize',
      scale: 'fontSizes',
    },
  })}

  ${whiteSpace}
  ${({ textTransform }) =>
    textTransform &&
    css`
      text-transform: ${textTransform};
    `}

  ${({ textDecoration }) =>
    textDecoration &&
    css`
      text-decoration: ${textDecoration};
    `}
`;

export interface TextProps extends TextBaseProps {
  /**
   * Pass the id if the text needs to be translated.
   */
  id?: LocaleString;
  children?: React.ReactNode;
  values?: Record<string, string | number>;
  onClick?: any;
}

export const Text = forwardRef<ReactElement | HTMLElement, TextProps>(
  ({ id, children, values, ...props }, textRef) => {
    if (id) {
      return (
        <FormattedMessage id={id} values={values}>
          {text => (
            <TextBase {...props} ref={textRef}>
              {text}
            </TextBase>
          )}
        </FormattedMessage>
      );
    }
    return (
      <TextBase {...props} ref={textRef}>
        {children || null}
      </TextBase>
    );
  },
);
Text.defaultProps = {
  as: 'p',
  id: undefined,
};
