export const buildWhatsAppURI = ({
  phoneNumber,
  message,
}: {
  phoneNumber: string;
  message: string;
}): string => {
  const templateLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

  return encodeURI(templateLink);
};
