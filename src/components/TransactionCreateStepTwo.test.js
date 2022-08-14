import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial render pay button is disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "test" }} receiver={{ id: "test" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
