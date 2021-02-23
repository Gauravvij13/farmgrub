import React, { FC, MouseEvent } from 'react';
import Modal from 'react-modal';
import { Icon, IconProps } from 'molecules/Icon';
import { Box } from 'atoms/Box';

const customStyles = {
  content: {
    width: '90%',
    maxWidth: '40rem',
    top: '45%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
export type CenteredModalProps = {
  /**
   * Used to determine the state of visibility for the modal
   */
  isVisible: boolean;
  /**
   *
   * Function to be called on close icon click
   */
  onClose(e: MouseEvent<HTMLDivElement>): void;
  /**
   * Used to determine the color of close icon
   */
  closeButtonColor?: IconProps['fill'];
};

/**
  This component is a modal wrapper, which is responsible to render a centered modal with a cross button,.

  It will render the children component and while the parent is centered when isVisible is `true`.
  @example
  ```
  <CenteredModal isVisible={true} onClose={handleClose}>
    <Component /> 
  </CenteredModal>
  ```
   */
export const CenteredModal: FC<CenteredModalProps> = ({
  isVisible,
  onClose,
  closeButtonColor,
  children,
}) => {
  return (
    <Modal isOpen={isVisible} style={customStyles} ariaHideApp={false}>
      <Box
        position="absolute"
        right="1.5rem"
        top="1.5rem"
        onClick={onClose}
        cursor="pointer"
        height={6}
        width={6}
        zIndex={2000}
      >
        <Icon name="close" fill={closeButtonColor} height={6} width={6} />
      </Box>
      {children}
    </Modal>
  );
};
CenteredModal.defaultProps = {
  closeButtonColor: 'darklavender.500',
};
