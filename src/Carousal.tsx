import React, { useEffect, useRef, useState } from 'react';
import './style.css';

interface CarouselItem {
  id: number;
  image: string;
  name: string;
  title: string;
}

interface CarouselProps {
  data: CarouselItem[];
}

export default function Carousel({ data }: CarouselProps) {
  const [active, setActive] = useState<number>(0);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, []);

  const start = () => {
    interval.current = setInterval(() => {
      setActive((prev) => {
        if (prev === data.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);
  };

  const stop = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  };

  const handlePrevClick = () => {
    stop();
    setActive((prev) => {
      if (prev === 0) {
        return data.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const handleNextClick = () => {
    stop();
    setActive((prev) => {
      if (prev === data.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div className="carousel">
      {data.map(({ image, title, id }, index) => {
        return (
          <div
            key={id}
            className={
              active === index ? 'carousel-item active' : 'carousel-item'
            }
          >
            <img
              src={image}
              alt={title}
              onMouseLeave={start}
              onMouseOver={stop}
            ></img>
          </div>
        );
      })}
      <button className="prev" onClick={handlePrevClick}>
        &lt;
      </button>
      <button className="next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
}
