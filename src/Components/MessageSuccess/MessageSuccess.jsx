import React from 'react';

// MUI
import  Alert from "@mui/material/Alert";

const MessageSuccess = ({ purchaseID }) => {
    return (
        <div>
            <Alert severity="success">
                Thank you for your purchase — <strong>Your ID is: {purchaseID}</strong>
            </Alert>
        </div>
    );
};

export default MessageSuccess;