import { add } from "@/lib/utils";

describe("Utils Tests", () => {
  beforeAll(() => {
    console.log("Before All");
  });
  beforeEach(() => {
    console.log("Before Each");
  });
  it("1+1 Should be 2", async () => {
    console.log("add(2, 2)");
  });
  it("1+1 Should be 2", async () => {
    console.log("add(1, 1)");
    expect(add(1, 1)).toBe(2);
  });
  afterAll(() => {
    console.log("After All");
  });
});
