import { Popover, Whisper } from "rsuite";

import { MenuPopoverProps } from "./types";

const MenuPopover = ({
  children,
  indicator,
}: MenuPopoverProps): JSX.Element => {
  return (
    <Whisper
      placement="bottom"
      trigger="click"
      speaker={<Popover>{children}</Popover>}
    >
      {indicator}
    </Whisper>
  );
};

export default MenuPopover;
