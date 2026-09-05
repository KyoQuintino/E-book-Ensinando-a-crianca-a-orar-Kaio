import { describe, expect, it } from "vitest";
import { buildCheckoutSessionParams, ebookProduct } from "./products";

describe("Stripe ebook checkout", () => {
  it("creates a one-time BRL checkout with the configured price", () => {
    const params = buildCheckoutSessionParams("https://example.test", {
      id: 42,
      email: "ana@example.com",
      name: "Ana",
    });

    expect(params.mode).toBe("payment");
    expect(params.line_items[0]?.price_data.currency).toBe("brl");
    expect(params.line_items[0]?.price_data.unit_amount).toBe(ebookProduct.unitAmount);
    expect(params.line_items[0]?.quantity).toBe(1);
    expect(params.allow_promotion_codes).toBe(true);
    expect(params.success_url).toBe("https://example.test/?checkout=success");
    expect(params.cancel_url).toBe("https://example.test/?checkout=cancelled");
    expect(params.client_reference_id).toBe("42");
    expect(params.metadata).toMatchObject({
      user_id: "42",
      customer_email: "ana@example.com",
      customer_name: "Ana",
    });
  });

  it("can create checkout metadata without requiring authentication", () => {
    const params = buildCheckoutSessionParams("https://example.test", null);

    expect(params.mode).toBe("payment");
    expect(params.client_reference_id).toBeUndefined();
    expect(params.metadata).toEqual({ customer_email: "", customer_name: "" });
  });
});
