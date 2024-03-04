import { lazy } from "react";

export const LazyHomeTemplate = lazy(() =>
  import("../components/templates/HomeTemplate")
);
