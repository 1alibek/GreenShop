import { Modal, Select } from "antd";
import { useState } from "react";

import { UseSearchParams } from "../../../../hooks/useSearchParams";
import { title_category } from "../../../../utils";

import { CgMenuRightAlt } from "react-icons/cg";
import Categories from "../../categories";

const ProductsTitle = () => {
  const { setParam, getParam } = UseSearchParams();
  const range_min = getParam("range_min") || 0;
  const range_max = getParam("range_max") || 1000;
  const sort = getParam("sort") || "default-sorting";
  const type = getParam("type") || "all-plants";
  const category = getParam("category") || "house-plants";
  const handleChange = (value: string) => {
    setParam({ category, range_max, range_min, sort: value, type });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4 max-[320px]:gap-2">
        {title_category.map((value) => (
          <h3
            className={` text-[18px] max-[450px]:text-[14px] ${
              type === value.label &&
              "text-primary underline cursor-pointer font-medium"
            }`}
            onClick={() =>
              setParam({
                category,
                range_max,
                range_min,
                sort,
                type: value.label,
              })
            }
            key={value.id}
          >
            {value.title}
          </h3>
        ))}
      </div>
      <div>
        <button
          onClick={showModal}
          className="bg-primary hidden text-white font-medium  gap-2 px-3 py-2 rounded-md border border-primary transition-all duration-300 hover:bg-transparent hover:text-primary max-[1000px]:flex"
        >
          <CgMenuRightAlt className="text-xl max-[500px]:text-lg max-[450px]:text-sm" />
        </button>
        <div className="flex items-center gap-2 max-[1000px]:hidden">
          Short by:
          <Select
            defaultValue={sort}
            style={{ width: 150 }}
            onChange={handleChange}
            options={[
              { value: "default-sorting", label: "Default Sorting" },
              { value: "the-cheapest", label: "The Cheapest" },
              { value: "most-expensive", label: "Most Expansive" },
            ]}
          ></Select>
        </div>
      </div>
      <Modal
        title="Categories"
        onCancel={() => setIsModalOpen(false)}
        open={isModalOpen}
        footer={false}
      >
        <Categories />
      </Modal>
    </div>
  );
};

export default ProductsTitle;
