export interface Course {
  id: number;
  description: string;
  iconUrl?: string;
  courseListIcon?: string;
  longDescription?: string;
  category: string;
  seqNo: number;
  lessonsCount?: number;
  promo?: boolean;
}