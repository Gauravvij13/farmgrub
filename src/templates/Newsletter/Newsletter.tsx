import React, { FC, useCallback, useState } from 'react';
import jsonp from 'jsonp';

import { Box } from 'atoms/Box';
import { Text } from 'atoms/Text';
import { Icon } from 'molecules/Icon';
import { LocaleString } from 'locales';
import NewsletterForm from 'organisms/NewsletterForm';
import { Flex } from 'atoms/Flex';

export type NewsletterProps = {};

export const Newsletter: FC<NewsletterProps> = () => {
  const [error, setError] = useState<LocaleString>('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubscribe = useCallback(({ email }) => {
    setError('');
    setLoading(true);
    try {
      jsonp(
        `https://farmgrub.us10.list-manage.com/subscribe/post-json?u=d03dd1e5b8c5cf1d485b4b369&id=${process.env.REACT_APP_MAILCHIMP_AUDIENCE_ID}&EMAIL=${email}`,
        {
          param: 'c',
        },
        (_err, data) => {
          setLoading(false);
          if (data.result === 'error') {
            if (data.msg.match(/already subscribed/gi)) {
              setError('newsletter.error.duplicateemail');
            } else {
              setError('newsletter.error.invalidemail');
            }
          } else if (data.result === 'success') {
            setSuccess(true);
          }
        },
      );
    } catch (e) {}
  }, []);

  if (success) {
    return (
      <Box bg="white" py="1.5rem">
        <Text
          id="newsletter.success"
          color="mahogany.500"
          variant="title"
          fontWeight="bold"
          textAlign="center"
        />
      </Box>
    );
  }

  return (
    <Box bg="white" py="2rem">
      <Text
        id="newsletter.heading"
        fontWeight="bold"
        variant="body"
        color="mahogany.500"
        textAlign="center"
        as="div"
        mb="1.2rem"
      />
      <NewsletterForm onSubmit={onSubscribe} loading={loading} />
      {/** if you want to remove error after user starts typing then use formik's formref */}
      {error && (
        <Flex justifyContent="center" alignItems="center" mt="1rem" px="2rem">
          <Icon name="warningIcon" width="10px" height="10px" fill="darkorange.500" mr={2} />
          <Text as="div" variant="small" color="darkorange.500" id={error} />
        </Flex>
      )}
    </Box>
  );
};
