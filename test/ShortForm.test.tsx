import * as React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByText,
} from "@testing-library/react";
import ShortForm from "../src/components/shortform/ShortForm";

describe("ShortForm", () => {
  it("renders ShortForm component", () => {
    render(<ShortForm />);

    screen.debug();

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "placeholder",
      "Shorten a link here..."
    );
    expect(screen.getByRole("button")).toHaveTextContent("Shorten It!");
    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("Submitting form adds shortened url to list", async () => {
    render(<ShortForm />);

    screen.debug();

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    const list = screen.queryByRole("list");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Shorten It!");
    expect(input).toHaveAttribute("placeholder", "Shorten a link here...");
    expect(list).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "https://www.google.com" } });
    fireEvent.click(button);

    const urlList = await waitFor(() => screen.getByTestId("url-list"));
    expect(urlList).toBeInTheDocument();
    expect(urlList).toHaveTextContent("https://www.google.com");
    expect(urlList).toHaveTextContent("shrtco.de");

    expect(screen.getByRole("button", { name: "Copy" })).toBeInTheDocument();
  });
});
