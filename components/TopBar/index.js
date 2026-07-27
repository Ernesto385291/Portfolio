"use client";

import { Clock01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useSyncExternalStore } from "react";
import { getServerSnapshot, getSnapshot, subscribe } from "@/lib/clock";
import { profile } from "@/data/profile";

const formatter = new Intl.DateTimeFormat("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
  timeZone: profile.timeZone,
});

export const TopBar = () => {
  const now = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="column flex items-center justify-between pt-8 pb-12 md:pt-10">
      <span className="meta">EST. {profile.establishedYear}</span>
      <span className="meta flex items-center gap-1.5">
        <HugeiconsIcon icon={Clock01Icon} size={13} strokeWidth={2} />
        {/* tabular-nums (set on body) keeps the width fixed as digits change. */}
        <time suppressHydrationWarning>
          {now === null ? "--:--:--" : formatter.format(now)}
        </time>{" "}
        {profile.timeZoneLabel}
      </span>
    </div>
  );
};
