import React from 'react';
import S, { Text } from 'components/Tooltip/Tooltip.styled';

export type TypeTooltip = {
  children: React.Component;
  title: string;
  minWidth: string;
  top?: string;
};

const Tooltip: React.FC<TypeTooltip> = ({ children, title, minWidth, top }) => {
  return (
    <S.ToolTip>
      {children}
      <Text top={top} minWidth={minWidth}>
        {title}
      </Text>
    </S.ToolTip>
  );
};

export default Tooltip;
