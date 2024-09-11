import { Plugin } from "unified";
import { Node } from "unist";
import { visit } from "unist-util-visit";

interface Element extends Node {
  children?: Element[];
  depth: number;
  data: {
    hProperties?: {
      className?: string;
    };
  };
}

const headingStyle: Plugin = () => {
  return (tree: Node) => {
    visit(tree, "heading", (node: Element) => {
      node.data ??= {};
      node.data.hProperties ??= {};
      if (node.depth === 1) {
        node.data.hProperties.className = "blog-title";
      } else if (node.depth === 2) {
        node.data.hProperties.className = "pt-16";
      }
    });
  };
};

export default headingStyle;
