import { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";

import "../styles/page_1/Checkout.css";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export default function App() {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [price, setPrice] = useState(50000);

  useEffect(() => {
    const fetchPaymentWidget = async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        price
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    };

    fetchPaymentWidget();
  }, [price]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget === null) {
      return;
    }

    paymentMethodsWidget.updateAmount(
      price,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    );
  }, [price]);

  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: "토스 티셔츠 외 2건",
        customerName: "김토스",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div id="payment-widget"></div>
      <div className="paymentMethod_Main">
        <div>
        <input
          type="checkbox"
          onChange={(event) => {
            setPrice(event.target.checked ? price - 5000 : price + 5000);
          }}
        />
        <label className="paymentDiscount">5,000원 할인 쿠폰 적용</label>
      </div>
      <button className="paymentMethod" onClick={handlePayment}>결제하기</button>
      </div>
    </div>
  );
}
