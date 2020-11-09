import React, { createContext, useState } from 'react';
import { API_KEY } from '../../env';
export interface ConfigProviderProps { children: React.ReactNode }
export interface ConfigProps {
    baseURL: string;
    configData: any,
    baseImageURL: string;
    apiKey: string;
}
export interface ConfigContextProps {
    config: ConfigProps;
    loadConfig: () => void
}

export const ConfigContext = createContext<ConfigContextProps | null>(null);

const ConfigProvider = ({ children }: ConfigProviderProps) => {
    const [config, setConfig] = useState<ConfigProps>({
        baseURL: 'https://api.themoviedb.org/3',
        apiKey: API_KEY,
        configData: null,
        baseImageURL: '',
    });

    async function loadConfig() {
        try {
            const url = `${config.baseURL}/configuration?api_key=${config.apiKey}`;
            const response = await fetch(url);
            const data = await response.json();
            const { images } = data;

            setConfig({
                ...config,
                baseImageURL: images.secure_base_url,
                configData: images
            });
        } catch (error) {
            console.log(error);
        }
    }

    const defaultValue: ConfigContextProps = { config, loadConfig };

    return (
        <ConfigContext.Provider value={defaultValue}>
            {children}
        </ConfigContext.Provider>
    );
};

export default ConfigProvider;