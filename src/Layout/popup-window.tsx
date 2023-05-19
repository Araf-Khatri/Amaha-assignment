import { FC, Fragment } from "react";
import close from "./../Assets/close.svg";

type PopupWindowProps = {
  image: string;
  title: string;
  body: string;
  onCloseHandler: () => void;
};
// blog.cover, blog.metatitle, blog.body
const PopupWindow: FC<PopupWindowProps> = ({
  image,
  title,
  body,
  onCloseHandler,
}) => {
  return (
    <Fragment>
      <div
        onClick={() => onCloseHandler()}
        className="top-0 fixed h-screen w-screen bg-popupbg"
      ></div>
      <div className="top-1/2 left-1/2 fixed flex flex-col gap-2 -translate-x-1/2 -translate-y-1/2">
        <div
          onClick={() => onCloseHandler()}
          className="relative left-4 p-1 w-fit rounded-full bg-popupbg ml-auto "
        >
          <img src={close} alt="close button" />
        </div>
        <div className="grid grid-rows-popup w-max max-w-[30rem] lg:max-w-none h-[80vh] lg:w-full  bg-white rounded-2xl overflow-hidden">
          <div className="relative w-full lg:max-h-popupImg">
            <img
              src={`${image}`}
              alt="check"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6 p-10 overflow-y-scroll">
            <p className="text-2xl font-semibold">{title}</p>
            <p
              className="text-lg font-medium"
              dangerouslySetInnerHTML={{ __html: body }}
            ></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PopupWindow;
