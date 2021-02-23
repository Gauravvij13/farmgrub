import React, { useMemo } from 'react';
import { Text, TextProps } from 'atoms/Text';

interface PhoneProps extends TextProps {
  phoneNo?: string | null;
}
export const Phone = ({ phoneNo, variant, ...props }: PhoneProps) => {
  const phone = useMemo(() => {
    if (phoneNo) {
      const str = phoneNo.replace(/([^\d])/g, '');
      return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)} ${str.slice(10)}`;
    }
    return '';
  }, [phoneNo]);
  return (
    <Text variant={variant} color="mahogany.500" fontWeight="bold" {...props}>
      {phone}
    </Text>
  );
};

Phone.defaultProps = {
  varaint: 'body',
};
