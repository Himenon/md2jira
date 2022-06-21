import type { Node } from "unist";

export type { Node };

export interface HasChildrenNode extends Node {
  children: Node[];
}

export interface RootNode {
  type: "root";
  children: Node[];
}

export interface ParagraphNode {
  type: "paragraph";
  children: TextNode[];
}

export interface TextNode {
  type: "text";
  value: string;
}

export interface StrongNode {
  type: "strong";
  children: TextNode[];
}

export interface EmphasisNode {
  type: "emphasis";
  children: TextNode[];
}

export interface LinkNode {
  type: "link";
  url: string;
  children: TextNode[];
}

export interface HeadingNode {
  type: "heading";
  depth: number;
  children: TextNode[];
}

export interface HtmlNode {
  type: "html";
  value: string;
}

export interface ImageNode {
  type: "image";
  title: string | null;
  url: string;
  alt: string | null;
}

export interface ListItemNode {
  type: "listItem";
  // spread: boolean;
  // checked: boolean;
  children: (ParagraphNode | ListNode)[];
}

export interface ListNode {
  type: "list";
  // ordered: boolean;
  // spread: boolean;
  children: ListItemNode;
}
