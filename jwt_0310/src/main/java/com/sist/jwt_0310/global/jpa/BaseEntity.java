package com.sist.jwt_0310.global.jpa;

import java.time.LocalDateTime;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Getter @Setter

// 빌더패턴을 구현하기 위해 코드 간결화.
// 생성자에서 상속받은 필드도 빌더에서 사용 할 수 있다.
// 생성하면서 부모에 있는 것에 값을 넣을 수 있다.
@SuperBuilder

// 접근제한 protected에 대한 접근력을 두고, 생성자를 생성한다.
// 그냥 쉽게 설명하면 protected access 선언과 같다. (변수에 접근제한자를 거는것과 같음.)
@NoArgsConstructor(access = AccessLevel.PROTECTED)

// 부모에 대한 테이블 맵핑을 하지않는다.
// 자식클래스것만 수행한다. 라는 의미와도 같다.
@MappedSuperclass

// Entity를 사용할 때, 필히 지정을 해줘야한다.
// 이 안에서 테이블이 만들어졌을때, 수정되거나 이벤트에 대한 감지를 한다.
@EntityListeners(AuditingEntityListener.class)

// 객체안에 toString 함수를 자동으로 만들어준다.
// (callSuper = true)를 사용하면, toString을 부모클래스에 있는 것을 사용하게 된다.
@ToString
public class BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 기본키 자동 생성.
    private Long b_idx;

    
    @CreatedDate
    private String write_date;
}
