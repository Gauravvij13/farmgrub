import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { Text } from 'atoms/Text';
import { Flex } from 'atoms/Flex';
import NotifyMeCheckbox, { NotifyMeCheckboxProps } from 'molecules/NotifyMeCheckbox';
import {
  useCreateStockNotificationMutation,
  useRemoveStockNotificationMutation,
} from 'generated/graphql-hooks';
import { useParams } from 'react-router';
import useAuth from 'contexts/Authentication';
import useGuest from 'organisms/GuestLoginModal/contexts/GuestContext';
import { hydrate, persist } from 'utils/persist';

export type ProductComingSoonProps = {
  productId?: string | null;
} & NotifyMeCheckboxProps;

export const ProductComingSoon: FC<ProductComingSoonProps> = ({ productId, ...props }) => {
  const [addNotification, { loading: addLoading, data }] = useCreateStockNotificationMutation();
  const [removeNotification, { loading: removeLoading }] = useRemoveStockNotificationMutation();

  const {
    state: { user, isLoggedIn },
    actions: { changeUserData },
  } = useAuth();

  const {
    actions: { setLoginWarningState },
  } = useGuest();

  const stockNotifications = useMemo(() => user?.pendingStockNotifications || [], [user]);

  const { id } = useParams<{ id: string }>();

  const notificationId = useMemo(
    () => stockNotifications?.find(p => p?.variant?.id === productId)?.id || undefined,
    [productId, stockNotifications],
  );

  const onNotifyClicked = useCallback(
    (checked, subId?: string) => {
      if (isLoggedIn) {
        if (checked) {
          addNotification({
            variables: {
              input: { productId: subId || id },
            },
            update(_cache, { data: res }) {
              if (res?.createStockNotification && stockNotifications) {
                changeUserData({
                  pendingStockNotifications: [...stockNotifications, res?.createStockNotification],
                });
              }
            },
          });
        } else {
          removeNotification({
            variables: {
              input: { id: data?.createStockNotification?.id || notificationId || '1' },
            },
            update() {
              changeUserData({
                pendingStockNotifications: stockNotifications?.filter(
                  p => p?.variant?.id !== productId,
                ),
              });
            },
          });
        }
      } else {
        setLoginWarningState(true);
        persist('subId', id, 'localStorage');
      }
    },
    [
      removeNotification,
      addNotification,
      id,
      productId,
      data,
      notificationId,
      changeUserData,
      stockNotifications,
      isLoggedIn,
      setLoginWarningState,
    ],
  );

  useEffect(() => {
    const prodId = hydrate('subId', 'localStorage');
    if (
      isLoggedIn &&
      prodId &&
      user?.pendingStockNotifications &&
      prodId === id &&
      !notificationId
    ) {
      onNotifyClicked(true, prodId as string);
      localStorage.removeItem('subId');
    }
  }, [isLoggedIn, notificationId, onNotifyClicked, id, user]);

  return (
    <Flex
      width="100%"
      height="6.4rem"
      alignItems="center"
      m="auto"
      bg="offwhite.500"
      justifyContent="center"
    >
      <Text
        id="product.comingsoon"
        color="darklavender.500"
        textAlign="center"
        variant="heading"
        fontWeight="medium"
      />
      <NotifyMeCheckbox
        {...props}
        value={!!notificationId}
        onChange={!addLoading && !removeLoading ? onNotifyClicked : undefined}
        loading={addLoading || removeLoading}
        controlled={!isLoggedIn}
      />
    </Flex>
  );
};
