package com.sist.jwt_0310.domain.member.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sist.jwt_0310.domain.member.entity.Member;
import com.sist.jwt_0310.domain.member.repository.MemberRepository;
import com.sist.jwt_0310.global.jwt.JwtProvider;
import com.sist.jwt_0310.global.result.ResultData;
import com.sist.jwt_0310.global.security.JwtUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    //토큰을 사용하기위한 JwtProvider 사용.
    private final JwtProvider jwtProvider;

    //반드시 값을 넣어야하는 생성자들에게 RequiredArgsConstructor가
    // 자동으로 생성하기 때문에, final 상수로 지정하고 어노테이션이 생성하게 한다.
    private final PasswordEncoder passwordEncoder;

    public Member join(String mid, String mname, String mpwd) {
        //비밀번호 암호화를 위한 pwd 객체 생성.
        String pwd = passwordEncoder.encode(mpwd);
        Member mem = Member.builder()
        .mid(mid)
        .mpwd(pwd)
        .mname(mname).build();
        
        //토큰을 받기위해 map구조 생성.
        Map<String,Object> map = new HashMap<>();
        map.put("mid",mem.getMid());
        map.put("mname", mem.getMname());
        map.put("mpwd", mem.getMpwd());
        
        //accessToken과 refreshToken을 모두 DB에 저장하기 위해 받아낸다.
        mem.setAccessToken(jwtProvider.getAccessToken(map));
        mem.setRefreshToken(jwtProvider.getRefreshToken(map));

        //JPA가 mem에 담긴 값을 자동으로 db에 저장해 줌.
        return memberRepository.save(mem);
    }
    
    public Member authAndMakeToken(String mid, String mpwd) {
        Member member = null;
        String accessToken = null;
        String refreshToken = null;

        try {
            //아이디만 가지고 회원정보(Member)를 얻어낸다.
            //이 안에 암호화된 비밀번호가 존재함.
            member = memberRepository.findByMid(mid).orElseThrow(
                // mid가 db에 없거나 비어있는 값으로 실행할 때 오류가 발생한다.
                () -> new RuntimeException("존재하지 않는 ID입니다."));

                //사용자가 전달(입력)해준 비밀번호가 암호화된 비밀번호와 같은 것인지
                // passwordEncoder에게 전달해서 검증을 해야한다.
                // 비교를 위한 값을 먼저 지정해주고, 암호화 한 값을 뒤에 지정한다.
                if(passwordEncoder.matches(mpwd, member.getMpwd())) {
            

            //토큰에 저장할 회원 정보들을 Map에다가 저장시키자.
            Map<String, Object> map = new HashMap<>();
            map.put("b_idx", member.getB_idx());
            map.put("mid", member.getMid());
            map.put("mname", member.getMname());
            map.put("m_pwd", member.getMpwd());
            map.put("write_date", member.getWrite_date());

            // accessToken 전달.
            accessToken  = jwtProvider.getAccessToken(map);

            //accessToken 비교값이 빠지고, refreshToken을 만드는 로직이 들어옴.
            //이미 위에서 값을 넣고 accessToken을 생성하였기 때문에 비교가 의미가 없다.
            refreshToken = jwtProvider.getRefreshToken(map);
                member.setAccessToken(accessToken);
                member.setRefreshToken(refreshToken);
            map.put("accessToken", member.getAccessToken());

            //로그인을 할 때마다 refreshToken을 변경해주는 로직.
            memberRepository.updateRefreshToken(member.getMid(), member.getRefreshToken());
            } else
                member = null;
                } catch (Exception e) {
                e.printStackTrace();
            }
            System.out.println("accessToken : " + accessToken);
        return member;
    }

    public JwtUser getUserFromAccessToken(String accessToken){
        //인자로 받은 토큰을 이용하여 회원정보 얻어오기.
        Map<String, Object> map = jwtProvider.getClaims(accessToken);
        
        String mid = (String) map.get("mid");
        String mname = (String) map.get("mname");
        List<GrantedAuthority> authorities = new ArrayList<>();

        return new JwtUser(mid, mname, "", authorities);
    }

    //로그인을 통할때는 Optional<Member>를 보내주면 된다.
    public Optional<Member> login(String mid){
        return null;
    }

    public Optional<Member> getMember(String mid) {
        return memberRepository.findByMid(mid);
    }

    //토큰 검증
    public boolean validateToken(String token) {
        return jwtProvider.verify(token);
    }

    //refreshToken을 이용해 AccessToken검색.
    //AccessToken만 전달 할 것이므로, ResultData 제네릭타입을 String으로 지정했다.
    public ResultData<String> refreshAccessToken(String refreshToken) {
        Member member = null;

        int cnt = 0;
        String msg = "fail";
        String accessToken = null;

        member = memberRepository.findByRefreshToken(refreshToken).orElseThrow(
            () ->  new RuntimeException("존재 하지 않는 RefreshToken입니다.")
        );

        if(member != null) {
        //AccessToken을 만들기 위해서 Map구조 준비.
        // 토큰값을 두개를 준비하여, accessToken이 만료되었을때, RefreshToken을 이용해
        // 토큰값을 accessToken을 다시 발급해주기 위해 RefreshToken을 사용한다.
        Map<String, Object> map = new HashMap<>();
        map.put("b_idx", member.getB_idx());
        map.put("mid", member.getMid());
        map.put("mname", member.getMname());
        map.put("m_pwd", member.getMpwd());
        map.put("write_date", member.getWrite_date());

        accessToken = jwtProvider.getAccessToken(map);
        cnt = 1;
        msg = "success";

        }
        return ResultData.of(cnt, msg, accessToken);
    }
}
