package com.sist.boot_0306.vo;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class BbsVO {
    private String b_idx, subject, writer, content, file_name, ori_name,
     pwd, write_date, ip, hit, bname, status;

     //CommVO의 댓글목록
    private List<CommVO> c_list;

    //첨부파일 Spring에서는 File자료형 대신 MultipartFile자료형으로 사용.
    private MultipartFile s_file;
}

