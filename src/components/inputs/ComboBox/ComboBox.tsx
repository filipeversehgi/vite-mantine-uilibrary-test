import { useEffect, useRef, useState } from 'react';

import { MultiSelect } from '@mantine/core';

import { ComboBoxProps } from './ComboBox.types';

export function ComboBox({ value, onChange, options, placeholder }: ComboBoxProps) {
  const multiSelectRef = useRef<HTMLInputElement | null>(null);
  const [showLimitMessage, setShowLimitMessage] = useState<boolean>(false);
  const [totalSelectedWidth, setTotalSelectedWidth] = useState(0);

  //   const empty = () => {
  //     return <div className={classes.item}>{`${value?.length} ${t('forms.selectedItems')}`}</div>;
  //   };

  const checkMultiSelectSize = (newValue: string[]) => {
    let deltaWidth = 0;
    newValue.forEach((option) => {
      deltaWidth += option.length * 8 + 40;
    });

    setTotalSelectedWidth(deltaWidth);
  };

  const handleChangeValues = (value: string[]) => {
    checkMultiSelectSize(value);
    onChange(value);
    multiSelectRef.current?.blur();
  };

  useEffect(() => {
    const multiSelectWidth = multiSelectRef.current?.parentElement?.offsetWidth;
    if (!multiSelectWidth) return;
    if (totalSelectedWidth === 0 && value.length > 0) {
      checkMultiSelectSize(value);
      return;
    }
    if (totalSelectedWidth > multiSelectWidth - 32) {
      setShowLimitMessage(true);
    } else {
      setShowLimitMessage(false);
    }
  }, [totalSelectedWidth, value]);

  return (
    <MultiSelect
      ref={multiSelectRef}
      //   className={classes.comboBox}
      data={options}
      placeholder={placeholder}
      height={40}
      searchable
      value={value}
      onChange={handleChangeValues}
      hidePickedOptions
    />
  );
}
