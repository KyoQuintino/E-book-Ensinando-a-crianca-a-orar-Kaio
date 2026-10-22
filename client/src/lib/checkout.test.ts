import { describe, expect, it } from "vitest";
import { HOTMART_CHECKOUT_URL, PAYMENT_PAGE_PATH } from "./checkout";

describe("checkout links", () => {
  it("uses the official Hotmart checkout and payment page path", () => {
    expect(HOTMART_CHECKOUT_URL).toBe("https://pay.hotmart.com/P107153571O");
    expect(PAYMENT_PAGE_PATH).toBe("/pagamento");
  });
});
