package com.sist.jwt_0310.domain.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.jwt_0310.domain.bbs.entity.service.BbsService;
import com.sist.jwt_0310.domain.member.entity.Member;

import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/members")
public class ApiV1MemberController {

    private final BbsService bbsService;

    @GetMapping("") // /api/v1/members에서 요청이 끝나면 무조건 여기가 실행이됨.
    public List<Member> members() {
        //여기서 만들어진 List가 JSON형태로 넘어간다.
        List<Member> list = new ArrayList<>();
        //따로 만들지 않아도, Member에서 사용한 어노테이션 덕에 자동으로 생긴다.
        list.add(new Member("A100", "1212"));
        list.add(new Member("B101", "1213"));
        list.add(new Member("C102", "1214"));

        return list;
    }
}
