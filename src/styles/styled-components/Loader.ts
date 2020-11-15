import styled from 'styled-components';

export const Loader = styled.div`
    display: block;
    
    width: 80px;
    height: 80px;
    margin: auto;

    &::after {
        content: "";
        
        display: block;
        
        width: 64px;
        height: 64px;
        
        margin: 8px;
        
        border-radius: 50%;
        border: 6px solid var(--white);
        border-color: var(--loader-color) transparent var(--loader-color) transparent;
        
        animation: rotate 1.2s linear infinite;
    }
    
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
    }
        100% {
            transform: rotate(360deg);
    }
`;
