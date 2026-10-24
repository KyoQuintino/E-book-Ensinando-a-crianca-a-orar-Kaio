import { useEffect } from "react";
import { HOTMART_CHECKOUT_URL } from "@/lib/checkout";

export default function Payment() {
  useEffect(() => {
    window.location.replace(HOTMART_CHECKOUT_URL);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#071127] px-6 text-center text-[#f7f0df]">
      <p className="text-sm text-[#aebbd0]">
        Redirecionando para o pagamento seguro da Hotmart…
      </p>
    </main>
  );
}
