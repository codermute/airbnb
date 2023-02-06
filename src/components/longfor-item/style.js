import styled from "styled-components";

export const LongforItemWrapper = styled.div`
  width: 20%;
  box-sizing: border-box;
  padding: 0 8px;
  flex-shrink: 0;

  .inner {
    position: relative;
    border-radius: 3px;
    overflow: hidden;

    .masking {
      position: absolute;
      box-sizing: border-box;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 60%;
      cursor: pointer;
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
    }

    img {
      width: 100%;
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 78%;
      left: 50%;
      z-index: 9;
      color: #fff;
      transform: translate(-50%, -50%);
      
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