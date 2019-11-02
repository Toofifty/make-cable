import React, { useLayoutEffect, useCallback, useState } from 'react';
import Cabler from './container/cabler';
import partOptions from './data/parts';
import { CablerState, PartOption } from './utils/types';
import mapDict, { Dict } from './utils/mapDict';

const App: React.FC = () => {
    const [initialState, setInitialState] = useState<CablerState | undefined>(
        undefined
    );

    const parseStateFromUrl = useCallback(() => {
        try {
            const hash = window.location.hash.replace('#', '');
            const { parts, notes } = JSON.parse(atob(hash));
            setInitialState({
                parts: mapDict(parts, (key, value) => [
                    key,
                    (partOptions as any)[key].find(
                        (option: PartOption) =>
                            JSON.stringify(option.value) ===
                            JSON.stringify(value)
                    ),
                ]),
                notes,
            });
        } catch {}
    }, []);

    const updateUrl = useCallback(({ parts, notes }: CablerState) => {
        const data = {
            parts: mapDict(parts as Dict, (key, value) => [
                key,
                value && value.value,
            ]),
            notes,
        };
        const newUrl = `#${btoa(JSON.stringify(data))}`;
        if (window.location.hash !== newUrl) {
            window.history.pushState(data, '', newUrl);
        }
    }, []);

    useLayoutEffect(() => {
        parseStateFromUrl();

        window.addEventListener('popstate', parseStateFromUrl);

        return () => {
            window.removeEventListener('popstate', parseStateFromUrl);
        };
    }, [parseStateFromUrl]);

    return (
        <Cabler
            allOptions={partOptions}
            onUpdate={updateUrl}
            initialState={initialState}
        />
    );
};

export default App;
