import React from 'react';
import { CenteredModalProps, CenteredModal } from 'templates/CenteredModal';
import { Text } from 'atoms/Text';
import { Image } from 'atoms/Image';
import { Flex } from 'atoms/Flex';

type CharitableContributionModalProps = {
  title?: string | null;
  altText?: string | null;
  imgTitle?: string | null;
  description?: string | null;
  image?: string | null;
} & Pick<CenteredModalProps, 'isVisible' | 'onClose'>;
export const CharitableContributionModal = ({
  isVisible,
  onClose,
  altText,
  title,
  imgTitle,
  image,
  description,
}: CharitableContributionModalProps) => {
  return (
    <CenteredModal isVisible={isVisible} onClose={onClose} closeButtonColor="black">
      <Flex flexDirection="column" alignItems="center">
        <Flex alignItems="center" minHeight="10rem">
          <Image
            alt={altText || 'Modal Image'}
            title={imgTitle}
            width="10rem"
            src={image}
            margin="auto"
          />
        </Flex>
        <Text variant="headingBold" color="mahogany.500" mt={2} mb={3}>
          {title}
        </Text>
        <Text variant="body" color="mahogany.500" textAlign="center">
          {description}
        </Text>
      </Flex>
    </CenteredModal>
  );
};
