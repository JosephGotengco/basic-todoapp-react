import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../styles";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState(
        localStorage.getItem("theme") || "lightTheme"
    );

    useEffect(() => {
        localStorage.setItem("theme", themeMode);
    }, [themeMode]);

    const toggleTheme = () => {
        setThemeMode((prevState) => {
            if (prevState === "lightTheme") {
                return "darkTheme";
            } else {
                return "lightTheme";
            }
        });
    };

    const value = { toggleTheme, themeMode };
    const costumTheme = theme[themeMode];

    // AppContext.Provider passes down current theme and theme toggle function
    // ThemeProvider from styled-components passes down styled-component only accessible theme prop to use in
    // styled-components
    return (
        <AppContext.Provider value={value}>
            <ThemeProvider theme={costumTheme}>
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
};

export default AppProvider;
