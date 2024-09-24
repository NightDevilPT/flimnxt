import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import { Icons } from '@/interfaces/icons.enum';

import { GoHomeFill } from "react-icons/go";
import { AiFillSetting } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";

interface IconProps {
  name: Icons;
  size?: number;
}

const IconComponent: React.FC<IconProps> = ({ name, size = 24 }) => {
  const iconMap: Record<Icons, JSX.Element> = {
    [Icons.LANGUAGE]: <GrLanguage size={size} />,
    [Icons.HOMEFILL]: <GoHomeFill size={size} />,
    [Icons.SETTINGFILL]: <AiFillSetting size={size} />,
    [Icons.CATEGORYFILL]: <BiSolidCategoryAlt size={size} />,
  };

  return (
    <div>
      {iconMap[name] || <span>Icon not found</span>}
    </div>
  );
};

export default IconComponent;
