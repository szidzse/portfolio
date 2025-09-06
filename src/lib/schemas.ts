import { z } from "zod";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const iconLink = z.object({
  name: z.string(),
  href: z.string().url(),
  icon: z.custom<keyof typeof dynamicIconImports>(),
});
export type IconLink = z.infer<typeof iconLink>;
export const socialSchema = z.object({ socials: z.array(iconLink) });
