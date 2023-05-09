export const getSelectorItemName = (selectorItem: any, currentLan: string) => {
<<<<<<< HEAD
  // const { extra } = selectorItem;
  const extra = selectorItem?.extra ?? {};
  if (extra) {
    const { translations } = extra;
    if (translations) return translations[currentLan]?.name;
  }
  return selectorItem?.name;
};

export const getAutoCompleteSelectorItemOptionLabel = (
  option: any,
  user: any,
  selctorItemsDict: { [key: string]: any }
) =>
  !option?.label
    ? getSelectorItemName(selctorItemsDict?.[option], user?.language)
    : option?.label;
=======
    // const { extra } = selectorItem;
    const extra = selectorItem?.extra ?? {};
    if (extra) {
        const { translations } = extra
        if (translations) return translations[currentLan]?.name
    }
    return selectorItem?.name

}

export const getAutoCompleteSelectorItemOptionLabel = (option: any, user: any, selctorItemsDict: { [key: string]: any }) =>
    !option?.label
        ? getSelectorItemName(
            selctorItemsDict?.[option],
            user?.language,
        )
        : option?.label
>>>>>>> f3d221612365ef0158bda0608cb83552dd3c74e9
