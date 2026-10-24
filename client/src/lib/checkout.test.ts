import { describe, expect, it } from "vitest";
import { HOTMART_CHECKOUT_URL } from "./checkout";

describe("checkout links", () => {
  it("uses only the official Hotmart checkout", () => {
    expect(HOTMART_CHECKOUT_URL).toBe("https://pay.hotmart.com/P107153571O");
  });
});
