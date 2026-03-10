import { toast as sonnerToast } from 'sonner';

export const toast = ({ title, description }) => {
  sonnerToast(title, { description });
};
