package com.example.next_list0304.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.next_list0304.vo.CommVO;

@Mapper
public interface CommMapper {

    List<CommVO> commList(String b_idx);
}
