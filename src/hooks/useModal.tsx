import { Dispatch, SetStateAction, useEffect, useState } from "react";

export interface useModalInfo {
	visible: boolean;
	setVisible: Dispatch<SetStateAction<boolean>>;
	show: () => any;
	close: () => any;
}

export function useModal(defaultOpen: boolean = false) {
	const [visible, setVisible] = useState<boolean>(defaultOpen);

	const show = () => setVisible(true);
	const close = () => setVisible(false);

	// useEffect(() => {
	// 	setVisible(defaultOpen);
	// }, [defaultOpen])

	return {
		visible,
		setVisible,
		show,
		close,
	};
}
