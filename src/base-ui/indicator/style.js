import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  overflow: hidden;

  .list {
    display: flex;
    flex-wrap: nowrap;

    > * {
      flex-shrink: 0;
    }
  }
`