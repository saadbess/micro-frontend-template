import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.datatype.number()} items in your cart</div>`;

  el.innerHTML = cartText;
};

// if this project is running in isolation/development
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  // Assuming our container doesn't have an element with id 'dev-cart'
  if (el) {
    // Running in isolation
    mount(el);
  }
}

export { mount };
