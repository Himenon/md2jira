import type * as mdast from "mdast-util-to-markdown";

import type * as RemarkType from "../RemarkType";
import * as TypeGuard from "../typeGuard";

export const emphasis: mdast.Handle = (node: RemarkType.EmphasisNode, parent, context, safeOptions): string => {
  const text = node.children
    .map(child => {
      if (TypeGuard.isTextNode(child)) {
        return child.value;
      }
      return context.handle(child, node, context, safeOptions);
    })
    .join("");
  return `_${text}_`;
};
