import { Action } from "../../types/Action";
import { LanguageObj } from "../../types/Language";
import { LanguageUtils } from "./language.utils";

<<<<<<< HEAD
export const actionTypes = {
  create: "create",
  add: "add",
  edit: "edit",
  delete: "delete",
  other: "other",
};

export const getActions = (actions?: string) =>
  actions === "*" ? Object.values(actionTypes) : actions?.split(",");

export const filterValidActions = (
  validActions: string,
  actions: Array<Action>
) =>
  actions.filter(action =>
    getActions(validActions)?.includes(action?.type ?? "")
  );

export const getAvailableActions = (
  actions?: string,
  selectorTypeCode?: string,
  language?: LanguageObj,
  invalidActions: string[] = [],
  actionTypeNames = {
    create: "create",
    edit: "edit",
    delete: "delete",
  }
) => {
  if (!actions || !selectorTypeCode || !language) return [];

  const validActions = getActions(actions);
  const allActions = [
    {
      type: actionTypeNames.create,
      label: LanguageUtils.rawProcessDynamicLabel(language, `action.add`, [
        language?.getTranslation(`selectors.${selectorTypeCode}`),
      ]),
    },
    {
      type: actionTypeNames.edit,
      label: LanguageUtils.rawProcessDynamicLabel(language, `action.edit`, [
        language?.getTranslation(`selectors.${selectorTypeCode}`),
      ]),
    },
    {
      type: actionTypeNames.delete,
      label: LanguageUtils.rawProcessDynamicLabel(language, `action.delete`, [
        language?.getTranslation(`selectors.${selectorTypeCode}`),
      ]),
    },
  ];

  if (actions === "*")
    return allActions.filter(action => !invalidActions?.includes(action.type));
  return allActions.filter(
    action =>
      !invalidActions?.includes(action.type) &&
      validActions?.includes(action.type)
  );
=======

export const actionTypes = {
	create: "create",
	add: "add",
	edit: "edit",
	delete: "delete",
	other: "other"
};

export const getActions = (actions?: string) => actions === "*" ? Object.values(actionTypes) : actions?.split(",");

export const filterValidActions = (validActions: string, actions: Array<Action>) =>
	actions.filter((action) => getActions(validActions)?.includes(action?.type ?? ""));

export const getAvailableActions = (
	actions?: string,
	selectorTypeCode?: string,
	language?: LanguageObj,
	invalidActions: string[] = [],
	actionTypeNames = {
		create: "create",
		edit: "edit",
		delete: "delete",
	},
) => {
	if (!actions || !selectorTypeCode || !language) return [];

	const validActions = getActions(actions);
	const allActions = [
		{
			type: actionTypeNames.create,
			label: LanguageUtils.rawProcessDynamicLabel(
				language,
				`action.add`,
				[language?.getTranslation(`selectors.${selectorTypeCode}`)],
			),
		},
		{
			type: actionTypeNames.edit,
			label: LanguageUtils.rawProcessDynamicLabel(
				language,
				`action.edit`,
				[language?.getTranslation(`selectors.${selectorTypeCode}`)],
			),
		},
		{
			type: actionTypeNames.delete,
			label: LanguageUtils.rawProcessDynamicLabel(
				language,
				`action.delete`,
				[language?.getTranslation(`selectors.${selectorTypeCode}`)],
			),
		},
	];

	if (actions === "*")
		return allActions.filter(
			(action) => !invalidActions?.includes(action.type),
		);
	return allActions.filter(
		(action) =>
			!invalidActions?.includes(action.type) &&
			validActions?.includes(action.type),
	);
>>>>>>> f3d221612365ef0158bda0608cb83552dd3c74e9
};
