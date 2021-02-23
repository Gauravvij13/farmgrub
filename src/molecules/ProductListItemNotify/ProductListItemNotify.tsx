import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { Box } from 'atoms/Box';
import { Flex } from 'atoms/Flex';
import { Grid } from 'atoms/Grid';
import { Text } from 'atoms/Text';
import { Image } from 'atoms/Image';
import NotifyMeCheckbox from 'molecules/NotifyMeCheckbox';
import {
  Asset as ImageType,
  useCreateStockNotificationMutation,
  useRemoveStockNotificationMutation,
} from 'generated/graphql-hooks';
import useAuth from 'contexts/Authentication';
import useGuest from 'organisms/GuestLoginModal/contexts/GuestContext';
import { hydrate, persist } from 'utils/persist';

export type ProductListItemNotifyProps = {
  id: string;
  images?: Array<ImageType> | null;
  notificationId?: string | null;
};

export const ProductListItemNotify: FC<ProductListItemNotifyProps> = ({
  images,
  id,
  notificationId,
}) => {
  const [addNotification, { loading: addLoading, data }] = useCreateStockNotificationMutation();
  const [removeNotification, { loading: removeLoading }] = useRemoveStockNotificationMutation();

  const {
    state: { isLoggedIn, user },
    actions: { changeUserData },
  } = useAuth();

  const stockNotifications = useMemo(() => user?.pendingStockNotifications || [], [user]);

  const {
    actions: { setLoginWarningState },
  } = useGuest();

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
                pendingStockNotifications: stockNotifications?.filter(p =>
                  notificationId
                    ? p?.id !== notificationId
                    : p?.id !== data?.createStockNotification?.id,
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
      data,
      notificationId,
      isLoggedIn,
      setLoginWarningState,
      changeUserData,
      stockNotifications,
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
    <>
      <Box
        height="100%"
        width="100%"
        borderRadius="0.4rem"
        style={{ cursor: 'pointer' }}
        className="product-card"
      >
        <NavLink to={`/shop/products/${id}`}>
          <Flex
            maxWidth={130}
            height="12rem"
            alignItems="center"
            justifyContent="center"
            backgroundColor="white"
            borderTopLeftRadius="0.4rem"
            borderTopRightRadius="0.4rem"
            px={2}
          >
            {images && (
              <Image
                src={images.length > 0 ? images[0].thumbnail : id}
                alt={images?.[0]?.altText}
                title={images?.[0]?.title}
                height="10rem"
                width="10rem"
                objectfit="scale-down"
                lazy
              />
            )}
          </Flex>
        </NavLink>
        <Grid height="4.5rem" gridTemplateRows="auto 1fr">
          <Text
            id="product.comingsoon"
            color="darklavender.500"
            textAlign="center"
            variant="body"
            as="span"
            fontWeight="semiBold"
            mt="0.2rem"
            mb="0.5rem"
          />
          <Grid ml="0.6rem" alignItems="center">
            <NotifyMeCheckbox
              onChange={onNotifyClicked}
              loading={removeLoading || addLoading}
              value={!!notificationId}
              controlled={!isLoggedIn}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
