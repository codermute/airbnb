import styled from "styled-components";

export const LongforItemWrapper = styled.div`
  margin: 16px -8px 0;

  .inner {
    position: relative;
    width: 20%;
    box-sizing: border-box;
    padding: 0 8px;
    flex-shrink: 0;

    .masking {
      position: absolute;
      box-sizing: border-box;
      left: 0;
      bottom: 0;
      margin: 0 16px 0 8px;
      width: calc(100% - 16px);
      height: 60%;
      border-radius: 3px;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
    }

    img {
      width: 100%;
      border-radius: 3px;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 78%;
      left: 50%;
      z-index: 9;
      transform: translate(-50%, -50%);
      color: #fff;

      .city {
        display: inline-block;
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: 700;
      }

      .price {
        font-size: 14px;
      }
    }
  }
`