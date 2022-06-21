import { remark } from "remark";
import type { Options } from "remark-stringify";
import type { Plugin } from "unified";
import type { Node } from "unist";

import { handlers } from "./handlers";
import * as typeGuard from "./typeGuard";

const debug: Plugin = () => {
  const visit = (node: Node): Node => {
    if (typeGuard.isRootNode(node)) {
      node.children = node.children.map(visit);
    } else {
      // console.log(JSON.stringify(node));
    }
    return node;
  };
  return node => {
    visit(node);
  };
};

/**
 * remark-stringifyに対するオプション
 */
const options: Options = {
  /**
   * mdast-util-to-markdownに対するオプション
   * AST -> Markdownにstringifyを実行する際にどのようにstringifyするか決定できる
   *
   * デフォルトの変換形式は以下の通り
   * @see https://github.com/syntax-tree/mdast-util-to-markdown/tree/main/lib/handle
   */
  handlers: handlers,
};

export const convert = async (text: string): Promise<string> => {
  // data("settings", { ... }) は内部的にremark-stringifyにオプションを渡す
  // remark-stringifyは内部的にmdast-util-to-markdownにオプションを渡す
  const file = await remark().data("settings", options).use(debug).process(text);
  return String(file);
};
