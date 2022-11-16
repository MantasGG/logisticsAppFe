export interface ForumComment{
  id: number;
  title: string;
  body: string;
  comment:{
    id: number;
    forumId: number;
    replyId: number;
    comment: string;
  }

}
