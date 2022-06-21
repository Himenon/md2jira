import type * as mdast from "mdast-util-to-markdown";

import type * as RemarkType from "../RemarkType";
import * as Guard from "../typeGuard";

export const listItem: mdast.Handle = (node: RemarkType.ListItemNode, parent, context, safeOptions): string => {
  const text = node.children
    .map(child => {
      // ここのparentがあっているか不明
      const text = context.handle(child, parent, context, safeOptions);
      if (Guard.isList(child)) {
        return `${text}`;
      }
      return `${context.bulletCurrent || "*"} ${text}`;
    })
    .join("\n");

  return text;
};
