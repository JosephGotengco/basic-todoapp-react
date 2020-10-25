import React from "react";

const Button = (props) => {
    return (
        <button
            className="btn btn__primary"
            data-testid="new-todo-button"
            onClick={props.handleClick}
        >
			<span>{props.title}</span>
        </button>
    );
};

export default Button;
