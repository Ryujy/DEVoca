package com.ssafy.devoca.board.service;

import com.ssafy.devoca.board.model.BoardDTO;

import java.util.List;

public interface BoardService {
    List<BoardDTO> getBoardList(Integer boardType) throws Exception;
    void deleteBoard(Integer boardId, Integer userIdx) throws Exception;
    void createBoard(BoardDTO boardDTO) throws Exception;
}
