import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import * as S from "./style";

import { postFile } from "../../../libs/storage";
import { EditNode, ImageNode } from "../../../types/components-type/editer";
import { useSetRecoilState } from "recoil";
import { isImgUploadEventQueueState } from "../../../states/app";

type props = {
  nodeItem: EditNode;
  setNodeList: Dispatch<SetStateAction<EditNode[]>>;
};

export default function EditImageArea({ nodeItem, setNodeList }: props): JSX.Element {
  const setIsImgUploadEventQueue = useSetRecoilState(isImgUploadEventQueueState);

  const hiddenFileInput = useRef(null);

  const [preview, setPreview] = useState(<></>);
  const [fileUploadDateTime, setFileUploadDateTime] = useState<Date>();
  const [imageFile, setImageFile] = useState<any>();

  const [percentCompleted, setPercentCompleted] = useState("");

  useEffect(() => {
    hiddenFileInput.current.click();
  }, []);

  useEffect(() => {
    if (imageFile) {
      setPreview(<S.Image src={imageFile.previewURL}></S.Image>);

      const onUploadProgress = (progressEvent) => {
        setPercentCompleted(Math.round((progressEvent.loaded * 100) / progressEvent.total) + "%");
      };

      (async () => {
        const { headers } = await postFile(imageFile.file, onUploadProgress);
        (nodeItem.contents as ImageNode).name = imageFile.file.name;
        (nodeItem.contents as ImageNode).url = `${process.env.NEXT_PUBLIC_STORAGE_SERVER_URL}${headers.location}`;

        // 이미지 업로드 완료 플래그
        setIsImgUploadEventQueue((prev) => {
          return prev.map((x) => {
            if (x.fileUploadDateTime === fileUploadDateTime) {
              return {
                fileUploadDateTime: x.fileUploadDateTime,
                isUpLoad: true,
              };
            }
            return x;
          });
        });
        setFileUploadDateTime(undefined);
        setNodeList((prevNode) => prevNode.map((node) => (node.id === nodeItem.id ? nodeItem : node)));
      })();
    }
  }, [imageFile]);

  const handleFileOnChange = (event) => {
    event.preventDefault();
    const reader: FileReader = new FileReader();
    const file: File = event.target.files[0];

    const upLoadNowTime = new Date();
    setFileUploadDateTime(upLoadNowTime);
    setIsImgUploadEventQueue((prev) => {
      return [
        ...prev,
        {
          fileUploadDateTime: upLoadNowTime,
          isUpLoad: false,
        },
      ];
    });

    reader.onloadend = () => {
      setImageFile({ file: file, previewURL: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <S.ImageInput type="file" accept="image/jpg,image/png,image/jpeg,image/gif" onChange={handleFileOnChange} ref={hiddenFileInput} />
      <S.ImagePreviewBox>
        {preview}
        <S.ImageNameText
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
        >
          {imageFile?.file.name ?? ""}
        </S.ImageNameText>
        <S.ImageNameText>{percentCompleted ? `(${percentCompleted})` : ""}</S.ImageNameText>
      </S.ImagePreviewBox>
    </>
  );
}
