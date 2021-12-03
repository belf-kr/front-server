import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import * as S from "./style";

import { postFile } from "../../../libs/storage";
import { EditNode, ImageNode } from "../../../types/components-type/editer";

type props = {
  nodeItem: EditNode;
  setNodeList: Dispatch<SetStateAction<EditNode[]>>;
};

export default function EditImageArea({ nodeItem, setNodeList }: props): JSX.Element {
  const hiddenFileInput = useRef(null);

  const [preview, setPreview] = useState(<></>);
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

        setNodeList((prevNode) => prevNode.map((node) => (node.id === nodeItem.id ? nodeItem : node)));
      })();
    }
  }, [imageFile]);

  const handleFileOnChange = (event) => {
    event.preventDefault();
    const reader: FileReader = new FileReader();
    const file: File = event.target.files[0];
    reader.onloadend = () => {
      setImageFile({ file: file, previewURL: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <S.ImageInput type="file" accept="image/jpg,impge/png,image/jpeg,image/gif" onChange={handleFileOnChange} ref={hiddenFileInput} />
      <S.ImagePreviewBox>
        {preview}
        <S.ImageNameText>{imageFile ? `${imageFile.file.name} (${percentCompleted})` : null}</S.ImageNameText>
      </S.ImagePreviewBox>
    </>
  );
}