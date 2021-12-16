import * as S from "./style";

import { Tag as TagType } from "../../../types/components-type/course";

import TagItem from "../TagItem";

type props = {
  tagList?: TagType[];
};

export default function HashTagList({ tagList }: props): JSX.Element {
  return <S.TagListBox>{tagList[0].value ? tagList.map((tagItam: TagType, i: number) => <TagItem key={"tag" + i} tagItem={tagItam} />) : <></>}</S.TagListBox>;
}
