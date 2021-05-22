const calcRem = (size) => `${size / 16}rem`;

const fontSize = {
  standard: "16px",
  xs: calcRem(10),
  s: calcRem(14),
  m: calcRem(16),
  l: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(26),
  xxxl: calcRem(30),
};

const boxShadow = {
  base: "0px 0px 3px rgba(0,0,0,0.3)",
};

const common = {
  fontSize,
  boxShadow,
};

export default common;
