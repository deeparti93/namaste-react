import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  // this needs to be triggered only once, hence empty dependency array
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    // this event listener is of window object
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // need to remove the event listener when cmponent unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline; // returns boolean value
};

export default useOnline;
