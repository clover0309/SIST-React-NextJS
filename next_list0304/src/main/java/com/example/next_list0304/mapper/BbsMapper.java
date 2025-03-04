package com.example.next_list0304.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.next_list0304.vo.BbsVO;

@Mapper
public interface BbsMapper {
    int totalCount(String searchType, String searchValue, String bname);

    List<BbsVO> list(String searchType, String searchValue,
            String bname, int begin, int end);

    int add(BbsVO vo);

    int hit(String b_idx);

    BbsVO get_Bbs(String b_idx);

    int edit(BbsVO vo);
}
