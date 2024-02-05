//package com.ssafy.devoca.dm.service;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.data.redis.core.RedisTemplate;
//import org.springframework.data.redis.listener.ChannelTopic;
//import org.springframework.stereotype.Service;
//
///**
// * 메시지 전송 시 레디스 topic에 저장
// *
// * @author kimjuyi
// */
//@Service
//@RequiredArgsConstructor
//@Slf4j
//public class RedisPublisher {
//
//    private final RedisTemplate<String, Object> redisTemplate;
//
//    public void publish(ChannelTopic channelTopic, String message) {
//        log.info("publish 호출 : {} {}", channelTopic, message);
//        redisTemplate.convertAndSend(channelTopic.getTopic(), message);
//    }
//
//}
