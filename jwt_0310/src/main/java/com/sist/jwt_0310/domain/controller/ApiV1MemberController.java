package com.sist.jwt_0310.domain.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sist.jwt_0310.domain.member.entity.Member;
import com.sist.jwt_0310.domain.member.service.MemberService;
import com.sist.jwt_0310.global.result.ResultData;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/members")
public class ApiV1MemberController {

    @Autowired
    private MemberService memberService;

    @Autowired
    private HttpServletResponse response;
    
    @GetMapping("") // /api/v1/members에서 요청이 끝나면 무조건 여기가 실행이됨.
    public List<Member> members() {
        //여기서 만들어진 List가 JSON형태로 넘어간다.
        List<Member> list = new ArrayList<>();
        //따로 만들지 않아도, Member에서 사용한 어노테이션 덕에 자동으로 생긴다.
        // list.add(new Member("A100", "1212", "마루치"));
        // list.add(new Member("B101", "1213", "아라치"));
        // list.add(new Member("C102", "1214", "파란해골"));

        return list;
    }

    @PostMapping("/login")
    //넘어오는 데이터가 JSON이나 XML일때 RequestBody 사용
    public ResultData<Member> login(@RequestBody Member member) {
        int cnt = 0;
        String msg = "fail";

        //JWT를 통한 토큰을 생성하기.
        Member mem = memberService.authAndMakeToken(member.getMid(), 
        member.getMpwd());

        //accessToken을 하나 추가하겠다는 의미이다.
        ResponseCookie cookie = ResponseCookie.from("accessToken", 
            mem.getAccessToken())
            .path("/")
            .sameSite("none")
            .httpOnly(true)
            .secure(true)
            .build();
            //여기는 마음대로 사용하면 안됨. "Set-Cookie", cookie.toString()으로 써줘야함.
            //response는 HttpServletResponse 객체를 포함시켜줘야 사용이 가능함.
            response.addHeader("Set-Cookie", cookie.toString());

        if(mem != null) {
            cnt = 1;
            msg = "success";
        }

        return ResultData.of(cnt, msg, mem);
    }

    @GetMapping("/{mid}")
    public ResultData<Member> getMid(@PathVariable("mid") String mid) {
        return memberService.getMember(mid).map(
            //성공시 totalCount : 1과 , msg : success, data : m 를 반환함.
            m -> ResultData.of(1, "success", m)
            ).orElseGet(
            //실패시, totalCount: 0과 msg: fail, data: null 이 들어감.
                () -> ResultData.of(0, "fail", null)
            );
    }
}
