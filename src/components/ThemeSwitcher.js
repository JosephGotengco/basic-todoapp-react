import React, { useContext } from "react";
import { AppContext } from "./AppProvider";
import Switch from "react-switch";
import { IoMdSunny as Sun, IoMdMoon as Moon } from "react-icons/io";

const ThemeSwitcher = () => {
    const { toggleTheme, themeMode } = useContext(AppContext);

    const handleThemeChange = () => {
        toggleTheme();
    };

    return (
        <Switch
            checked={themeMode === "lightTheme" ? true : false}
            height={30}
            width={75}
            onColor={"#54a0ff"}
            offColor={"#747d8c"}
            checkedIcon={
                <Sun
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 30,
                        paddingLeft: 10,
                    }}
                    color={themeMode === "lightTheme" ? "#feca57" : "grey"}
                    className="lightTheme"
                />
            }
            uncheckedIcon={
                <Moon
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 40,
                        paddingLeft: 20,
                    }}
                    color={themeMode === "darkTheme" ? "white" : "white"}
                    className="dark"
                />
            }
            onChange={handleThemeChange}
        />
    );
};

export default ThemeSwitcher;
