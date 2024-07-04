import styled from '@emotion/styled'

export const CardContainer = styled.div`
    position: relative;
    background-color: #ffffff;
    padding: 25px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
    overflow: hidden;
    height: 580px;

    &.card-gradient{
        background: linear-gradient(180deg, rgba(94,237,201,1) 0%, rgba(80,194,186,1) 100%) !important;
    }
`