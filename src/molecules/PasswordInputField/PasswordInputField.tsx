import React, { FC, useState, useCallback } from 'react';
import { Box } from 'atoms/Box';
import { Icon } from 'molecules/Icon';
import { InputFieldProps, InputField } from '../InputField/InputField';

interface PasswordInputFieldBaseProps extends InputFieldProps {}

export interface PasswordInputFieldProps extends PasswordInputFieldBaseProps {}

export const PasswordInputField: FC<PasswordInputFieldProps> = ({ label, ...props }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSwitch = useCallback(() => {
    setPasswordVisible(!isPasswordVisible);
  }, [setPasswordVisible, isPasswordVisible]);

  return (
    <Box>
      <InputField label={label} type={!isPasswordVisible ? 'password' : 'text'} {...props} />
      <Box position="absolute" right="10px" top="20px" onClick={handleSwitch}>
        <Icon
          name={!isPasswordVisible ? 'show' : 'hide'}
          fill="darklavender.500"
          height={7}
          width={7}
        />
      </Box>
    </Box>
  );
};
