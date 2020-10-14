import React from "react";

const ClearAllButton = props => {
    return (
        <button
            className="btn btn__primary"
            data-testid="new-todo-button"
            onClick={props.clearAllTasks}
        >
            <span>Clear All Tasks</span>
        </button>
    );
};

export default ClearAllButton;
