// import React from 'react';
import styled from 'styled-components'
import { css } from 'styled-components'

const FormContainer = styled.div`
    margin-left: auto; 
    margin-right: auto;
    max-width: 1150px;  
    ${props => props.wrapper && css`
    border: 1px solid #28a745; 
    border-radius: 7px;
    {/*} box-shadow: 0 0px 20px 0px #120631; */}
        > * {
            padding: 1em; 
        }
        
        @media (min-width: 700px) {
            display: grid; 
            grid-template-columns: 1fr 2fr; 
            > * {
                padding: 2em; 
            }
        }
    `}
`; 

export default FormContainer