package com.sist.boot_0306.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.sist.boot_0306.vo.CommVO;

@Mapper
public interface CommMapper {
    List<CommVO> commList(String b_idx);
}
