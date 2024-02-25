import { } from "react";
const ProductVariantRadio = ({ id, value, label,checked, onChange }) => {

 
    return (
     
      <div id={id} className="relative flex items-center mt-2 mr-2">
  <label className="cursor-pointer text-blue">
    <input
      id={id}
      type="radio"
      value={value}
      className="peer sr-only"
      name="pricing"
      checked={checked}
      onChange={onChange}
    />
    <div className={!checked?"w-10 h-10 max-w-xl bg-gray-200 rounded-md p-3 text-gray-700 ring-2 ring-transparent transition-all hover:shadow mr-1":"border border-black w-10 h-10 max-w-xl bg-gray-200 rounded-md p-3 text-gray-700 ring-2 ring-transparent transition-all hover:shadow mr-1"}>
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-center">
          <p className={!checked ? "text-md font-semibold uppercase text-gray-700" : "text-md font-semibold uppercase text-sky-700"}>{label}</p>
        </div>
      </div>
    </div>
  </label>
</div>

    );
  };
  export default ProductVariantRadio;