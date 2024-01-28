import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const IconFontAwesome = styled(FontAwesomeIcon)<FontAwesomeIconProps>`
  color: ${(props) => props.color || "#FFF"};
  font-size: ${(props) => props.fontSize || "16px"};
`;
