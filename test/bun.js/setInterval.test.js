import { it, expect } from "bun:test";

it("setInterval", async () => {
  let counter = 0;
  let start;
  const result = await new Promise((resolve, reject) => {
    start = performance.now();

    var id = setInterval(() => {
      counter++;
      if (counter === 10) {
        resolve(counter);
        clearInterval(id);
      }
    }, 1);
  });

  expect(result).toBe(10);
  expect(performance.now() - start >= 10).toBe(true);
});

it("clearInterval", async () => {
  let called = false;
  const id = setInterval(() => {
    called = true;
    expect(false).toBe(true);
  }, 1);
  clearInterval(id);
  await new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
    }, 10);
  });
  expect(called).toBe(false);
});
