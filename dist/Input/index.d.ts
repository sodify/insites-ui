import React from 'react';
interface ComponentProps {
    hasError?: boolean;
    IconComponent?: any;
    tooltip?: string;
    [x: string]: any;
}
declare const _default: React.ForwardRefExoticComponent<Pick<ComponentProps, React.ReactText> & React.RefAttributes<unknown>>;
export default _default;
