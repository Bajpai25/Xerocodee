import { render } from "@testing-library/react"
import Page2 from "../assets/Page2"
import '@testing-library/jest-dom'

test('Page2 component should render with specific text and alt text', () => {
    const { getByText, getByAltText } = render(<Page2 />);
  
    // Check for the presence of specific text in the Page2 component
    expect(getByText("With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability.")).toBeInTheDocument();
    expect(getByText("Apps")).toBeInTheDocument();
    expect(getByText("App Configs")).toBeInTheDocument();
    expect(getByText("Pipelines")).toBeInTheDocument();
    expect(getByText("Infra Creation")).toBeInTheDocument();
    expect(getByText("Cost")).toBeInTheDocument();
    expect(getByText("Add-ons")).toBeInTheDocument();
    expect(getByText("Monitoring")).toBeInTheDocument();
    expect(getByText("Connections")).toBeInTheDocument();
    expect(getByText("Without XeroCodee")).toBeInTheDocument();
    expect(getByText("With XeroCodee")).toBeInTheDocument();
    expect(getByText("Self serve infrastructure platform for")).toBeInTheDocument();
    expect(getByText("scaling teams")).toBeInTheDocument();
    
    // Check for the presence of images with specific alt text
    expect(getByAltText("infrastructure")).toBeInTheDocument();
    expect(getByAltText("neural-network")).toBeInTheDocument();
    expect(getByAltText("cyber-security")).toBeInTheDocument();
    expect(getByAltText("development")).toBeInTheDocument();
    });