package com.sist.jwt_0310.domain.bbs.entity;

import com.sist.jwt_0310.global.jpa.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrePersist;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Entity
@Getter @Setter
//현재 클래스와 상위클래스(BaseEntity)의 필드값을 저장하기 위한 메서드들 포함.
//생성자를 만들지 않고도 메서드들을 사용을 할 수 있음.
@SuperBuilder
@AllArgsConstructor
@NoArgsConstructor
//부모가 가지는 toString 함수를 사용한다. (필드포함)
@ToString(callSuper = true)
public class Bbs extends BaseEntity{
    //hit 컬럼의 기본값이 bigint형의 0이 되게 지정한다.
    @Column(columnDefinition = "bigint default 0")
    private Long hit;
    @Column
    private Long state = 0L;
    @NotBlank
    private String title, content, writer;

    //저장하기 전에 먼저 수행하는 곳
    @PrePersist
    public void initStatus() { //save함수로 데이터가 저장되기 전에 수행한다.
        if(state == null) {
            state = 0L;
            hit = 0L;
        }
    }
}
