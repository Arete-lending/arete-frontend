import { Card } from 'antd';
import { useEffect, useState } from 'react';

const EpochCard = () => {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);
  const next = new Date('23 Dec 2023 00:00:00').getTime();
  const timeLeft = next - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 600 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  const format = (str: number) => ('0' + str).slice(-2);
  return (
    <Card>
      <p>Next Epoch: Epoch #1</p>
      <p>12/23/23 UTC</p>
      <p>
        Starting in: {format(days)} Day {format(hours)}:{format(minutes)}:{format(seconds)}
      </p>
    </Card>
  );
};

export default EpochCard;
