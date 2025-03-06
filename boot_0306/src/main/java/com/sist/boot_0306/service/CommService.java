package com.sist.boot_0306.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.sist.boot_0306.mapper.CommMapper;
import com.sist.boot_0306.vo.CommVO;

public class CommService {

    @Autowired
    private CommMapper commMapper;

    public List<CommVO> commList(String b_idx) {
        return commMapper.commList(b_idx);
    }
}
