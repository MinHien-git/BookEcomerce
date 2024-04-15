import React from "react";

export default function OrdersPage() {
  return (
    <section className="w-full px-4">
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs table-pin-rows table-pin-cols">
            <thead>
              <tr className="[&>*]:text-black text-base">
                <th></th>
                <td className="text-center">Customer Name</td>
                <td className="text-center">Email</td>
                <td className="text-center">Phone number</td>
                <td className="text-center">Status</td>
                <td className="text-center">Detail</td>
              </tr>
            </thead>
            <tbody>
              {Array.apply(null, new Array(5)).map((item, index) => (
                <tr className="py-4 h-14">
                  <th>{index}</th>
                  <td className="text-center">Minh Hien</td>
                  <td className="text-center">hienb697@gmail.com</td>
                  <td className="text-center">0969970151</td>
                  <td className="bg-blue-500 text-white text-center">
                    Pending
                  </td>
                  <td className="flex justify-center">
                    <svg
                      fill="#000000"
                      height="16px"
                      width="16px"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32.055 32.055"
                    >
                      <g>
                        <path
                          d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
		C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
		s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
		c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"
                        />
                      </g>
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end py-4">
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
