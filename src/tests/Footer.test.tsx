import { render } from "@testing-library/react"
import Footer from "../assets/Footer"
import '@testing-library/jest-dom'

test('Footer component should render with expected text', () => {
    const { getByText } = render(<Footer />);

    expect(getByText("Terms & Conditions | Privacy Policy")).toBeInTheDocument();
    expect(getByText("Copyright © 2023 EXOCODE TECHNOLOGIES | All rights reserved")).toBeInTheDocument();
  });
