import React, { FC, MouseEvent } from 'react';

import { Button as ButtonBase, ButtonBaseProps } from 'atoms/Button';
import { Text } from 'atoms/Text';
import { Spinner } from 'atoms/Spinner';
import { Box } from 'atoms/Box';
import { LocaleString } from 'locales';

export interface ButtonProps extends ButtonBaseProps {
  title?: LocaleString;
  variant?: 'primary' | 'secondary' | 'default' | 'disabled' | 'transparent';
  loading?: boolean;
  onClick?(e?: MouseEvent<HTMLButtonElement>): void;
}

export const Button: FC<ButtonProps> = ({
  title,
  loading,
  disabled,
  variant,
  fontWeight,
  ...props
}) => {
  return (
    <ButtonBase
      disabled={loading || disabled || variant === 'disabled'}
      variant={variant}
      fontWeight={fontWeight}
      {...props}
    >
      {loading && (
        <Box
          data-testid="button-loader"
          height={4}
          width={4}
          m="auto"
          position="absolute"
          top="50%"
          left="50%"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <Spinner stroke="0.2rem" />
        </Box>
      )}
      <Text
        variant="body"
        fontWeight={fontWeight || 'bold'}
        id={title}
        m="auto"
        textTransform="uppercase"
        opacity={loading ? 0 : 1}
      />
    </ButtonBase>
  );
};
Button.defaultProps = {
  loading: false,
  disabled: false,
  variant: 'primary',
};
