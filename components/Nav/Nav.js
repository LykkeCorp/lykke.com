import React from 'react';
import Link from 'next/link';

import {NavWrapper, NavItem, NavItemActive} from './styled';

export const Nav = (props) => {
    return (
        <NavWrapper>
            {props.items.map(item => {
                const Item = item.active ? NavItemActive : NavItem;

                return (
                    <Item >
                        <Link href={item.href}>{item.text}</Link>
                    </Item>
                );
            })}
        </NavWrapper>
    )
}