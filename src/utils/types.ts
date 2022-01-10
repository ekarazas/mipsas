export interface Study {
  id: string;
  createdAt: string;
  updatedAt: string;
  imagesCount: number;
  name: string;
  statusKey: string;
  studyThumbnail: string;
  tags: string | number[];
}

export type StudyCardProps = {
  id: string;
  updatedAt: string;
  name: string;
  statusKey: string;
  studyThumbnail: string;
};
