package com.sist.boot_0306.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.MergedAnnotations.Search;
import org.springframework.stereotype.Service;

import com.sist.boot_0306.mapper.BbsMapper;
import com.sist.boot_0306.mapper.CommMapper;
import com.sist.boot_0306.vo.BbsVO;

@Service
public class BbsService {

    @Autowired
    private BbsMapper bbsMapper;

    //어떤 인자를 받아야하는지, mapper파일을 통해 참조해서 작성.
    //(현재는 mapper에서 searchType, searchValue, bname를 사용중)
    public int getTotalCount(String bname, String searchType, String searchValue){
        //항상 맵을 넣을때는 초기화를 한 후 put을 통해서 넣어줘야 한다.
        Map<String, Object> map = new HashMap<>();
        if (searchType != null)
            map.put("searchType", searchType);
        if (searchValue != null)
            map.put("searchValue", searchValue);
        if (bname != null)
            map.put("bname", bname);

        return bbsMapper.totalCount(map);
    }

    public BbsVO[] getList(String bname, String searchType, String searchValue,
    int begin, int end) {
        List<BbsVO> list = bbsMapper.list(bname, searchType,
        searchValue, begin, end);
        // 받은 리스트를 배열로 변환하자!
            BbsVO[] ar = null;
        if (list != null && list.size() > 0) {
                ar = new BbsVO[list.size()];
                // 리스트의 요소들을 ar이라는 배열에 복사
                list.toArray(ar);
        }

            return ar;
    }

    public BbsVO getBbs(String b_idx) {
        return bbsMapper.get_Bbs(b_idx);
    }
}
