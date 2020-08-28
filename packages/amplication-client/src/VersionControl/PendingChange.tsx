import React from "react";
import classNames from "classnames";

import * as models from "../models";
import { Panel, EnumPanelStyle } from "../Components/Panel";
import { Button, EnumButtonStyle } from "../Components/Button";

const CLASS_NAME = "pending-change";
const ENTITY = "Entity";
type Props = {
  change: models.PendingChange;
};

const PendingChange = ({ change }: Props) => {
  const resourceType =
    change.resourceType === models.EnumPendingChangeResourceType.Entity
      ? ENTITY
      : (change.resource as models.Block).blockType;
  return (
    <div className={CLASS_NAME}>
      <div>{change.resource.updatedAt}</div>

      <Panel
        panelStyle={EnumPanelStyle.Bordered}
        className={`${CLASS_NAME}__details`}
        shadow
      >
        <div
          className={classNames(
            `${CLASS_NAME}__action`,
            change.action.toLowerCase()
          )}
        >
          {change.action}
        </div>
        <div>{resourceType}</div>
        <div>{change.resource.displayName}</div>
        <div className={`${CLASS_NAME}__spacer`} />
        <div className={`${CLASS_NAME}__version`}>V{change.versionNumber}</div>
        <div className={`${CLASS_NAME}__version`}>
          <Button
            buttonStyle={EnumButtonStyle.Clear}
            icon="keyboard_arrow_right"
          />
        </div>
      </Panel>
    </div>
  );
};

export default PendingChange;