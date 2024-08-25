import { Plugin } from "unified";
import { Node } from "unist";
import { visit } from "unist-util-visit";

interface Element extends Node {
  children?: Element[];
  data: {
    hProperties?: {
      target?: string;
    };
  };
}

const targetBlank: Plugin = () => {
  return (tree: Node) => {
    visit(tree, "link", (node: Element) => {
      node.data ??= {};
      node.data.hProperties ??= {};
      node.data.hProperties.target = "_blank";
    });
  };
};

export default targetBlank;
