/* eslint-disable import/no-extraneous-dependencies */
import React, { ReactElement } from 'react';

import { act, fireEvent, render } from '@testing-library/react';
import prettier from 'prettier';
import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

type RenderWithRouterProps = MemoryRouterProps;

export function renderWithRouter(children: ReactElement, props?: RenderWithRouterProps) {
  return render(<MemoryRouter {...props}>{children}</MemoryRouter>);
}

export function getComputedCss(el: Element | HTMLElement | undefined | null) {
  if (!el) {
    return '';
  }

  return `\n${prettier.format(window.getComputedStyle(el).cssText, {
    parser: 'css',
  })}`;
}

/**
 * Creates a simple diff that lists the CSS properties
 * that differ between a and b
 *
 * @export
 * @param {(HTMLElement | string | undefined | null)} a
 * @param {(HTMLElement | string | undefined | null)} b
 * @returns
 */

/**
 * This does not trigger the CSS :hover pseudo-selector
 *
 */
export const hoverOnElement = (el: HTMLElement) => {
  fireEvent.mouseEnter(el);
  fireEvent.mouseOver(el);
};

export const unhoverFromElement = (el: HTMLElement) => {
  fireEvent.mouseOut(el);
  fireEvent.mouseLeave(el);

  act(() => {
    jest.runAllTimers();
  });
};
