"use client";
import { useState } from "react";
import Image from "next/image";
import { type actionFunction } from "@/utils/types";
import { LuUser2 } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import FormContainer from "../FormContainer";
import ImageInput from "./ImageInput";
import { SubmitButton } from "../buttons/SubmitButton";

type ImageInputContainerProps = {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name, action, text } = props;
  const [isImageVisible, setIsImageVisible] = useState(false);

  const userIcon = (
    <LuUser2 className="w-24 h-24 bg-primary rounded text-white mb-4" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded object-cover mb-4 w-24 h-24"
        />
      ) : (
        userIcon
      )}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsImageVisible((prev) => !prev)}
      >
        {text}
      </Button>
      {isImageVisible && (
        <div className="max-w-lg mt-4">
          <FormContainer action={action}>
            {props.children}
            <ImageInput />
            <SubmitButton size="sm" />
          </FormContainer>
        </div>
      )}
    </div>
  );
}
export default ImageInputContainer;
