import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ 
  title = "Hotel Shivoy Palace & V2 Restaurant Basti | AC Rooms & Restaurant", 
  description = "Book comfortable AC and deluxe rooms at Hotel Shivoy Palace & V2 Restaurant in Basti. Restaurant, parking, Wi-Fi, easy location, call and WhatsApp booking available.",
  url = "https://shivoypalace.webrion.online",
  schema
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
