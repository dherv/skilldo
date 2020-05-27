import React, { FC } from "react";
import { GreyButton } from "../styled/Globals.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const TodoSettings: FC<Props> = ({ onTogglePopover }) => {
  return (
    <GreyButton onClick={onTogglePopover}>
      <FontAwesomeIcon icon={faEllipsisH} />
    </GreyButton>
  );
};

interface Props {
  onTogglePopover: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default TodoSettings;
