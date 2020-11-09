import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import ConfigProvider from './contexts/Config';
import MoviesProvider from './contexts/Movies';

interface ComposeProps {
    components: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>
    children: React.ReactNode
}

function Compose(props: ComposeProps) {
    const { components = [], children } = props;

    return (
        <>
            {components.reduceRight((acc, Comp) => {
                return <Comp>{acc}</Comp>
            }, children)}
        </>
    )
}

ReactDOM.render(
    <Compose components={[ConfigProvider, MoviesProvider]}>
        <App />
    </Compose>,
    document.getElementById('root')
);