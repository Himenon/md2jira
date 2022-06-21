import type * as mdast from "mdast-util-to-markdown";

import type * as RemarkType from "../RemarkType";
import * as TypeGuard from "../typeGuard";

export const paragraph: mdast.Handle = (node: RemarkType.ParagraphNode, parent, context, safeOptions): string => {
  return node.children
    .map(child => {
      if (TypeGuard.isTextNode(child)) {
        return child.value;
      }
      return context.handle(child, node, context, safeOptions);
    })
    .join("");
};
