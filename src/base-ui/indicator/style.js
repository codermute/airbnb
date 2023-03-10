import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .list {
    display: flex;
    flex-wrap: nowrap !important;
    transition: transform 200ms ease;

    > * {
      flex-shrink: 0;
    }
  }
`