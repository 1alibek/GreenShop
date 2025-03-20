import { Skeleton } from "antd";

const Loader = () => {
  const category_loader = () => {
    return Array.from({ length: 9 }).map((_, idx) => (
      <div key={idx} className="mt-2">
        <Skeleton.Input className="!w-full !h-[30px]" />
      </div>
    ));
  };
  const discount_loader = () => {
    return (
      <div className="w-full bg-[#eef7f1] text-center px-4 py-20px">
        <Skeleton.Input className="!w-full !h-[30px] !mt-[10px]" />
        <Skeleton.Input className="!w-full !h-[30px] !mt-[10px]" />
        <Skeleton.Image className="!w-full !h-[200px] !mt-[10px]" />
      </div>
    );
  };
  const card_loader = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div key={index}>
        <Skeleton.Image className="!w-full !h-[320px]" />
        <Skeleton />
      </div>
    ));
  };
  return { category_loader, discount_loader, card_loader };
};

export default Loader;
