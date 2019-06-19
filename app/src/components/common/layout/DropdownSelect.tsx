import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import { useTranslation } from 'react-i18next';

type LangNavItem = { value: string; name: string };

type Props = {
    title: string;
    id: string;
    defaultIndex: any;
    items: Array<LangNavItem>;
    onClick: (item: LangNavItem) => void;
};

// TODO: https://react-bootstrap.netlify.com/components/dropdowns/#dropdown-props

export const DropdownSelect = ({ title, defaultIndex, items, onClick }: Props) => {
    const [isOpen, setOpen] = useState(false);
    const [active, setActive] = useState(items[defaultIndex]);
    const { t } = useTranslation();

    const clickHandler = (item: LangNavItem) => {
        if (onClick instanceof Function) {
            onClick(item);
        }
        setActive(item);
    };

    return (
        <Dropdown
            show={isOpen}
            drop="down"
            onToggle={() => {
                setOpen(!isOpen);
            }}
        >
            <Dropdown.Toggle id="">{`${title}: ${t(active.name)}`}</Dropdown.Toggle>
            <Dropdown.Menu>
                {items.map((item, key) => (
                    <Dropdown.Item key={key} onClick={() => clickHandler(item)}>
                        {t(item.name)}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
