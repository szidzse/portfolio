import React from "react";
import { Project } from "@/lib/schemas";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/Icon";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const { name, href, description, image, tags, links } = project;

  return (
    <Card className="flex flex-col">
      <CardHeader>
        {image && (
          <Link href={href || image}>
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top"
            />
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle>{name}</CardTitle>
        <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
          <Markdown>{description}</Markdown>
        </div>
      </CardContent>
      <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.toSorted().map((tag) => (
              <Badge
                key={tag}
                className="px-1 py-0 text-[10px]"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.toSorted().map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  <Icon name={link.icon} className="size-3" />
                  {link.name}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
