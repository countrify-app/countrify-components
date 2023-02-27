import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Countrify/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  children: "this is a link",
  href: "https://www.google.fr",
  className: "",
};
