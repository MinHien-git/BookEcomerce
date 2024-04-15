import React from "react";

export default function ProductPage() {
  return (
    <section className="w-full px-4">
      <div className="flex justify-between">
        <label className="input input-bordered flex items-center gap-2 text-gray-500 bg-orange-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Search for product"
          />
        </label>
        <button className="btn btn-active bg-orange-400 text-white px-8 text-xs">
          ADD PRODUCT
        </button>
      </div>
      <div>
        <div className="overflow-x-hidden mt-4">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="[&>*]:text-black">
                <th>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      title="all"
                    />
                  </label>
                </th>
                <th className="text-center text-base">Image</th>
                <th className="text-center text-base">Name</th>
                <th className="text-center text-base">Category</th>
                <th className="text-center text-base">Stock</th>
                <th className="text-center text-base">Price</th>
              </tr>
            </thead>
            <tbody className="py-4 h-14">
              {Array.apply(null, new Array(5)).map((i) => (
                <tr className="py-4">
                  <th>
                    <label>
                      <input
                        type="checkbox"
                        className="checkbox checkbox-sm"
                        title="item"
                      />
                    </label>
                  </th>
                  <td className="text-center flex justify-center">
                    <div className="h-24 aspect-square bg-blue-300"></div>
                  </td>

                  <td className="text-center w-2/5">Wild Symphony</td>

                  <td className="text-center">Comedy</td>
                  <td className="text-center">3</td>
                  <td className="text-center">$8.99</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-between py-4">
        <button className="btn btn-sm btn-active bg-orange-400 text-white px-8 text-sm">
          DELETE
        </button>
        <div className="join [&>.btn-active]:bg-orange-400 [&>.btn-active]:text-white">
          <button className="join-item btn btn-sm btn-active">1</button>
          <button className="join-item btn btn-sm">2</button>
          <button className="join-item btn btn-sm">3</button>
          <button className="join-item btn btn-sm">4</button>
        </div>
      </div>
    </section>
  );
}
