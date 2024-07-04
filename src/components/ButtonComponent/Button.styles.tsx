import styled from '@emotion/styled'

export const ButtonContainer = styled.div`
   button {
       border: none;
       border-radius: 5px;
       color: #ffffff;

       &.btn-medium{
        padding: 10px;
        font-size: 16px;

       }
       &.btn-small{
        padding: 5px;
        font-size: 13px;
       }

       &:hover {
         outline: 1px solid #2f6a74;
       }
    }
 
`