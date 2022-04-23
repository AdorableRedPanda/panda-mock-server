import React from 'react';

export const getObjectResolver = (space: number = 0) => (obj: unknown) => (<pre className="margin-0">{ JSON.stringify(obj, null, space) }</pre>);

export const timestampResolver = (timestamp: number) => (new Date(timestamp)).toLocaleTimeString();