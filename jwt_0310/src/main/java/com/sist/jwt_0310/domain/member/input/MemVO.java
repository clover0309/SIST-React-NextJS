package com.sist.jwt_0310.domain.member.input;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor

public class MemVO {
    private String mid;
    private String mpwd;
    private String mname;
}
