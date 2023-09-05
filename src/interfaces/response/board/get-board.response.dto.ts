import ResponseDto from '../response.dto';
import BoardListResponseDto from './board-list.response.dto';

export default interface GetBoardResponseDto extends ResponseDto {
  boardNumber: number;
  title: string;
  contents: string;
  imageUrl: string | null;
  writeDatetime: String;
  writerProfileImage: string | null;
  writerNickname: string;
  writerEmail: string;
}