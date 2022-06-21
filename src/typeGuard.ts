import type * as RemarkType from "./RemarkType.js";

export const isRootNode = (node: RemarkType.Node): node is RemarkType.RootNode => {
  return node.type === "root";
};

export const isParagraphNode = (node: RemarkType.Node): node is RemarkType.ParagraphNode => {
  return node.type === "paragraph";
};

export const isTextNode = (node: RemarkType.Node): node is RemarkType.TextNode => {
  return node.type === "text";
};

export const isHeadingNode = (node: RemarkType.Node): node is RemarkType.HeadingNode => {
  return node.type === "heading";
};

export const isImageNode = (node: RemarkType.Node): node is RemarkType.ImageNode => {
  return node.type === "image";
};

export const isHtmlNode = (node: RemarkType.Node): node is RemarkType.HtmlNode => {
  return node.type === "html";
};

export const isHasChildrenNode = (node: RemarkType.Node): node is RemarkType.HasChildrenNode => {
  return (node as any).children && Array.isArray((node as any).children);
};

export const isStrongNode = (node: RemarkType.Node): node is RemarkType.StrongNode => {
  return node.type === "strong";
};

export const isList = (node: RemarkType.Node): node is RemarkType.ListNode => {
  return node.type === "list";
};

export const isListItem = (node: RemarkType.Node): node is RemarkType.ListItemNode => {
  return node.type === "listItem";
};
