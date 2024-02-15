import { Title, Slider } from "@/PortfolioUI";
import { HTMLAttributes, forwardRef } from "react";
import { ContainerAwards } from "src/styles/components/Home/Awards/Awards.style";

interface IAwards extends HTMLAttributes<HTMLDivElement> {}

const Awards = forwardRef<HTMLDivElement, IAwards>((props, ref) => {
  return (
    <>
      <ContainerAwards {...props} ref={ref}>
        <Title text={"Awards"} />
        <Slider />
      </ContainerAwards>
    </>
  );
});

export default Awards;
