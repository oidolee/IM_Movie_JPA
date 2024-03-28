import React, { useEffect, useRef, useState } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import style from "../../styles/page_1/Checkout.css";
import { jwtDecode } from "jwt-decode";
import ApiService from "../../ApiService";

const clientKey = "test_ck_P9BRQmyarYxDGWlq5RNZVJ07KzLN";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

const App = ({ handleCloseModal }) => {
  const paymentWidgetRef = useRef(null);
  const paymentMethodsWidgetRef = useRef(null);
  const [userEmail, setUserEmail] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [customer, setCustomer] = useState([]);
  const [selectedMovieInfo, setSelectedMovieInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const authToken = localStorage.getItem("auth_token");
      if (authToken) {
        const decodedToken = jwtDecode(authToken);
        const user = decodedToken.iss;
        setUserEmail(user);
        searchCustomer(user);
        console.log("사용자 이메일:", user);
      }

      const storedTotalPrice = JSON.parse(localStorage.getItem("totalPrice"));
      if (storedTotalPrice) {
        setTotalPrice(storedTotalPrice);
      }
    };

    fetchData();

    const storedMovieInfo = localStorage.getItem("selectedMovieInfo");
    if (storedMovieInfo) {
      try {
        const parsedMovieInfo = JSON.parse(storedMovieInfo);
        setSelectedMovieInfo(parsedMovieInfo);
        console.log(parsedMovieInfo);
      } catch (error) {
        console.error("영화 정보를 파싱하는 중 오류 발생:", error);
      }
    }
  }, []);

  useEffect(() => {
    const fetchPaymentWidget = async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
        "#payment-widget",
        totalPrice
      );

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    };

    fetchPaymentWidget();
  }, [totalPrice]);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget === null) {
      return;
    }

    paymentMethodsWidget.updateAmount(
      totalPrice,
      paymentMethodsWidget.UPDATE_REASON.COUPON
    );
  }, [totalPrice]);

  const searchCustomer = (user) => {
    ApiService.searchCutomer(user)
      .then((res) => {
        setCustomer(res.data.dto);
        console.log("searchCustomer 성공", res.data);
      })
      .catch((err) => {
        console.log("searchCustomer 오류 : ", err);
      });
  };

  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current;

    try {
      const orderId = nanoid();
      await paymentWidget?.requestPayment({
        orderId: orderId,
        orderName: selectedMovieInfo.movie_title,
        customerName: customer.name,
        customerEmail: userEmail,
        successUrl: `${
          window.location.origin
        }/success?orderId=${orderId}&orderName=${encodeURIComponent(
          selectedMovieInfo.movie_title
        )}&customerEmail=${encodeURIComponent(
          userEmail
        )}&totalPrice=${totalPrice}`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`Checkout ${style.Checkout}`}>
      <div className="Checkout_content">
        <div id="payment-widget" />
        <div className="paymentMethod_Main">
          <button className="paymentMethod" onClick={handlePayment}>
            결제하기
          </button>
          <button className="paymentMethod" onClick={handleCloseModal}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
