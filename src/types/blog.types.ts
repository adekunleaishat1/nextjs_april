export type BlogInput = {
    id:string;
    title: string;
    slug?: string;
    content: string;
    authorId?: string;
    tags: string[];
    coverImageUrl: string;
    publishedAt?: Date;
    category: string;
    createdAt?: Date;
    updatedAt?: Date;
};
  