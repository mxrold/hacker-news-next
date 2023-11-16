export const generateId = (customId?: string): string => {
  if (customId) {
    return customId;
  }
  return crypto.randomUUID();
};
