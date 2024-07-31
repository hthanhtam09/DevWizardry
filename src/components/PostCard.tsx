import React from "react";
import {
  Card as CardContainer,
  CardHeader,
  CardBody,
  Image,
  Link,
  CardFooter,
  useDisclosure,
} from "@nextui-org/react";
import { IPostCard } from "@/types";
import { MAX_VISIBLE_TAGS } from "@/constants";
import { convertSecondToMinutes, formatDatePost } from "@/utils";
import { useRouter } from "next/navigation";
import ModalComponent from "./Modal";

interface PostCardProps {
  data: IPostCard;
}

const PostCard = ({ data }: PostCardProps) => {
  const {
    id,
    avatar,
    comments,
    createdAt,
    hashTag,
    image,
    upvote,
    secondsRead,
    title,
    description,
  } = data;
  const router = useRouter();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  const iconData = [
    { title: upvote, name: "upvote", src: "/images/upvote.svg" },
    { title: comments, name: "comment", src: "/images/comment.svg" },
    { title: null, name: "bookmark", src: "/images/bookmark.svg" },
    { title: null, name: "copylink", src: "/images/copylink.svg" },
  ];

  const redirectPostDetail = (id: string) => {
    console.log("id", id);
    router.push(`/${id}`);
  };

  return (
    <article
      className="
        w-full
        h-[50vh]
        rounded-xl
        bg-[#1d1f26]
        "
      onClick={() => onOpen()}
    >
      <CardContainer
        className="py-4 cursor-pointer"
        onClick={() => redirectPostDetail(id)}
      >
        <CardHeader className="pb-0 pt-2 flex-col items-start">
          <Image src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <h3 className="font-bold text-large h-24">{title}</h3>
          <div className="flex gap-2">
            {hashTag.slice(0, MAX_VISIBLE_TAGS).map((tag, index) => (
              <Link
                href="#"
                className="text-gray-500 rounded-lg border border-slate-600 p-2 text-xs"
                key={`${tag}_${index}`}
              >
                #{tag}
              </Link>
            ))}
            {hashTag.length > MAX_VISIBLE_TAGS && (
              <span className="text-gray-500 rounded-lg border border-slate-600 p-2 text-xs">
                +{hashTag.length - MAX_VISIBLE_TAGS} tags
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 pt-4 pb-2 pl-2">
            <span className="text-xs text-gray-400">
              {formatDatePost(createdAt)}
            </span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-400">
              {convertSecondToMinutes(secondsRead)}m read time
            </span>
          </div>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={"100%"}
          />
        </CardBody>
        <CardFooter className="overflow-visible py-2 flex justify-between items-center">
          {iconData.map((icon, index) => (
            <div className="flex items-center" key={`${icon.name}_${index}`}>
              <Image
                src={icon.src}
                alt={`${icon.name} icon`}
                className="w-6 h-6"
              />
              {icon.title !== null ? (
                <span className="text-sm font-bold text-[#AEADAD] pl-4">
                  {icon.title}
                </span>
              ) : null}
            </div>
          ))}
        </CardFooter>
      </CardContainer>
      <ModalComponent
        id={id}
        title={title}
        description={description}
        image={image}
        hashTag={hashTag}
        createdAt={createdAt}
        secondsRead={secondsRead}
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
    </article>
  );
};

export default PostCard;
