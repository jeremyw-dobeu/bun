import { bench, group, run } from "mitata";
import { readFileSync } from "fs";
import { allocUnsafe } from "bun";

function polyfill(chunks) {
  let size = 0;
  for (const chunk of chunks) {
    size += chunk.byteLength;
  }
  const buffer = new ArrayBuffer(size);
  const view = new Uint8Array(buffer);
  let offset = 0;
  for (const chunk of chunks) {
    view.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return buffer;
}

function polyfillUninitialized(chunks) {
  let size = 0;
  for (const chunk of chunks) {
    size += chunk.byteLength;
  }
  const view = allocUnsafe(size);

  let offset = 0;
  for (const chunk of chunks) {
    view.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return view.buffer;
}

const chunkGroups = [
  [Uint8Array.from([123]), Uint8Array.from([456]), Uint8Array.from([789])],
  Array.from(readFileSync(import.meta.path)).map((a) => Uint8Array.from([a])),
  [readFileSync(import.meta.path)],
  Array.from({ length: 42 }, () => readFileSync(import.meta.path)),
  Array.from({ length: 2 }, () =>
    new TextEncoder().encode(readFileSync(import.meta.path, "utf8").repeat(100))
  ),
];

for (const chunks of chunkGroups) {
  group(
    `${chunks.reduce(
      (prev, curr, i, a) => prev + curr.byteLength,
      0
    )} bytes for ${chunks.length} chunks`,
    () => {
      bench("Bun.concatArrayBuffers", () => {
        Bun.concatArrayBuffers(chunks);
      });
      bench("Uint8Array.set", () => {
        polyfill(chunks);
      });

      bench("Uint8Array.set (uninitialized memory)", () => {
        polyfillUninitialized(chunks);
      });
    }
  );
}

await run();
