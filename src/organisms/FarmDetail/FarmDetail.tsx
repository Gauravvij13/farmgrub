import React, { MouseEvent } from 'react';
import { Box } from 'atoms/Box';
import Modal from 'react-modal';
import { Text } from 'atoms/Text';
import { Icon } from 'molecules/Icon';
import { Loader } from 'molecules/Loader/Loader';
import { ErrorPage } from 'molecules/ErrorPage';
import { useSupplierQuery } from 'generated/graphql-hooks';
import { FarmDetailHeader } from './molecule/FarmDetailHeader';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(119, 84, 153, 0.6)',
  },
  content: {
    width: '100%',
    maxWidth: '80rem',
    top: '0',
    left: '0',
    right: '0',
    bottom: 'auto',
    margin: 'auto',
  },
};

interface FarmDetailProps {
  isVisible: boolean;
  farmId: string;
  onClose(e: MouseEvent<HTMLElement | HTMLDivElement>): void;
}

export const FarmDetail = ({ isVisible, onClose, farmId }: FarmDetailProps) => {
  const { data, error, loading, refetch } = useSupplierQuery({
    variables: { id: farmId },
  });

  const renderContent = () => {
    if (loading) {
      return <Loader />;
    }
    if (error) {
      return (
        <ErrorPage
          message="error.sorry"
          description="error.wrong"
          onRetry={refetch}
          title="try.again"
        />
      );
    }
    if (data) {
      return (
        <>
          <Box
            position="absolute"
            right="1.5rem"
            top="1.5rem"
            width={5}
            height={5}
            cursor="pointer"
          >
            <Icon
              name="close"
              fill="darklavender.500"
              height={5}
              width={5}
              onClick={onClose}
              zIndex={1}
            />
          </Box>
          <FarmDetailHeader supplier={data?.supplier} />
          <Box bg="offwhite.500" mx="-2rem" p="1rem" pb="20rem ">
            <Text color="mahogany.500" variant="body" lineHeight="2rem">
              {data?.supplier?.description}
            </Text>
          </Box>
        </>
      );
    }
    return null;
  };

  return (
    <Modal isOpen={isVisible} style={customStyles} ariaHideApp={false} onRequestClose={onClose}>
      {renderContent()}
    </Modal>
  );
};
