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
`;

export const Title = styled.h2`
  color: #fff;
  font-size: var(--title);
  font-weight: bold;
`;

export const MessagePreviewTitle = styled.h3`
  color: #fff;
  font-size: var(--text-lg);
  font-weight: bold;
  margin: 20px 0 8px;
`;

export const MessagePreviewWrapper = styled.section`
  color: #fff;
  font-size: var(--text);
  margin-bottom: 20px;
  border: 1px dashed;
  border-radius: var(--border-radius);
  padding: 8px 16px;
`;
