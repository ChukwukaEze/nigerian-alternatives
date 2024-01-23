import React from "react";
import { REGEX_ENUMS } from "..";

function testUrl(url: string) {
  const test = new RegExp(REGEX_ENUMS.EMAIL).test(url);

  return { urlTest: test };
}





export { testUrl };
