'use client';
const defaultProps  = {
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  fillSpace: 'no',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
  shadow: 0,
  radius: 0,
  width: '100%',
  height: 'auto',
  flexDirection: 'row',
};
export type ContainerProps = {
  background: Record<'r' | 'g' | 'b' | 'a', number>;
  color: Record<'r' | 'g' | 'b' | 'a', number>;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
  fillSpace: string;
  width: string;
  height: string;
  padding: string[];
  margin: string[];
  marginTop: number;
  marginLeft: number;
  marginBottom: number;
  marginRight: number;
  shadow: number;
  children: React.ReactNode;
  radius: number;
};


export default function Container(props: Partial<ContainerProps>){
    props = {
        ...defaultProps,
        ...props,
    };
    const {
        alignItems,
        justifyContent,
        fillSpace,
        shadow,
        radius,
        children,
      } = props;
    return (
        <div
        style={{
            justifyContent,
            alignItems,
            background: `rgba(100,100,100,1)`,
            boxShadow:
              shadow === 0
                ? 'none'
                : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
            borderRadius: `${radius}px`,
            flex: fillSpace === 'yes' ? 1 : 'unset',
          }}
        >
            {children}
        </div>
    )
}

Container.craft = {
    displayName: 'Container',
    props: defaultProps,
    rules: {
      canDrag: () => true,
    },
  };