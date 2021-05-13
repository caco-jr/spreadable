import styled from 'styled-components';

export const Wrapper = styled.form`
  height: var(--main-height);
  padding: 12px 24px;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #243b55,
    #141e30
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #243b55,
    #141e30
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .c-message {
    border-radius: var(--border-radius);
    margin-top: 16px;

    &-submit {
      span {
        font-weight: bold;
        color: var(--complementary-color-04);
      }

      :not(:disabled) {
        span {
          color: #fff;
        }
      }
    }
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: var(--title);
  font-weight: bold;
  border-bottom: 1px solid;
  padding-bottom: 8px;
  margin-top: 16px;
`;

export const MessagePreviewTitle = styled.section`
  margin: 90px 0 8px;

  .ant-divider {
    &:before,
    &:after {
      border-color: #fff;
    }
  }

  .ant-divider-inner-text {
    font-weight: bold;
    color: #fff;
    font-size: var(--text-lg);
  }
`;

export const MessagePreviewWrapper = styled.section`
  min-height: 100px;
  color: #fff;
  font-size: var(--text-lg);
  margin-bottom: 60px;
  border-radius: var(--border-radius);
  padding: 8px 16px;
  background-color: var(--dark-green);
  position: relative;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: calc(100% - 4px);
    left: 0;
    width: 0;
    height: 0;
    border-top: 20px solid var(--dark-green);
    border-right: 20px solid transparent;
  }
`;
