import React from 'react';
import Helmet from 'react-helmet';
import { DiscussionEmbed } from "disqus-react";
import PostTemplateDetails from '../components/PostTemplateDetails';


class PostTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata;
    const post = this.props.data.markdownRemark;
    const { title: postTitle, description: postDescription } = post.frontmatter;
    const description = postDescription !== null ? postDescription : subtitle;
    const disqusShortname = "arjun-kava";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };
    const shareUrl = "https://www.facebook.com/sharer/sharer.php?u=https://gogul09.github.io//software/first-neural-network-keras"
    return (
      <div>
        <Helmet>
          <title>{`${postTitle} - ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <PostTemplateDetails {...this.props} />
        
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

      </div>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          twitter
        }
        disqusShortname
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date
        description
      }
    }
  }
`;
