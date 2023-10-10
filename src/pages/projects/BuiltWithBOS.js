import React from "react";
import { Widget } from "near-social-vm";
import { useBosLoaderStore } from "../../stores/bos-loader";

export default function ProjectsBuiltWithBOS() {
  const redirectMapStore = useBosLoaderStore(); // We need this in order to run Widgets from local

  return (
    <Widget
      src="discover.near/widget/Project.Feed" // this references a local widget in apps/discoverbos/widget/Project./feed
      config={{
        redirectMap: redirectMapStore.redirectMap,
      }}
    />
  );
}
