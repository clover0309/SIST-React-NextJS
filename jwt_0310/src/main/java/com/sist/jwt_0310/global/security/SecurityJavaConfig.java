package com.sist.jwt_0310.global.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import lombok.RequiredArgsConstructor;

@Configuration

// Spring Security를 사용하기 위한 어노테이션
@EnableWebSecurity

//초기화 되지 않은 변수, 상수 그리고 @NonNull이 붙은 변수에 대해 생성자를 정의해주는
// 어노테이션이다. (자동으로 생성되지 않은것들을 SpringBoot가 알아서 생성해준다.)
@RequiredArgsConstructor
public class SecurityJavaConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.csrf(AbstractHttpConfigurer::disable)
        // 람다식 인자값을 뒤로 넘겨서 함수를 호출하는 개념.
        .headers(headers -> headers.frameOptions(
            HeadersConfigurer.FrameOptionsConfig::sameOrigin))
        .authorizeHttpRequests(
            authorize -> authorize
                .requestMatchers("/**")
                // 모든 권한을 부여한다는 의미. (모든요청과 인증을 줘라는 의미.)
                .permitAll().anyRequest().authenticated());
    return http.build();
  }

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
