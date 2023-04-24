import React from "react";
import { ComponentStory } from "@storybook/react";
import Loading from "./Loading"

export const LoadingStory: ComponentStory<typeof Loading> = (args) => {
  return <Loading {...args} />;
};

LoadingStory.args = {
  size: "small",
};

LoadingStory.storyName = "Loading";
