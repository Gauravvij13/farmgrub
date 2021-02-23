import React, { FC } from 'react';

import { Tab as TabBase, TabBaseProps } from 'atoms/Tab';
import { Text } from 'atoms/Text';

interface TabProps extends TabBaseProps {
  title: string;
  onClick?(e: any): void;
}

export const Tab: FC<TabProps> = ({ title, ...props }) => {
  return (
    <TabBase mt={0} {...props}>
      <Text
        variant="bodyBold"
        fontWeight="400"
        px={4}
        textTransform="capitalize"
        letterSpacing={0.4}
      >
        {title}
      </Text>
    </TabBase>
  );
};
Tab.defaultProps = {};
