import React from 'react';
import { DropdownSelect } from '@App/components/common/layout'

type Props = {
    setLocale: any,
    items: Array<any>
};

export const LanguageDropdown = ({ setLocale, items }: Props) => {
    return (
        <DropdownSelect
            id="some"
            title='Language'
            defaultIndex={ 0 }
            items={ items }
            onClick={setLocale}
        />
    );
}
