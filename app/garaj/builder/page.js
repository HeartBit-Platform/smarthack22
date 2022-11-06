'use client';
import {Editor, Frame, Canvas, Element} from "@craftjs/core";
import TextComponent from "/components/sbuilder/TextComponent";
import ButtonComponent from "/components/sbuilder/ButtonComponent";
import Container from "/components/Container.tsx";
import { useEditor } from "@craftjs/core";


const Toolbox = () => {
  const { connectors } = useEditor();

  return (
    <div className="absolute right-0 w-[14%] flex flex-col h-[15%] justify-between flex-1">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" ref={(ref) => connectors.create(ref, <TextComponent text ="Test" />)}>
        Text
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4" ref={(ref) => connectors.create(ref,<Element
                                                                                                                            canvas
                                                                                                                            is={Container}
                                                                                                                            height="300px"
                                                                                                                            width="300px"
                                                                                                                          ></Element>)}
      >
        Container
      </button>
      <button
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded ml-4" ref={(ref) => connectors.create(ref, <ButtonComponent classes="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded " text = "Button" />)}
      >
        Button
      </button>
    </div>
  );
};

export default function SiteBuilder(){
  return (
    <Editor resolver={{ TextComponent, Container, ButtonComponent }}>
      <Frame>
        <Element is="div" className=" w-[85%]" canvas>
          <TextComponent text="Sample" />
        </Element>
      </Frame>
      <Toolbox />
    </Editor>
  );
}

