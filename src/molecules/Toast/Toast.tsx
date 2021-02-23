import React, { FC } from 'react';
import { Text } from 'atoms/Text';
import { LocaleString } from 'locales/en';

type ToastProps = {
  title: LocaleString | string;
  locale?: boolean;
};
export const Toast: FC<ToastProps> = ({ title, locale }) => {
  if (locale) {
    return <Text color="white" variant="small" fontWeight="bold" id={title as LocaleString} />;
  }
  return (
    <Text color="white" variant="small" fontWeight="bold">
      {title}
    </Text>
  );
};

Toast.defaultProps = {
  locale: false,
};
