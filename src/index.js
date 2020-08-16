import React from "react";
import "react-calendar/dist/Calendar.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.min.css";
import "semantic-ui-css/semantic.min.css";
import App from "./app/layout/App.jsx";
import ScrollToTop from "./app/layout/ScrollToTop.jsx";
import "./app/layout/styles.css";
import { configureStore } from "./app/store/configureStore";
import { loadEvents } from "./features/events/eventActions.js";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

store.dispatch(loadEvents());

const rootElement = document.getElementById("root");

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App.jsx", function () {
    setTimeout(render);
  });
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
