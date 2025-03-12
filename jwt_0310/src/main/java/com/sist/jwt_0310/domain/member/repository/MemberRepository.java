package com.sist.jwt_0310.domain.member.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.sist.jwt_0310.domain.member.entity.Member;
import java.util.List;


public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByMid(String mid);
    Optional<Member> findByRefreshToken(String refreshToken);

    //refreshToken을 기존의 토큰값을 없애고 새로받은 토큰값으로 Update.
    //수정을 위한 어노테이션
    @Modifying
    
    //트랙젝션을 관리하기 위한 어노테이션.
    @Transactional

    //개발자가 직접 Query문을 선언 할 수 있게해주는 어노테이션.
    // 변수지정은 :변수명 으로 사용하면 된다.
    @Query("UPDATE Member m SET m.refreshToken = :refreshToken WHERE m.mid = :mid")
    void updateRefreshToken(@Param("mid") String mid, @Param("refreshToken") String refreshToken);
}
