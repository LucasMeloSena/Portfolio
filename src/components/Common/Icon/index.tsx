import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { IconFontAwesome } from "src/styles/components/Common/Icon/Icon.style";

function Icon({ color, fontSize, icon }: FontAwesomeIconProps) {
  return (
    <>
      <IconFontAwesome color={color} fontSize={fontSize} icon={icon} />
    </>
  );
}

export default Icon;
