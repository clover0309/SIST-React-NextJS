package com.sist.jwt_0310.domain.bbs.entity.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.sist.jwt_0310.domain.bbs.entity.Bbs;
import com.sist.jwt_0310.domain.bbs.entity.repository.BbsRepository;
import com.sist.jwt_0310.global.jpa.BaseEntity;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BbsService {
    //final로도 지정을 할 수 있음. (변경하지 않는다 가정할 시 에만.)
    private final BbsRepository bbsRepository;

    public List<Bbs> getList(){
        return bbsRepository.findAll();
    }

    //기본키로 하나의 게시물 검색하는 기능.
    public Optional<Bbs> getBbs(Long b_idx) {
        return bbsRepository.findById(b_idx);
    }

    public Bbs create(String title, String writer, String content) {
        //부모가 가지고 있는 변수에 값도 채울 수 있다.
        // new Bbs를 사용한다하면, 잘못된 값이 들어간다하면, 자료형이 같다고하면 그대로 들어가서
        // 값이 잘못들어가는 문제점이 생길 수 있기 때문에, builder타입을 사용하고 build를 사용하는게 낫다.
        Bbs bbs = Bbs.builder()
                .title(title)
                .writer(writer)
                .content(content).build();

        return bbsRepository.save(bbs);
    }
}
