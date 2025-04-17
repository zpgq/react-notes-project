import { useEffect, useState } from "react";

function CountDown() {
  const [countdown, setCountdown] = useState(10);
  // setcountdown使用回调能保证拿到上一次减完后的值
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        console.log("prevCountdown", prevCountdown);
        if (prevCountdown <= 1) {
          clearInterval(timer);
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      倒计时: 
      {countdown}
    </div>
  );
}

export default CountDown;
