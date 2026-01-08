import { TimelineEntry } from "@/components/shared";
import { CompanyLogo } from "@/components/shared/company-logo";

export const TIMELINE_DATA: TimelineEntry[] = [
  {
    key: "present",
    title: "Oct 2025 - Present",
    content: (
      <div key="present">
        <CompanyLogo name="systemgroup" />

        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
      </div>
    ),
  },
  {
    key: "may-2025-oct-2025",
    title: "May 2025 - Oct 2025",
    placement: "end",
    content: (
      <div key="may-2025-oct-2025">
        <CompanyLogo name="pindo" />

        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
      </div>
    ),
  },
  {
    key: "dec-2023-may-2025",
    title: "Dec 2023 - May 2025",
    content: (
      <div key="dec-2023-may-2025">
        <CompanyLogo name="rsimu" />

        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
      </div>
    ),
  },
  {
    key: "before-2023",
    title: "Before 2023",
    placement: "end",
    content: (
      <div key="before-2023">
        <div className="flex gap-2">
          <CompanyLogo name="tapsi" />
          <CompanyLogo name="bnut" />
          <CompanyLogo name="maqin" />
        </div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        
        </p>
      </div>
    ),
  },
];
