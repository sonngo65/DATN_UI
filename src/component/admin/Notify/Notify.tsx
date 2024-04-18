import { useEffect, useState } from "react";
import Overlay from "../../Overlay/Overlay";

export default function Notify({
  notify,
  setNotify,
}: {
  notify: string;
  setNotify: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [isShow, setIsShow] = useState<boolean>(true);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsShow(false);
      setNotify(null);
    }, 2000);
    return () => {
      console.log("clear");
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <>
      <div
        className={`notify position-fixed  end-0 start-0 translate-y-middle ${
          isShow ? "d-block" : "d-none"
        }`}
      >
        <h5 className="">{notify}</h5>
      </div>
      <Overlay
        isOpen={isShow}
        handleOpen={() => setIsShow((pre) => !pre)}
        className="bg-transparent"
      />
    </>
  );
}
