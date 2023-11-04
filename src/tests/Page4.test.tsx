import { render } from '@testing-library/react';
import Page4 from '../assets/Page4';
import '@testing-library/jest-dom'

test('Page4 component should render with specific text and alt text', () => {
  const { getByText, getByAltText } = render(<Page4 />);

  // Check for the presence of specific text in the Page4 component
  expect(getByText("The Xerocodee way")).toBeInTheDocument();
  expect(getByText("Self serve Infrastructure")).toBeInTheDocument();
  expect(getByText("Deploy applications, fast!")).toBeInTheDocument();
  expect(getByText("Visibility into costs and metrics")).toBeInTheDocument();
  expect(getByText("Customizable cost dashboards and reports")).toBeInTheDocument();
  expect(getByText("Preview infra costs")).toBeInTheDocument();
  expect(getByText("Observability from day one")).toBeInTheDocument();

  // Check for the presence of images with specific alt text
  expect(getByAltText("rocket")).toBeInTheDocument();
  expect(getByAltText("cloud")).toBeInTheDocument();
  expect(getByAltText("box")).toBeInTheDocument();
  expect(getByAltText("git")).toBeInTheDocument();
  expect(getByAltText("delivery")).toBeInTheDocument();
  expect(getByAltText("grafana")).toBeInTheDocument();
  expect(getByAltText("gitlab")).toBeInTheDocument();
  expect(getByAltText("redis")).toBeInTheDocument();
  expect(getByAltText("image 34")).toBeInTheDocument();
  expect(getByAltText("many_boxes")).toBeInTheDocument();
  expect(getByAltText("triangle")).toBeInTheDocument();
  expect(getByAltText("image 37")).toBeInTheDocument();
  expect(getByAltText("share")).toBeInTheDocument();
  expect(getByAltText("pie")).toBeInTheDocument();

});
