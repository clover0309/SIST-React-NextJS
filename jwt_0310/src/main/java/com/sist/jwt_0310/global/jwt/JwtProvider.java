package com.sist.jwt_0310.global.jwt;

import java.util.Base64;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;



//자동으로 생성되어야 하기 때문에 Component 어노테이션 선언.
@Component
public class JwtProvider {
    @Value("${custom.jwt.secretKey}")
    private String secretKeyCode;

    private SecretKey secretKey;

    public SecretKey getSecretKey() {
        if(secretKey == null) {
            //인코딩을 가지고 SecretKey를 만들어준다.
            String encoding = Base64.getEncoder().encodeToString(secretKeyCode.getBytes());
            secretKey = Keys.hmacShaKeyFor(encoding.getBytes());
        }
        return secretKey;
    }
    
    //토큰 생성 메서드
    public String genToken(Map<String,Object> map, int seconds) {
        long now = new Date().getTime();
        Date accessTokenExpiresIn = new Date(now+1000L*seconds);

        JwtBuilder jwtBuilder = Jwts.builder()
        .subject("okj")
        .expiration(accessTokenExpiresIn);

        Set<String> keys = map.keySet();
        Iterator<String> it = keys.iterator();
        while(it.hasNext()){
            //map에 저장된 키
            String key = it.next();
            //map에 해당 키로 저장 된 값.
            Object value = map.get(key);

            jwtBuilder.claim(key, value);
        }
        return jwtBuilder.signWith(getSecretKey()).compact();
    }


    //토큰 검증 메서드
    public boolean verify(String token) {
        boolean value = true;
        try {
            Jwts.parser().verifyWith(getSecretKey())
            .build()
            .parseSignedClaims(token);
        } catch (Exception e) { //토큰의 인증이 안되면 예외가 발생함.
            e.printStackTrace();
            value = false;
        }
        return value;
    }


    //토큰에 있는 정보 반환 메서드
    public Map<String, Object> getClaims(String token){
        return Jwts.parser().verifyWith(getSecretKey())
        .build()
        .parseSignedClaims(token)
        .getPayload();
    }
}
