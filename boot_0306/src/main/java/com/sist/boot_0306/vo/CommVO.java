package com.sist.boot_0306.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class CommVO {
    private String c_idx, writer, content, pwd, 
    write_date, ip, b_idx, status;
}
