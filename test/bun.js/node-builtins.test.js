import { describe, it, expect } from "bun:test";

import { EventEmitter } from "events";

describe("EventEmitter", () => {
  it("should emit events", () => {
    const emitter = new EventEmitter();
    let called = false;
    const listener = () => {
      called = true;
    };
    emitter.on("test", listener);
    emitter.emit("test");
    expect(called).toBe(true);
  });
});
