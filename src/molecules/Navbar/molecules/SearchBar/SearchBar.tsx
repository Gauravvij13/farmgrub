import React, { MouseEvent, useCallback, useRef } from 'react';

import { Scale } from 'atoms/Scale';
import { Input } from 'atoms/Input';
import { Icon } from 'molecules/Icon';
import styled from 'styled-components';
import { Flex, FlexProps } from 'atoms/Flex';
import { useSearchQuery } from 'hooks/useSearchQuery';

const SearchInputWrapper = styled(Flex)<FlexProps>`
  input {
    &:focus {
      outline: none;
    }
  }
`;

type SearchBarProps = {
  onClose?: (e?: MouseEvent<HTMLElement | HTMLDivElement>) => void;
  onChange: (arg0: string) => void;
};

export const SearchBar = ({ onClose, onChange }: SearchBarProps) => {
  const query = useSearchQuery();
  const internalOnChangeHandler = useCallback(
    (q: string) => {
      if (typeof onChange === 'function') {
        onChange(encodeURIComponent(q));
      }
    },
    [onChange],
  );

  const ref = useRef<HTMLInputElement | null>(null);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      e.target.elements?.[0]?.blur();
      internalOnChangeHandler(e.target.elements?.[0]?.value);
    },
    [internalOnChangeHandler],
  );

  const clearInput = useCallback(() => {
    if (ref.current) {
      ref.current.focus();
      ref.current.value = '';
    }
  }, []);

  const onCloseHandler = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value === '' && typeof onClose === 'function') {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <form onSubmit={onSubmit}>
      <SearchInputWrapper
        flex="1"
        border="solid 0.1rem"
        borderColor="darklavender.500"
        height="5.3rem"
        alignItems="center"
      >
        <Input
          height="100%"
          width="100%"
          fontSize="2.2rem"
          pl="1.6rem"
          pr="3.2rem"
          pt={0}
          color="darklavender.500"
          autoFocus
          ref={ref}
          onBlur={onCloseHandler}
          defaultValue={query}
        />
        <Flex
          onClick={clearInput}
          position="absolute"
          right={0}
          height="100%"
          px="1rem"
          alignItems="center"
          cursor="pointer"
        >
          <Scale>
            <Icon name="close" height={5} width={5} fill="darklavender.500" />
          </Scale>
        </Flex>
      </SearchInputWrapper>
    </form>
  );
};
