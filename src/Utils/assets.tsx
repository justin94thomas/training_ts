import { CiBoxList } from "react-icons/ci";
import { TbBrandBlogger } from "react-icons/tb";
import { FaWindowClose, FaChartArea, FaShoppingBag } from "react-icons/fa";
import { MdCalculate } from "react-icons/md";
import { IconType } from "react-icons";

export const icons: Record<string, IconType> = {
    Shopping: FaShoppingBag,
    Todo: CiBoxList,
    Blog: TbBrandBlogger,
    CloseBox: FaWindowClose,
    TestDome: MdCalculate,
    ECharts: FaChartArea
};
