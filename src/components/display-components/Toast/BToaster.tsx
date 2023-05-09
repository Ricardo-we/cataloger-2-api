import { FC } from "react";
import { ToastContainer, ToastContainerProps } from "react-toastify";

interface BToasterProps extends ToastContainerProps { }

const BToaster: FC<BToasterProps> = ({ ...props }) => {
    return (
        <ToastContainer
            {...props}
        />
    );
}

export default BToaster;