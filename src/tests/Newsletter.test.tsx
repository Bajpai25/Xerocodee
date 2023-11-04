import { render ,fireEvent  } from "@testing-library/react"
import Newsletter from "../assets/Newsletter"
import '@testing-library/jest-dom'

test('Newsletter component should render with content', () => {
    const { getByText,  getByPlaceholderText } = render(<Newsletter />);
    
    // Check for the presence of specific text, images, and form elements
    expect(getByText("Subscribe to Our Newsletter & get the Coupon code.")).toBeInTheDocument();
    expect(getByText("All your information is completely confidential")).toBeInTheDocument();
    expect(getByPlaceholderText("Type your email")).toBeInTheDocument();
    expect(getByText("Submit")).toBeInTheDocument();
  });
  
  test('Submitting email should trigger an action', () => {
    const { getByPlaceholderText, getByText } = render(<Newsletter />);
    const emailInput = getByPlaceholderText("Type your email");
    const submitButton = getByText("Submit");
    
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  
    expect(emailInput).toHaveValue("test@example.com");
    
    fireEvent.click(submitButton);
  
  });
