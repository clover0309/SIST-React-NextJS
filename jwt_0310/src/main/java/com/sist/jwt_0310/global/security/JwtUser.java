package com.sist.jwt_0310.global.security;

import java.util.Collection;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import lombok.Getter;
//상속받은 User = JWT의 인증을 위한 사용자 정보객체.
// 현 클래스는 주로 Spring Security와 함께 사용되며, JWT토큰을 
// 기반으로 인증된 사용자정보를 저장처리함.
// Spring Security에 인증 체계와 통합하여 보안기능을 강화할 때 사용함.
public class JwtUser extends User {

    @Getter
    //사용자의 고유 식별자.
    private String mid;

    public JwtUser(String mid, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        //부모객체(User) 생성자 호출.
        super(username, password, authorities);
        // 그래서 사용자정보를 초기화.
        this.mid = mid;
    }

    //인가에 대한 내용을 반환하는 메서드
    //Authentication 객체를 반환하므로 Spring Security에서 인증된 정보임을 의미함.
    public Authentication getAuthentication() {
        Authentication auth = new UsernamePasswordAuthenticationToken
        //User의 것을 받아서 쓴다.
        (this, this.getPassword(), this.getAuthorities());
        return auth;
    }
}
