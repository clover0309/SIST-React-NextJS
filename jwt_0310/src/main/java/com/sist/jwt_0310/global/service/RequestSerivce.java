package com.sist.jwt_0310.global.service;

import java.util.Arrays;
import java.util.Optional;

import org.springframework.http.ResponseCookie;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.context.annotation.RequestScope;

import com.sist.jwt_0310.domain.member.entity.Member;
import com.sist.jwt_0310.global.security.JwtUser;

import jakarta.persistence.EntityManager;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
//요청이 발생할 때 마다, Bean객체가 생성되어 자동적으로 주입이 된다.
@RequestScope
@RequiredArgsConstructor
public class RequestSerivce {
    //RequiredArgsConstructor로 인해 autowired를 사용하지 않아도됨.
    // 필수적으로 값이 들어가야하는 객체들이므로 어노테이션 덕에 자동으로 생성자를 생성해 줌.
    private final HttpServletRequest request;
    private final HttpServletResponse response;
    private final EntityManager entityManager;

    private Member member;

    //JwtAuthorizationFilter에 있는 getCookie 가져오기
    public String getCookie(String name) {
        //쿠키의 값이 여러개가 넘어옴으로 배열선언.
        Cookie[] cookies = request.getCookies();

        //cookies라는 배열에서 스트림을 생성.
        //배열에서 하나를 빼내서 cookie에 담아줌.
        return Arrays.stream(cookies)
            //name과 같은 이름을 가진 cookie만 필터링을 함.
            .filter(cookie -> cookie.getName().equals(name))
            //필터링된 결과가 여러개가 존재 할 수 있는데, 여러 개중에 첫번째 것만 가져온다.
            .findFirst()
            //찾은 Cookie값을 가져오기. Cookie를 반환하는 getValue 함수를 참조하고
            // 반환형 :: 함수이름
            .map(Cookie::getValue)
            // 필터링된 쿠키가 없다면 공백을 반환한다.
            .orElse("");
    }

    //JwtAuthorizationFilter에 있는 setHeaderCookie 가져오기.
    //밑의 속성값이 필요할때마다 setHeaderCookie를 호출하여 사용하면된다.
    public void setHeaderCookie(String tokenName, String token) {
        ResponseCookie cookie = ResponseCookie.from(tokenName, token)
            .path("/")
            .sameSite("none")
            .secure(true)
            .httpOnly(true)
            .build();
        response.addHeader("set-Cookie", cookie.toString());
    }

    //JwtAuthorizationFilter에 있는 인가처리된 부분의 사용자값 가져오기.
    public void setMember(JwtUser jwtuser) {
        SecurityContextHolder.getContext().setAuthentication(
            jwtuser.getAuthentication()
        );
    }

    //스프링 Context (Spring SecurityContextHolder: 보안컨텍스트)에서 
    public JwtUser getJwtUser() {
        //보안컨텍스트를 얻어서 그것이 NULL인 경우는 Optional의 empty함수가 호출되 empty를 반환함.
        return Optional.ofNullable(SecurityContextHolder.getContext())
        //context는 보안컨텍스트를 얻어온 것이다.
        //컨텍스트에서 현재 인증객체(Authentication)를 가져옴.
        .map(context -> context.getAuthentication())
        //인증객체로 부터 인증객체의 주체(인스턴스)가 넘어오고, 구성원 중에 JwtUser에 해당되는 것을
        // 필터를 해줌, 정상적이면 우리가 저장한 JwtUser일 것이다. 아니면 orElse가 발생해 NULL이 반환 됨.
        .filter(authentication -> authentication.getPrincipal()
        instanceof JwtUser)
        //위의 필터가 실행되서 걸러졌으면은 JwtUser로 형변환을 진행하여 반환.
        .map(authentication -> (JwtUser) authentication.getPrincipal())
        .orElse(null);
    }

    private boolean checkLogin(){
        //위에서 검증된 유저가 아니면 false 반환, 검증된 유저면 true 반환
        return getJwtUser() != null;
    }

    private boolean isLogout(){
        //로그인 상태면 false 반환, 로그아웃 상태면 true 반환
        return !checkLogin();
    }

    //현재 인증된 사용자의 Member 객체를 찾아 반환하는 메서드.
    private Member getMember() {
        //로그인 상태를 먼저 확인.
        if(!checkLogin())
            return null;

        //member가 null일 경우에
        if(member == null)
        //로그인 정보를 얻어냄.
        // entityManager는 JPA기능을 의미한다. getReference함수는 DB를 로드하는 기능이며,
        // 인자가 Member라는 엔티티로 인해 Member테이블을 인식하여, 두번째 인자인 JwtUser의 mid로 검색을 해온다.
            member = entityManager.getReference(Member.class, getJwtUser().getMid());
        return member;
    }

    public void removeHeaderCookie(String tokenName) {
        ResponseCookie cookie = ResponseCookie.from(tokenName, null)
            .path("/")
            .sameSite("none")
            .secure(true)
            .httpOnly(true)
            .maxAge(0)
            .build();
        response.addHeader("set-Cookie", cookie.toString());
    }
}
