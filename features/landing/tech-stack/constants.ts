import {
  ClaudeLogo,
  GeminiLogo,
  JavaScriptLogo,
  OpenAILogo,
  ReactLogo,
  NextLogo,
  TypeScriptLogo,
  AngularLogo,
  GolangLogo,
  NodeJsLogo,
  NestJsLogo,
} from "@/components/icons";
import { ElementType } from "react";

export type TechStackItem = {
  name: string;
  icon: ElementType;
  size: number;
  description: string;
};

export const TECH_STACK_ITEMS: TechStackItem[] = [
  {
    name: "Node.js",
    icon: NodeJsLogo,
    size: 3.3,
    description: "Backend Runtime",
  },
  {
    name: "Next.js",
    icon: NextLogo,
    size: 3.5,
    description: "Full Stack Framework",
  },
  {
    name: "React",
    icon: ReactLogo,
    size: 3.8,
    description: "Frontend Framework",
  },
  {
    name: "JavaScript",
    icon: JavaScriptLogo,
    size: 4.3,
    description: "Programming language",
  },
  {
    name: "TypeScript",
    icon: TypeScriptLogo,
    size: 4.3,
    description: "Programming language",
  },
  {
    name: "Angular",
    icon: AngularLogo,
    size: 3.8,
    description: "Frontend Framework",
  },
  {
    name: "Golang",
    icon: GolangLogo,
    size: 3.5,
    description: "Programming language",
  },
  {
    name: "NestJS",
    icon: NestJsLogo,
    size: 3.3,
    description: "Backend framework",
  },
];
