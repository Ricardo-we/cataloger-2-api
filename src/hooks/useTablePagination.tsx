import { useState } from "react";

export function useTablePagination(){
    const [page, setPage] = useState<number>(0);
	const [limit, setLimit] = useState<number>(10);

    const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number,
	) => {
		setPage(newPage);
	};

	const handleChangeLimit = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setLimit(parseInt(event.target.value, 10));
		setPage(0);
	};

    return {page, setPage, limit, setLimit, handleChangePage, handleChangeLimit};
}