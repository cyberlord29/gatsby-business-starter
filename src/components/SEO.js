import React from 'react';
import {StaticQuery, graphql} from 'gatsby'
import {Helmet} from 'react-helmet'

export const SEO = ({title, description, keywords, image, url, author}) => {
    return <StaticQuery 
        query = {SEOQuery}
        render = {data => {
            const metaDescription = description || data.site.siteMetadata.description;
            const metaTitle = title || data.site.siteMetadata.title;
            const metaAuthor = author || data.site.siteMetadata.author;
            const metaUrl = url || data.site.siteMetadata.url;
            const metaKeywords = keywords || ['business', 'portfolio', 'crypto', 'trading'];
            return (
                <Helmet 
                  title = {title}
                  meta = {[
                     {
                        name: `description`,
                        content: metaDescription,
                      },
                      {
                        property: `og:title`,
                        content: metaTitle,
                      },
                      {
                        property: `og:description`,
                        content: metaDescription,
                      },
                      {
                        property: `og:type`,
                        content: `website`,
                      },
                      {
                        name: `twitter:card`,
                        content: `summary`,
                      },
                      {
                        name: `twitter:creator`,
                        content: metaAuthor,
                      },
                      {
                        name: `twitter:title`,
                        content: metaTitle,
                      },
                      {
                        name: `twitter:description`,
                        content: metaDescription,
                      },
                  ].concat(
                      metaKeywords && metaKeywords.length > 0 ?
                      {
                          name: `keywords`,
                          content: metaKeywords.join(',')
                      }
                      :
                      []
                  )}
                />
            );
        }}
    />
}

const SEOQuery = graphql`
    query DefaultSEOQuery{
        site{
            siteMetadata{
                title
                description
            }
        }
    }`;
