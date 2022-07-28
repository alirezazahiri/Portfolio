export type ContactItem = {
  id?: string;
  iconKey: string;
  link: string;
  description: string;
  color: string;
  type?: "mail" | null;
  isLoading?: boolean;
};
