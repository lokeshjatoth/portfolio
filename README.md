
## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

You need to have the following software installed on your computer:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Star the repository.

2. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/nixrajput/portfolio-nextjs.git
   ```

3. Navigate to the project directory:

   ```bash
   cd portfolio-nextjs
   ```

4. Install the project dependencies:

   If you're using npm:

   ```bash
   npm install
   ```

   If you're using pnpm:

   ```bash
   pnpm install
   ```

   If you're using Yarn:

   ```bash
   yarn install
   ```

## Usage

To start the development server and view the website locally, run the following command:

```bash
npm run dev
#or
pnpm run dev
# or
yarn dev
```

This will start the Next.js development server, and you can access the website in your web browser at `http://localhost:4000`.

## Customization

You can customize various aspects of the portfolio website to make it your own.

### Changing Content

1. Update the content in the `data` directory:

   - Edit the `projects.ts` file to add or modify project details.
   - Edit the `services.ts` file to add or modify services you provide.
   - Edit the `experiences.ts` file to add or modify experiences you have.
   - Edit the `skills.ts` file to add or modify skills you know.
   - Edit the `socialLinks.ts` file to add or modify social media links.

2. Replace or add images in the `public/images` directory to match your projects and profile picture.

## Deployment

To deploy the portfolio website to a hosting service of your choice, follow the deployment instructions for Next.js applications. Some popular hosting options include Vercel, Netlify, and GitHub Pages.

Remember to configure environment variables for sensitive information like email credentials if needed.


