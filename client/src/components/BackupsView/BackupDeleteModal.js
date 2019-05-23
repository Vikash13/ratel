// Copyright 2019 Dgraph Labs, Inc. and Contributors
//
// Licensed under the Dgraph Community License (the "License"); you
// may not use this file except in compliance with the License. You
// may obtain a copy of the License at
//
//     https://github.com/dgraph-io/ratel/blob/master/LICENSE

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function BackupDeleteModal({ onHide, onDelete }) {
    return (
        <Modal show={true} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure to delete this item?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onDelete}>
                    Yes
                </Button>
                <Button onClick={onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}