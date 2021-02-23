import React from 'react';
import { Toast } from 'molecules/Toast';
import { toast } from 'react-toastify';
import { FalseyValue } from 'typings/utils';

export const showError = (message: string | FalseyValue, locale?: boolean) => {
  if (message) {
    toast(<Toast title={message} locale={locale} />);
  }
};
export const showToast = (message: string | FalseyValue, locale?: boolean) => {
  if (message) {
    toast(<Toast title={message} locale={locale} />);
  }
};
