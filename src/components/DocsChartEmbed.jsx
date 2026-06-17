'use client';

import { ChirrOpChart } from "@chirropjs/charts";

export default function DocsChartEmbed({
  eventId,
  shareToken,
  state,
  minHeight = 320,
}) {
  return (
    <ChirrOpChart
      eventId={eventId}
      shareToken={shareToken}
      baseUrl="http://localhost:5173"
      header={false}
      state={state}
      autoResize
      minHeight={minHeight}
      style={{ backgroundColor: "white", borderRadius: "14px" }}
    />
  );
}

