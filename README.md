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

Nov 22

- additional blog styling.

- installed Contentful Gatsby plugin to pull Contentful content (content content content)

- encountered problem that was resolved by adding an image to a content.
