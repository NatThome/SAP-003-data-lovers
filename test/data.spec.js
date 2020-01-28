require("../src/data.js");

describe("FilterTypes", () => {
  it("should be a function", () => {
    expect(typeof app.listTypes).toBe("function");
  });
});

describe("FilterPoke", () => {
  it("should be a function", () => {
    expect(typeof app.listText).toBe("function");
  });
});

it("returns `example`", () => {
  expect(app.listTypes([{"type": ["Grass", "Poison"]}], "Grass")).toEqual([{"type": ["Grass", "Poison"]}], "Grass");
});

it("returns `example`", () => {
  expect(app.listText([{"name": "Bulbasaur", "num": "001", "type": ["Grass", "Poison"]}], "Bulbasaur")).toEqual([{"name": "Bulbasaur", "num": "001", "type": ["Grass", "Poison"]}], "Bulbasaur");
});