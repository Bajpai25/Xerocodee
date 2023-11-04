import { render } from "@testing-library/react"
import Nav from "../assets/Nav"
import '@testing-library/jest-dom'

test('Nav component should render with default state', () => {
  const { getByText } = render(<Nav />);
  
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Team')).toBeInTheDocument();
  expect(getByText('Contact')).toBeInTheDocument();
  expect(getByText('Careers')).toBeInTheDocument();

});

