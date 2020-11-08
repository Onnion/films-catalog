import React from 'react';
import { Full } from './styles';

interface Props {
    readonly children?: JSX.Element;
}

export const FullScreen: React.FC<Props> = (props: Props) => {
    return (
        <Full>
            {props.children}
        </Full>
    );
}

export default FullScreen;