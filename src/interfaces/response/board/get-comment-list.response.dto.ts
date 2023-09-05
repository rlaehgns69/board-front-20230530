import ResponseDto from '../response.dto';


export default interface GetCommentListResponseDto extends ResponseDto {
  commentList: CommentListResponseDto[];
}

export interface CommentListResponseDto {
  profileImageUrl: string;
  nickname: string;
  writeDatetime: string;
  contents: string;
}