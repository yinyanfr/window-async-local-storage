import seeds from "./MOCK_DATA.json";
import { getItem, setItem, removeItem } from "../src";

beforeAll(async () => {
  localStorage.clear();
  const setters = seeds.map((e) => {
    setItem(e.id, e.url);
  });
  await Promise.all(setters);
});

describe("getItem", () => {
  it("should get multiple items asynchronously", async () => {
    const getters = seeds.map((e) => {
      getItem(e.id);
    });
    const items = await Promise.all(getters);
    expect(items.length).toBe(seeds.length);
  });
});

describe("removeItem", () => {
  it("should remove multiple items asynchronously", async () => {
    const removers = seeds.map((e) => {
      removeItem(e.id);
    });
    await Promise.all(removers);
    expect(localStorage.length).toBe(0);
  });
});
