import "react";

const hello = 123 ? null ?? "world" : "ok";

export function test() {
  return testDone(import.meta.url);
}
