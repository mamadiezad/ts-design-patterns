import { Singleton } from "../src/creational/singleton";

describe("Singleton", () => {
  it("should return the same instance", () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    expect(instance1).toBe(instance2);
  });

  it("should store and retrieve values", () => {
    const instance = Singleton.getInstance();
    instance.set("key1", "value1");
    expect(instance.get("key1")).toBe("value1");
  });
});
