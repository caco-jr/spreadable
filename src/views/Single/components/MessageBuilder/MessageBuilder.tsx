import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as S from './MessageBuilder.styles';
import { buildWhatsAppURI } from '@utils/url';

type IFormData = {
  phoneNumber: string;
  message: string;
};

const MessageBuilder = (): JSX.Element => {
  const [link, setLink] = useState<string>('');
  const { register, handleSubmit } = useForm<IFormData>();

  const buildLink = (formData: IFormData): void => {
    setLink(buildWhatsAppURI(formData));
  };

  const onSubmit = handleSubmit(buildLink);

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.PhoneInput {...register('phoneNumber', { required: true })} />

      <S.MessageInput {...register('message', { required: true })} />

      <S.LinkInput value={link} readOnly />

      <S.Button type="submit">Gerar</S.Button>
    </S.Wrapper>
  );
};

export default MessageBuilder;
