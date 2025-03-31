// https://xiangxing98.github.io/Markdownlint_Rules.html
const config = {
  default: true,
  MD013: { line_length: 80 }, // we'll see
  MD025: { front_matter_title: "" }, // ignore front matter
};

// jsonc-equivalent of the inner object
const options = {
  config: config,
};

export default options;
