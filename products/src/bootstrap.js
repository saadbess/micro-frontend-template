import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let i = 1; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// if this project is running in isolation/development
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  // Assuming our container doesn't have an element with id 'dev-products'
  if (el) {
    // Running in isolation
    mount(el);
  }
}

export { mount };
