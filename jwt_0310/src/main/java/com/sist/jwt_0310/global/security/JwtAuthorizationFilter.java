package com.sist.jwt_0310.global.security;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.sist.jwt_0310.domain.member.service.MemberService;
import com.sist.jwt_0310.global.result.ResultData;
import com.sist.jwt_0310.global.service.RequestSerivce;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;

@Component
@RequiredArgsConstructor
public class JwtAuthorizationFilter extends OncePerRequestFilter {

    private final MemberService memberService;
    private final RequestSerivce requestSerivce;

    @Override
    //명시적 예외처리를 생략 할 수 있도록 해줌.
    @SneakyThrows
    //로그인과 로그아웃은 통과시키는 로직. (별도의 검증을 로그인 로그아웃만 없앴음.)
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        if(request.getRequestURI().equals("/api/v1/members/login") ||
        request.getRequestURI().equals("/api/v1/members/logout")) {
            filterChain.doFilter(request, response);
            return;
        }
        //나머지는 accessToken검증과 refreshToken발급을 해야함.
        //accessToken이라는 값이 requestService의 getCookie의 String name 파라미터로 값이 넘어간다.
        String accessToken = requestSerivce.getCookie("accessToken");
        if(!accessToken.isBlank()){
            // accessToken이 만료시 refreshToken을 얻어내어 검증 후 다시 accessToken을 받는다.
            if(!memberService.validateToken(accessToken)){
                String refreshToken = requestSerivce.getCookie("refreshToken");

                //토큰값을 저장하니 제네릭 타입은 String
                ResultData<String> resultData = memberService.refreshAccessToken(refreshToken);

                //accessToken 만료시 refreshToken을 얻어내어 검증후 다시 accessToken을 발행 후,
                // 헤더에 accessToken 저장.
                requestSerivce.setHeaderCookie("accessToken", resultData.getData());
            } // 토큰 검사 끝.

            JwtUser jwtUser = memberService.getUserFromAccessToken(accessToken);

            //인가 처리
            requestSerivce.setMember(jwtUser);
        }
        filterChain.doFilter(request, response);
    }
    
}
