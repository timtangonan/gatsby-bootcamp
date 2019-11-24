# Gatsby Bootcamp

---

## A Gatsby tutorial by Andrew Mead

---

Created using Gatsby CLI

Encountered issues:

- Internal links detected by Link as external links. Caused by the "." that precedes slashes (/) when defining directory path.

- .env-cmd issue --- file ".env.development" isn't loaded so renamed it to ".env" as suggested by a user on Stackoverflow. Worked.

- Data set did not update after installing 'gatsby-transformer-remark'. Caused by me not saving gatsby-config.js before running 'gatsby develop/npm run develop'.

## Video markers

Nov 7

Nov 21 (3:18:00)

- installed gatsby-plugin sharp. allows use of sharp library.

- library gatsby-remark-images. allows use of images inside markdown posts when processed with remark.

- install gatsby-remark-relative images. allows sourcing of images relative to markdown file.

- added plugins to gatsby-config (review how it was added)

Nov 22 (3:38:00)

- additional blog styling.

- installed Contentful Gatsby plugin to pull Contentful content (content content content)

- set environment variables

- encountered problem that was resolved by adding an image to a content.

Nov 23 ()

- check moment.js for date formatting

- graphql queries can have arguments

Nov 24 ()

- by default, images don't show up; create options and add it to the rendering function

- Contentful provides a library to display blog content: @contentful/rich-text-react-renderer

- create 404 page

- use Helmet for page title - install gatsby-plugin-react-helmet and react-helmet (typing specific versions as indicated in the tutorial caused errors)

- added environment variables in Netlify