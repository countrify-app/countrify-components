import { join } from "path";

const componentTemplate = (name) => `import React from 'react';
import styled from 'styled-components';

const Styled${name} = styled.div\`
  /* styles here */
\`;

interface ${name}Props {
  // props here
}

const ${name}: React.FC<${name}Props> = () => {
  return (
    <Styled${name}>
      {/* content here */}
    </Styled${name}>
  );
};

export default ${name};
`;

const testTemplate = (name) => `import React from 'react';
import { render } from '@testing-library/react';
import ${name} from './${name}';

describe('${name}', () => {
  test('renders the ${name} component', () => {
    render(<${name} />);
  });
});
`;

const storyMDXTemplate = (name) => `import { ArgsTable, Canvas, Meta, Story, PRIMARY_STORY } from '@storybook/addon-docs';
import { ${name}Story } from './${name}Story.stories.tsx';
import ${name} from './${name}';

<Meta component={${name}} title="${name}" />

<Canvas withSource="open">
  <Story story={${name}Story} />
</Canvas>

<ArgsTable of={${name}} story={PRIMARY_STORY} />
`;

const storyTSXTemplate = (name) => `import React from "react";
import { ComponentStory } from "@storybook/react";
import ${name} from "./${name}"

export const ${name}Story: ComponentStory<typeof ${name}> = (args) => {
  return <${name} {...args} />;
};

${name}Story.args = {
  size: "small",
};

${name}Story.storyName = "${name}";
`;

export default function (plop) {
  plop.setGenerator("component", {
    description: "Generate a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the new component?",
        validate: (value) => {
          if (/.+/.test(value)) {
            return true;
          }
          return "name is required";
        },
      },
    ],
    actions: (data) => {
      const name = data.name;
      const folderPath = join("src", "components", name);
      return [
        {
          type: "add",
          path: join(folderPath, `${name}.tsx`),
          template: componentTemplate(name),
        },
        {
          type: "add",
          path: join(folderPath, `${name}.test.tsx`),
          template: testTemplate(name),
        },
        {
          type: "add",
          path: join(folderPath, "index.ts"),
          template: `export { default } from "./${name}";`,
        },
        {
          type: "add",
          path: join(folderPath, `${name}Story.stories.mdx`),
          template: storyMDXTemplate(name),
        },
        {
          type: "add",
          path: join(folderPath, `${name}Story.stories.tsx`),
          template: storyTSXTemplate(name),
        },
      ];
    },
  });
}
