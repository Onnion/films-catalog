import React from 'react';
import { Genrer as GenrerModel } from '../../models/Movie';
import { Badge } from './styles';

export interface GenrerProps {
    readonly genrer: GenrerModel;
}

export const Genrer: React.FC<GenrerProps> = (props: GenrerProps) => {
    return (
        <Badge>{props.genrer.name}</Badge>
    );
}

export default Genrer;