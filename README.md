# Sonovate Code Test

The following exercise is designed to test your ability to:

- Implement a brief
- Work with React, Next.js and GraphQL
- Fetch and display data from a GraphQL API
- Handle loading, error and success states
- Implement dynamic SPA routing
- Deliver an A11Y compliant user interface
- Implement a user interface from designs
- Demonstrate scalable code architecture 
- Demonstrate some testing capabilities
- Implement layout responsively

## Getting Started

First, make sure you have [nvm](https://github.com/nvm-sh/nvm) or [nvm windows](https://github.com/coreybutler/nvm-windows) installed. Then clone the repo and run the following commands to start the Next.js server:

```
nvm use
npm install
npm run dev
```

Everything you need should be setup in this repo (Next.js, React, Apollo, Styled Components) and a Contentful GraphQL endpoint has been configured so you can start using the [Apollo useQuery](https://www.apollographql.com/docs/react/data/queries/) hook immediately. Feel free to use alternative technologies though!

## Instructions

1. On the home route `/`:
    - Query the [Contentful GraphQL API](https://graphql.contentful.com/content/v1/spaces/jgxvzzx7ps77/explore?access_token=AEf7QMYxPL9rGzq0iYw8vNWzbRvGEhLrtPXHYWYYE_I) for the first 10 blog entries (sorted by title)
    - Implement a loading state while data is being fetched (un-styled)
    - Handle potential Apollo errors appropriately (un-styled)
    - Implement a UI [matching the designs](https://www.figma.com/file/1y86C0LvrMVr5sR1G3952g/UI-Code-Test?node-id=0%3A1) to display the results
    - Ensure the UI is [A11Y compliant](https://www.a11yproject.com/checklist/)
2. Create a dynamic route `/[id]` to handle individual blog posts then:
    - Link each item on the home route to the blog post route
    - Use the [Next.js Link component](https://nextjs.org/docs/api-reference/next/link) to avoid page refreshing
3. On the blog post route `/[id]`:
    - Query the [Contentful GraphQL API](https://graphql.contentful.com/content/v1/spaces/jgxvzzx7ps77/explore?access_token=AEf7QMYxPL9rGzq0iYw8vNWzbRvGEhLrtPXHYWYYE_I) for the blog post by ID
    - Display the post title and body on the page (un-styled)

## Discussion Points

We will use your test as a basis for discussion points in the first interview. Be prepared to discuss how you would add server-side rendering for the home route, and static rendering for individual blog pages.
