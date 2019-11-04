import React from 'react';
import { Length, PartOption } from 'utils/types';
import { isLength } from 'utils/typecheck';

const ColorOption: React.FC<{ classPrefix: string; color: string }> = ({
    classPrefix,
    color,
}) => (
    <div
        className={`${classPrefix}color`}
        style={{ ['--color' as any]: color }}
    />
);

const PatternOption: React.FC<{ classPrefix: string; pattern: string }> = ({
    classPrefix,
    pattern,
}) => <img className={`${classPrefix}pattern`} src={pattern} />;

const IconOption: React.FC<{ classPrefix: string; Icon: React.FC }> = ({
    classPrefix,
    Icon,
}) => (
    <span className={`${classPrefix}icon`}>
        <Icon />
    </span>
);

const LengthOption: React.FC<{ classPrefix: string; length: Length }> = ({
    classPrefix,
    length,
}) => (
    <span className={`${classPrefix}icon`}>
        {`${length.value}${length.units}`}
    </span>
);

const UnknownOption: React.FC<{ classPrefix: string }> = ({ classPrefix }) => (
    <span className={`${classPrefix}icon`}>?</span>
);

const Option: React.FC<{
    classPrefix: string;
    option: PartOption<any>;
}> = ({ classPrefix, option }) => {
    if (option.pattern)
        return (
            <PatternOption pattern={option.pattern} classPrefix={classPrefix} />
        );
    if (option.icon)
        return <IconOption Icon={option.icon} classPrefix={classPrefix} />;
    if (option.color)
        return <ColorOption color={option.color} classPrefix={classPrefix} />;
    if (isLength(option.value))
        return <LengthOption length={option.value} classPrefix={classPrefix} />;
    return <UnknownOption classPrefix={classPrefix} />;
};

export default Option;
