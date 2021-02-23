import React, { useCallback } from 'react';
import { Text } from 'atoms/Text';
import { Grid } from 'atoms/Grid';
import { BadZipImage } from 'atoms/BadZipImage';
import { Button } from 'molecules/Button';
import { LocaleString } from 'locales';
import { PageWrapper } from 'templates/PageWrapper';
import Footer from 'molecules/Footer';

type ErrorPageProps = {
  message: LocaleString;
  description: LocaleString;
  onRetry: Function;
  title?: LocaleString;
};

export const ErrorPage = ({ message, description, onRetry, title }: ErrorPageProps) => {
  const handleRetry = useCallback(() => {
    onRetry();
  }, [onRetry]);

  return (
    <>
      <PageWrapper>
        <BadZipImage />
        <Grid>
          <Text
            color="applegreen.500"
            variant="title"
            fontWeight="bold"
            textAlign="center"
            id={message}
          >
            {message}
          </Text>
          <Text color="mahogany.500" variant="body" px="5.4rem" textAlign="center" id={description}>
            {description}
          </Text>

          {onRetry && <Button title={title || 'error.wrong'} mx="auto" onClick={handleRetry} />}
        </Grid>
      </PageWrapper>
      <Footer />
    </>
  );
};
