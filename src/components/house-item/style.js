import styled from "styled-components";

export const HouseWrapper = styled.div`
  width: ${props => props.itemWidth};
  flex-shrink: 0;
  box-sizing: border-box;

  .inner {
    display: flex;
    flex-direction: column;
    padding: 8px;
    cursor: pointer;

    .carousel {
      position: relative;

      &:hover {
        .control {
          display: flex;
        }
      }

      .control {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        display: none;
        justify-content: space-between;
        color: #fff;

        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 70px;
          height: 100%;
          background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

          &.right {
            background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
          }
        }
      }

      .indicator {
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        z-index: 9;
        display: flex;
        justify-content: center;

        .item {
          /* display: flex;
          width: 30%;
          overflow: hidden; */

          .dot {
            display: inline-block;
            width: 8px;
            height: 8px;
            margin: 0 2px;
            border-radius: 50%;
            background-color: red;
          }
        }
      }
    }
    
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 0 0;
      margin-bottom: 2px;
      border-radius: 4px;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }

    .introduce {
      font-size: 14px;
      color: ${props => props.introduceColor};
    }

    .name {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: bold;
      overflow: hidden;
      margin: 6px 0;
    }

    .bottom {
      display: flex;
      align-items: flex-end;
      white-space: nowrap;

      .ant-rate-star  {
        margin-inline-end: 3px;
      }

      .ant-rate-star-second {
        font-size: 11px;
      }
    }

    .bottom_info {
      display: inline-block;
      margin-left: 6px;
      white-space: nowrap;
      font-size: 12px;
      line-height: 1.15;
      color: ${props => props.contentColor}
    }
  }
` 