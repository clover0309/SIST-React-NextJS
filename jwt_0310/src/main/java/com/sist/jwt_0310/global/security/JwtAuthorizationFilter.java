package com.sist.jwt_0310.global.security;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;

@Component
@RequiredArgsConstructor
public class JwtAuthorizationFilter extends OncePerRequestFilter {
    
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
        String accessToken = "";
        if(!accessToken.isBlank()){

        }
        filterChain.doFilter(request, response);
    }
    
}
