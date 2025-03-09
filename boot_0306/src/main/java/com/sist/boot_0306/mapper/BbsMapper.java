package com.sist.boot_0306.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.sist.boot_0306.vo.BbsVO;

@Mapper
public interface BbsMapper {
    //연결된 mapper문서에 있는 id와 동일한 이름으로 함수 정의.
    //스프링부트가 알아서 자동으로 map화 시켜서 보내주기 때문에, 하나하나 인자값을 나눠서 받아도 상관이없다.
    List<BbsVO> list(String bname, String searchType, String searchValue,
            int begin, int end);

    //Mapper에서 인자값이 map구조로 잡혀있으므로 map형태로 파라미터를 받음.
    //위와 아래의 차이는 인터페이스가 받는 인자값에 차이가있다.
    // 위처럼 인자값을 하나하나 받아도, 인자값을 알아서 SpringBoot가 Map으로 만들어서 준다.
    int totalCount(Map<String, Object> map);

    BbsVO get_Bbs(String b_idx);

    int add(BbsVO vo);
}
