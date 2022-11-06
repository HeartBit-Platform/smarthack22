'use client';
import {Editor, Frame, Canvas, Element} from "@craftjs/core";
import TextComponent from "/components/sbuilder/TextComponent";
import ButtonComponent from "/components/sbuilder/ButtonComponent";
import Container from "/components/Container.tsx";
import { useEditor } from "@craftjs/core";


const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div className="absolute right-0 w-[14%] flex flex-col h-[20%] justify-between flex-1">
      <button className="bg-angry-baby-blue hover:bg-angry-baby-blue text-white font-bold py-2 px-4 rounded ml-4" ref={(ref) => connectors.create(ref, <TextComponent text ="Test" />)}>
        Text
      </button>
      <button className="bg-angry-baby-blue hover:bg-angry-baby-blue text-white font-bold py-2 px-4 rounded ml-4" ref={(ref) => connectors.create(ref,<Element
                                                                                                                            canvas
                                                                                                                            is={Container}
                                                                                                                            height="300px"
                                                                                                                            width="300px"
                                                                                                                          ></Element>)}
      >
        Container
      </button>
      <button
        className="bg-angry-baby-blue hover:bg-angry-baby-blue text-white font-bold py-2 px-4 rounded ml-4" ref={(ref) => connectors.create(ref, <ButtonComponent classes="bg-purple hover:bg-purple text-white font-bold py-2 px-4 rounded " text = "Button" />)}
      >
        Button
      </button>
    </div>
  );
};

export default function SiteBuilder(){
  return (
    <div className="min-h-screen">
    <Editor resolver={{ TextComponent, Container, ButtonComponent }}>
      <Frame>
        <Element is="div" className=" w-[85%] ml-5" canvas>
          <TextComponent text="Sample" />
        </Element>
      </Frame>
      <Toolbox />
    </Editor>
    </div>
  );
}

