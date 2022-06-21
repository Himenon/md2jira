# @himenon/md2jira

Convert markdown text to jira format

## Usage

**Install**

```bash
npm  install @himenon/md2jira
yarn add     @himenon/md2jira
pnpm install @himenon/md2jira
```

**API**

```ts
import Md2jira from "@himenon/md2jira";

const markdownText =  `
**[v1.0.0](http://example.com)**

* feat: update new features (#1)
* chore: update linter (#12)
* style: eslint format (#123)
* docs: update readme (#1234)

`;


Md2jira.convert(markdownText);
// *[v1.0.0|http://example.com]*
// 
// * feat: update new features (#1)
// * chore: update linter (#12)
// * style: eslint format (#123)
// * docs: update readme (#1234)
```

## Release

- Automatic version updates are performed when merged into the `main` branch.

## LICENCE

[@Himenon/md2jira](https://github.com/Himenon/md2jira)・MIT
