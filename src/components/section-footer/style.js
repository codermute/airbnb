import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .footer {
    display: flex;
    align-items: center;
    color: ${props => props.color};
    cursor: pointer;

    .text {
      font-size: 17px;
      font-weight: 700;
      margin-right: 6px;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`