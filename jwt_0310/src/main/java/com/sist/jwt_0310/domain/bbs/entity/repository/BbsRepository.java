package com.sist.jwt_0310.domain.bbs.entity.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sist.jwt_0310.domain.bbs.entity.Bbs;

//JpaRepository를 상속받고, 제네릭타입을 Bbs, Long을 지정해준다.
public interface BbsRepository extends JpaRepository<Bbs, Long>{

}
