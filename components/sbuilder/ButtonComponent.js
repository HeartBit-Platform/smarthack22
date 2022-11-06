import { useNode } from "@craftjs/core";

export default function ButtonComponent({text, classes}){
    const { connectors: {drag, connect} } = useNode();
  
    return (
      <div ref={(ref) => connect(drag(ref))}>
        <button className={classes}>{text}</button>
      </div>
    )

}