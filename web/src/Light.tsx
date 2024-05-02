type Props = {
  /** some description */
  variant: 'green' | 'yellow' | 'red',
  size?: number
};

/** Some comment about my Light component */
export const Light = ({variant = 'green', size = 50}: Props) => {
  return (
    <div style={{
      background: variant,
      borderRadius: '50%',
      width: size,
      height: size
    }}></div>
  );
};

export default Light;
