// FormBlock.tsx
import React from "react";
import ContentContainer from "@components/common/containers/ContentContainer";
import SvgLine from "@components/common/svgs/SvgLine";
import Form from "@components/home/components/form-block/SearchForm";

export default function FormBlock() {
  return (
    <ContentContainer
      className="flex flex-col"
      id="search-form-block-container"
    >
      <SvgLine />
      <div className="flex flex-col w-full justify-center items-center">
        <Form />
      </div>
    </ContentContainer>
  );
}
