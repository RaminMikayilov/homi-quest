import { IconType } from 'react-icons';
import { MdCabin } from 'react-icons/md';
import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';
import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';
import { GoContainer } from 'react-icons/go';

enum CategoryLabel {
    CABIN = 'cabin',
    TENT = 'tent',
    AIRSTREAM = 'airstream',
    COTTAGE = 'cottage',
    CONTAINER = 'container',
    CARAVAN = 'caravan',
    TINY = 'tiny',
    MAGIC = 'magic',
    WAREHOUSE = 'warehouse',
    LODGE = 'lodge',
}

type Category = {
    label: CategoryLabel;
    icon: IconType;
};

export const categories: Category[] = [
    {
        label: CategoryLabel.CABIN,
        icon: MdCabin,
    },
    {
        label: CategoryLabel.AIRSTREAM,
        icon: PiVan,
    },
    {
        label: CategoryLabel.TENT,
        icon: TbTent,
    },
    {
        label: CategoryLabel.COTTAGE,
        icon: TbBuildingCottage,
    },
    {
        label: CategoryLabel.CONTAINER,
        icon: GoContainer,
    },
    {
        label: CategoryLabel.CARAVAN,
        icon: TbCaravan,
    },
    {
        label: CategoryLabel.TINY,
        icon: GiWoodCabin,
    },
    {
        label: CategoryLabel.MAGIC,
        icon: GiMushroomHouse,
    },
    {
        label: CategoryLabel.WAREHOUSE,
        icon: PiWarehouse,
    },
    {
        label: CategoryLabel.LODGE,
        icon: PiLighthouse,
    },
];