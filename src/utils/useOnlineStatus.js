import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    const handleOnline = () => setOnlineStatus(true);
    const handleOffline = () => setOnlineStatus(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;

// import { useEffect, useState } from "react";

// const [onlineStatus, setOnlineStatus] = useState(true);

// const useOnlineStatus = () => {
//   //check if online

//   useEffect(() => {
//     window.addEventListener("offline", () => {
//       setOnlineStatus(false);
//     });
//     window.addEventListener("online", () => {
//       setOnlineStatus(true);
//     });
//   }, []);

//   return onlineStatus;
// };

// export default useOnlineStatus;
