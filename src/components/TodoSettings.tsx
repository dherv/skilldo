import React, { FC } from "react";
import { GreyButton } from "../styled/Globals.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const TodoSettings: FC<Props> = ({ onToggleEdit }) => {
  return (
    <SettingsButton onClick={onToggleEdit}>
      <FontAwesomeIcon title="icon-settings" icon={faEllipsisH} />
    </SettingsButton>
  );
};

interface Props {
  onToggleEdit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SettingsButton = styled(GreyButton)`
  height: 100%;
`;

export default TodoSettings;
