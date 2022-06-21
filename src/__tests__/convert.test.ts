import { describe, expect, test } from "vitest";

import * as Module from "../convert";

const wrap = (text: string) => `${text}\n`;

describe("unit test", () => {
  test("common text", async () => {
    const input = "common text";
    const output = "common text";
    const text = await Module.convert(input);
    expect(text).toBe(wrap(output));
  });

  test("strong text", async () => {
    const inputs = ["__strong text__", "**strong text**"];
    const output = "*strong text*";
    const tasks = inputs.map(async input => {
      const text = await Module.convert(input);
      expect(text).toBe(wrap(output));
    });
    await Promise.all(tasks);
  });

  test("italic", async () => {
    const inputs = ["_italic_", "*italic*"];
    const output = "_italic_";
    const tasks = inputs.map(async input => {
      const text = await Module.convert(input);
      expect(text).toBe(wrap(output));
    });
    await Promise.all(tasks);
  });

  test("link", async () => {
    const input = "[link](https://example.com)";
    const output = "[link|https://example.com]";
    const text = await Module.convert(input);
    expect(text).toBe(wrap(output));
  });

  test("link2", async () => {
    const input = "<https://example.com|link>";
    const output = "[link|https://example.com]";
    const text = await Module.convert(input);
    expect(text).toBe(wrap(output));
  });

  test("Header", async () => {
    const targets = [
      ["# Header 1", "h1. Header 1"],
      ["## Header 2", "h2. Header 2"],
      ["### Header 3", "h3. Header 3"],
      ["#### Header 4", "h4. Header 4"],
      ["##### Header 5", "h5. Header 5"],
      ["###### Header 6", "h6. Header 6"],
    ];
    const tasks = targets.map(async ([input, output]) => {
      return Module.convert(input).then(text => {
        expect(text).toBe(wrap(output));
      });
    });
    await Promise.all(tasks);
  });

  test("list", async () => {
    const input = `* abc
* def 
* ghi`;
    const output = `* abc
* def
* ghi`;
    const text = await Module.convert(input);
    expect(text).toBe(wrap(output));
  });
  test("nest list", async () => {
    const input = `* abc
    * def 
    * ghi`;
    const output = `* abc
** def
** ghi`;
    const text = await Module.convert(input);
    expect(text).toBe(wrap(output));
  });
});
