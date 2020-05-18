import styled from 'styled-components';
import { accent } from 'constants/theme';

export const Label = styled.label`
    margin-bottom: 1.6rem;    
    min-width: 30rem;

    span{
        margin-bottom: 0.2rem;
    }

    input[type=text], input[type=email], textarea {
        width: 100%;
        padding: 12px 20px;
        margin: .6rem 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        font-size: 1.6rem;
        font-family: 'proxima-nova', Helvetica, sans-serif;
        &:focus{
            border: 2px solid ${accent};
            border-radius: 4px;
        }
      }

      textarea{
          resize: none;
          height: 15rem; 
      }
      button{
        background-color: ${accent};
        border: none;
        color: white;
        padding: 16px 32px;
        text-decoration: none;
        margin: 4px 2px;
        cursor: pointer;
        width: 100%;
        border-radius: 4px;

    }
`