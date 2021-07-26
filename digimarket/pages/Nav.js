export default function Nav () {
  return (
    <div className="flex flex-row">
      <div className="">
        <ul className="flex  text-white flex-row text-sm bg-green-500 mx-4">
          <li className="flex ">
            <div>
              <a href="#">
                صفحه اصلی
              </a>
            </div>

          </li>
          <li>
            <div>
              <a href="#">
                محصولات
              </a>
            </div>

          </li>
          <li>
            <div>
              <a href="#">
                عضویت
              </a>
            </div>

          </li>
          <li>
            <div>
              <a href="#">
                ارتبا با ما
              </a>
            </div>

          </li>
        </ul>
      </div>
      <div className="">
        <input
          className="border-2 rounded-md flex text-center"
          type="text"
          placeholder="Search"
        />
      </div>

    </div>
  );
}
