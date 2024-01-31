package com.ssafy.devoca.card.model;

import lombok.Data;

import java.sql.Timestamp;

@Data
public class CardDTO {
    // 카드 등록, 상세조회, 수정에 사용
    private String userId;
    private String userNickName;
    private String userIntro;
    private String userImg;

    private int wordId;
    private String wordNameKr;
    private String wordNameEn;
    private String wordSumm;
    private String wordCategory;    // 카드 목록 조회에서 사용하는 대표 카테고리 1개
    private String[] wordCategories;    //카테고리 전체 목록

    private int originCardId;
    private String originUserNickName;
    private String originUserImg;
    private String originCardContent;

    private int cardId;
    private String cardContent;
    private Boolean cardLikeYN;
    private int cardLikeCnt;
    private int cardRepostCnt;
    private String cardLink;
    private String[] cardRelationWords;
    private Timestamp cardRegistDate;
    private Timestamp cardUpdateDate;
    private int cardAccess;
}
