import { render } from "@testing-library/react"
import Page1 from "../assets/Page1"
import '@testing-library/jest-dom'

test('Page1 component should render with content', () => {
    const { getByText, getByAltText } = render(<Page1 />);
  
    // Check for the presence of specific text and images in the Page1 component
    expect(getByText("Build your audience and grow your brand")).toBeInTheDocument();
    expect(getByText("no more no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.")).toBeInTheDocument();
  
    expect(getByAltText("frame")).toBeInTheDocument();
  
    expect(getByText("Get Started Now")).toBeInTheDocument();
  
    expect(getByText("Features")).toBeInTheDocument();
    expect(getByText("Features")).toHaveClass('text-blue-700 bg-blue-500 bg-opacity-30 p-2 rounded-[39px] text-xl w-[200px] h-auto font-bold font-sans');
 
  });