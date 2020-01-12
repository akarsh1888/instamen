import React from 'react';
import './directory-menu.styles.scss';

// Components
import MenuItem from "../menu-item/menu-item.component";

// connect
import { connect } from "react-redux";

// selectDirectorySectionsSelector
import { selectDirectorySectionsSelector } from "../../redux/directory/directory.selectors";


const DirectoryMenu = ({ sections }) => (
          <div className="directory-menu">
            {sections.map(({ id, ...allSectionObjectsProps }) => (
              <MenuItem key={id} {...allSectionObjectsProps} />
            ))}
          </div>
        );


const mapStateToProps = (state) => ({
  sections: selectDirectorySectionsSelector(state)
});


export default connect(mapStateToProps)(DirectoryMenu);

