import type * as mdast from "mdast-util-to-markdown";

import type * as RemarkType from "../RemarkType";
import * as TypeGuard from "../typeGuard";

/**
 *
 * @param text
 * @example https://example.com|link
 */
const split = (inputText: string, type: "text" | "url"): string => {
  const list = inputText.split("|");
  if (list.length === 1) {
    return list[0];
  }
  const [url, text] = list;
  return type === "url" ? url : text;
};

export const link: mdast.Handle = (node: RemarkType.LinkNode, parent, context, safeOptions): string => {
  const text = node.children
    .map(child => {
      if (TypeGuard.isTextNode(child)) {
        return split(child.value, "text");
      }
      return context.handle(child, node, context, safeOptions);
    })
    .join("");
  return `[${text}|${split(node.url, "url")}]`;
};
