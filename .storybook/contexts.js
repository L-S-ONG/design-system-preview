import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "../src/utils";

export const contexts = [
    {
        icon: "box",
        title: "Themes",
        components: [ThemeProvider],
        params: [
            {
                name: "Default theme", 
                props: {
                    theme: defaultTheme, 
                    default: true 
                }
            },
            {
                name: "Dark theme", 
                props: {
                    theme: darkTheme
                }
            }
        ],
        options: {
            deep: true, // pass the `props` deeply into all wrapping components
            disable: false, // disable this contextual environment completely
            cancelable: false // allow this contextual environment to be opt-out optionally in toolbar
        }
    }
]