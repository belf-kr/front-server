import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { getLocalStorageAccessToken, TokenRefresh } from "../../../libs/oauth";
import { EditNode } from "../../../types/components-type/editer";
// import * as S from "./style";

const Image = styled.img`
  width: 100px;
  float: left;
  border-radius: 10px;
`;

const ImagePreviewBox = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageNameText = styled.a`
  color: ${({ theme }) => theme.fontColor.sub};
  font-size: ${({ theme }) => theme.common.fontSize.s200}px;
  margin: auto 0px;
`;

type props = {
  nodeItem: EditNode;
  setNodeList: Dispatch<SetStateAction<EditNode[]>>;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      setPreview(<Image src={imageFile.previewURL}></Image>);

      (async () => {
        async function work() {
          const accessToken = getLocalStorageAccessToken();
          const config = {
            onUploadProgress: (progressEvent) => {
              setPercentCompleted(Math.round((progressEvent.loaded * 100) / progressEvent.total) + "%");
            },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };

          const data = new FormData();
          data.append("file", imageFile.file);

          axios
            .post("https://storage.qa.belf.xyz/api/v1/upload", data, config)
            .then((res) => console.log("test" + res))
            .catch((err) => console.log(err));
        }
        try {
          return await work();
        } catch (error) {
          if (error instanceof Error) {
            if (axios.isAxiosError(error)) {
              switch (error.response?.status) {
                case 401:
                  await TokenRefresh();
                  return await work();
              }
            }
          }
          throw new Error("postNewTodo() 에러");
        }
      })();
    }
  }, [imageFile]);

  const handleFileOnChange = (event) => {
    event.preventDefault();
    const reader: FileReader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setImageFile({ file: file, previewURL: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <ImageInput type="file" accept="image/jpg,impge/png,image/jpeg,image/gif" onChange={handleFileOnChange} ref={hiddenFileInput} />
      <ImagePreviewBox>
        {preview}
        <ImageNameText>
          {imageFile?.file.name}({percentCompleted})
        </ImageNameText>
      </ImagePreviewBox>
    </>
  );
}
