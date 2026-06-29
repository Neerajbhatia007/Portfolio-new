import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('opens the about window from the desktop', async () => {
  render(<App />);
  await userEvent.dblClick(screen.getByText('About Neeraj', { selector: '.icon-label' }));

  expect(screen.getAllByText('Neeraj Bhatia').length).toBeGreaterThan(0);
  expect(screen.getByText(/career highlights/i)).toBeInTheDocument();
});

test('taskbar app buttons switch windows without closing them', async () => {
  render(<App />);

  await userEvent.dblClick(screen.getByText('About Neeraj', { selector: '.icon-label' }));
  await userEvent.dblClick(screen.getByText('Experience', { selector: '.icon-label' }));
  await userEvent.click(screen.getByRole('button', { name: 'About Neeraj' }));

  expect(screen.getAllByText('Neeraj Bhatia').length).toBeGreaterThan(0);
  expect(screen.getByText(/my experience & projects/i)).toBeInTheDocument();
});

test('start menu launches portfolio apps', async () => {
  render(<App />);

  await userEvent.click(screen.getByRole('button', { name: /start/i }));
  await userEvent.click(screen.getByRole('button', { name: /contact card/i }));

  expect(screen.getByText(/contact information/i)).toBeInTheDocument();
  expect(screen.getByText(/phone:/i)).toBeInTheDocument();
});
