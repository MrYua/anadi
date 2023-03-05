import colors from "colors";

export default {
  info(text: string) {
    console.log(text);
  },
  success(text: string) {
    console.log(colors.green(text));
  },
  warning(text: string) {
    console.log(colors.yellow(text));
  },
  error(text: string) {
    console.log(colors.red(text));
  },
  title(text: string) {
    console.log(colors.cyan(text));
  },
};
