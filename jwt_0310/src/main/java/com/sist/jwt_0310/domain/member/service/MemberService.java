package com.sist.jwt_0310.domain.member.service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.sist.jwt_0310.domain.member.entity.Member;
import com.sist.jwt_0310.domain.member.repository.MemberRepository;
import com.sist.jwt_0310.global.jwt.JwtProvider;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    //토큰을 사용하기위한 JwtProvider 사용.
    private final JwtProvider jwtProvider;

    public Member join(String mid, String mname, String mpwd) {
        Member mem = Member.builder()
        .mid(mid)
        .mpwd(mpwd)
        .mname(mname).build();

        //JPA가 mem에 담긴 값을 자동으로 db에 저장해 줌.
        return memberRepository.save(mem);
    }
    
    public Member authAndMakeToken(String mid, String mpwd) {
        Member member = null;
        String accessToken = null;

        try {
            member = memberRepository.findByMid(mid).orElseThrow(
                // 실행할 때 오류가 발생한다.
                () -> new RuntimeException("존재하지 않는 ID입니다.")
            );

            //토큰에 저장할 회원 정보들을 Map에다가 저장시키자.
            Map<String, Object> map = new HashMap<>();
            map.put("b_idx", member.getB_idx());
            map.put("mid", member.getMid());
            map.put("mname", member.getMname());
            map.put("m_pwd", member.getMpwd());
            map.put("write_date", member.getWrite_date());

            //3시간짜리 토큰을 생성한다.
            accessToken  = jwtProvider.genToken(map, 60*60*3);
            if(accessToken != null)
                member.setAccessToken(accessToken);
            map.put("accessToken", member.getAccessToken());

        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("accessToken : " + accessToken);
        return member;
    }

    //로그인을 통할때는 Optional<Member>를 보내주면 된다. 숙제
    public Optional<Member> login(String mid){
        return null;
    }

    public Optional<Member> getMember(String mid) {
        return memberRepository.findByMid(mid);
    }
}
