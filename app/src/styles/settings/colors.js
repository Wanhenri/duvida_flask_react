import { createGlobalStyle} from "styled-components";

const Colors = createGlobalStyle`
    :root {
        --color-negative-light: rgba(0, 0, 0, 0.15);
        --color-header:  rgb(51, 51, 51);
        --color-base: #3A4042;        
        --color-zero: #FFFF;
        --color-first:#F25A70;
        --color-second: #191637;
        --color-third: #EAE6DA;
        --color-fourth: rgb(255, 200, 0);
        --color-fifth: #0075b4;
        --color-sixth: #0e4097;
        --color-seventh: #f8931d;
    }
`

export default Colors;