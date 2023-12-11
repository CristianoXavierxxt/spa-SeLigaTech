import { createGlobalStyle } from "styled-components";

export const GlobaStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Newsreader:ital,opsz,wght@0,6..72,200;0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,200;1,6..72,300;1,6..72,400;1,6..72,500;1,6..72,600;1,6..72,700;1,6..72,800&display=swap');

    *{
        margin: 0;
        padding: 0;
        font-family: Newsreader, sans-serif;
    }

    html{
        width: auto;
    }

    body{
        max-width: 100vw;
        height: 100vh;
        background: linear-gradient(45deg, #00478d, #001F3F, #001F3F, #00478d);
        background-blend-mode: overlay;
        background-repeat: no-repeat;
        background-attachment: fixed;
        
        font-family: 'Balsamiq sans', sans-serif;
    }
`