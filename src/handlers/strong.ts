import type * as mdast from "mdast-util-to-markdown";

import type * as RemarkType from "../RemarkType";

export const strong: mdast.Handle = (node: RemarkType.StrongNode, parent, context, safeOptions): string => {
  const text = node.children
    .map(child => {
      return context.handle(child, node, context, safeOptions);
    })
    .join("");
  return `*${text}*`;
};
