import { file, readableStreamToArrayBuffer, readableStreamToArray } from "bun";
import { expect, it, beforeEach, afterEach } from "bun:test";
import { writeFileSync } from "node:fs";
import { gc } from "./gc";
new Uint8Array();

beforeEach(() => gc());
afterEach(() => gc());

it("exists globally", () => {
  expect(typeof ReadableStream).toBe("function");
  expect(typeof ReadableStreamBYOBReader).toBe("function");
  expect(typeof ReadableStreamBYOBRequest).toBe("function");
  expect(typeof ReadableStreamDefaultController).toBe("function");
  expect(typeof ReadableStreamDefaultReader).toBe("function");
  expect(typeof TransformStream).toBe("function");
  expect(typeof TransformStreamDefaultController).toBe("function");
  expect(typeof WritableStream).toBe("function");
  expect(typeof WritableStreamDefaultController).toBe("function");
  expect(typeof WritableStreamDefaultWriter).toBe("function");
  expect(typeof ByteLengthQueuingStrategy).toBe("function");
  expect(typeof CountQueuingStrategy).toBe("function");
});

it("ReadableStream (readMany)", async () => {
  const stream = new ReadableStream({
    pull(controller) {
      controller.enqueue("hello");
      controller.enqueue("world");
      controller.close();
    },
    cancel() {},
  });
  const reader = stream.getReader();
  const chunk = await reader.readMany();
  expect(chunk.value.join("")).toBe("helloworld");
  expect((await reader.read()).done).toBe(true);
});

it("ReadableStream (direct)", async () => {
  const stream = new ReadableStream({
    pull(controller) {
      controller.write("hello");
      controller.write("world");
      controller.close();
    },
    cancel() {},
    type: "direct",
  });
  const reader = stream.getReader();
  const chunk = await reader.read();
  expect(chunk.value.join("")).toBe(Buffer.from("helloworld").join(""));
  expect((await reader.read()).done).toBe(true);
  expect((await reader.read()).done).toBe(true);
});

it("ReadableStream (bytes)", async () => {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(Buffer.from("abdefgh"));
    },
    pull(controller) {},
    cancel() {},
    type: "bytes",
  });
  const chunks = [];
  const chunk = await stream.getReader().read();
  chunks.push(chunk.value);
  expect(chunks[0].join("")).toBe(Buffer.from("abdefgh").join(""));
});

it("ReadableStream (default)", async () => {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue(Buffer.from("abdefgh"));
      controller.close();
    },
    pull(controller) {},
    cancel() {},
  });
  const chunks = [];
  const chunk = await stream.getReader().read();
  chunks.push(chunk.value);
  expect(chunks[0].join("")).toBe(Buffer.from("abdefgh").join(""));
});

it("readableStreamToArray", async () => {
  const queue = [Buffer.from("abdefgh")];
  const stream = new ReadableStream({
    pull(controller) {
      const chunk = queue.shift();
      if (chunk) {
        controller.enqueue(chunk);
      } else {
        controller.close();
      }
    },
    cancel() {},
    type: "bytes",
  });

  const chunks = await readableStreamToArray(stream);

  expect(chunks[0].join("")).toBe(Buffer.from("abdefgh").join(""));
});

it("readableStreamToArrayBuffer (bytes)", async () => {
  const queue = [Buffer.from("abdefgh")];
  const stream = new ReadableStream({
    pull(controller) {
      const chunk = queue.shift();
      if (chunk) {
        controller.enqueue(chunk);
      } else {
        controller.close();
      }
    },
    cancel() {},
    type: "bytes",
  });
  const buffer = await readableStreamToArrayBuffer(stream);
  expect(new TextDecoder().decode(new Uint8Array(buffer))).toBe("abdefgh");
});

it("readableStreamToArrayBuffer (default)", async () => {
  const queue = [Buffer.from("abdefgh")];
  const stream = new ReadableStream({
    pull(controller) {
      const chunk = queue.shift();
      if (chunk) {
        controller.enqueue(chunk);
      } else {
        controller.close();
      }
    },
    cancel() {},
  });

  const buffer = await readableStreamToArrayBuffer(stream);
  expect(new TextDecoder().decode(new Uint8Array(buffer))).toBe("abdefgh");
});

it("ReadableStream for Blob", async () => {
  const blob = new Blob(["abdefgh", "ijklmnop"]);
  expect(await blob.text()).toBe("abdefghijklmnop");
  let stream;
  try {
    stream = blob.stream();
    stream = blob.stream();
  } catch (e) {
    console.error(e);
    console.error(e.stack);
  }
  const chunks = [];
  let reader;
  reader = stream.getReader();

  while (true) {
    var chunk;
    try {
      chunk = await reader.read();
    } catch (e) {
      console.error(e);
      console.error(e.stack);
    }

    if (chunk.done) break;
    chunks.push(new TextDecoder().decode(chunk.value));
  }
  expect(chunks.join("")).toBe(
    new TextDecoder().decode(Buffer.from("abdefghijklmnop"))
  );
});

it("ReadableStream for File", async () => {
  const blob = file(import.meta.dir + "/fetch.js.txt");
  let stream = blob.stream(24);
  const chunks = [];
  let reader = stream.getReader();
  stream = undefined;
  while (true) {
    const chunk = await reader.read();
    gc(true);
    if (chunk.done) break;
    chunks.push(chunk.value);
    expect(chunk.value.byteLength <= 24).toBe(true);
    gc(true);
  }
  reader = undefined;
  const output = new Uint8Array(await blob.arrayBuffer()).join("");
  const input = chunks.map((a) => a.join("")).join("");
  expect(output).toBe(input);
  gc(true);
});

it("ReadableStream for File errors", async () => {
  try {
    const blob = file(import.meta.dir + "/fetch.js.txt.notfound");
    blob.stream().getReader();
    throw new Error("should not reach here");
  } catch (e) {
    expect(e.code).toBe("ENOENT");
    expect(e.syscall).toBe("open");
  }
});

it("ReadableStream for empty blob closes immediately", async () => {
  const blob = new Blob([]);
  const stream = blob.stream();
  const chunks = [];
  const reader = stream.getReader();
  while (true) {
    const chunk = await reader.read();
    if (chunk.done) break;
    chunks.push(chunk.value);
  }

  expect(chunks.length).toBe(0);
});

it("ReadableStream for empty file closes immediately", async () => {
  writeFileSync("/tmp/bun-empty-file-123456", "");
  const blob = file("/tmp/bun-empty-file-123456");
  let stream;
  try {
    stream = blob.stream();
  } catch (e) {
    console.error(e.stack);
  }
  const chunks = [];
  const reader = stream.getReader();
  while (true) {
    const chunk = await reader.read();
    if (chunk.done) break;
    chunks.push(chunk.value);
  }

  expect(chunks.length).toBe(0);
});

it("new Response(stream).arrayBuffer() (bytes)", async () => {
  const queue = [Buffer.from("abdefgh")];
  const stream = new ReadableStream({
    pull(controller) {
      const chunk = queue.shift();
      if (chunk) {
        controller.enqueue(chunk);
      } else {
        controller.close();
      }
    },
    cancel() {},
    type: "bytes",
  });
  const buffer = await new Response(stream).arrayBuffer();
  expect(new TextDecoder().decode(new Uint8Array(buffer))).toBe("abdefgh");
});

it("new Response(stream).arrayBuffer() (default)", async () => {
  const queue = [Buffer.from("abdefgh")];
  const stream = new ReadableStream({
    pull(controller) {
      const chunk = queue.shift();
      if (chunk) {
        controller.enqueue(chunk);
      } else {
        controller.close();
      }
    },
    cancel() {},
  });
  const buffer = await new Response(stream).arrayBuffer();
  expect(new TextDecoder().decode(new Uint8Array(buffer))).toBe("abdefgh");
});

it("new Response(stream).text() (default)", async () => {
  const queue = [Buffer.from("abdefgh")];
  const stream = new ReadableStream({
    pull(controller) {
      const chunk = queue.shift();
      if (chunk) {
        controller.enqueue(chunk);
      } else {
        controller.close();
      }
    },
    cancel() {},
  });
  const text = await new Response(stream).text();
  expect(text).toBe("abdefgh");
});

it("new Response(stream).json() (default)", async () => {
  const queue = [Buffer.from(JSON.stringify({ hello: true }))];
  const stream = new ReadableStream({
    pull(controller) {
      const chunk = queue.shift();
      if (chunk) {
        controller.enqueue(chunk);
      } else {
        controller.close();
      }
    },
    cancel() {},
  });
  const json = await new Response(stream).json();
  expect(json.hello).toBe(true);
});

it("new Response(stream).blob() (default)", async () => {
  const queue = [Buffer.from(JSON.stringify({ hello: true }))];
  const stream = new ReadableStream({
    pull(controller) {
      const chunk = queue.shift();
      if (chunk) {
        controller.enqueue(chunk);
      } else {
        controller.close();
      }
    },
    cancel() {},
  });
  const response = new Response(stream);
  const blob = await response.blob();
  expect(await blob.text()).toBe('{"hello":true}');
});

it("Blob.stream() -> new Response(stream).text()", async () => {
  const blob = new Blob(["abdefgh"]);
  const stream = blob.stream();
  const text = await new Response(stream).text();
  expect(text).toBe("abdefgh");
});
