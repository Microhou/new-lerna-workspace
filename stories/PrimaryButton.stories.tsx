import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';
import { Button } from './Button';

const meta = {
    component: PrimaryButton,
    decorators: [
        (Story) => (
            <div style={{ margin: '3em' }}>
            {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
            <Story />
          </div>
        )
    ]
} satisfies  Meta<typeof PrimaryButton>;

export default meta;

type Story = StoryObj<typeof PrimaryButton>;

const ButtonWithHooks = () => {
    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState('Secondary');
    const [isPrimary, setIsPrimary] = useState(false);
  
    // Sets a click handler to change the label's value
    const handleOnChange = () => {
      if (!isPrimary) {
        setIsPrimary(true);
        setValue('Primary');
      }
    };
    return <Button primary={isPrimary} onClick={handleOnChange} label={value} backgroundColor={undefined} size={undefined} />;
  };

export const Primary: Story = {
    name: 'I am the primary',
    // args:{
    //     label: "test",
    //     onClick: () => { console.log("test")}
    // },
    // render: (args) => <PrimaryButton {...args}/>
    render: () => <ButtonWithHooks />,
}
export const Secondary: Story = {
    render: () => <Button backgroundColor="#ff0" label="😄👍😍💯" primary={undefined} size={undefined} />,
};