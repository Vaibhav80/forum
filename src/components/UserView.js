import React from "react";
import { Modal, Icon } from "semantic-ui-react";

function UserView({ open, data, onClose }) {
  return (
    <Modal id="user-details" open={open} size="small" dimmer={"blurring"}>
      <Modal.Header>
        User Details
        <Icon name="x" color="red" className="close-icon" onClick={onClose} />
      </Modal.Header>
      <Modal.Content>
        {data && (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label  className="user-row">
              <span>Name:</span> {data.name}
            </label>
            <label  className="user-row">
              <span>Username:</span> {data.username}
            </label>
            <label  className="user-row">
              <span>Email:</span> {data.email}
            </label>
            <label  className="user-row">
              <span>Website:</span> {data.website}
            </label>
          </div>
        )}
      </Modal.Content>
    </Modal>
  );
}

export default UserView;
