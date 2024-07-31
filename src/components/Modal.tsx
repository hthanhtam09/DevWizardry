import { convertSecondToMinutes, formatDatePost } from "@/utils";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Image,
  Link,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

type ModalProps = {
  id: string;
  isOpen: boolean;
  title: string;
  description: string;
  hashTag: string[];
  image: string;
  createdAt: string;
  secondsRead: number;
  onClose: () => void;
  onOpenChange: () => void;
};

export default function ModalComponent(props: Readonly<ModalProps>) {
  const {
    id,
    title,
    description,
    image,
    createdAt,
    secondsRead,
    hashTag,
    isOpen,
    onClose,
    onOpenChange,
  } = props;

  const router = useRouter()

  return (
    <Modal
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={onClose}
      scrollBehavior={"inside"}
      size="5xl"
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-3xl">
              {title}
            </ModalHeader>
            <ModalBody>
              <p>{description}</p>
              <div className="flex justify-center, items-center gap-2">
                {hashTag.map((tag, index) => (
                  <Link
                    href="#"
                    className="bg-[##2d333d] text-gray-200 font-bold rounded-lg border border-slate-600 p-2 text-sm"
                    key={`${tag}_${index}`}
                  >
                    #{tag}
                  </Link>
                ))}
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
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src={image}
                  width={"80%"}
                  onClick={() => router.push(`/blog/${id}`)}
                />
            </ModalBody>
            <ModalFooter>
              {/* <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
