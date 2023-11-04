import { render } from '@testing-library/react';
import Page3 from '../assets/Page3';
import '@testing-library/jest-dom'

test('Page3 component should render with specific text and alt text', () => {
  const { getByText, getByAltText } = render(<Page3 />);

  // Check for the presence of specific text in the Page3 component
  expect(getByText("Real-time risk monitoring")).toBeInTheDocument();
  expect(getByText("Collaborative workflows")).toBeInTheDocument();

  // Check for the presence of images with specific alt text
  expect(getByAltText("image")).toBeInTheDocument();
  expect(getByAltText("image1")).toBeInTheDocument();
  expect(getByAltText("image2")).toBeInTheDocument();
  expect(getByAltText("iconography")).toBeInTheDocument();
  expect(getByAltText("file")).toBeInTheDocument();

});
