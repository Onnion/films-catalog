import React, { useState } from 'react';
import { MovieInformation } from '../../models/Movie';
import { Title } from './styles';

export interface MovieDetailInformationProps {
    readonly information: MovieInformation;
    readonly value: string;
}

export const MovieDetailInformation: React.FC<MovieDetailInformationProps> = (props: MovieDetailInformationProps) => {
    const [generators] = useState({
        currency: (value: string) => {
            try {
                const currency_options = { style: 'currency', currency: 'USD' };

                return parseInt(value).toLocaleString('en-IN', currency_options)
            } catch {
                return '$ 0.00';
            }
        },
        time: (value: string) => {
            try {
                const hour = Math.floor(parseInt(value) / 60);
                const min = parseInt(value) % 60;

                return `${hour}h ${min}min`;
            } catch {
                return '0h';
            }
        },
        default: (value: string) => value
    });
    const { information, value } = props;

    function generator(generatorType: 'currency' | 'time' | 'default', value: string) {
        return <>{generators[generatorType](value)}</>;
    }

    return (
        <>
            <Title>
                <h5>{information.title}</h5>
                <span>{generator(information.generator, value)}</span>
            </Title>
        </>
    );
}

export default MovieDetailInformation;