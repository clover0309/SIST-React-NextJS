package com.sist.jwt_0310.global.initData;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import com.sist.jwt_0310.domain.bbs.entity.service.BbsService;

@Configuration
//실질적으로 서버에 올라가는 대상이 아님.
@Profile({"dev","test"})
public class NotProduct {
    //더미 데이터(개발 때와 테스트때만 미리 데이터들을 넣어주기 위해 사용함.)
    @Bean
    CommandLineRunner initData(BbsService bbsService){
        //람다식, {}안의 값들이 전부 담겨서 보내짐.
        return args -> {
            bbsService.create("제목1", "마루치", "테스트입니다1.");  
            bbsService.create("제목2", "Michael", "테스트입니다2.");
            bbsService.create("제목3", "일지매", "테스트입니다3.");
            bbsService.create("제목4", "Smith", "테스트입니다4.");
        };
    }
}
