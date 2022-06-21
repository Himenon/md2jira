import { describe, expect, test } from "vitest";

import * as Module from "../convert";

const wrap = (text: string) => `${text}\n`;

const input = `
**[v1.0.0](http://example.com)**

* feat: update new features (#1)
* chore: update linter (#12)
* style: eslint format (#123)
* docs: update readme (#1234)

`;

const output = `*[v1.0.0|http://example.com]*

* feat: update new features (#1)
* chore: update linter (#12)
* style: eslint format (#123)
* docs: update readme (#1234)`;

describe("integration test/markdown to jira", () => {
  test("long text", async () => {
    const text = await Module.convert(input);
    expect(text).toBe(wrap(output));
  });
});
