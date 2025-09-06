import React from "react";
import { Experience } from "@/lib/schemas";
import { Card, CardContent } from "@/components/ui/card";
import TimelineItem from "@/components/TimelineItem";

interface Props {
  experience: Experience[];
}

const Timeline = ({ experience }: Props) => {
  return (
    <Card>
      <CardContent className="p-0">
        <ul className="ml-10 border-l">
          {experience.map((exp, id) => (
            <TimelineItem key={id} experience={exp} />
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default Timeline;
