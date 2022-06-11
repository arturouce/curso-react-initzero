import { Alert } from "react-bootstrap"

const AlertMessage = ({ optionsAlert, setOptionsAlert }) => {

    const handleClose = () => {
        setOptionsAlert({
            ...optionsAlert,
            alertShow: false
        })
    }

    return (
        <Alert variant={optionsAlert.variant}
            show={optionsAlert.alertShow}
            className="position-fixed-message"
            onClose={() => handleClose(false)}
            dismissible>
            {optionsAlert.message}
        </Alert>
    )
}

export default AlertMessage