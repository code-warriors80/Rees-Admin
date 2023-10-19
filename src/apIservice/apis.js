import { useCallback } from "react";

const apiLink = process.env.REACT_APP_API_URL;

export async function getCustomerOrder(customerId) {
  try {
    const url = `${apiLink}/order/customer_orders/${customerId}`;

    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export const fetchProduct = async (id) => {
  try {
    const res = await fetch(`${apiLink}/api/product/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
