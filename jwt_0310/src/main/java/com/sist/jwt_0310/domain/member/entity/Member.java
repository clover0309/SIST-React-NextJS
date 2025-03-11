package com.sist.jwt_0310.domain.member.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sist.jwt_0310.global.jpa.BaseEntity;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.experimental.SuperBuilder;

@Entity
@Getter
@Setter
@SuperBuilder 
@AllArgsConstructor
@NoArgsConstructor
@ToString(callSuper = true)
public class Member extends BaseEntity{
    private String mid, mname;

    //Json형태로 전송할때, mpwd는 포함되지 않고 전송한다.
    @JsonIgnore
    private String mpwd;

    private String accessToken;
}
