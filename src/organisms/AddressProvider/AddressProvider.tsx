import React from 'react';
import { Box } from 'atoms/Box';
import { AddressProviderForm } from 'molecules/AddressProviderForm';
import Modal from 'react-modal';
import { Header } from 'molecules/Header';
import { Icon } from 'molecules/Icon';

const customStyles = {
  content: {
    width: '100%',
    maxWidth: '40rem',
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

type AddressProviderProps = {
  onClose(e: any): void;
  isVisible: boolean;
};

export const AddressProvider = ({ isVisible, onClose }: AddressProviderProps) => {
  const onSubmit = () => {
    // console.log(values.city);
  };

  return (
    <Modal isOpen={isVisible} style={customStyles} ariaHideApp={false}>
      <Box position="absolute" right="1.5rem" top="1.5rem">
        <Icon name="close" fill="darklavender.500" height={5} width={5} onClick={onClose} />
      </Box>
      <Box>
        <Header
          containerProps={{
            mt: '1rem',
            mb: '3rem',
          }}
          heading="addressform.heading"
          subheading="addressform.subheading"
        />
        <AddressProviderForm onSubmit={onSubmit} />
      </Box>
    </Modal>
  );
};
AddressProvider.defaultProps = {
  isVisible: false,
};
