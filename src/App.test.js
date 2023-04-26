import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SummaryForm from "./App";

describe("popover responds to hover", () => {
  test("popover initially is hidden (test with toBeInTheDocument)", () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(/No ice cream will be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();
  });

  test("popover initially is hidden (test with toBeVisible)", () => {
    render(<SummaryForm />);
    const nullPopover = screen.queryByText(/No ice cream will be delivered/i);
    expect(nullPopover).not.toBeVisible();
  });
});
