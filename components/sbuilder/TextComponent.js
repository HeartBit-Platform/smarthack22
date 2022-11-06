import { useNode } from "@craftjs/core";

export default function TextComponent({text}){
    const { connectors: {drag, connect} } = useNode();
  
    return (
      <div ref={(ref) => connect(drag(ref))}>
        <h2>{text}</h2>
      </div>
    )

}