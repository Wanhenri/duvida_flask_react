import { createGlobalStyle} from "styled-components";

const Base = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html, body{  
        font-size:var(--size-base);      
        font-family: 'Roboto Slab', serif; /* font dos textos */
    }
    h1{
        font-family: 'Fjalla One', sans-serif; /*font do titulo*/
        color: #FFFF;
    }
    h2{
        font-family: 'Khula', sans-serif; /*font do subtitle*/
    }
    input {
        font-family:inherit;
        font-size: inherit;
    }
`;


export default Base;