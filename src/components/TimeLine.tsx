import { timelineData } from "../utils/content";
import { TimeLineElement } from "./TimeLineElement";

export const TimeLine: React.FC = () => {
  return (
    <>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timelineData.map((item, index) => (
          <TimeLineElement
            key={index}
            title={item.title}
            date={item.date}
            isFirst={item.isFirst}
            position={item.position}
          >
            {item.content}
          </TimeLineElement>
        ))}
      </ul>
    </>
  );
};
