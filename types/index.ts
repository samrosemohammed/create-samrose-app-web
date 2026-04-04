export interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  options: string[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
  code: string;
}

export interface PackageManager {
  name: string;
  command: string;
  icon: string;
}

export interface StackOption {
  category: string;
  icon: string;
  choices: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export type ChangeCategory = "feature" | "fix" | "improvement" | "breaking";

export interface Change {
  category: ChangeCategory;
  text: string;
}

export interface Release {
  version: string;
  date: string;
  label?: "latest" | "stable";
  summary: string;
  changes: Change[];
}

export type ChangelogIconName =
  | "command"
  | "git-fork"
  | "layers"
  | "package"
  | "shield"
  | "sparkles"
  | "wrench"
  | "zap";

export interface CategoryVisualConfig {
  label: string;
  color: string;
  bg: string;
  border: string;
  icon: ChangelogIconName;
}

export interface ChangelogStat {
  icon: ChangelogIconName;
  label: string;
  value: string;
}

export interface DocsSectionLink {
  id: string;
  label: string;
}

export interface DocsGettingStartedStep {
  step: string;
  title: string;
  desc: string;
}

export interface DocsRequirement {
  icon: string;
  label: string;
  note: string;
}

export interface DocsDevelopmentStep {
  step: string;
  code: string;
}
