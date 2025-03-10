package com.sist.jwt_0310.global.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.web.SecurityFilterChain;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class ApiSecurityConfig {
    @Bean
  public SecurityFilterChain apiFilterChain(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer::disable)
        // 람다식 인자값을 뒤로 넘겨서 함수를 호출하는 개념.
        .headers(headers -> headers.frameOptions(
            HeadersConfigurer.FrameOptionsConfig::sameOrigin))
        .securityMatcher("/api/**") //설정된 경로로 들어오는 모든 것들을 검사한다.
        .authorizeHttpRequests( //요청에 대한 권한을 지정함.
            authorize -> authorize
                .requestMatchers("/api/*/bbs/**", "/api/*/members/**")
                // 모든 권한을 부여한다는 의미. (모든요청과 인증을 줘라는 의미.)
                .permitAll().anyRequest().authenticated())
                .csrf(csrf -> csrf.disable() //토큰검사 = csrf(토큰)을 비활성화 한다.
                );
    return http.build();
  }
}
