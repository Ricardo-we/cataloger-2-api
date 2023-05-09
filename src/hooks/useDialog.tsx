import { useState } from "react";

export interface useDialogInfo {
	show: () => any;
	close: () => any;
	visible: boolean;
}

export function useDialog(): useDialogInfo {
	const [visible, setVisible] = useState<boolean>(false);

	return {
		show: () => setVisible(true),
		close: () => setVisible(false),
		visible,
	};
}
