import React from "react";
import "./directory-menu.styles.scss";
import { Sections } from "./directory.menu.utils";
import MenuItem from "../menu-item/menu-item.component";

const DirectoryMenu = () => {
  return (
    <div className="directory-menu">
      {Sections.map(({ id, ...allSectionObjectsProps }) => (
        <MenuItem key={id} {...allSectionObjectsProps} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
