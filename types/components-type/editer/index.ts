export type EditNodeType = "text" | "image";

export type ImageNode = {
  name: string;
  url: string;
};

export type TextNode = {
  text: string;
};

export type EditNode = {
  id: number;
  type: EditNodeType;
  contents: ImageNode | TextNode;
};
