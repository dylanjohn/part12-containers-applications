import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';
import TodoForm from './Form';

test('calls createTodo when form is submitted', async () => {
  const createTodo = vi.fn();
  const user = userEvent.setup();
  
  render(<TodoForm createTodo={createTodo} />);
  
  const input = screen.getByRole('textbox');
  const submitButton = screen.getByText('Submit');
  
  await user.type(input, 'Buy milk');
  await user.click(submitButton);
  
  expect(createTodo).toHaveBeenCalledWith({ text: 'Buy milk' });
});