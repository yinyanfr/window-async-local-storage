import { getItem, setItem, removeItem, clear } from "../src";

beforeEach(() => {
  localStorage.clear();
});

describe("getItem", () => {
  it("should get an item", async () => {
    localStorage.setItem("my-item", "12345");
    const value = await getItem("my-item");
    expect(value).toBe("12345");
  });
});

describe("setItem", () => {
  it("should set an item", async () => {
    await setItem("my-item", "12345");
    const value = localStorage.getItem("my-item");
    expect(value).toBe("12345");
  });
});

describe("removeItem", () => {
  it("should remove an item", async () => {
    localStorage.setItem("my-item", "12345");
    await removeItem("my-item");
    const value = localStorage.getItem("my-item");
    expect(value).toBe(null);
  });
});

describe("clear", () => {
  it("should clear", async () => {
    localStorage.setItem("my-item", "12345");
    await clear();
    const value = localStorage.getItem("my-item");
    expect(value).toBe(null);
    expect(localStorage.length).toBe(0);
  });
});
