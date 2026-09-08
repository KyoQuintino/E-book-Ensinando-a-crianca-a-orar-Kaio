export const ebookProduct = {
  name: "Ensinando a Criança a Orar — Guia Prático para Pais",
  description: "Ebook digital com orientações, orações e atividades para aproximar pais e filhos através da fé.",
  currency: "brl" as const,
  unitAmount: 2990,
};

export type CheckoutUser = {
  id?: number;
  email?: string | null;
  name?: string | null;
} | null;

export function buildCheckoutSessionParams(origin: string, user: CheckoutUser) {
  const successUrl = `${origin}/sucesso?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${origin}/?checkout=cancelled`;
  const metadata: Record<string, string> = {
    customer_email: user?.email ?? "",
    customer_name: user?.name ?? "",
  };

  if (user?.id) {
    metadata.user_id = user.id.toString();
  }

  return {
    mode: "payment" as const,
    line_items: [
      {
        price_data: {
          currency: ebookProduct.currency,
          unit_amount: ebookProduct.unitAmount,
          product_data: {
            name: ebookProduct.name,
            description: ebookProduct.description,
          },
        },
        quantity: 1,
      },
    ],
    allow_promotion_codes: true,
    success_url: successUrl,
    cancel_url: cancelUrl,
    ...(user?.email ? { customer_email: user.email } : {}),
    ...(user?.id ? { client_reference_id: user.id.toString() } : {}),
    metadata,
  };
}
