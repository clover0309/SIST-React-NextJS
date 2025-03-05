package com.example.next_list0304.vo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CommVO {
    private String c_idx, writer, content,
            write_date, ip, b_idx;
    private int status;
}
