import styled from 'styled-components';

export const Wrapper = styled.header`
  height: var(--header-height);
  background-color: #fff;

  &,
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const Tag = styled.span`
  justify-self: flex-end;
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--dark-success-color);
  border-radius: var(--border-radius);
  background-color: transparent;
  padding: 6px 12px 6px 6px;
  gap: 6px;
`;

export const TagButtonClose = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: none;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: var(--complementary-color-01);
  }
`;

export const TagText = styled.span`
  color: var(--dark-success-color);
  font-size: var(--text);
  font-weight: bold;
`;
