import { REGEX_ENUMS } from "../enums";

function testUrl(url: string) {
  const test = new RegExp(REGEX_ENUMS.EMAIL).test(url);

  return { urlTest: test };
}

export { testUrl };
