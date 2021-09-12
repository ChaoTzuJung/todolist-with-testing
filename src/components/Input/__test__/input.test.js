import { render, screen, fireEvent } from "@testing-library/react";
import Input from '../Input';

const mockedSetTodo = jest.fn();

describe("Input", () => {
    it('should render input element', () => {
        render(
            <Input 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    })

    it('should be able to type in input', () => {
        render(
            <Input 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go to Shopping!" } })
        expect(inputElement.value).toBe("Go to Shopping!");
    })

    it('should have empty input when add button is cliked', () => {
        render(
            <Input 
                todos={[]}
                setTodos={mockedSetTodo}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: { value: "Go to Shopping" } });
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.click(buttonElement)
        expect(mockedSetTodo).toBeCalled()
        expect(inputElement.value).toBe("")
    })
})