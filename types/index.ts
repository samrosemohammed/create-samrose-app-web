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
