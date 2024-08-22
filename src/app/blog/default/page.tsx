import CodeSnippet from "@/components/molecules/code-snippet";
import { ReactNode } from "react";

export default function FirstSetupOfProject(): ReactNode {
  return (
    <div className="flex max-w-2xl flex-col gap-8">
      <h1>Set up of pre commit hooks with Husky and lint-staged</h1>
      <p>
        One of the first things I always set up on a javascript or typescript
        project is the ability to ensure that mny files are formatted properly
        and the project builds successfully before a commit can complete.
      </p>
      <p>Lets first initialize the app. I am going to use Next.js</p>
      <p>
        in your terminal you can start a new project in the current directory
        with:
      </p>
      <code>pnpx create-next-app@latest my-awesome-app</code>
      <p>
        I usually choose all the defaults (Especially, for this turorial, we
        want to have ex-lint set up for us)
      </p>
      <p>
        This produces the following <code>package.json</code> file:
      </p>
      <CodeSnippet
        language="json"
        fileName="package.json"
        code={packageJsonInit}
      />
      <p>
        Firstly I enable linting of my typescript files, I install husky,
        lint-staged, prettier, and the plugins needed to make prettier work on
        my tailwind classes and from inside eslint. I&apos;ll also set up the
        prepare script to install husky and set up the pre commit hook everytime
        pnpm install is run. This way anyone that clones the repostory and runs
        it will have the pre commit hook set up correctly if they ever plan on
        comitting anything.
      </p>
      <CodeSnippet
        language="json"
        fileName="package.json"
        code={packageJsonInstalled}
      />
      <p>
        I like to do as much config inside my <code>package.json</code> file as
        possible, that way everything is in one place. I&apos;ll configure
        prettier and lint-staged inside package.json and then configure my
        .eslintrc.json pre created by the next script.
      </p>
      <CodeSnippet
        language="json"
        fileName="package.json"
        code={packageJsonFinal}
      />
      <CodeSnippet
        language="json"
        fileName=".eslintrc.json"
        code={esLintRcFinal}
      />
      <p>
        This setup ensures that styling will be consistent and no commits can be
        made where variables are declared but never read, or if there are any
        styling discrepancies in the stages files for commit. I also don&apos;t
        allow console statements except for console.error or console.warn calls.
        As console.log is usually used for debugging and this just ensures those
        never get to a production environment.
      </p>
    </div>
  );
}

const packageJsonInit = `{
  "name": "my-awesome-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.6"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.6"
  }
}
`;

const packageJsonInstalled = `{
  "name": "my-awesome-app",
  "version": "0.1.0",
  "private": true,
   "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prepare": "husky install && husky set .husky/pre-commit \"pnpm lint-staged && pnpm build\""
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.6"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@typescript-eslint/eslint-plugin": "8.2.0",
    "@typescript-eslint/parser": "8.2.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.6",
    "husky": "8.0.3",
    "lint-staged": "14.0.1",
    "prettier": "3.0.3",
    "eslint-plugin-prettier": "5.0.0",
    "prettier-plugin-tailwindcss": "0.5.4"
  }
`;

const packageJsonFinal = `{
  "name": "my-awesome-app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prepare": "husky install && husky set .husky/pre-commit \"pnpm lint-staged && pnpm build\""
  },
  "dependencies": {
    "react": "^18",
    "react-dom": "^18",
    "next": "14.2.6"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@typescript-eslint/eslint-plugin": "8.2.0",
    "@typescript-eslint/parser": "8.2.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "eslint": "^8",
    "eslint-config-next": "14.2.6",
    "husky": "8.0.3",
    "lint-staged": "14.0.1",
    "prettier": "3.0.3",
    "eslint-plugin-prettier": "5.0.0",
    "prettier-plugin-tailwindcss": "0.5.4"
  },
  "prettier": {
    "tabWidth": 2,
    "plugins": [
      "prettier-plugin-tailwindcss",
      "typescript"
    ],
    "endOfLine": "auto"
  },
  "lint-staged": {
    "src/**/*.{ts,tsx,js,jsx,json}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
`;

const esLintRcFinal = `{
  "extends": "next/core-web-vitals",
  "plugins": ["prettier", "@typescript-eslint"],
  "rules": {
    "prettier/prettier": "error",
    "no-console": ["error", { "allow": ["warn", "error"] }],
    "@typescript-eslint/no-unused-vars": ["error"]
  }
}
`;
