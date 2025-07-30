import { IconButton, Tooltip } from "@mui/material";

function ButtonIcon({ onClick, icon, tooltip, ...rest }) {
  return (
    <Tooltip arrow title={tooltip}>
      <IconButton onClick={onClick} {...rest}>
        {icon()}
      </IconButton>
    </Tooltip>
  );
}

export default ButtonIcon;
