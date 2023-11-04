import { render } from "@testing-library/react"
import Review from "../assets/Review"
import '@testing-library/jest-dom'

test('Review component should render with content', () => {
    const { getByText } = render(<Review />);
  
    // Check for the presence of specific text  in the Review component
    expect(getByText("See our success stories")).toBeInTheDocument();
    expect(getByText("Abcdefgh Ijklmnop")).toBeInTheDocument();
    expect(getByText("Frontend Engineer")).toBeInTheDocument();
  
  });