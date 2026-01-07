import React from "react";
import { Timeline } from "@/components/shared";
import { TIMELINE_DATA } from "./constants";

export const TimelineSection = () => {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={TIMELINE_DATA} />
    </div>
  );
};
