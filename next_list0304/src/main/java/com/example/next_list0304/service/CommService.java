package com.example.next_list0304.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.next_list0304.mapper.CommMapper;
import com.example.next_list0304.vo.CommVO;

@Service
public class CommService {

    @Autowired
    private CommMapper cMapper;

    public List<CommVO> commList(String b_idx){
        return cMapper.commList(b_idx);
    }
}
