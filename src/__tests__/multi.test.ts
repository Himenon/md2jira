import { describe, expect, test } from "vitest";

import * as Module from "../convert";

const wrap = (text: string) => `${text}\n`;

describe("combination test", () => {
  test("strong text + link", async () => {
    const input = "**[example page](https://example.com)**";
    const output = "*[example page|https://example.com]*";
    const text = await Module.convert(input);
    expect(text).toBe(wrap(output));
  });
});
