import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Countrify/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "primary",
  kind: "blue",
};

export const Small = Template.bind({});
Small.args = {
  label: "small",
  kind: "blue",
  size: "small"
};


export const Secondary = Template.bind({});
Secondary.args = {
  label: "secondary",
  kind: "lightBlue"
};

export const Danger = Template.bind({});
Danger.args = {
  label: "danger",
  kind: "red"
};

export const DangerLight = Template.bind({});
DangerLight.args = {
  label: "dangerLight",
  kind: "lightRed"
};

export const Valid = Template.bind({});
Valid.args = {
  label: "valid",
  kind: "green"
};

export const Alert = Template.bind({});
Alert.args = {
  label: "alert",
  kind: "yellow"
};

export const Default = Template.bind({});
Default.args = {
  label: "default",
  kind: "grey"
};
