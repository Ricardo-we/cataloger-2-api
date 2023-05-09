import { useEffect, useState } from "react";

export default function useImport(
	moduleName?: string,
	moduleImportKey: string = "default",
) {
	const [module, setModule] = useState<any>({});

	const getModule = () => {
		if (!moduleName) return;
		import(moduleName)
			.then((foundedModule) => setModule(foundedModule[moduleImportKey]))
			.catch((err) => {
				setModule({});
			});
	};

	useEffect(() => {
		getModule();
	}, [moduleName]);

	return [module, setModule];
}
