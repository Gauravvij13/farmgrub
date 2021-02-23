import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'react-intl';

export type MetaProps = {
  title?: string | null;
  description?: string | null;
  keywords?: string | null;
};

export const Meta = (props: MetaProps) => {
  const intl = useIntl();
  const { title, description, keywords } = props;

  const formattedTitle = useMemo(() => {
    if (title?.length) {
      return intl.formatMessage({ id: 'meta.title.formatted' }, { page_title: title });
    }
    return intl.formatMessage({ id: 'meta.title.default' });
  }, [title, intl]);

  const formattedDescription = useMemo(() => {
    return description || intl.formatMessage({ id: 'meta.description' });
  }, [description, intl]);

  const formattedKeywords = useMemo(() => {
    return keywords || intl.formatMessage({ id: 'meta.keywords' });
  }, [keywords, intl]);

  return (
    <Helmet>
      <title>{formattedTitle}</title>
      <meta property="og:title" content={formattedTitle} />
      <meta name="description" content={formattedDescription} />
      <meta property="og:description" content={formattedDescription} />
      <meta name="keywords" content={formattedKeywords} />
    </Helmet>
  );
};
