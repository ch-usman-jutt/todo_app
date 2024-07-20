import PropTypes from "prop-types";
import Snackbar from "@mui/material/Snackbar";

function ToastMessage({ open, message, handleClose }) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={open}
      onClose={handleClose}
      message={message}
    />
  );
}

ToastMessage.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ToastMessage;
