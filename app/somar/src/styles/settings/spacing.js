import { createGlobalStyle } from "styled-components";

const Spacing = createGlobalStyle`
    :root {
        --spacing-small:1rem;
        --spacing-medium: 2rem;
        --spacing-big: 4rem;
    }    
    @media (max-height:700px){
        :root{
        --spacing-base:0.5rem;
        --spacing-big: 2rem;
        }
    }
`;

export default Spacing;