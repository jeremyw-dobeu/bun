const ε = 0.000001;
const ε2 = ε * ε;
const π = Math.PI;
const τ = 2 * π;
const τε = τ - ε;
const halfπ = π / 2;
const d3_radians = π / 180;
const d3_degrees = 180 / π;

export { d3_radians };
export function test() {
  console.assert(ε === 0.000001);
  return testDone(import.meta.url);
}

// # sourceMappingURL=http://localhost:8080/unicode-identifiers.js.map
