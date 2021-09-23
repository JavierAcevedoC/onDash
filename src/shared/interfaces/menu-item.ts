import { ICON } from '../types/icon-enum';
import { COLOR } from '../types/colors-enum';

export interface IMenuItem {
    name?: string;
    icon: ICON;
    color?: COLOR;
}

export default IMenuItem;
