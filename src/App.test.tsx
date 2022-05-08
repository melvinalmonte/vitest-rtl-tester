import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";
import { Provider } from "react-redux";
import store from "./store";

describe("Simple working test", () => {
  it("the title is visible", () => {
    screen.logTestingPlaygroundURL();
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/Hello Vite \+ React!/i)).toBeInTheDocument();
  });

  it("should increment count on click", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await userEvent.click(screen.getByRole("button"));
    expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument();
  });
});
