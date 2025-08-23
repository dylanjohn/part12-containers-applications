import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';
import Todo from './Todo';

test('renders todo text and buttons correctly', async () => {
  const todo = { _id: '1', text: 'Buy milk', done: false };
  const deleteTodo = vi.fn();
  const completeTodo = vi.fn();
  
  render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />);
  
  expect(screen.getByText('Buy milk')).toBeInTheDocument();
  expect(screen.getByText('This todo is not done')).toBeInTheDocument();
  expect(screen.getByText('Delete')).toBeInTheDocument();
  expect(screen.getByText('Set as done')).toBeInTheDocument();
});

test('calls deleteTodo when delete button is clicked', async () => {
  const todo = { _id: '1', text: 'Buy milk', done: false };
  const deleteTodo = vi.fn();
  const completeTodo = vi.fn();
  const user = userEvent.setup();
  
  render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />);
  
  await user.click(screen.getByText('Delete'));
  
  expect(deleteTodo).toHaveBeenCalledWith(todo);
});