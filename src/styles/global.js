import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
${({ theme }) => css`
    html {
        body {
            width: 100%;
            height: 100%;
            background: ${theme.colors.background};
            color: ${theme.colors.black};

            .todoapp {
                background: ${theme.colors.background};
                color: ${theme.colors.textColor};
                margin: 2rem 0 4rem 0;
                padding: 1rem;
                position: relative;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
                    0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
            }

            .btn__primary {
                color: ${theme.colors.btnTextColor};
                background-color: ${theme.colors.primary};
            }

            .btn__danger {
                color: ${theme.colors.btnTextColor};
                background-color: ${theme.colors.red2};
                border-color: ${theme.colors.red1};
            }
        }
    }
`}
`;
