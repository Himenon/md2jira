import type * as mdast from "mdast-util-to-markdown";

import type * as RemarkType from "../RemarkType";
import * as TypeGuard from "../typeGuard";

export const heading: mdast.Handle = (node: RemarkType.HeadingNode, parent, context, safeOptions): string => {
  const text = node.children
    .map(child => {
      if (TypeGuard.isTextNode(child)) {
        return child.value;
      }
      // ここのparentがあっているか不明
      return context.handle(child, parent, context, safeOptions);
    })
    .join("");
  return `h${node.depth}. ${text}`;
};
