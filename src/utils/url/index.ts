export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const apiEndpoints = {
  SPREADSHEET: `${BASE_API_URL}/spreadsheet`,
};

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
