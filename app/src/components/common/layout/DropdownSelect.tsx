import React, { useState } from 'React';
import { navigation } from '@Config/navigation'
import {
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from '@bootstrap-styled/v4';

type LangNavItem = { value: string }

type Props = {
    title: string,
    defaultIndex: any,
    items: Array<LangNavItem>,
    onClick: (item: LangNavItem) => void
};

export const LanguageDropdown = ({ title, defaultIndex, items, onClick }: Props) => {
    const [isOpen, setOpen] = useState(false);
    const [active, setActive] = useState(items[defaultIndex]);

    const clickHandler = (item: LangNavItem) => {
        if (onClick instanceof Function) {
            onClick(item);
        }
        setActive(item);
    }

    return (
        <ButtonDropdown isOpen={isOpen} toggle={() => setOpen(!isOpen)}>
            <DropdownToggle caret>
                {`${title}: ${active}`}
            </DropdownToggle>
            <DropdownMenu>
                {items.map((item) => (
                    <DropdownItem onClick={() => clickHandler(item)}>Header</DropdownItem>
                ))}
            </DropdownMenu>
        </ButtonDropdown>
    )
}
