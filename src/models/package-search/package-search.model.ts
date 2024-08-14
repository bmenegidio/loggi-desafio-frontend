import { z } from 'zod';

export const packageSearchObjectSchema = z.object({
  packageCode: z.string().regex(/^(?=(?:.*[A-Za-z]){3,})(?=(?:.*\d){4,}).*$/, {
    message: 'O código deve conter pelo menos 3 letras e 4 números.',
  }),
});

export type PackageSearchSchema = z.infer<typeof packageSearchObjectSchema>;
