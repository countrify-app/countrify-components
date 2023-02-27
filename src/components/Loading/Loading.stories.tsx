import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loading from "./Loading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Countrify/Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  className: "",
};

export const Small = Template.bind({});
Small.args = {
  className: "",
  small: true
};
