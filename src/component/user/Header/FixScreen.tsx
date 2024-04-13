import { IoChatbox, IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
export default function FixScreen() {
  return (
    <div className="fix-screen  p-1 p-lg-2 pt-lg-3 pb-lg-3 d-flex flex-column">
      <a
        className="mt-lg-1 ml-1 mb-lg-1 mr-1 ml-lg-0 mr-lg-0 chat-box d-flex align-items-center justify-content-center"
        href="#"
      >
        <IoChatbox />
      </a>
      <a
        className="mt-lg-1 ml-1 mb-lg-1 mr-1 ml-lg-0 mr-lg-0 phone-box d-flex align-items-center justify-content-center"
        href=""
      >
        <LuPhoneCall />
      </a>
      <a
        className="mt-lg-1 ml-1 mb-lg-1 mr-1 ml-lg-0 mr-lg-0 phone-box d-flex align-items-center justify-content-center"
        href=""
      >
        <LuPhoneCall />
      </a>
      <a
        className="mt-lg-1 ml-1 mb-lg-1 mr-1 ml-lg-0 mr-lg-0 phone-box d-flex align-items-center justify-content-center"
        href=""
      >
        <LuPhoneCall />
      </a>
    </div>
  );
}
