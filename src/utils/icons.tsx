import React from 'react';
import { GrLanguage } from 'react-icons/gr';
import { Icons } from '@/interfaces/icons.enum';

import { GoHomeFill } from "react-icons/go";
import { AiFillSetting } from "react-icons/ai";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TbMovie } from "react-icons/tb";
import { BsFillTvFill } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BiSolidMoviePlay } from "react-icons/bi";

interface IconProps {
  name: Icons;
  size?: number;
  className?: string;
}

const IconComponent: React.FC<IconProps> = ({ name, size = 24, className }) => {
  const iconMap: Record<Icons, JSX.Element> = {
    [Icons.LANGUAGE]: <GrLanguage size={size} className={className} />,
    [Icons.HOMEFILL]: <GoHomeFill size={size} className={className} />,
    [Icons.SETTINGFILL]: <AiFillSetting size={size} className={className} />,
    [Icons.CATEGORYFILL]: <BiSolidCategoryAlt size={size} className={className} />,
    [Icons.MOVIEFILL]: <TbMovie size={size} className={className} />,
    [Icons.TVFILL]: <BsFillTvFill size={size} className={className} />,
    [Icons.ARROWLEFT]: <IoIosArrowForward size={size} className={className} />,
    [Icons.ARROWRIGHT]: <IoIosArrowBack size={size} className={className} />,
    [Icons.LOGO]: <BiSolidMoviePlay size={size} className={className} />,
  };

  return (
    <div>
      {iconMap[name] || <span>Icon not found</span>}
    </div>
  );
};

export default IconComponent;
