type Option = {
  font_size: number;
  color: string;
};

type Detail = {
  text?: string;
  option?: Option;
  url?: string;
};

type PostContent = {
  type: string;
  detail: Detail;
};

export default PostContent;
