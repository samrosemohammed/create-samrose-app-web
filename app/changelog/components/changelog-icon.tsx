import { HugeiconsIcon } from "@hugeicons/react";
import {
  CommandLineIcon,
  GitForkIcon,
  Layers01Icon,
  PackageIcon,
  Shield01Icon,
  SparklesIcon,
  Wrench01Icon,
  ZapIcon,
} from "@hugeicons/core-free-icons";
import type { ChangelogIconName } from "@/types";

const iconMap = {
  command: CommandLineIcon,
  "git-fork": GitForkIcon,
  layers: Layers01Icon,
  package: PackageIcon,
  shield: Shield01Icon,
  sparkles: SparklesIcon,
  wrench: Wrench01Icon,
  zap: ZapIcon,
} as const;

interface ChangelogIconProps {
  name: ChangelogIconName;
  size: number;
}

export function ChangelogIcon({ name, size }: ChangelogIconProps) {
  return <HugeiconsIcon icon={iconMap[name]} size={size} />;
}
