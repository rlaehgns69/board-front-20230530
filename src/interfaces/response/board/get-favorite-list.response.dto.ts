import ResponseDto from '../response.dto';
import BoardListResponseDto from './board-list.response.dto';

export default interface GetFavoriteListResponseDto extends ResponseDto {
  favoriteList: FavoriteListResponseDto[];
}

export interface FavoriteListResponseDto {
  email: string;
  nickname: string;
  profileImageUrl: string;
}