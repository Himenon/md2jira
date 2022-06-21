import type * as mdast from "mdast-util-to-markdown";

import type * as RemarkType from "../RemarkType";

export const list: mdast.Handle = (node: RemarkType.LinkNode, parent, context, safeOptions): string => {
  const bulletCurrent = context.bulletCurrent;
  context.bulletCurrent = bulletCurrent ? bulletCurrent + "*" : "*";
  const items = node.children.map(child => {
    const text = context.handle(child, node, context, safeOptions);
    return text;
  });
  context.bulletCurrent = bulletCurrent;
  return items.join("\n");
};
