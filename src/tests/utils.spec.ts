import { add } from "@/lib/utils";

describe("Utils Tests", () => {
  it("1+1 Should be 2", async () => {
    console.log("add(1, 1)");
    expect(add(1, 1)).toBe(2);
  });
});
