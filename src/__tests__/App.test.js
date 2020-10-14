import React from "react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Todo from "../components/Todo";

describe("todoapp tests", () => {
    const NO_TASKS = [];
    const TASKS = [
        { id: "todo-0", name: "Unit", completed: true, deleteTask: (id) => {} },
        { id: "todo-1", name: "Test", completed: true },
        { id: "todo-2", name: "Everything", completed: false },
    ];
    const FILTERS = [
        { name: "All", pressed: true },
        { name: "Active", pressed: false },
        { name: "Completed", pressed: false },
    ];

    describe("App.js unit tests", () => {
        it("filter buttons should be in the correct state when initialized", () => {
            const component = renderer.create(<App tasks={TASKS} />);
            const testInstance = component.toJSON();
            const filterButtons = testInstance.children[1].children;
            filterButtons.forEach((button, i) => {
                expect(button.props["aria-pressed"]).toBe(FILTERS[i].pressed);
                expect(button.children[1].children[0]).toBe(FILTERS[i].name);
            });
        });
    });

    describe("Form.js unit tests", () => {
        it("should be able to change value of new todo input", () => {
            render(<App tasks={NO_TASKS} />);

            userEvent.type(screen.getByTestId("new-todo-input"), "new todo");
            const input = screen.getByTestId("new-todo-input");
            expect(input.value).toBe("new todo");
        });

        it("should be able to change new todo input value", () => {
            render(<App tasks={NO_TASKS} />);
            userEvent.type(screen.getByTestId("new-todo-input"), "new todo");
            const input = screen.getByTestId("new-todo-input");
            expect(input.value).toBe("new todo");
        });
    });

    describe("Todo.js unit tests", function () {
        it("should be able to render todo edit form", () => {
            const { getByTestId } = render(<Todo tasks={TASKS[0]} />);
            const checkbox = getByTestId("todo-view");
            expect(checkbox.constructor.name).toBe("HTMLDivElement");
            userEvent.click(screen.getByTestId("todo-view-edit-btn"));
            // verify todo view form isn't snowhing anymore
            const editBtn = screen.queryByText("edit");
            expect(editBtn).toBeNull();
            // verify todo edit form is showing
            getByTestId("todo-edit-view");
        });
    });

    describe("snapshot tests", () => {
        it("should match snapshot with tasks when rendered", () => {
            const tree = renderer.create(<App tasks={TASKS} />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
