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
};

export const TECH_STACK_ITEMS: TechStackItem[] = [
  {
    name: "nodejs",
    icon: NodeJsLogo,
    size: 3.3,
  },
  {
    name: "next",
    icon: NextLogo,
    size: 3.5,
  },
  {
    name: "react",
    icon: ReactLogo,
    size: 3.8,
  },
  {
    name: "javascript",
    icon: JavaScriptLogo,
    size: 4.3,
  },
  {
    name: "typescript",
    icon: TypeScriptLogo,
    size: 4.3,
  },
  {
    name: "angular",
    icon: AngularLogo,
    size: 3.8,
  },
  {
    name: "golang",
    icon: GolangLogo,
    size: 3.5,
  },
  {
    name: "nestjs",
    icon: NestJsLogo,
    size: 3.3,
  },
];
