import type { Options } from "remark-stringify";

import { emphasis } from "./emphasis";
import { heading } from "./heading";
import { link } from "./link";
import { list } from "./list";
import { listItem } from "./list-item";
import { paragraph } from "./paragraph";
import { strong } from "./strong";

export const handlers: Options["handlers"] = {
  strong: strong,
  emphasis: emphasis,
  link: link,
  heading: heading,
  list: list,
  listItem: listItem,
  paragraph: paragraph,
};
