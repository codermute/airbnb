import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .list {
    display: flex;
    flex-wrap: nowrap !important;

    > * {
      flex-shrink: 0;
    }
  }
`