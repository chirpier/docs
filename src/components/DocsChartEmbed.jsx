'use client';

import { ChirpierChart } from "@chirpier/charts";

export default function DocsChartEmbed({
  eventId,
  shareToken,
  state,
  minHeight = 320,
}) {
  return (
    <ChirpierChart
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
